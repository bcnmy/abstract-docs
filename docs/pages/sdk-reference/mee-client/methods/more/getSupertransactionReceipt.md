# getSupertransactionReceipt

The `getSupertransactionReceipt` method retrieves the receipt for a supertransaction from the MEE node. It can optionally wait for the transaction to be mined and return the receipts from all constituent transactions.

## When to Use This Method

The `getSupertransactionReceipt` method provides immediate, granular control over transaction monitoring:

- **Returns immediately** with the current transaction state
- Allows you to implement **custom polling logic** based on your application needs
- Gives you **fine-grained control** over how and when to check transaction status
- Lets you **build reactive UIs** that update in real-time as transaction status changes
- Enables **non-blocking workflows** where you can continue execution while monitoring transactions

Use this method when you need precise control over transaction status monitoring or want to implement custom waiting strategies. For a simpler "wait until complete" approach, consider using `waitForSupertransactionReceipt`, which repeatedly polls this method until all operations settle.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `hash` | `Hex` | Yes | The supertransaction hash to get the receipt for |
| `waitForReceipts` | `boolean` | No | Whether to wait for transaction receipts to be mined. Defaults to `true` |
| `confirmations` | `number` | No | Number of confirmations to wait for. Defaults to `2` |
| `account` | `MultichainSmartAccount` | No | Smart account to execute the transaction. If not provided, uses the client's default account |

## Returns

Promise resolving to a receipt containing:

| Property | Type | Description |
|----------|------|-------------|
| `hash` | `Hex` | Transaction hash |
| `node` | `Address` | Address of the MEE node |
| `commitment` | `Hex` | Commitment hash |
| `paymentInfo` | `FilledPaymentInfo` | Complete payment information with token amounts |
| `userOps` | `(MeeFilledUserOpDetails & UserOpStatus)[]` | Array of user operations with their status and details |
| `explorerLinks` | `Url[]` | Array of links to explorers where the transaction can be viewed |
| `transactionStatus` | `string` | Status of the supertransaction: `SUCCESS`, `MINING`, `MINED_SUCCESS`, `MINED_FAIL`, `FAILED`, or `PENDING` |
| `receipts` | `TransactionReceipt[] \| null` | Array of transaction receipts if `waitForReceipts` is `true`, otherwise `null` |

## Basic Example

This example shows how to get a transaction receipt and check its status:

```typescript
// Execute a quote
const quote = await meeClient.getQuote({
  instructions: [
    {
      calls: [
        {
          to: zeroAddress,
          value: 0n,
          gasLimit: 50000n
        }
      ],
      chainId: targetChain.id
    }
  ],
  feeToken: {
    address: mcUSDC.addressOn(paymentChain.id),
    chainId: paymentChain.id
  }
});

// Execute the quote
const { hash } = await meeClient.executeQuote({ quote });

// Get the receipt
const receipt = await meeClient.getSupertransactionReceipt({ 
  hash
});

// Check transaction status
console.log(`Transaction status: ${receipt.transactionStatus}`);

// Explorer links for viewing the transaction
console.log(`Explorer links:`, receipt.explorerLinks);
```

## Checking Transaction Completion

You can check if a transaction is complete or still pending:

```typescript
const receipt = await meeClient.getSupertransactionReceipt({ hash });

// Check if any operations are still pending
const pendingOps = receipt.userOps.filter(op => 
  op.executionStatus === "PENDING" || op.executionStatus === "MINING"
);

if (pendingOps.length > 0) {
  console.log(`${pendingOps.length} operations still pending...`);
  // Implement custom retry/polling logic here
} else {
  console.log("All operations complete!");
  
  if (receipt.transactionStatus === "MINED_SUCCESS") {
    console.log("Transaction successful!");
  } else {
    console.log("Transaction failed:", receipt.transactionStatus);
  }
}
```

## Waiting for Confirmations

For transactions where you need to wait for a specific number of confirmations, use the `confirmations` parameter:

```typescript
// Execute a transaction
const { hash } = await meeClient.executeSignedQuote({ signedQuote });

// Wait for the transaction with 3 confirmations
const receiptWithConfirmations = await meeClient.getSupertransactionReceipt({ 
  hash,
  waitForReceipts: true,
  confirmations: 3
});

// Now you can safely consider the transaction finalized
console.log("Transaction finalized with 3 confirmations");
console.log("Explorer links:", receiptWithConfirmations.explorerLinks);

// If receipts were requested, you can check them
if (receiptWithConfirmations.receipts) {
  receiptWithConfirmations.receipts.forEach((chainReceipt, index) => {
    const userOp = receiptWithConfirmations.userOps[index];
    console.log(`Transaction on chain ${userOp.chainId}:`);
    console.log(`  Block number: ${chainReceipt.blockNumber}`);
    console.log(`  Gas used: ${chainReceipt.gasUsed}`);
  });
}
```

## Status Types

The supertransaction and its constituent user operations can have the following statuses:

| Status | Description |
|--------|-------------|
| `MINING` | The transaction is being mined |
| `MINED_SUCCESS` | The transaction has been mined successfully but may not have all confirmations yet |
| `MINED_FAIL` | The transaction was mined but failed during execution |
| `FAILED` | The transaction failed before or during mining |
| `PENDING` | The transaction is pending and has not been mined yet |

## Explorer Links

The receipt includes links to different blockchain explorers:

1. **MEE Scan** - View the entire supertransaction
2. **Chain Explorers** - View individual transactions on each chain's block explorer
3. **JiffyScan** - View user operations on JiffyScan

## Error Handling

The method throws errors in the following cases:

- If the transaction has failed (`FAILED` or `MINED_FAIL` status)
- If the transaction status is unknown
- If there are network connectivity issues when retrieving the receipt

Error handling example:

```typescript
try {
  const receipt = await meeClient.getSupertransactionReceipt({ hash });
  console.log("Transaction status:", receipt.transactionStatus);
} catch (error) {
  console.error("Transaction failed:", error.message);
  // Implement fallback logic or user notification
}
```

## Type Definitions

### GetSupertransactionReceiptParams
```typescript
type GetSupertransactionReceiptParams = {
  hash: Hex
  waitForReceipts?: boolean
  confirmations?: number
  account?: MultichainSmartAccount
}
```

### UserOpStatus
```typescript
type UserOpStatus = {
  executionStatus: "SUCCESS" | "MINING" | "MINED_SUCCESS" | "MINED_FAIL" | "FAILED" | "PENDING"
  executionData: Hex
  executionError: string
}
```

### GetSupertransactionReceiptPayload
```typescript
type GetSupertransactionReceiptPayload = {
  hash: Hex
  node: Address
  commitment: Hex
  paymentInfo: FilledPaymentInfo
  userOps: (MeeFilledUserOpDetails & UserOpStatus)[]
  explorerLinks: Url[]
  transactionStatus: UserOpStatus["executionStatus"]
  receipts: TransactionReceipt[] | null
}
```
