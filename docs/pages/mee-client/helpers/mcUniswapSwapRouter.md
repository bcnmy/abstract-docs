 # mcUniswapSwapRouter

A pre-configured multichain contract instance for interacting with Uniswap's SwapRouter across different networks. This allows you to perform token swaps and related operations across multiple chains using a unified interface.

```typescript
export const mcUniswapSwapRouter = getMultichainContract<
  typeof UniswapSwapRouterAbi
>({
  abi: UniswapSwapRouterAbi,
  deployments: [
    ["0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45", arbitrum.id],
    ["0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45", optimism.id],
    ["0x2626664c2603336E57B271c5C0b26F421741e481", base.id]
  ]
})
``` 

## Usage

```typescript
import { mcUniswapSwapRouter } from "@biconomy/abstractjs"
import { optimism } from "viem/chains"

// Build an exact input single swap
const swapOp = await mcUniswapSwapRouter.build({
  type: "exactInputSingle",
  data: {
    chainId: optimism.id,
    args: [{
      tokenIn: tokenInAddress,
      tokenOut: tokenOutAddress,
      fee: 3000,
      recipient: userAddress,
      deadline: BigInt(Math.floor(Date.now() / 1000) + 900),
      amountIn: parseUnits("100", 6),
      amountOutMinimum: 1n,
      sqrtPriceLimitX96: 0n
    }],
    // Some complex userOps will sometimes require more gas than the default. All surpluses are returned to the users smart account in native token
    gasLimit: 1000000n
  }
})
```

## Parameters

Common parameters for building swap instructions:

| Parameter | Type | Description |
|-----------|------|-------------|
| type | `string` | The swap function to call (e.g., "exactInputSingle", "exactInput") |
| data.chainId | `number` | The chain ID where the swap should be executed |
| data.args | `SwapParams[]` | The swap parameters |
| data.gasLimit | `bigint` | Optional gas limit for the swap |

### SwapParams

| Parameter | Type | Description |
|-----------|------|-------------|
| tokenIn | `Address` | Address of input token |
| tokenOut | `Address` | Address of output token |
| fee | `number` | Pool fee tier (500, 3000, 10000) |
| recipient | `Address` | Address receiving the output tokens |
| deadline | `bigint` | Timestamp deadline for execution |
| amountIn | `bigint` | Amount of input tokens |
| amountOutMinimum | `bigint` | Minimum output tokens to receive |
| sqrtPriceLimitX96 | `bigint` | Price limit for the swap |

## Example

Here's a complete example showing how to perform a token swap with approval:

```typescript
import { mcUniswapSwapRouter, mcUSDC } from "@biconomy/abstractjs"
import { optimism } from "viem/chains"
import { parseUnits } from "viem"

// First approve the router
const approval = mcUSDC.build({
  type: "approve",
  data: {
    chainId: optimism.id,
    args: [
      mcUniswapSwapRouter.addressOn(optimism.id),
      parseUnits("100", 6)  // 100 USDC
    ]
  }
})

// Build the swap
const swap = mcUniswapSwapRouter.build({
  type: "exactInputSingle",
  data: {
    chainId: optimism.id,
    args: [{
      tokenIn: mcUSDC.addressOn(optimism.id),
      tokenOut: wethAddress,
      fee: 3000,
      recipient: userAddress,
      deadline: BigInt(Math.floor(Date.now() / 1000) + 900),
      amountIn: parseUnits("100", 6),
      amountOutMinimum: parseEther("0.05"), // 0.05 ETH minimum
      sqrtPriceLimitX96: 0n
    }],
    // Some complex userOps will sometimes require more gas than the default. All surpluses are returned to the users smart account in native token
    gasLimit: 1000000n
  }
})

```

## Error Handling

The contract will throw an error if:
- Attempting to swap on an unsupported chain
- Insufficient token approval
- Price impact too high
- Deadline expired
- Slippage tolerance exceeded