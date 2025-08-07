# getPaymentToken

The `getPaymentToken` method retrieves detailed information about a specific payment token on a given blockchain. This method is useful for validating if a token is supported for gas payments and for obtaining token configuration details such as decimals, symbol, and permit capabilities.

## Usage

```typescript
const tokenInfo = await meeClient.getPaymentToken({
  chainId: 1, // Ethereum Mainnet
  tokenAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" // USDC
});
```

## Parameters

### `parameters`

An object containing the query parameters for the payment token.

```typescript
type GetPaymentTokenParams = {
  /**
   * The blockchain chain ID to query
   * @example 1 // Ethereum Mainnet
   * @example 137 // Polygon
   */
  chainId: number;
  
  /**
   * The address of the token to retrieve information for
   * @example "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" // USDC
   */
  tokenAddress: Address;
}
```

## Return Value

Returns a Promise that resolves to a `PaymentToken` object containing detailed information about the token.

```typescript
interface PaymentToken {
  /**
   * Human-readable name of the token
   * @example "USD Coin"
   */
  name: string;
  
  /**
   * Contract address of the token on the blockchain
   * @example "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" // USDC on Ethereum
   */
  address: Address;
  
  /**
   * Token symbol
   * @example "USDC"
   */
  symbol: string;
  
  /**
   * Number of decimal places the token uses
   * @example 6 // USDC uses 6 decimals
   * @example 18 // Most ERC20 tokens use 18 decimals
   */
  decimals: number;
  
  /**
   * Indicates whether the token supports ERC20Permit functionality
   * When true, gasless approvals are possible
   */
  permitEnabled: boolean;
}
```

## Examples

### Basic Example

```typescript
import { createMeeClient, toMultichainNexusAccount, getMEEVersion, MEEVersion } from "@biconomy/abstractjs";
import { http } from "viem";
import { mainnet, optimism } from "viem/chains";

// Setup multichain account
const mcNexus = await toMultichainNexusAccount({
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
    }
  ],
  signer: eoaAccount
});

// Create MEE client
const meeClient = await createMeeClient({ account: mcNexus });

// Get information about USDC on Ethereum Mainnet
try {
  const usdcInfo = await meeClient.getPaymentToken({
    chainId: 1,
    tokenAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" // USDC on Ethereum
  });
  
  console.log("Token Information:");
  console.log(`Name: ${usdcInfo.name}`);
  console.log(`Symbol: ${usdcInfo.symbol}`);
  console.log(`Decimals: ${usdcInfo.decimals}`);
  console.log(`Permit Enabled: ${usdcInfo.permitEnabled}`);
  console.log(`Address: ${usdcInfo.address}`);
  
} catch (error) {
  console.error("Error fetching token information:", error);
}
```

### Checking Token Compatibility for Permit Transactions

```typescript
import { createMeeClient, toMultichainNexusAccount, mcUSDC, getMEEVersion, MEEVersion } from "@biconomy/abstractjs";
import { http } from "viem";
import { mainnet, optimism, polygon } from "viem/chains";

// Setup multichain account
const mcNexus = await toMultichainNexusAccount({
  chains: [mainnet, optimism, polygon],
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
    }
  ]
});

// Create MEE client
const meeClient = await createMeeClient({ account: mcNexus });

// Function to check if a token supports permits on a specific chain
async function checkTokenPermitSupport(chainId, tokenAddress) {
  try {
    const tokenInfo = await meeClient.getPaymentToken({
      chainId,
      tokenAddress
    });
    
    if (tokenInfo.permitEnabled) {
      console.log(`${tokenInfo.symbol} on chain ${chainId} supports permits. Use signPermitQuote.`);
      return true;
    } else {
      console.log(`${tokenInfo.symbol} on chain ${chainId} does NOT support permits. Use signOnChainQuote.`);
      return false;
    }
  } catch (error) {
    console.error(`Error checking token ${tokenAddress} on chain ${chainId}:`, error.message);
    return false;
  }
}

// Check USDC on different chains
async function checkUsdcAcrossChains() {
  const chains = [mainnet.id, optimism.id, polygon.id];
  
  for (const chainId of chains) {
    const tokenAddress = mcUSDC.addressOn(chainId);
    await checkTokenPermitSupport(chainId, tokenAddress);
  }
}

// Run the check
await checkUsdcAcrossChains();
```

### Getting Token Information for a Quote

```typescript
import { createMeeClient, toMultichainNexusAccount, mcUSDC, getMEEVersion, MEEVersion } from "@biconomy/abstractjs";
import { http, parseUnits } from "viem";
import { mainnet, optimism } from "viem/chains";

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
    }
  ]
});

// Create MEE client
const meeClient = await createMeeClient({ account: mcNexus });

async function prepareQuoteWithTokenInfo(chainId, tokenAddress, amount) {
  try {
    // Get token information
    const tokenInfo = await meeClient.getPaymentToken({
      chainId,
      tokenAddress
    });
    
    console.log(`Using ${tokenInfo.symbol} as payment token`);
    
    // Parse the amount using correct decimals
    const parsedAmount = parseUnits(amount.toString(), tokenInfo.decimals);
    
    // Set up fee token
    const feeToken = {
      address: tokenAddress,
      chainId
    };
    
    // Set up trigger
    const trigger = {
      chainId,
      tokenAddress,
      amount: parsedAmount
    };
    
    // Determine which quote method to use based on permit support
    if (tokenInfo.permitEnabled) {
      console.log(`Getting permit quote with ${tokenInfo.symbol}`);
      return await meeClient.getPermitQuote({
        trigger,
        instructions: [
          mcNexus.build({
            type: "default",
            data: {
              calls: [
                {
                  to: "0x0000000000000000000000000000000000000000",
                  gasLimit: 50000n,
                  value: 0n
                }
              ],
              chainId: optimism.id
            }
          })
        ],
        feeToken
      });
    } else {
      console.log(`Getting on-chain quote with ${tokenInfo.symbol}`);
      return await meeClient.getOnChainQuote({
        trigger,
        instructions: [
          mcNexus.build({
            type: "default",
            data: {
              calls: [
                {
                  to: "0x0000000000000000000000000000000000000000",
                  gasLimit: 50000n,
                  value: 0n
                }
              ],
              chainId: optimism.id
            }
          })
        ],
        feeToken
      });
    }
  } catch (error) {
    console.error("Error preparing quote:", error);
    throw error;
  }
}

// Use the function with USDC on Ethereum
const quote = await prepareQuoteWithTokenInfo(
  mainnet.id,
  mcUSDC.addressOn(mainnet.id),
  1 // 1 USDC
);

console.log("Quote received:", quote.quote.id);
```

## Error Handling

The `getPaymentToken` method will throw an error if the specified token or chain is not supported:

```typescript
try {
  const tokenInfo = await meeClient.getPaymentToken({
    chainId: 1,
    tokenAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
  });
  
  // Process token information
  console.log(`Token ${tokenInfo.symbol} has ${tokenInfo.decimals} decimals`);
  
} catch (error) {
  if (error.message.includes("Gas token not found for chain")) {
    console.error("The specified chain ID is not supported by the MEE service");
  } else if (error.message.includes("Payment token not found")) {
    console.error("The specified token is not supported on this chain");
  } else {
    console.error("Error retrieving payment token information:", error);
  }
}
```

## Related Methods

- [`getGasToken`](/sdk-reference/mee-client/methods/more/getGasToken) - Get information about all supported gas tokens on a chain
- [`getInfo`](/sdk-reference/mee-client/methods/more/getInfo) - Get comprehensive information about supported chains and tokens
- [`getPermitQuote`](/sdk-reference/mee-client/methods/more/getPermitQuote) - Get a quote for permit-enabled tokens
- [`getOnChainQuote`](/sdk-reference/mee-client/methods/more/getOnChainQuote) - Get a quote for tokens without permit support

## When to Use

Use `getPaymentToken` when:
- You need detailed information about a specific token's configuration
- You want to check if a token supports ERC20Permit before choosing which quote method to use
- You need token decimals to properly format amounts for transactions
- You're validating that a specific token is supported for gas payments on a chain 