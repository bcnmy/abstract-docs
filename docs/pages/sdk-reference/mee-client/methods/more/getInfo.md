# getInfo

The `getInfo` method retrieves information about the Modular Execution Environment (MEE) service configuration, including supported blockchain chains, gas tokens, and wallet providers. This method is essential for understanding what capabilities are available for your application when interacting with the MEE service.

## Usage

```typescript
const info = await meeClient.getInfo();
```

## Parameters

This method does not require any parameters.

## Return Value

Returns a Promise that resolves to a `GetInfoPayload` object containing comprehensive information about the MEE service configuration.

```typescript
type GetInfoPayload = {
  /**
   * Version of the MEE API
   * @example "1.0.0"
   */
  version: string;
  
  /**
   * Node information string
   * @example "mee-node-1"
   */
  node: string;
  
  /**
   * List of supported blockchain chains
   */
  supported_chains: SupportedChain[];
  
  /**
   * List of supported gas tokens per chain
   */
  supported_gas_tokens: GetGasTokenPayload[];
  
  /**
   * List of supported wallet providers and their capabilities
   */
  supported_wallet_providers: SupportedWalletProvider[];
}

/**
 * Represents a supported blockchain chain
 */
interface SupportedChain {
  /**
   * Chain identifier
   * @example "1" // Ethereum Mainnet
   * @example "137" // Polygon
   */
  chainId: string;
  
  /**
   * Human-readable chain name
   * @example "Ethereum Mainnet"
   * @example "Polygon"
   */
  name: string;
}

/**
 * Represents a supported wallet provider configuration
 */
interface SupportedWalletProvider {
  /**
   * Wallet provider identifier
   * @example "SAFE_V141"
   * @example "BICO_V2"
   */
  walletProvider: string;
  
  /**
   * List of chain IDs supported by this wallet provider
   * @example ["1", "137"] // Provider supports Ethereum and Polygon
   */
  supportedChains: string[];
  
  /**
   * Whether EOA (Externally Owned Account) is enabled for this provider
   */
  eoaEnabled?: boolean;
  
  /**
   * Whether EOA fusion is supported by this provider
   */
  eoaFusion?: boolean;
}
```

## Examples

### Basic Example

```typescript
import { createMeeClient, toMultichainNexusAccount } from "@biconomy/abstractjs";
import { http } from "viem";
import { optimism, polygon } from "viem/chains";

// Setup multichain account
const mcNexus = await toMultichainNexusAccount({
  chains: [optimism, polygon],
  signer: eoaAccount,
  transports: [http(), http()]
});

// Create MEE client
const meeClient = await createMeeClient({ account: mcNexus });

try {
  const info = await meeClient.getInfo();
  
  console.log(`MEE API Version: ${info.version}`);
  console.log(`Node: ${info.node}`);
  
  // Log supported chains
  console.log("Supported chains:");
  info.supported_chains.forEach(chain => {
    console.log(`- ${chain.name} (Chain ID: ${chain.chainId})`);
  });
  
  // Check if specific chains are supported
  const supportedChainIds = info.supported_chains.map(chain => Number(chain.chainId));
  console.log(`Optimism (${optimism.id}) supported: ${supportedChainIds.includes(optimism.id)}`);
  console.log(`Polygon (${polygon.id}) supported: ${supportedChainIds.includes(polygon.id)}`);
  
  // Log wallet providers
  console.log("Supported wallet providers:");
  info.supported_wallet_providers.forEach(provider => {
    console.log(`- ${provider.walletProvider}`);
    console.log(`  Supported chains: ${provider.supportedChains.join(", ")}`);
    console.log(`  EOA enabled: ${provider.eoaEnabled || false}`);
    console.log(`  EOA fusion: ${provider.eoaFusion || false}`);
  });
  
  // Check if USDC is available as a payment token
  const usdcAvailable = info.supported_gas_tokens.some(gasToken => 
    gasToken.paymentTokens.some(token => token.symbol === "USDC")
  );
  console.log(`USDC available as payment token: ${usdcAvailable}`);
  
} catch (error) {
  console.error("Error fetching MEE service information:", error);
}
```

### Finding Available Payment Tokens

```typescript
import { createMeeClient, toMultichainNexusAccount } from "@biconomy/abstractjs";
import { http } from "viem";
import { mainnet, optimism } from "viem/chains";

// Setup multichain account
const mcNexus = await toMultichainNexusAccount({
  chains: [mainnet, optimism],
  signer: eoaAccount,
  transports: [http(), http()]
});

// Create MEE client
const meeClient = await createMeeClient({ account: mcNexus });

// Get available payment tokens across supported chains
async function getAvailablePaymentTokens() {
  const info = await meeClient.getInfo();
  
  // Create a mapping of chain ID to available payment tokens
  const paymentTokensByChain = {};
  
  info.supported_gas_tokens.forEach(gasToken => {
    const chainId = gasToken.chainId;
    const chainName = info.supported_chains.find(chain => chain.chainId === chainId)?.name || chainId;
    
    paymentTokensByChain[chainId] = {
      chainName,
      tokens: gasToken.paymentTokens.map(token => ({
        symbol: token.symbol,
        name: token.name,
        address: token.address,
        decimals: token.decimals,
        permitEnabled: token.permitEnabled
      }))
    };
  });
  
  // Display tokens for each chain
  Object.entries(paymentTokensByChain).forEach(([chainId, data]) => {
    console.log(`\n${data.chainName} (Chain ID: ${chainId})`);
    console.log("Available payment tokens:");
    
    data.tokens.forEach(token => {
      console.log(`- ${token.symbol} (${token.name})`);
      console.log(`  Address: ${token.address}`);
      console.log(`  Decimals: ${token.decimals}`);
      console.log(`  Permit enabled: ${token.permitEnabled}`);
    });
  });
  
  return paymentTokensByChain;
}

await getAvailablePaymentTokens();
```

### Checking Wallet Provider Compatibility

```typescript
import { createMeeClient, toMultichainNexusAccount } from "@biconomy/abstractjs";
import { http } from "viem";
import { mainnet, arbitrum } from "viem/chains";

// Setup multichain account
const mcNexus = await toMultichainNexusAccount({
  chains: [mainnet, arbitrum],
  signer: eoaAccount,
  transports: [http(), http()]
});

// Create MEE client
const meeClient = await createMeeClient({ account: mcNexus });

// Check compatibility of wallet providers with specific chains
async function checkWalletProviderCompatibility(targetChains = [mainnet.id, arbitrum.id]) {
  const info = await meeClient.getInfo();
  
  // Convert chain IDs to strings for comparison
  const targetChainIds = targetChains.map(id => id.toString());
  
  console.log("Wallet provider compatibility:");
  
  info.supported_wallet_providers.forEach(provider => {
    const supportedTargetChains = targetChainIds.filter(chainId => 
      provider.supportedChains.includes(chainId)
    );
    
    const isFullyCompatible = supportedTargetChains.length === targetChainIds.length;
    
    console.log(`\n${provider.walletProvider}:`);
    console.log(`- Fully compatible with all target chains: ${isFullyCompatible}`);
    
    if (!isFullyCompatible) {
      const missingChains = targetChainIds
        .filter(chainId => !provider.supportedChains.includes(chainId))
        .map(chainId => {
          const chain = info.supported_chains.find(c => c.chainId === chainId);
          return chain ? chain.name : `Chain ID ${chainId}`;
        });
      
      console.log(`- Unsupported chains: ${missingChains.join(", ")}`);
    }
    
    console.log(`- EOA enabled: ${provider.eoaEnabled || false}`);
    console.log(`- EOA fusion supported: ${provider.eoaFusion || false}`);
  });
}

await checkWalletProviderCompatibility();
```

## Error Handling

The `getInfo` method may throw errors if there are connectivity issues or if the MEE service is unavailable:

```typescript
try {
  const info = await meeClient.getInfo();
  // Process the information
} catch (error) {
  console.error("Failed to fetch MEE service information:", error);
  
  // Implement appropriate fallback behavior
  if (error.message.includes("Network error")) {
    console.log("Please check your internet connection and try again.");
  } else if (error.status === 401) {
    console.log("Authentication error. Please check your API credentials.");
  } else {
    console.log("An unexpected error occurred. Please try again later.");
  }
}
```

## Related Methods

- [`getGasToken`](/sdk-reference/mee-client/methods/more/getGasToken) - Get detailed information about gas tokens for a specific chain
- [`getQuote`](/sdk-reference/mee-client/methods/getQuote) - Get a quote for executing instructions with gas fees
- [`executeQuote`](/sdk-reference/mee-client/methods/executeQuote) - Execute a quote obtained from the MEE service

## When to Use

Use `getInfo` when:
- Initializing your application to determine which chains and tokens are supported
- Validating that your intended account type and chains are compatible with the MEE service
- Building UI components that need to display available options to users
- Before attempting transactions, to ensure the required functionality is available 