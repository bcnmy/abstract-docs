# mcUSDC

A pre-configured multichain contract instance for interacting with USDC (USD Coin) across different networks. This allows you to perform token operations like transfers, approvals, and balance checks across multiple chains using a unified interface.

```typescript
export const mcUSDC = getMultichainContract<typeof erc20Abi>({
  abi: erc20Abi,
  deployments: [
    ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", 1],
    ["0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85", 10],
    ["0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359", 137],
    ["0x1d17CBcF0D6D143135aE902365D2E5e2A16538D4", 324],
    ["0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", 8453],
    ["0xaf88d065e77c8cC2239327C5EDb3A432268e5831", 42161],
    ["0xcebA9300f2b948710d2653dD7B07f33A8B32118C", 42220],
    ["0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E", 43114]
  ]
})
``` 

## Usage

```typescript
import { mcUSDC } from "@biconomy/abstractjs"
import { optimism, base } from "viem/chains"

// Check USDC balance across multiple chains
const balances = await mcUSDC.read({
  onChains: [optimism, base],
  functionName: "balanceOf",
  args: [address]
})

// Build a transfer instruction
const transferOp = await mcUSDC.build({
  type: "transfer",
  data: {
    chainId: optimism.id,
    args: [
      recipient,
      parseUnits("100", 6)  // 100 USDC (6 decimals)
    ]
  }
})
```

## Parameters

Common parameters for building instructions:

| Parameter | Type | Description |
|-----------|------|-------------|
| type | `string` | The function name to call (e.g., "transfer", "approve") |
| data.chainId | `number` | The chain ID where the transaction should be executed |
| data.args | `any[]` | The arguments for the function call |

## Response

The contract provides standard ERC20 functions:

| Function | Description |
|----------|-------------|
| transfer | Transfer tokens to another address |
| approve | Approve spender to use tokens |
| balanceOf | Get token balance of an address |
| allowance | Check approved amount for spender |
| totalSupply | Get total token supply |

## Example

Here's a complete example showing common USDC operations:

```typescript
import { mcUSDC } from "@biconomy/abstractjs"
import { optimism } from "viem/chains"
import { parseUnits } from "viem"

// Approve a spender
const approveOp = await mcUSDC.build({
  type: "approve",
  data: {
    chainId: optimism.id,
    args: [
      spenderAddress,
      parseUnits("1000", 6)  // 1000 USDC
    ]
  }
})

// Transfer USDC
const transferOp = await mcUSDC.build({
  type: "transfer",
  data: {
    chainId: optimism.id,
    args: [
      recipientAddress,
      parseUnits("50", 6)    // 50 USDC
    ]
  }
})

// Check balances across chains
const balances = await mcUSDC.read({
  onChains: [optimism, base],
  functionName: "balanceOf",
  args: [userAddress]
})

// Get allowance
const allowance = await mcUSDC.read({
  onChains: [optimism],
  functionName: "allowance",
  args: [userAddress, spenderAddress]
})
```

## Error Handling

The contract will throw an error if:
- Attempting to interact with an unsupported chain
- Insufficient balance for transfers
- Invalid function parameters
- Attempting to transfer to zero address

## Important Notes

- USDC uses 6 decimals (not 18 like most ERC20 tokens)
- Always use parseUnits(amount, 6) when specifying USDC amounts
- Token addresses may vary by chain
- Some chains may have bridged versions of USDC



