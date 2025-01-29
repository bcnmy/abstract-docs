# executeSignedFusionQuote

The `executeSignedFusionQuote` method executes a previously signed fusion quote. This method is used after obtaining and signing a fusion quote to execute the transaction with the on-chain trigger.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `client` | `BaseMeeClient` | MEE client instance used to make the request |
| `params` | `ExecuteSignedFusionQuoteParams` | Parameters for executing the signed fusion quote |
| `params.signedFusionQuote` | `SignFusionQuotePayload` | The signed fusion quote to execute |

## Returns

Promise resolving to an `ExecuteSignedFusionQuotePayload` containing:

| Property | Type | Description |
|----------|------|-------------|
| `hash` | `Hex` | The transaction hash of the executed quote |
| `receipt` | `TransactionReceipt` | The transaction receipt from the trigger transaction |

## Example

```typescript
const quote = await meeClient.getQuote({
  instructions: [{
    calls: [{ 
      to: "0x...", 
      value: 0n 
    }],
    chainId: targetChain.id
  }],
  feeToken: { 
    address: "0x...",
    chainId: 1
  }
});

const signedFusionQuote = await meeClient.signFusionQuote({
  quote,
  trigger: {
    call: {
      to: "0x...",
      value: 0n,
      data: "0x..."
    },
    chain: mainnet
  }
});

const { hash, receipt } = await meeClient.executeSignedFusionQuote({
  signedFusionQuote
});

// Wait for the supertransaction to complete
const sTxReceipt = await meeClient.waitForSupertransactionReceipt({ hash });
```

## Error Handling

Throws an error if:
- The signed fusion quote is invalid
- The execution fails
- The trigger transaction fails

## Type Definitions

### ExecuteSignedFusionQuoteParams
```typescript
type ExecuteSignedFusionQuoteParams = {
  signedFusionQuote: SignFusionQuotePayload
}
```

### ExecuteSignedFusionQuotePayload
```typescript
type ExecuteSignedFusionQuotePayload = {
  hash: Hex
  receipt: TransactionReceipt
}
```
