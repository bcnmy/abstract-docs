# runtimeERC20BalanceOf

The `runtimeERC20BalanceOf` function creates a runtime value that resolves to the ERC20 token balance of a specific address at transaction execution time. This allows for dynamic amounts in transactions based on real-time balances.

## Overview

Instead of hardcoding token amounts in your transactions, `runtimeERC20BalanceOf` allows the smart contract to use the actual token balance at execution time. This is particularly useful for operations like:

- Transferring an entire token balance
- Creating transactions that depend on balances which may change
- Setting approval amounts based on current holdings
- Validating that sufficient tokens are available before proceeding

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| targetAddress | `Address` | Yes | The address whose token balance will be checked |
| tokenAddress | `Address` | Yes | The ERC20 token contract address |
| constraints | `RuntimeConstraint[]` | No | Optional validation constraints to apply to the balance |

## Runtime Constraints

Constraints allow you to add validation rules to the balance:

| Constraint | Description | Example |
|------------|-------------|---------|
| `greaterThanOrEqualTo(value)` | Ensures the balance is at least the specified amount | `greaterThanOrEqualTo(parseUnits("1", 6))` |
| `lessThanOrEqualTo(value)` | Ensures the balance doesn't exceed the specified amount | `lessThanOrEqualTo(parseUnits("100", 6))` |
| `equalTo(value)` | Ensures the balance equals the specified amount | `equalTo(parseUnits("50", 6))` |
| `notEqualTo(value)` | Ensures the balance doesn't equal the specified amount | `notEqualTo(0n)` |

## Examples

### Basic Usage

```typescript
// Create a runtime value that resolves to the USDC balance of the account
const dynamicAmount = runtimeERC20BalanceOf({
  targetAddress: mcNexus.addressOn(chainId),
  tokenAddress: mcUSDC.addressOn(chainId)
});

// Use it in a transfer transaction
const transferInstruction = await mcNexus.buildComposable({
  type: "transfer",
  data: {
    recipient: recipientAddress,
    tokenAddress: mcUSDC.addressOn(chainId),
    amount: dynamicAmount,  // Will use actual balance at execution time
    chainId: chainId
  }
});
```

### With Constraints

```typescript
// Create a runtime value with minimum balance requirement
const dynamicAmount = runtimeERC20BalanceOf({
  targetAddress: mcNexus.addressOn(chainId),
  tokenAddress: mcUSDC.addressOn(chainId),
  constraints: [
    greaterThanOrEqualTo(parseUnits("0.01", 6)) // Ensure at least 0.01 USDC
  ]
});

// The transaction will fail if the balance is less than 0.01 USDC
const approveInstruction = await mcNexus.buildComposable({
  type: "default",
  data: {
    to: mcUSDC.addressOn(chainId),
    abi: erc20Abi,
    functionName: "approve",
    args: [
      spenderAddress,
      dynamicAmount
    ],
    chainId: chainId
  }
});
```

### Multiple Constraints

```typescript
// Apply multiple constraints to the balance
const dynamicAmount = runtimeERC20BalanceOf({
  targetAddress: mcNexus.addressOn(chainId),
  tokenAddress: mcUSDC.addressOn(chainId),
  constraints: [
    greaterThanOrEqualTo(parseUnits("1", 6)),    // At least 1 USDC
    lessThanOrEqualTo(parseUnits("1000", 6))     // No more than 1000 USDC
  ]
});
```

### Checking Another Account's Balance

```typescript
// Get the token balance of any address (not just your own account)
const otherAccountBalance = runtimeERC20BalanceOf({
  targetAddress: "0xAnotherAccountAddress",
  tokenAddress: mcUSDC.addressOn(chainId)
});
```

## When to Use

Use `runtimeERC20BalanceOf` when you:

- Need to transfer or use an entire token balance
- Want to create self-adapting transactions that work with changing balances
- Need to ensure minimum balances before proceeding with a transaction
- Want to create dynamic approval amounts for DeFi interactions
- Need to reference token balances of external accounts in your transaction logic