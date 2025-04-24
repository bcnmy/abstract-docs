# buildBridgeInstructions

The `buildBridgeInstructions` method creates instructions for bridging tokens between different chains within your multichain smart account.

## Overview

One of the primary benefits of the Biconomy MEE Client is the ability to execute cross-chain operations seamlessly. The `buildBridgeInstructions` method provides an easy way to create instructions for transferring tokens from one chain to another, abstracting away the complexity of different bridge providers and routing logic.

## Method Signature

```typescript
function buildBridgeInstructions(params: Omit<MultichainBridgingParams, "account">): Promise<BridgingInstructions>
```

## Parameters

The method accepts an object with the following properties (omitting the `account` parameter which is handled internally):

| Parameter | Type | Description |
|-----------|------|-------------|
| `amount` | `bigint` | The amount of tokens to bridge (in the token's smallest unit) |
| `mcToken` | `MultichainToken` | The multichain token to bridge (use predefined tokens like `mcUSDC` or create custom ones) |
| `toChain` | `Chain` | The destination chain object where tokens will be received |
| `fromChain?` | `Chain` | Optional. The source chain object where tokens will be sent from. If not specified, the optimal source chain with sufficient balance will be selected |
| `to?` | `Address` | Optional. The recipient address on the destination chain. Defaults to the same account address on the destination chain |
| `bridge?` | `BridgeProtocol` | Optional. The specific bridge provider to use. If not specified, the optimal bridge will be selected |

## Returns

A `Promise` that resolves to a `BridgingInstructions` object, which contains the array of `Instruction` objects that can be included in a multichain transaction quote.

## Examples

### Basic Usage

```typescript
import { mcUSDC } from "@biconomy/abstractjs";
import { parseUnits } from "viem";
import { optimism, base } from "viem/chains";

// Bridge 10 USDC from an available source chain to Base
const bridgeInstructions = await mcAccount.buildBridgeInstructions({
  mcToken: mcUSDC,
  amount: parseUnits("10", 6), // USDC has 6 decimals
  toChain: base
});

// Use these instructions in a quote
const quote = await meeClient.getQuote({
  instructions: bridgeInstructions,
  account: mcAccount
});

// Execute the quote
const tx = await meeClient.executeQuote(quote);
await meeClient.waitForSupertransactionReceipt(tx);
```

### Specifying Source and Destination Chains

```typescript
import { mcUSDC } from "@biconomy/abstractjs";
import { parseUnits } from "viem";
import { polygon, arbitrum } from "viem/chains";

// Bridge 50 USDC from Polygon to Arbitrum
const bridgeInstructions = await mcAccount.buildBridgeInstructions({
  mcToken: mcUSDC,
  amount: parseUnits("50", 6),
  fromChain: polygon,
  toChain: arbitrum
});

// Use in a quote...
```

### Specifying a Bridge Provider

```typescript
import { mcUSDC, BridgeProtocol } from "@biconomy/abstractjs";
import { parseUnits } from "viem";
import { polygon, arbitrum } from "viem/chains";

// Bridge 50 USDC from Polygon to Arbitrum using Hyperlane
const bridgeInstructions = await mcAccount.buildBridgeInstructions({
  mcToken: mcUSDC,
  amount: parseUnits("50", 6),
  fromChain: polygon,
  toChain: arbitrum,
  bridge: BridgeProtocol.HYPERLANE
});

// Use in a quote...
```

### Sending to a Different Recipient

```typescript
import { mcUSDC } from "@biconomy/abstractjs";
import { parseUnits } from "viem";
import { optimism, base } from "viem/chains";

// Bridge 25 USDC from Optimism to Base, sending to a different address
const bridgeInstructions = await mcAccount.buildBridgeInstructions({
  mcToken: mcUSDC,
  amount: parseUnits("25", 6),
  fromChain: optimism,
  toChain: base,
  to: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" // Recipient on destination chain
});

// Use in a quote...
```

## Error Handling

The method may throw errors in the following cases:

- If the token is not supported for bridging between the specified chains
- If the specified bridge provider does not support the requested token or chain pair
- If the token address is not defined for either the source or destination chain
- If there are insufficient funds on the source chain
- If there are network connectivity issues when querying bridge availability

Example with error handling:

```typescript
try {
  const bridgeInstructions = await mcAccount.buildBridgeInstructions({
    mcToken: mcUSDC,
    amount: parseUnits("10", 6),
    fromChain: optimism,
    toChain: base
  });
  
  // Use in a quote...
} catch (error) {
  console.error("Failed to build bridge instructions:", error);
  // Handle error or suggest alternative
}
```

## Combining with Other Instructions

Bridge instructions can be combined with other instructions to create complex cross-chain workflows:

```typescript
import { mcUSDC } from "@biconomy/abstractjs";
import { parseUnits, encodeFunctionData } from "viem";
import { optimism, base } from "viem/chains";

// 1. First get instructions to bridge 100 USDC to Base
const bridgeInstructions = await mcAccount.buildBridgeInstructions({
  mcToken: mcUSDC,
  amount: parseUnits("100", 6),
  fromChain: optimism,
  toChain: base
});

// 2. Get instructions to call a DeFi contract on Base with the bridged tokens
const dappContractAddress = "0x1234567890123456789012345678901234567890";
const stakingAbi = [/* ABI for staking function */];
const callData = encodeFunctionData({
  abi: stakingAbi,
  functionName: "stake",
  args: [parseUnits("100", 6)]
});

const contractCallInstructions = await mcAccount.buildContractCallInstructions({
  chainId: base.id,
  target: dappContractAddress,
  callData
});

// 3. Combine both sets of instructions in one quote
const quote = await meeClient.getQuote({
  instructions: [...bridgeInstructions, ...contractCallInstructions],
  account: mcAccount
});

// Execute the complete workflow
const tx = await meeClient.executeQuote(quote);
await meeClient.waitForSupertransactionReceipt(tx);
```

## Use Cases

- Building cross-chain DeFi applications that require token transfers between networks
- Creating portfolio rebalancing features across multiple chains
- Implementing cross-chain yield strategies
- Enabling users to move assets between chains without leaving your application

## Related Methods

- [`queryBridge`](/sdk-reference/mee-client/account/methods/queryBridge): For querying bridge information before creating instructions
- [`getUnifiedERC20Balance`](/sdk-reference/mee-client/account/methods/getUnifiedERC20Balance): For checking token balances across chains
- [`buildComposable`](/sdk-reference/mee-client/account/methods/buildComposable): For creating composable transactions that use bridged tokens 