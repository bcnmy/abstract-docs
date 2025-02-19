# mcAaveV3Pool

A pre-configured multichain contract instance for interacting with Aave V3 Pool contracts across different networks. This allows you to perform lending and borrowing operations across multiple chains using a unified interface.

## Supported Networks

The contract is deployed on:
- Optimism: `0x794a61358D6845594F94dc1DB02A252b5b4814aD`
- Base: `0xA238Dd80C259a72e81d7e4664a9801593F98d1c5`
- Polygon: `0x794a61358D6845594F94dc1DB02A252b5b4814aD`
- Arbitrum: `0x794a61358D6845594F94dc1DB02A252b5b4814aD`

## Usage

```typescript
import { mcAaveV3Pool } from "@biconomy/abstractjs"
import { optimism } from "viem/chains"

// Supply assets to Aave
const supplyInstruction = await mcAaveV3Pool.build({
  type: "supply",
  data: {
    chainId: optimism.id,
    args: [
      tokenAddress,    // address of the token to supply
      amount,          // amount to supply
      userAddress,     // address receiving the aToken
      0               // referral code
    ]
  }
})

// Read user account data across chains
const accountData = await mcAaveV3Pool.read({
  onChains: [optimism, base],
  functionName: "getUserAccountData",
  args: [userAddress]
})
```

## Parameters

Common parameters for building instructions:

| Parameter | Type | Description |
|-----------|------|-------------|
| type | `string` | The function name to call (e.g., "supply", "borrow", "repay") |
| data.chainId | `number` | The chain ID where the transaction should be executed |
| data.args | `any[]` | The arguments for the function call |

## Response

The contract provides access to all Aave V3 Pool functions, including:

| Function | Description |
|----------|-------------|
| supply | Supply assets to the protocol |
| borrow | Borrow assets from the protocol |
| repay | Repay borrowed assets |
| withdraw | Withdraw supplied assets |
| getUserAccountData | Get user's lending/borrowing positions |

## Example

Here's a complete example showing how to supply and borrow assets:

```typescript
import { mcAaveV3Pool } from "@biconomy/abstractjs"
import { optimism } from "viem/chains"

// Supply USDC to Aave
const supplyOp = await mcAaveV3Pool.build({
  type: "supply",
  data: {
    chainId: optimism.id,
    args: [
      usdcAddress,
      parseUnits("100", 6),  // 100 USDC
      userAddress,
      0
    ]
  }
})

// Borrow ETH against the supplied collateral
const borrowOp = await mcAaveV3Pool.build({
  type: "borrow",
  data: {
    chainId: optimism.id,
    args: [
      wethAddress,
      parseEther("0.1"),     // 0.1 ETH
      2,                     // variable rate mode
      0,                     // referral code
      userAddress
    ]
  }
})
```

## Error Handling

The contract will throw an error if:
- Attempting to interact with an unsupported chain
- Insufficient collateral for borrowing
- Invalid function parameters
- Unsupported interest rate mode