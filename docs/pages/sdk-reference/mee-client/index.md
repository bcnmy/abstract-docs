# MEE Client

The MEE (Modular Execution Environment) Client is your gateway to executing transactions across multiple blockchains with a single API. It simplifies cross-chain development by handling the complex orchestration of transactions behind the scenes.

## What is MEE Client?

MEE Client enables developers to:

- Execute transactions across multiple blockchains with a single user signature
- Pay for gas fees on any chain using tokens from a different chain
- Orchestrate complex transaction sequences with interdependencies
- Combine explicit transactions with intent-based execution
- Support both standard EOAs and Smart Accounts through the Fusion Module

## Installation

```bash
npm install @biconomy/abstractjs viem @rhinestone/module-sdk
# or
yarn add @biconomy/abstractjs viem @rhinestone/module-sdk
```

## Quick Start

Here's how to initialize the MEE Client:

```typescript
import { privateKeyToAccount } from "viem/accounts";
import { createMeeClient, toMultichainNexusAccount } from "@biconomy/abstractjs";
import { baseSepolia, mainnet } from "viem/chains";
import { http } from "viem";

// 1. Create a signer account (for development)
const privateKey = "PRIVATE_KEY";
const account = privateKeyToAccount(`0x${privateKey}`);

// 2. Initialize the multichain smart account
const mcNexus = await toMultichainNexusAccount({
  chains: [baseSepolia, mainnet],
  transports: [http(), http()],
  signer: account
});

// 3. Create the MEE client
const meeClient = await createMeeClient({ account: mcNexus });

// 4. Now you can execute cross-chain operations
const quote = await meeClient.getQuote({
  instructions: [{
    calls: [{ to: "0x123...", value: 0n, data: "0x..." }],
    chainId: baseSepolia.id
  }],
  feeToken: {
    address: "0x456...", // USDC contract
    chainId: mainnet.id // Pay with tokens from Ethereum mainnet
  }
});

// 5. Execute the quote
const { hash } = await meeClient.executeQuote({ quote });
console.log(`Transaction hash: ${hash}`);
```

## MultichainSmartAccount Configuration

When creating a multichain account using `toMultichainNexusAccount`, the following parameters are required:

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| chains | `Chain[]` | Yes | - | Array of chains the account will interact with |
| transports | `Transport[]` | Yes | - | Array of transports for each chain (must match the order of chains) |
| signer | `Account` | Yes | - | The signer account that controls the smart account |

The `MultichainSmartAccount` returned by `toMultichainNexusAccount` provides several useful methods:

- `deploymentOn(chainId)`: Get the deployment information for a specific chain
- `getUnifiedERC20Balance(mcToken)`: Check token balances across all configured chains
- `buildBridgeInstructions({...})`: Create instructions for bridging tokens between chains
- `build({...})`: Build various types of instructions (default, intent, batch, etc.)

Example usage:

```typescript
// Get deployment on specific chain
const optimismDeployment = mcNexus.deploymentOn(10);

// Check token balance across chains
const balance = await mcNexus.getUnifiedERC20Balance(mcUSDC);

// Build bridge transaction
const bridgeInstructions = await mcNexus.buildBridgeInstructions({
  amount: BigInt("1000000"), // 1 USDC
  mcToken: mcUSDC,
  toChain: base
});
```

## Developer Notice

## Configuration Options

When creating a MEE Client, you can configure the following parameters:

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| account | `MultichainSmartAccount` | Yes | - | The multichain smart account used for cross-chain transactions. Must be created using `toMultichainNexusAccount` |
| pollingInterval | `number` | No | `1000` | Frequency in milliseconds for polling actions and events |
| url | `string` | No | `"https://network.biconomy.io/v1"` | The URL for the MEE node service |
| apiKey | `string` | No | - | API key for production use with higher rate limits. Can be obtained from the [Biconomy Dashboard](https://dashboard.biconomy.io) |

## Example Use Cases

### 1. Cross-Chain DeFi Operations

Execute a sequence that withdraws funds from Aave on one chain and deposits to Compound on another chain:

```typescript
// Example code showing a cross-chain DeFi operation
const crossChainDeFi = await meeClient.executeQuote({
  quote: await meeClient.getQuote({
    instructions: [
      // 1. Withdraw from Aave on Optimism
      ...withdrawFromAaveInstructions,
      // 2. Bridge funds to Base
      ...bridgeToBaseInstructions,
      // 3. Deposit to Compound on Base
      ...depositToCompoundInstructions
    ],
    feeToken: {
      address: mcUSDC.addressOn(optimism.id),
      chainId: optimism.id
    }
  })
});
```

### 2. Using Fusion for EOA Users

Enable regular EOA users to perform complex operations without upgrading to smart accounts:

```typescript
// Example code showing Fusion functionality for EOAs
const fusionResult = await meeClient.executeFusionQuote({
  fusionQuote: await meeClient.getFusionQuote({
    trigger: {
      chainId: optimism.id,
      tokenAddress: mcUSDC.addressOn(optimism.id),
      amount: parseUnits("1", 6)
    },
    instructions: [approveInstruction, supplyInstruction],
    feeToken: {
      address: mcUSDC.addressOn(optimism.id),
      chainId: optimism.id
    }
  })
});
```

## Available Documentation

- [**Account Configuration**](/sdk-reference/mee-client/account/index.md) - Learn how to create and use MultichainNexusAccount
- [**Methods**](/sdk-reference/mee-client/methods/index.md) - Explore the available methods on the MEE Client
- [**Helpers**](/sdk-reference/mee-client/helpers/index.md) - Utility functions for working with the MEE Client