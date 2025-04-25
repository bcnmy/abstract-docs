# MEE Client Helpers

The AbstractJS SDK provides useful helper utilities for working with cross-chain applications. These helpers simplify common tasks when building with the MEE client.

## Available Helpers

| Helper | Description |
|--------|-------------|
| [getMultichainContract](./getMultichainContract.md) | Creates a contract instance that works across multiple chains |
| [getMeeScanLink](./more/getMeeScanLink.md) | Generates a link to view a supertransaction on MeeScan explorer |
| [getExplorerTxLink](./more/getExplorerTxLink.md) | Generates a link to view a transaction on a chain's block explorer |
| [getJiffyScanLink](./more/getJiffyScanLink.md) | Generates a link to view a user operation on JiffyScan |

## Runtime Helpers

Runtime helpers create dynamic values that are resolved at transaction execution time, enabling more flexible and powerful transactions:

| Helper | Description |
|--------|-------------|
| [runtimeERC20BalanceOf](./runtimeERC20BalanceOf.md) | Creates a runtime value that resolves to the ERC20 token balance of an address at execution time |
| [runtimeEncodeAbiParameters](./runtimeEncodeAbiParameters.md) | Encodes complex data structures with runtime values for use in smart contract interactions |

> **IMPORTANT**: When using any runtime helper (`runtimeERC20BalanceOf`, `runtimeEncodeAbiParameters`, etc.), you **must** use `mcNexus.buildComposable()` instead of `mcNexus.build()`. Runtime values will not work properly with the regular build method.

## Pre-configured Protocol Contracts

AbstractJS includes pre-configured contract instances for popular protocols and tokens:

| Contract | Description |
|----------|-------------|
| [mcUSDC](./more/mcUSDC.md) | USDC token contract deployed across multiple chains |
| [mcAaveV3Pool](./more/mcAaveV3Pool.md) | Aave V3 pool contract for lending and borrowing |
| [mcUniswapSwapRouter](./more/mcUniswapSwapRouter.md) | Uniswap V3 SwapRouter for token swaps |

## Basic Usage Example

```typescript
import { 
  getMultichainContract, 
  getMeeScanLink,
  runtimeERC20BalanceOf,
  mcUSDC
} from "@biconomy/abstractjs";

// Get a contract address
const usdcAddress = mcUSDC.addressOn(10); // Get USDC address on Optimism

// Create a transaction explorer link
const txHash = "0x123...";
const explorerUrl = getMeeScanLink(txHash);

// Create a runtime value that resolves to the current USDC balance
const dynamicAmount = runtimeERC20BalanceOf({
  targetAddress: mcNexus.addressOn(chainId),
  tokenAddress: mcUSDC.addressOn(chainId)
});

// IMPORTANT: When using runtime helpers, always use buildComposable instead of build
const transferInstruction = await mcNexus.buildComposable({
  type: "transfer",
  data: {
    recipient: recipientAddress,
    tokenAddress: mcUSDC.addressOn(chainId),
    amount: dynamicAmount, // Will use actual balance at execution time
    chainId: chainId
  }
});

// The instruction can now be used with getQuote
const quote = await meeClient.getQuote({
  instructions: [transferInstruction],
  feeToken: {
    address: mcUSDC.addressOn(paymentChain.id),
    chainId: paymentChain.id
  }
});
```

For more detailed documentation on each helper, click the links above.
