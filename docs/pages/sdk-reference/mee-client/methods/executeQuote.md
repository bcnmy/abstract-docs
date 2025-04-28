# executeQuote

The `executeQuote` method executes a quote by signing it and then executing the signed quote. This is a convenience method that combines `signQuote` and `executeSignedQuote` into a single operation.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `quote` | `GetQuotePayload` | The quote payload to be executed, obtained from `getQuote` |

## Returns

Promise resolving to an `ExecuteSignedQuotePayload` containing:

| Property | Type | Description |
|----------|------|-------------|
| `hash` | `Hex` | The transaction hash of the executed quote |

## Example

Based on the test files, here's a typical usage pattern:

```typescript
// Get a quote for executing all instructions
// This will calculate the total cost in the specified payment token
const quote = await meeClient.getQuote({
  instructions: [
    mcNexus.build({
      type: "default",
      data: {
        calls: [{ to: zeroAddress, value: 0n }],
        chainId: targetChain.id
      }
    })
  ],
  feeToken: {
    address: mcUSDC.addressOn(paymentChain.id),
    chainId: paymentChain.id
  }
});

// Execute the quote and get back a transaction hash
// This sends the transaction to the network
const { hash } = await meeClient.executeQuote({ quote });

// Wait for the transaction receipt
const receipt = await meeClient.waitForSupertransactionReceipt({ hash });

// Check transaction status
if (receipt.transactionStatus === "MINED_SUCCESS") {
  console.log("Transaction successful");
}
```

## Error Handling

Throws an error if:
- The account is not deployed on any required chain
- The quote signing fails
- The quote execution fails

## Type Definitions

### SignQuoteParams
```typescript
type SignQuoteParams = {
  quote: GetQuotePayload
  deadline?: number
  nonce?: number
}
```

### ExecuteSignedQuotePayload
```typescript
type ExecuteSignedQuotePayload = {
  hash: Hex
}
```

## Related Methods

- [`getQuote`](/sdk-reference/mee-client/methods/getQuote) - Get a quote for executing instructions
- [`waitForSupertransactionReceipt`](/sdk-reference/mee-client/methods/waitForSupertransactionReceipt) - Wait for a transaction to complete
