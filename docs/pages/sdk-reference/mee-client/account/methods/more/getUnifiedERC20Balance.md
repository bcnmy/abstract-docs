# getUnifiedERC20Balance

The `getUnifiedERC20Balance` method retrieves the total balance of a specific ERC20 token across all chains where your multichain smart account is deployed.

## Overview

One of the key benefits of using a multichain smart account is the ability to view and manage assets across multiple blockchains as a single unified portfolio. The `getUnifiedERC20Balance` method simplifies token balance management by aggregating token balances from all chains into a single view.

## Method Signature

```typescript
function getUnifiedERC20Balance(parameters: {
  mcToken: MultichainToken,
  account: BaseMultichainSmartAccount
}): Promise<UnifiedERC20Balance>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `mcToken` | `MultichainToken` | The multichain token to check balance for. Use predefined tokens like `mcUSDC` or create custom ones with `createMultichainToken`. |

## Returns

A `Promise` that resolves to a `UnifiedERC20Balance` object containing:

| Property | Type | Description |
|----------|------|-------------|
| `balance` | `bigint` | The total token balance across all chains |
| `decimals` | `number` | Number of decimal places for the token |
| `breakdown` | `Array<{ chainId: number, balance: bigint, decimals: number }>` | Detailed breakdown of token balances by chain |
| `mcToken` | `MultichainToken` | The multichain token reference |

## Decimal Validation

The method validates that the token has the same number of decimals across all chains. If there's a mismatch in the token's decimal places between chains, the function will throw an error. This ensures consistency when aggregating balances.

## Examples

### Basic Usage

```typescript
import { mcUSDC } from "@biconomy/abstractjs";
import { formatUnits } from "viem";

// Get USDC balance across all chains
const balance = await mcAccount.getUnifiedERC20Balance(mcUSDC);

console.log(`Total USDC balance: ${formatUnits(balance.balance, 6)}`);
```

### With Balance Breakdown

```typescript
import { mcUSDC } from "@biconomy/abstractjs";
import { formatUnits } from "viem";

// Get USDC balance with breakdown by chain
const balance = await mcAccount.getUnifiedERC20Balance(mcUSDC);

console.log(`Total USDC balance: ${formatUnits(balance.balance, balance.decimals)}`);

// Display breakdown by chain
balance.breakdown.forEach(chainBalance => {
  console.log(`Chain ${chainBalance.chainId}: ${formatUnits(chainBalance.balance, chainBalance.decimals)} USDC`);
});
```

### With Custom Token

```typescript
import { createMultichainToken } from "@biconomy/abstractjs";
import { formatUnits } from "viem";
import { optimism, base, arbitrum } from "viem/chains";

// Create a custom multichain token definition
const mcDAI = createMultichainToken({
  name: "DAI",
  symbol: "DAI",
  decimals: 18,
  addresses: {
    [optimism.id]: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    [base.id]: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
    [arbitrum.id]: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1"
  }
});

// Get unified DAI balance
const daiBalance = await mcAccount.getUnifiedERC20Balance(mcDAI);

console.log(`Total DAI balance: ${formatUnits(daiBalance.balance, 18)}`);
```

## Error Handling

The method may throw errors in the following cases:

- If the token address is not defined for a chain in your multichain account
- If the token has different decimal places across chains
- If there are network connectivity issues when querying balances
- If there are contract errors when trying to read balances (e.g., invalid ERC20 implementation)

Example with error handling:

```typescript
try {
  const balance = await mcAccount.getUnifiedERC20Balance(mcUSDC);
  console.log(`Total USDC balance: ${formatUnits(balance.balance, 6)}`);
} catch (error) {
  console.error("Failed to get unified balance:", error);
}
```

## Implementation Details

The method works by:
1. Finding all chains where both the token and account are deployed
2. Querying the token balance for each chain
3. Verifying that the token has the same number of decimals on all chains
4. Aggregating the balances into a single total

## Use Cases

- Creating a consolidated portfolio view in a wallet interface
- Determining where to bridge tokens from for the most efficient operations
- Building rebalancing strategies across chains
- Implementing unified token accounting for DeFi applications

## Related Methods

- [`buildBridgeInstructions`](#TODO): For moving tokens between chains
- [`queryBridge`](#TODO): For getting information about potential bridge operations 