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
| `params.delegate` | `boolean` | (Optional) When set to `true`, the MEE node will execute the transaction on behalf of your account. This allows you to submit transactions without needing to sign them yourself. Default is `false`. |

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
// Basic quote request
const quote = await meeClient.getQuote({
  instructions: [
    mcNexus.build({ ... }),
  ],
  feeToken: { 
    address: '0x...', 
    chainId: 1 
  }
});

// Using delegation (MEE node executes on your behalf)
const delegatedQuote = await meeClient.getQuote({
  instructions: [
    mcNexus.build({ ... }),
  ],
  feeToken: { 
    address: '0x...', 
    chainId: 1 
  },
  delegate: true // Enable transaction delegation
});
```

## Delegation

The `delegate` feature will leverage EIP-7702 to deploy companion accounts more efficiently than traditional CREATE2 deployments. This provides significant benefits:

1. **Gas efficiency**: Companion accounts deployed via EIP-7702 are substantially cheaper than standard deployments
2. **Future compatibility**: The implementation anticipates the EIP-7702 protocol enhancement
3. **Enhanced capabilities**: Works with both existing smart accounts and EOAs

Key use cases include:
- Automated/recurring transactions
- Gasless experiences
- Simplified cross-chain operations
- Funds are returned to the eoa instead of nexus account

Your account must support delegation through its validation logic. The Biconomy MultichainNexusAccount includes built-in delegation support.

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

type GetQuoteParams = SupertransactionLike & {
  account?: MultichainSmartAccount;
  delegate?: boolean;
  eoa?: Address;
  lowerBoundTimestamp?: number;
  path?: string;
  upperBoundTimestamp?: number;
}

type SupertransactionLike = {
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