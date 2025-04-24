# waitForSupertransactionReceipt

Waits for a super transaction receipt to be available and returns the transaction details along with explorer links.

## When to Use This Method

The `waitForSupertransactionReceipt` method is designed for scenarios where you need to wait for transaction completion before proceeding:

- **Blocks execution** until all user operations have reached a final state
- **Simplifies transaction monitoring** with a convenient "fire and wait" pattern
- **Automatically polls** `getSupertransactionReceipt` at regular intervals (default: 1000ms)
- Continues polling until **all operations have settled** (no longer in "PENDING" state)
- Perfect for **sequential workflows** that depend on transaction completion

Use this method when you want a simplified approach to waiting for transaction completion without implementing custom polling logic. For more granular control over transaction status checking, consider using `getSupertransactionReceipt` directly.

## Usage

```typescript
const receipt = await meeClient.waitForSuperTransactionReceipt({ hash });
```

## Parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `hash` | `Hex` | The hash of the super transaction to wait for |

## Returns

Returns a promise that resolves to an object containing:

| Property | Type | Description |
| -------- | ---- | ----------- |
| `hash` | `Hex` | The hash of the super transaction |
| `node` | `Address` | Address of the MEE node that processed the transaction |
| `commitment` | `Hex` | Commitment hash for the transaction |
| `paymentInfo` | `FilledPaymentInfo` | Payment information object (see below) |
| `userOps` | `MeeFilledUserOpDetails[]` | Array of user operations (see below) |
| `explorerLinks` | `Url[]` | Array of links to view the transaction on block explorers |

### FilledPaymentInfo Object

| Property | Type | Description |
| -------- | ---- | ----------- |
| `token` | `Address` | Address of the token used for payment |
| `amount` | `bigint` | Amount of tokens to be paid |
| `decimals` | `number` | Number of decimals for the token |
| `symbol` | `string` | Token symbol |
| `exchangeRate` | `string` | Exchange rate used for the transaction |

### MeeFilledUserOpDetails Object

| Property | Type | Description |
| -------- | ---- | ----------- |
| `chainId` | `number` | Chain ID where the operation is executed |
| `sender` | `Address` | Address of the sender account |
| `nonce` | `bigint` | Account nonce |
| `initCode` | `Hex` | Account initialization code (if needed) |
| `callData` | `Hex` | The call data for the operation |
| `callGasLimit` | `bigint` | Gas limit for the main execution |
| `verificationGasLimit` | `bigint` | Gas limit for signature verification |
| `preVerificationGas` | `bigint` | Gas required for pre-verification |
| `maxFeePerGas` | `bigint` | Maximum fee per gas unit |
| `maxPriorityFeePerGas` | `bigint` | Maximum priority fee per gas unit |
| `paymasterAndData` | `Hex` | Paymaster contract address and data |
| `signature` | `Hex` | Operation signature |
| `factory` | `Address` | Account factory address |
| `executionStatus` | `"SUCCESS" \| "PENDING" \| "FAILED"` | Status of the operation execution |
| `executionData` | `Hex` | Data returned from the execution |
| `executionError` | `string \| null` | Error message if execution failed |

## Behavior

- Polls the MEE explorer API by calling `getSupertransactionReceipt` until all user operations are no longer in a "PENDING" state
- Uses the client's `pollingInterval` (defaults to 1000ms) between checks
- Throws an error if any user operation fails or contains invalid execution data
- Automatically generates relevant block explorer links for the transaction

## Example

```typescript
import { createMeeClient } from '@biconomy/abstractjs';

// Create MEE client
const meeClient = await createMeeClient({
  account: multiChainAccount,
});

// Execute a quote
const { hash } = await meeClient.executeQuote({ quote });

// Wait for all operations to complete before proceeding
// This will block execution until the transaction is done
try {
  const receipt = await meeClient.waitForSupertransactionReceipt({ hash });
  
  if (receipt.transactionStatus === "SUCCESS") {
    console.log("Transaction completed successfully!");
    console.log("View transaction:");
    receipt.explorerLinks.forEach(link => console.log(link));
    
    // Continue with your workflow now that transaction is complete
    processTransactionResults(receipt);
  } else {
    console.error("Transaction failed:", receipt.transactionStatus);
  }
} catch (error) {
  console.error("Error waiting for transaction:", error);
}
```

## Comparison with getSupertransactionReceipt

While `getSupertransactionReceipt` provides a snapshot of the current transaction state and returns immediately, `waitForSupertransactionReceipt` simplifies the process by:

1. Repeatedly polling `getSupertransactionReceipt` at regular intervals
2. Automatically handling the waiting logic for you
3. Only resolving once all operations have reached a final state
4. Providing a more convenient API for sequential workflows