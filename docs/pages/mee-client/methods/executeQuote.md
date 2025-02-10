# executeQuote

The `executeQuote` method executes a quote by signing it and then executing the signed quote. This is a convenience method that combines `signQuote` and `executeSignedQuote` into a single operation.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `client` | `BaseMeeClient` | MEE client instance used to make the request |
| `params` | `SignQuoteParams` | Parameters for signing the quote |
| `params.quote` | `GetQuotePayload` | The quote payload to be executed |

## Returns

Promise resolving to an `ExecuteSignedQuotePayload` containing:

| Property | Type | Description |
|----------|------|-------------|
| `hash` | `Hex` | The transaction hash of the executed quote |

## Example

```typescript
const quote = await meeClient.getQuote({
  instructions: [
    mcNexus.build({ type: "default", data: { chainId: targetChain.id, calls: [{ to: "0x...", value: 0n }] } }),
  ],
  feeToken: {
    address: mcUSDC.addressOn(optimism.id),
    chainId: optimism.id
  }
});

const { hash } = await meeClient.executeQuote({ quote });

const receipt = await meeClient.waitForSupertransactionReceipt({ hash });
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
