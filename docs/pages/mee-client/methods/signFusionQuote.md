# signFusionQuote

The `signFusionQuote` method signs a fusion quote by combining it with an on-chain trigger transaction. This enables fusion execution mode where the MEE transaction is triggered by an on-chain transaction.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `client` | `BaseMeeClient` | MEE client instance used to make the request |
| `params` | `SignFusionQuoteParams` | Parameters for signing the fusion quote |
| `params.quote` | `GetQuotePayload` | The quote to sign |
| `params.account` | `MultichainSmartAccount` | (Optional) Smart account to execute the transaction. If not provided, uses the client's default account |
| `params.executionMode` | `MeeExecutionMode` | (Optional) The execution mode to use. Defaults to "fusion-with-onchain-tx" |
| `params.trigger.call` | `Call` | The on-chain transaction to use as the trigger |
| `params.trigger.chain` | `Chain` | The chain where the trigger transaction will be executed |

## Returns

Promise resolving to a `SignFusionQuotePayload` containing:

| Property | Type | Description |
|----------|------|-------------|
| `signature` | `Hex` | The signature of the fusion quote |
| `receipt` | `TransactionReceipt` | The transaction receipt of the trigger transaction |
| `hash` | `Hex` | The transaction hash |
| `node` | `Address` | The MEE node address |
| `commitment` | `Hex` | The commitment hash |
| `paymentInfo` | `FilledPaymentInfo` | Payment information with token amounts |
| `userOps` | `MeeFilledUserOpDetails[]` | Array of user operations |

## Example

```typescript
const quote = await meeClient.getQuote({
  instructions: [{
    calls: [{ 
      to: "0x...", 
      gasLimit: 50000n,
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
```

## Error Handling

Throws an error if:
- Invalid trigger transaction parameters are provided
- Transaction signing fails
- Trigger transaction fails to be mined

## Type Definitions

### SignFusionQuoteParams
```typescript
type SignFusionQuoteParams = {
  quote: GetQuotePayload
  executionMode?: MeeExecutionMode
  trigger: {
    call: Call
    chain: Chain
  }
}
```

### SignFusionQuotePayload
```typescript
type SignFusionQuotePayload = GetQuotePayload & {
  signature: Hex
  receipt: TransactionReceipt
}
```
