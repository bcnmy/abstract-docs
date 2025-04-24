# waitForTransactionReceipts

The `waitForTransactionReceipts` method waits for transaction receipts from multiple transactions across different chains.

## Overview

When executing cross-chain operations that result in transactions on multiple blockchains, this method provides a convenient way to wait for all transactions to be mined and confirmed, returning their receipts once complete.

## Method Signature

```typescript
function waitForTransactionReceipts(
  parameters: WaitForTransactionReceiptParameters
): Promise<WaitForTransactionReceiptPayload>
```

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `transactionHashes` | `Record<number, Hex>` | Yes | Object mapping chain IDs to transaction hashes to wait for |
| `timeout?` | `number` | No | Optional timeout in milliseconds (default varies by chain) |
| `confirmations?` | `number` | No | Optional number of confirmations to wait for (default: 1) |

## Returns

A `Promise` that resolves to a `WaitForTransactionReceiptPayload` object with the following properties:

| Property | Type | Description |
|----------|------|-------------|
| `receipts` | `Record<number, TransactionReceipt>` | Object mapping chain IDs to transaction receipts |

## Examples

### Basic Usage

```typescript
import { optimism, base } from "viem/chains";
import { type Hex } from "viem";

// Example: Wait for transactions after undelegation
const undelegateResult = await mcAccount.unDelegate();

// Wait for all transaction receipts
const receipts = await mcAccount.waitForTransactionReceipts({
  transactionHashes: undelegateResult.transactionHashes
});

// Process the receipts
for (const [chainId, receipt] of Object.entries(receipts.receipts)) {
  console.log(`Transaction on chain ${chainId}:`);
  console.log(`  Status: ${receipt.status === 'success' ? 'Successful' : 'Failed'}`);
  console.log(`  Block number: ${receipt.blockNumber}`);
  console.log(`  Gas used: ${receipt.gasUsed}`);
}
```

### With Custom Confirmation Settings

```typescript
// Wait for multiple transactions with custom settings
const receipts = await mcAccount.waitForTransactionReceipts({
  transactionHashes: {
    [optimism.id]: "0x1234...", // Transaction hash on Optimism
    [base.id]: "0xabcd..."      // Transaction hash on Base
  },
  timeout: 60000,         // 60 second timeout
  confirmations: 3        // Wait for 3 confirmations
});

// Check if all transactions were successful
const allSuccessful = Object.values(receipts.receipts).every(
  receipt => receipt.status === 'success'
);

console.log(`All transactions successful: ${allSuccessful}`);
```

### Parallel Operation While Waiting

```typescript
// Start waiting for transactions
const receiptPromise = mcAccount.waitForTransactionReceipts({
  transactionHashes: {
    [optimism.id]: optimismTxHash,
    [base.id]: baseTxHash
  }
});

// Do other operations while waiting
console.log("Waiting for transactions to confirm...");
await performOtherTasks();

// Now get the receipts when they're ready
const receipts = await receiptPromise;
console.log("All transactions confirmed!");
```

## Error Handling

The method may throw errors in the following cases:
- If a transaction fails during execution
- If the timeout is reached before all receipts are available
- If there are network connectivity issues
- If an invalid transaction hash is provided

Example with error handling:

```typescript
try {
  const receipts = await mcAccount.waitForTransactionReceipts({
    transactionHashes: txHashes,
    timeout: 120000 // 2 minutes
  });
  
  console.log("All transactions confirmed!");
  
  // Check for failures
  for (const [chainId, receipt] of Object.entries(receipts.receipts)) {
    if (receipt.status !== 'success') {
      console.error(`Transaction on chain ${chainId} failed!`);
      // Handle the failure...
    }
  }
} catch (error) {
  console.error("Error waiting for transaction receipts:", error);
  
  // Check if it's a timeout error
  if (error.message.includes("timeout")) {
    console.log("Transactions are taking longer than expected to confirm...");
    // Maybe provide retry option to user
  }
}
```

## Use Cases

- Waiting for complex cross-chain operations to complete
- Ensuring delegations or undelegations are confirmed
- Synchronizing UI state with on-chain transaction status
- Implementing robust error handling for multi-chain transactions
- Verifying successful account deployment across multiple chains

## Related Methods

- [`unDelegate`](/sdk-reference/mee-client/account/methods/unDelegate) - Remove delegation permissions (produces transaction hashes to wait for)
- [`isDelegated`](/sdk-reference/mee-client/account/methods/isDelegated) - Check if account is delegated (useful after waiting for undelegation transactions) 