# getGasToken

The `getGasToken` method retrieves information about supported gas tokens for a specific blockchain. This method is useful for validating if a particular token address is supported for gas payments on the specified chain and to obtain detailed information about all available payment tokens.

## Usage

```typescript
const gasTokenInfo = await meeClient.getGasToken({
  chainId: 1, // Ethereum Mainnet
  address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" // USDC
});
```

## Parameters

### `parameters`

An object containing the query parameters for the gas token.

```typescript
type GetGasTokenParams = {
  /**
   * The blockchain chain ID to query
   * @example 1 // Ethereum Mainnet
   * @example 137 // Polygon
   */
  chainId: number;
  
  /**
   * The address of the payment token to validate
   * @example "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" // USDC on Ethereum
   */
  address: Address;
}
```

## Return Value

Returns a Promise that resolves to a `GetGasTokenPayload` object containing information about the available gas tokens on the specified chain.

```typescript
type GetGasTokenPayload = {
  /**
   * Chain identifier as a string
   * @example "1" // Ethereum Mainnet
   */
  chainId: string;
  
  /**
   * List of payment tokens that can be used for gas fees on this chain
   */
  paymentTokens: PaymentToken[];
}

type PaymentToken = {
  name: string;       // Token name (e.g., "USD Coin")
  address: Address;   // Token contract address
  symbol: string;     // Token symbol (e.g., "USDC")
  decimals: number;   // Token decimal places
  permitEnabled: boolean; // Whether the token supports EIP-2612 permits
}
```

## Examples

### Basic Example

```typescript
import { createMeeClient, toMultichainNexusAccount, getMEEVersion, MEEVersion } from "@biconomy/abstractjs";
import { http } from "viem";
import { optimism, base } from "viem/chains";

// Setup multichain account
const mcNexus = await toMultichainNexusAccount({
  chainConfigurations: [
    {
      chain: optimism,
      transport: http(),
      version: getMEEVersion(MEEVersion.V2_1_0)
    },
    {
      chain: base,
      transport: http(),
      version: getMEEVersion(MEEVersion.V2_1_0)
    }
  ],
  signer: eoaAccount,
  transports: [http(), http()]
});

// Create MEE client
const meeClient = await createMeeClient({ account: mcNexus });

// Get gas token information for Ethereum Mainnet
try {
  const result = await meeClient.getGasToken({
    chainId: 1,
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" // USDC on Ethereum
  });
  
  console.log(`Available payment tokens on chain ${result.chainId}:`);
  result.paymentTokens.forEach(token => {
    console.log(`- ${token.symbol} (${token.name}): ${token.address}`);
    console.log(`  Decimals: ${token.decimals}, Permit enabled: ${token.permitEnabled}`);
  });
} catch (error) {
  console.error("Error fetching gas token information:", error);
}
```

### Checking Multiple Chains

```typescript
import { createMeeClient, toMultichainNexusAccount, mcUSDC, getMEEVersion, MEEVersion } from "@biconomy/abstractjs";
import { http } from "viem";
import { mainnet, optimism, polygon, arbitrum } from "viem/chains";

// Setup multichain account
const mcNexus = await toMultichainNexusAccount({
  signer: eoaAccount,
  chainConfigurations: [
    {
      chain: mainnet,
      transport: http(),
      version: getMEEVersion(MEEVersion.V2_1_0)
    },
    {
      chain: optimism,
      transport: http(),
      version: getMEEVersion(MEEVersion.V2_1_0)
    },
        {
      chain: polygon,
      transport: http(),
      version: getMEEVersion(MEEVersion.V2_1_0)
    },
    {
      chain: arbitrum,
      transport: http(),
      version: getMEEVersion(MEEVersion.V2_1_0)
    }
  ]
});

// Create MEE client
const meeClient = await createMeeClient({ account: mcNexus });

// Check supported tokens across multiple chains
async function checkSupportedTokens() {
  const chainIds = [mainnet.id, optimism.id, polygon.id, arbitrum.id];
  
  for (const chainId of chainIds) {
    try {
      // Use USDC address for each chain
      const tokenAddress = mcUSDC.addressOn(chainId);
      
      const gasTokenInfo = await meeClient.getGasToken({
        chainId,
        address: tokenAddress
      });
      
      console.log(`Chain ${chainId} supports ${gasTokenInfo.paymentTokens.length} payment tokens`);
      
      // Check if native token is supported
      const nativeToken = gasTokenInfo.paymentTokens.find(token => 
        token.symbol === "ETH" || token.symbol === "MATIC");
      
      if (nativeToken) {
        console.log(`Native token ${nativeToken.symbol} is supported on chain ${chainId}`);
      }
      
      // Check if USDC is supported
      const usdcToken = gasTokenInfo.paymentTokens.find(token => 
        token.symbol === "USDC");
      
      if (usdcToken) {
        console.log(`USDC is supported on chain ${chainId} at address ${usdcToken.address}`);
      }
    } catch (error) {
      console.error(`Error checking chain ${chainId}:`, error.message);
    }
  }
}

await checkSupportedTokens();
```

## Error Handling

The `getGasToken` method will throw an error if the specified chain ID is not supported:

```typescript
try {
  const gasTokenInfo = await meeClient.getGasToken({
    chainId: 1,
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
  });
  
  // Process gas token information
  console.log(`Found ${gasTokenInfo.paymentTokens.length} payment tokens on chain ${gasTokenInfo.chainId}`);
} catch (error) {
  if (error.message.includes("Gas token not found for chain")) {
    console.error("The specified chain ID is not supported by the MEE service");
  } else {
    console.error("Error retrieving gas token information:", error);
  }
}
```

## Related Methods

- [`getQuote`](/sdk-reference/mee-client/methods/getQuote) - Get a quote for executing instructions with gas fees
- [`getFusionQuote`](/sdk-reference/mee-client/methods/getFusionQuote) - Get a fusion quote for triggered transactions
- [`mcUSDC`](/sdk-reference/mee-client/helpers/more/mcUSDC) - Helper for working with USDC across chains

## When to Use

Use `getGasToken` when:
- You need to verify if a specific token is supported for gas payments on a chain
- You want to display a list of supported payment tokens to users
- You need to get token metadata like decimals and symbols for UI display
- You're building a fee estimation feature and need to know which tokens are available 