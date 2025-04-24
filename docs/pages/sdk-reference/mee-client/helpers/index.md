# MEE Client Helpers

The AbstractJS SDK provides a rich set of helper utilities that make working with cross-chain applications easier. These helpers simplify common tasks like creating multichain contract instances, generating transaction explorer links, and working with popular protocols.

## Multichain Contract Helpers

### getMultichainContract

Creates a contract instance that works across multiple chains, handling the different contract addresses behind a unified interface.

```typescript
import { getMultichainContract } from "@biconomy/abstractjs";
import { parseAbi } from "viem";

// Create a multichain ERC20 contract
const myToken = getMultichainContract({
  abi: parseAbi([
    "function balanceOf(address owner) view returns (uint256)",
    "function transfer(address to, uint256 amount) returns (bool)"
  ]),
  deployments: [
    ["0xTokenOnEthereum", 1],     // Ethereum mainnet
    ["0xTokenOnOptimism", 10],    // Optimism
    ["0xTokenOnArbitrum", 42161]  // Arbitrum
  ]
});

// Now use it on any chain
const optimismBalance = await myToken.on(10).balanceOf({
  args: ["0xMyAddress"]
});
```

[Learn more about getMultichainContract](./getMultichainContract.mdx)

## Transaction Explorer Helpers

### getMeeScanLink

Generates a link to view a supertransaction on MeeScan, the explorer for MEE transactions.

```typescript
import { getMeeScanLink } from "@biconomy/abstractjs";

const txHash = "0x123...";
const explorerUrl = getMeeScanLink(txHash);
console.log(`Track your transaction: ${explorerUrl}`);
```

[Learn more about getMeeScanLink](./getMeeScanLink.md)

### getExplorerTxLink

Generates a link to view a transaction on a chain's block explorer (like Etherscan).

```typescript
import { getExplorerTxLink } from "@biconomy/abstractjs";

const txHash = "0x123...";
const chainId = 10; // Optimism
const explorerUrl = getExplorerTxLink(txHash, chainId);
console.log(`View on explorer: ${explorerUrl}`);
```

[Learn more about getExplorerTxLink](./getExplorerTxLink.md)

### getJiffyScanLink

Generates a link to view a user operation on JiffyScan, a specialized explorer for account abstraction operations.

```typescript
import { getJiffyScanLink } from "@biconomy/abstractjs";

const userOpHash = "0x123...";
const chainId = 42161; // Arbitrum
const explorerUrl = getJiffyScanLink(userOpHash, chainId);
console.log(`View on JiffyScan: ${explorerUrl}`);
```

[Learn more about getJiffyScanLink](./getJiffyScanLink.md)

## Pre-configured Protocol Contracts

AbstractJS comes with pre-configured contracts for popular protocols, saving you the hassle of finding addresses and defining ABIs.

### mcUSDC

Pre-configured USDC token contract deployed across multiple chains.

```typescript
import { mcUSDC } from "@biconomy/abstractjs";

// Get the USDC address on a specific chain
const usdcOnBase = mcUSDC.addressOn(8453); // Base

// Interact with USDC on a specific chain
const balance = await mcUSDC.on(10).balanceOf({
  args: ["0xMyAddress"]
});
```

[Learn more about mcUSDC](./mcUSDC.md)

### mcAaveV3Pool

Pre-configured Aave V3 pool contract deployed across multiple chains.

```typescript
import { mcAaveV3Pool, mcUSDC } from "@biconomy/abstractjs";

// Supply USDC to Aave on Optimism
const supplyCall = mcAaveV3Pool.on(10).supply({
  args: [
    mcUSDC.addressOn(10), // USDC on Optimism
    parseUnits("100", 6), // 100 USDC
    "0xMyAddress",        // Recipient
    0                     // Referral code
  ]
});
```

[Learn more about mcAaveV3Pool](./mcAaveV3Pool.md)

### mcUniswapSwapRouter

Pre-configured Uniswap V3 SwapRouter contract deployed across multiple chains.

```typescript
import { mcUniswapSwapRouter, mcUSDC } from "@biconomy/abstractjs";

// Encode a swap on Optimism
const swapCall = mcUniswapSwapRouter.on(10).exactInputSingle({
  args: [{
    tokenIn: mcUSDC.addressOn(10),
    tokenOut: "0xETHAddress",
    fee: 3000, // 0.3%
    recipient: "0xMyAddress",
    amountIn: parseUnits("10", 6),
    amountOutMinimum: parseUnits("0.001", 18),
    sqrtPriceLimitX96: 0n
  }]
});
```

[Learn more about mcUniswapSwapRouter](./mcUniswapSwapRouter.md)

## When to Use Helpers

- Use **getMultichainContract** when you need to work with the same contract interface across multiple chains
- Use **explorer link helpers** to provide transaction tracking links to users
- Use **pre-configured protocol contracts** to quickly integrate with popular DeFi protocols without looking up addresses
