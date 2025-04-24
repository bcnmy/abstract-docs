# MultichainNexusAccount

The `MultichainNexusAccount` is a powerful abstraction that allows you to manage a single smart account identity across multiple blockchains. It's the foundation for cross-chain operations with the MEE Client.

## What is MultichainNexusAccount?

A MultichainNexusAccount provides:

- **Unified Identity**: The same smart account deployed across multiple networks
- **Consistent Address**: Same address on all EVM chains (except special cases like zkSync)
- **Unified Balances**: View and manage token balances across all chains
- **Cross-Chain Tools**: Bridge assets and execute transactions between chains
- **Instruction Building**: Create various types of instructions for the MEE Client

## Creating a MultichainNexusAccount

To create a MultichainNexusAccount, use the `toMultichainNexusAccount` function:

```typescript
import { toMultichainNexusAccount } from "@biconomy/abstractjs";
import { optimism, base } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";
import { http } from "viem";

// Create your signer (could be any EOA - MetaMask, private key, etc.)
const eoaSigner = privateKeyToAccount("0x..." /* private key */);

// Initialize multichain account
const mcNexus = await toMultichainNexusAccount({
  chains: [optimism, base],         // Which chains to support
  transports: [http(), http()],     // Transport for each chain (must match chains array)
  signer: eoaSigner                 // The EOA that controls this account
});
```

### Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| chains | `Chain[]` | Yes | - | Array of chains the account will interact with |
| transports | `Transport[]` | Yes | - | Array of transports for each chain (must match the order of chains) |
| signer | `Account` | Yes | - | The signer account that controls the smart account |

## Available Methods

The `MultichainNexusAccount` provides several powerful methods to interact with blockchain networks and build cross-chain transactions.

### Transaction Building Methods

These methods help you create different types of instructions for cross-chain operations:

- [**buildBridgeInstructions**](/sdk-reference/mee-client/account/methods/buildBridgeInstructions) - Bridge tokens between different chains
- [**buildComposable**](/sdk-reference/mee-client/account/methods/buildComposable) - Create composable transactions with runtime parameter injection

### Balance & Information Methods

These methods provide information about your account and balances:

- [**getUnifiedERC20Balance**](/sdk-reference/mee-client/account/methods/getUnifiedERC20Balance) - Get token balances across all chains
- **getAddress** - Get your account address on a specific chain
- **addressOn** - Get your account address on a specific chain (alternative syntax)
- **deploymentOn** - Get full deployment information for a specific chain

### Bridge-Related Methods

These methods provide information about bridging operations:

- **queryBridge** - Query available bridge options for a particular token and chain pair
- [**waitForTransactionReceipts**](/sdk-reference/mee-client/account/methods/waitForTransactionReceipts) - Wait for multiple transaction receipts across different chains

### Account Management Methods

These methods handle account delegation and management:

- [**isDelegated**](/sdk-reference/mee-client/account/methods/isDelegated) - Check if the eoa is delegated to a nexus account
- [**unDelegate**](/sdk-reference/mee-client/account/methods/unDelegate) - Remove delegation permissions from the eoa

## Basic Usage Examples

### Retrieving Account Addresses

```typescript
// Get address on Base
const baseAddress = mcNexus.addressOn(base.id);
console.log(`My account address on Base: ${baseAddress}`);

// Get full deployment info on Optimism
const optimismDeployment = mcNexus.deploymentOn(optimism.id);
console.log(`Deployment status: ${await optimismDeployment.isDeployed() ? 'Deployed' : 'Not deployed'}`);
```

### Checking Token Balances

```typescript
import { mcUSDC } from "@biconomy/abstractjs";

// Get total USDC balance across all chains
const balance = await mcNexus.getUnifiedERC20Balance(mcUSDC);

console.log(`Total USDC balance: ${balance.balance}`);

// Get breakdown by chain
balance.breakdown.forEach(chainBalance => {
  console.log(`Chain ${chainBalance.chainId}: ${chainBalance.balance} USDC`);
});
```

### Cross-Chain Transaction Example

Here's a simple example showing how to use multiple methods together for a cross-chain operation:

```typescript
import { mcUSDC } from "@biconomy/abstractjs";
import { parseUnits, formatUnits } from "viem";
import { optimism, base } from "viem/chains";

// 1. Check USDC balance
const balance = await mcNexus.getUnifiedERC20Balance(mcUSDC);
console.log(`Total USDC balance: ${formatUnits(balance.balance, 6)}`);

// 2. Bridge 10 USDC from Optimism to Base
const bridgeInstructions = await mcNexus.buildBridgeInstructions({
  mcToken: mcUSDC,
  amount: parseUnits("10", 6),
  fromChain: optimism,
  toChain: base
});

// 3. Create a contract call on Base
const contractCallInstructions = await mcNexus.buildContractCallInstructions({
  chainId: base.id,
  target: "0x1234...",
  callData: "0x..."
});

// 4. Execute both instructions in a single transaction
const quote = await meeClient.getQuote({
  instructions: [...bridgeInstructions, ...contractCallInstructions],
  account: mcNexus
});

const tx = await meeClient.executeQuote(quote);
console.log(`Transaction hash: ${tx.hash}`);
```

## Advanced Composable Transactions

Composable transactions are a powerful feature that enables runtime parameter injection between transactions, even across different chains:

```typescript
// Example of a cross-chain composable transaction sequence
const swapAndStakeComposable = await mcNexus.buildComposable({
  // First part: Bridge tokens
  bridge: {
    fromChain: optimism,
    toChain: base,
    mcToken: mcUSDC,
    amount: parseUnits("100", 6), // 100 USDC
  },
  // Second part: Use result in a contract call
  contractCall: {
    chainId: base.id,
    target: stakingContractAddress,
    functionName: "stake",
    abi: stakingAbi,
    // No need to specify args here - they will be injected at runtime
    // using the exact amount received from the bridge
  }
});

// Execute the composable transaction via the MEE client
const { hash } = await meeClient.executeQuote({
  quote: await meeClient.getQuote({
    instructions: [swapAndStakeComposable],
    account: mcNexus
  })
});

// Wait for the transaction to complete
const receipt = await meeClient.waitForSupertransactionReceipt({ hash });
console.log(`Transaction status: ${receipt.transactionStatus}`);
```

Key benefits of composable transactions:

- **Dynamic Parameters**: Use outputs from one transaction as inputs to another
- **Cross-Chain Values**: Reference values across different blockchains
- **Zero Slippage**: Supply exact amounts received from bridges or swaps
- **Complex Workflows**: Build sophisticated DeFi strategies with guaranteed execution conditions
- **Predictable Results**: Avoid failed transactions due to incorrect hard-coded amounts

## Common Patterns and Uses

### Deploy Account When Needed

Smart accounts are deployed on-demand when transactions are executed. You don't need to explicitly deploy them:

```typescript
// The account doesn't need to be pre-deployed
// It will be deployed when the first transaction is executed
const quote = await meeClient.getQuote({
  instructions: [myFirstTransaction],
  feeToken: { address: mcUSDC.addressOn(optimism.id), chainId: optimism.id }
});
const { hash } = await meeClient.executeQuote({ quote });
```

### Funding Your Account

You can fund your smart account just like any other address:

```typescript
// Get your account address on the desired chain
const myAccountOnOptimism = mcNexus.addressOn(optimism.id);
console.log(`Send tokens to: ${myAccountOnOptimism}`);
```

### Managing Delegations

Check if your account is delegated and manage permissions:

```typescript
// Check if account is delegated on any chain
const delegationStatus = await mcNexus.isDelegated();

if (delegationStatus.isDelegated) {
  console.log("Account is delegated on at least one chain");
  
  // Remove delegations on all chains
  const result = await mcNexus.unDelegate();
  
  // Wait for transactions to be mined
  await mcNexus.waitForTransactionReceipts({
    transactionHashes: result.transactionHashes
  });
  
  console.log("All delegations removed");
}
```

## Technical Details

### Return Value

| Property | Type | Description |
|----------|------|-------------|
| `deployments` | `ModularSmartAccount[]` | Array of account deployments across different chains |
| `signer` | `Signer` | The signer associated with this multichain account |
| `deploymentOn` | `(chainId: number, strictMode?: boolean) => ModularSmartAccount \| undefined` | Function to get deployment for a specific chain |
| `addressOn` | `(chainId: number, strictMode?: boolean) => Hex \| undefined` | Function to get address for a specific chain |

### Error Handling

Throws an error if:
- Invalid chain configuration is provided
- Signer is not connected
- Account deployment fails on any chain 

### Type Definitions

```typescript
type MultichainNexusParams = Partial<Omit<ToNexusSmartAccountParameters, "signer">> & {
  chains: Chain[]
  signer: Signer
}

type MultichainSmartAccount = {
  deployments: ModularSmartAccount[]
  signer: Signer
  deploymentOn: (chainId: number, strictMode?: boolean) => ModularSmartAccount | undefined
  addressOn: (chainId: number, strictMode?: boolean) => Hex | undefined
}
``` 