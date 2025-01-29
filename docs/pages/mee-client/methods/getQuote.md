# getQuote

The `getQuote` method requests a quote from the MEE service for executing a set of instructions. It returns a committed supertransaction quote.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `client` | `BaseMeeClient` | MEE client instance used to make the request |
| `params` | `GetQuoteParams` | Parameters for the quote request |
| `params.instructions` | `Instruction[]` | Array of instructions to be executed |
| `params.feeToken` | `FeeToken` | Information about the token used for fees |
| `params.account` | `MultichainSmartAccount` | (Optional) Smart account to execute the transaction. If not provided, uses the client's default account |

## Returns

Promise resolving to a `GetQuotePayload` containing:

| Property | Type | Description |
|----------|------|-------------|
| `hash` | `Hex` | Transaction hash |
| `node` | `Address` | Address of the MEE node |
| `commitment` | `Hex` | Commitment hash |
| `paymentInfo` | `FilledPaymentInfo` | Complete payment information with token amounts |
| `userOps` | `MeeFilledUserOpDetails[]` | Array of user operations with their details |

## Example

```typescript
const quote = await meeClient.getQuote({
  instructions: [...],
  feeToken: { 
    address: '0x...', 
    chainId: 1 
  }
});
```

## Error Handling

Throws an error if the account is not deployed on any required chain.

## Type Definitions

### GetQuoteParams
```typescript
type Instruction = {
  chainId: number
  calls: {
    to: Address
    value?: bigint
    data?: Hex
    gasLimit?: bigint // This is optional and defaults to 500_000n. Any overspending will be refunded.
  }[]
}

type GetQuoteParams = {
  instructions: Instruction[]
  feeToken: FeeToken
}
```

### GetQuotePayload
```typescript
type GetQuotePayload = {
  hash: Hex
  node: Address
  commitment: Hex
  paymentInfo: FilledPaymentInfo
  userOps: MeeFilledUserOpDetails[]
}
```