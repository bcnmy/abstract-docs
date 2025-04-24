# buildComposable

The `buildComposable` method creates advanced transactions with runtime parameter injection, allowing values to be determined at execution time rather than when building the transaction.

## What is Composability?

Composability in blockchain transactions refers to the ability to create complex operations by combining simpler ones in ways that allow them to interact with each other. In the context of the AbstractJS SDK, composability takes this concept further by enabling:

1. **Runtime Value Resolution**: Instead of hardcoding values that might change between transaction creation and execution, composable transactions can use values determined at the exact moment of execution.

2. **Cross-Chain Data Flow**: Values and results from one chain can be used as inputs on another chain, enabling true cross-chain applications.

3. **Transaction Dependencies**: Later transactions can use the outputs from earlier ones, creating chains of dependent operations that would be impossible with traditional transactions.

4. **Conditional Execution Logic**: Transactions can adapt to the current state of the blockchain at execution time, rather than using potentially outdated information.

## Why is Composability Important?

Composability solves several critical problems in blockchain development:

- **Reduced Transaction Failures**: By using real-time values instead of hardcoded ones, transactions are less likely to fail due to changed conditions.

- **Improved Capital Efficiency**: Exact amounts can be used in subsequent transactions, eliminating the need for over-allocation of funds as a safety buffer.

- **Enhanced UX**: Users don't need to sign multiple transactions or manually coordinate between chains, as composable transactions can handle complex sequences automatically.

- **DeFi Optimization**: Creates opportunity for zero-slippage cross-chain operations by precisely using outputs from one transaction as inputs to another.

- **Developer Productivity**: Complex multi-step operations can be created as a single logical unit, reducing code complexity and error potential.

## When to Use `buildComposable` vs `build`

### Use `build` When:

- You need simple, static transactions with known values
- Your transactions don't depend on outputs from other operations
- You're performing basic operations within a single chain
- You're using pre-determined amounts that won't change

Example:
```typescript
// Simple static transaction - good for build()
const simpleTx = await mcNexus.build({
  type: "default",
  data: {
    chainId: optimism.id,
    calls: [{
      to: "0xContract",
      value: parseEther("0.1"),  // Static, known value
      data: "0xCalldata"
    }]
  }
});
```

### Use `buildComposable` When:

- You need runtime values that can't be known in advance
- Your transaction depends on the results of previous transactions
- You're working with token balances that may change
- You need to reference values across chains
- You need to encode complex data that includes runtime components

Example:
```typescript
// Dynamic transaction with runtime values - needs buildComposable()
const dynamicTx = await mcNexus.buildComposable({
  type: "default",
  data: {
    to: mcUSDC.addressOn(chainId),
    abi: erc20Abi,
    functionName: "transfer",
    args: [
      recipient,
      runtimeERC20BalanceOf({  // Use current balance at execution time
        targetAddress: mcNexus.addressOn(chainId),
        tokenAddress: mcUSDC.addressOn(chainId)
      })
    ],
    chainId: chainId
  }
});
```

## Real-World Use Cases

Composable transactions shine in these scenarios:

1. **Bridge & Use Pattern**: Bridge tokens to a destination chain and immediately use them without knowing the exact received amount in advance.

2. **Swap & Stake Workflows**: Swap tokens on a DEX and stake the exact result without needing a safety buffer.

3. **Asset Rebalancing**: Move funds between chains based on current balances to maintain desired ratios.

4. **Cross-Chain Arbitrage**: Execute multi-step trading strategies across different chains based on real-time amounts.

5. **Gas Optimization**: Pay for gas with tokens on one chain while executing transactions on another.

## Overview

Composable transactions enable:
- Using real-time token balances instead of hardcoded amounts
- Referencing outputs from previous transactions
- Adding validation constraints to ensure safe execution
- Creating complex cross-chain workflows

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| type | `string` | Yes | The type of composable action (`"default"`, `"transfer"`, `"approval"`) |
| data | `object` | Yes | Type-specific configuration parameters |

## Runtime Functions

| Function | Purpose |
|----------|---------|
| [`runtimeERC20BalanceOf`](/sdk-reference/mee-client/account/methods/runtimeERC20BalanceOf) | Gets token balance at execution time |
| [`runtimeEncodeAbiParameters`](/sdk-reference/mee-client/account/methods/runtimeEncodeAbiParameters) | Encodes complex data with runtime values |

## Examples

### Basic Token Transfer

This example shows a simple ERC20 transfer using the current balance at execution time:

```typescript
const transferInstruction = await mcNexus.buildComposable({
  type: "transfer",
  data: {
    recipient: recipientAddress,
    tokenAddress: mcUSDC.addressOn(chainId),
    amount: runtimeERC20BalanceOf({
      targetAddress: mcNexus.addressOn(chainId),
      tokenAddress: mcUSDC.addressOn(chainId)
    }),
    chainId: chainId
  }
});
```

### Contract Interaction with Runtime Values

This example shows calling a contract function with runtime parameters:

```typescript
const approveInstruction = await mcNexus.buildComposable({
  type: "default",
  data: {
    to: mcUSDC.addressOn(chainId),
    abi: erc20Abi,
    functionName: "approve",
    args: [
      uniswapRouterAddress,
      runtimeERC20BalanceOf({
        targetAddress: mcNexus.addressOn(chainId),
        tokenAddress: mcUSDC.addressOn(chainId),
        constraints: [greaterThanOrEqualTo(parseUnits("0.01", 6))]
      })
    ],
    chainId: chainId
  }
});
```

### Passing Runtime Values in Arrays

This example shows how to use runtime values inside complex data structures:

```typescript
const complexInstruction = await mcNexus.buildComposable({
  type: "default",
  data: {
    to: contractAddress,
    abi: CONTRACT_ABI,
    functionName: "transferFundsWithRuntimeParamInsideArray",
    args: [
      [address1, address2],  // First array argument (static)
      [
        runtimeERC20BalanceOf({  // Second array argument (dynamic)
          targetAddress: address1,
          tokenAddress: mcUSDC.addressOn(chainId),
          constraints: [greaterThanOrEqualTo(parseUnits("0.01", 6))]
        })
      ]
    ],
    chainId: chainId
  }
});
```

### Encoding Complex Parameters

This example shows encoding complex types with runtime values:

```typescript
const encodedParamsInstruction = await mcNexus.buildComposable({
  type: "default",
  data: {
    to: contractAddress,
    abi: CONTRACT_ABI,
    functionName: "foo",
    args: [
      param1,
      param2,
      runtimeEncodeAbiParameters(
        [
          { name: "x", type: "uint256" },
          { name: "y", type: "uint256" },
          { name: "z", type: "bool" }
        ],
        [
          420n,  // Static value
          runtimeERC20BalanceOf({  // Dynamic value
            targetAddress: accountAddress,
            tokenAddress: tokenAddress,
            constraints: []
          }),
          true  // Static value
        ]
      ),
      param4,
      param5
    ],
    chainId: chainId
  }
});
```

### Complete DeFi Example: Approve and Swap

This example shows a typical DeFi flow of approving and swapping tokens using runtime values:

```typescript
// 1. Approve tokens for Uniswap
const approveInstruction = await mcNexus.buildComposable({
  type: "default",
  data: {
    to: inToken.addressOn(chainId),
    abi: erc20Abi,
    functionName: "approve",
    args: [
      uniswapRouterAddress,
      runtimeERC20BalanceOf({
        targetAddress: mcNexus.addressOn(chainId),
        tokenAddress: inToken.addressOn(chainId)
      })
    ],
    chainId: chainId
  }
});

// 2. Swap tokens on Uniswap
const swapInstruction = await mcNexus.buildComposable({
  type: "default",
  data: {
    to: uniswapRouterAddress,
    abi: UniswapSwapRouterAbi,
    functionName: "exactInputSingle",
    args: [{
      tokenIn: inToken.addressOn(chainId),
      tokenOut: outToken.addressOn(chainId),
      fee: 3000,
      recipient: mcNexus.addressOn(chainId),
      deadline: BigInt(Math.floor(Date.now() / 1000) + 3600),
      amountIn: runtimeERC20BalanceOf({
        targetAddress: mcNexus.addressOn(chainId),
        tokenAddress: inToken.addressOn(chainId)
      }),
      amountOutMinimum: parseUnits("0.0001", 18),
      sqrtPriceLimitX96: 0n
    }],
    chainId: chainId
  }
});

// Execute both instructions
const { hash } = await meeClient.executeQuote({
  quote: await meeClient.getQuote({
    instructions: [approveInstruction, swapInstruction],
    feeToken: {
      address: feeToken.addressOn(chainId),
      chainId: chainId
    }
  })
});
```

## Using Constraints

You can add constraints to runtime values to ensure they meet specific conditions:

```typescript
runtimeERC20BalanceOf({
  targetAddress: accountAddress,
  tokenAddress: tokenAddress,
  constraints: [
    greaterThanOrEqualTo(parseUnits("0.01", 6)) // Ensure balance is at least 0.01 USDC
  ]
})
```

Available constraints include:
- `greaterThanOrEqualTo(value)`
- `lessThanOrEqualTo(value)`
- `equalTo(value)`
- `notEqualTo(value)`

## When to Use Composable Transactions

Composable transactions are ideal for:
- Working with actual token balances at execution time
- Creating multi-step DeFi workflows that depend on previous steps
- Ensuring transactions have appropriate failsafes through constraints
- Building cross-chain operations that require dynamic parameters