# MeeClient Methods

The MEE Client provides a set of powerful methods for executing transactions across multiple blockchains. This page serves as your guide to understanding and using these methods effectively.

## Overview

The MEE Client extends a base HTTP client with specialized actions for cross-chain transactions. These methods enable you to:

1. **Get execution quotes** - Find out how much a transaction will cost
2. **Execute cross-chain instructions** - Run transactions on multiple chains 
3. **Work with Fusion transactions** - Enable EOA users to use advanced features
4. **Track transaction status** - Monitor the progress of your transactions
5. **Query token information** - Get details about supported payment tokens

## Core Methods

### getQuote

Gets a quote for executing a set of instructions across multiple chains.

```typescript
const quote = await meeClient.getQuote({
  instructions: [
    // Instructions to execute on chain A
    {
      calls: [{ to: "0xContract", value: 0n, data: "0xCalldata" }],
      chainId: chainA.id
    },
    // Instructions to execute on chain B
    {
      calls: [{ to: "0xContract", value: 0n, data: "0xCalldata" }],
      chainId: chainB.id
    }
  ],
  feeToken: {
    // Pay for execution with tokens on chain A
    address: "0xTokenAddress",
    chainId: chainA.id
  }
});

console.log(`Execution price: ${quote.paymentInfo.tokenAmount}`);
```

[Learn more about getQuote](./getQuote.md)

### executeQuote

Executes a quote obtained from `getQuote` to run transactions across multiple chains.

```typescript
const { hash } = await meeClient.executeQuote({ 
  quote 
});

console.log(`Transaction hash: ${hash}`);
```

[Learn more about executeQuote](./executeQuote.md)

### getFusionQuote

Gets a quote for executing a Fusion transaction, which allows regular EOA wallets to perform complex operations without upgrading to smart accounts.

```typescript
const fusionQuote = await meeClient.getFusionQuote({
  // The on-chain trigger transaction
  trigger: {
    chainId: optimism.id,
    tokenAddress: "0xUSDCAddress",
    amount: parseUnits("1", 6)
  },
  // Instructions to execute after trigger
  instructions: [
    approveInstruction,
    supplyInstruction
  ],
  // Pay with these tokens
  feeToken: {
    address: "0xUSDCAddress",
    chainId: optimism.id
  }
});
```

[Learn more about getFusionQuote](./getFusionQuote.md)

### executeFusionQuote

Executes a Fusion quote obtained from `getFusionQuote`.

```typescript
const { hash } = await meeClient.executeFusionQuote({ 
  fusionQuote 
});

console.log(`Fusion transaction hash: ${hash}`);
```

[Learn more about executeFusionQuote](./executeFusionQuote.md)

### getPaymentToken

Retrieves detailed information about a specific payment token on a given blockchain, including whether it supports ERC20Permit.

```typescript
const tokenInfo = await meeClient.getPaymentToken({
  chainId: 1, // Ethereum Mainnet
  tokenAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" // USDC
});

console.log(`Token: ${tokenInfo.symbol}`);
console.log(`Decimals: ${tokenInfo.decimals}`);
console.log(`Permit Enabled: ${tokenInfo.permitEnabled}`);
```

[Learn more about getPaymentToken](./more/getPaymentToken.md)

### getSupertransactionReceipt

Retrieves the receipt for a supertransaction with details about its execution across multiple chains.

```typescript
const receipt = await meeClient.getSupertransactionReceipt({ 
  hash 
});

console.log("Transaction status:", receipt.transactionStatus);
console.log("Explorer links:", receipt.explorerLinks);
```

[Learn more about getSupertransactionReceipt](./more/getSupertransactionReceipt.md)

### waitForSupertransactionReceipt

Waits for a supertransaction to complete and returns the receipt when all operations have reached a final state.

```typescript
const receipt = await meeClient.waitForSupertransactionReceipt({ 
  hash 
});

if (receipt.transactionStatus === "MINED_SUCCESS") {
  console.log("Transaction completed successfully!");
  // Process transaction results
} else {
  console.error("Transaction failed:", receipt.transactionStatus);
}
```

[Learn more about waitForSupertransactionReceipt](./waitForSupertransactionReceipt.md)

## Configuration

When creating a MEE Client, you can configure these parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | `Url` | (Optional) URL for the MEE node service. Defaults to "https://network.biconomy.io/v1" |
| `pollingInterval` | `number` | (Optional) Polling interval in milliseconds. Defaults to 1000 |
| `account` | `MultichainSmartAccount` | The multichain smart account to use for transactions |
| `apiKey` | `string` | (Optional) API key for production use with higher rate limits |

## Complete Example

Here's a complete example demonstrating how to use multiple methods together:

```typescript
import { createMeeClient, mcUSDC } from '@biconomy/abstractjs';
import { parseUnits } from 'viem';

// Create the MEE client
const meeClient = await createMeeClient({
  account: multiChainAccount,
  apiKey: "mee_your_api_key_here" // Optional for production use
});

// 1. Get a quote for cross-chain operations
const quote = await meeClient.getQuote({
  instructions: [
    // Transfer USDC on Optimism
    {
      calls: [{ 
        to: "0xUSDCAddress", 
        data: encodeTransferFunction("0xRecipient", parseUnits("10", 6))
      }],
      chainId: optimism.id
    },
    // Deploy a contract on Base
    {
      calls: [{ 
        data: contractDeploymentBytecode
      }],
      chainId: base.id
    }
  ],
  feeToken: {
    address: mcUSDC.addressOn(optimism.id),
    chainId: optimism.id
  }
});

// 2. Execute the quote
const { hash } = await meeClient.executeQuote({ quote });
console.log(`Transaction submitted with hash: ${hash}`);

// 3. Wait for transaction receipt
const receipt = await meeClient.getSupertransactionReceipt({ hash });
console.log("Transaction completed with status:", receipt.transactionStatus);

// Check individual user operations
receipt.userOps.forEach((userOp, i) => {
  console.log(`Operation ${i} on chain ${userOp.chainId}: ${userOp.executionStatus}`);
});

// Alternative: Use waitForSupertransactionReceipt to automatically wait for completion
// const receipt = await meeClient.waitForSupertransactionReceipt({ hash });
// console.log("All operations completed with status:", receipt.transactionStatus);
```

## Type Definitions

### MeeClient
```typescript
type MeeClient = BaseMeeClient & {
  getQuote: (params: GetQuoteParams) => Promise<GetQuotePayload>
  executeQuote: (params: SignQuoteParams) => Promise<ExecuteSignedQuotePayload>
  getFusionQuote: (params: GetFusionQuoteParams) => Promise<GetFusionQuotePayload>
  executeFusionQuote: (params: ExecuteFusionQuoteParams) => Promise<ExecuteFusionQuotePayload>
  getPaymentToken: (params: GetPaymentTokenParams) => Promise<PaymentToken>
  getSupertransactionReceipt: (params: GetSupertransactionReceiptParams) => Promise<GetSupertransactionReceiptPayload>
  waitForSupertransactionReceipt: (params: { hash: Hex }) => Promise<GetSupertransactionReceiptPayload>
}
```