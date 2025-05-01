# getQuote

The `getQuote` method requests a quote from the MEE service for executing a set of instructions. It returns a committed supertransaction quote that can span multiple chains.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `instructions` | `InstructionLike[]` | Array of instructions to be executed. Can be Instruction objects or promises that resolve to Instruction objects |
| `feeToken` | `FeeTokenInfo` | Information about the token used for paying transaction fees |
| `account` | `MultichainSmartAccount` | (Optional) Smart account to execute the transaction. If not provided, uses the client's default account |
| `delegate` | `boolean` | (Optional) When set to `true`, the MEE node will execute the transaction on behalf of your account. This allows you to submit transactions without needing to sign them yourself. Default is `false` |
| `eoa` | `Address` | (Optional) EOA address to be used for the transaction. Only required when using permit-enabled tokens |
| `lowerBoundTimestamp` | `number` | (Optional) Lower bound execution timestamp for all user operations. Defaults to current time |
| `upperBoundTimestamp` | `number` | (Optional) Upper bound execution timestamp for all user operations. Defaults to current time + 180 seconds |

## Returns

Promise resolving to a `GetQuotePayload` containing:

| Property | Type | Description |
|----------|------|-------------|
| `hash` | `Hex` | Supertransaction hash for reference |
| `node` | `Address` | Address of the MEE node that will process the transaction |
| `commitment` | `Hex` | Cryptographic commitment hash |
| `paymentInfo` | `FilledPaymentInfo` | Complete payment information including token amounts, sender address, and chain details |
| `userOps` | `MeeFilledUserOpDetails[]` | Array of user operations with their details including gas parameters and execution windows |

## Basic Example

```typescript
// Get a quote for executing a simple instruction
const quote = await meeClient.getQuote({
  instructions: [
    {
      calls: [
        {
          to: "0x0000000000000000000000000000000000000000",
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

// Sign the quote
const signedQuote = await meeClient.signQuote({ quote });

// Execute the quote
const { hash } = await meeClient.executeQuote({ quote });

// Wait for transaction receipt
const receipt = await meeClient.waitForSupertransactionReceipt({ hash });
console.log("Transaction status:", receipt.transactionStatus);
console.log("Explorer links:", receipt.explorerLinks);
```

## Using with Account Builder

You can use the `build` method of your MultichainSmartAccount to create instructions:

```typescript
// These can be any 'Instruction', or any helper method that resolves to an 'Instruction'
const transferInstruction = await mcNexus.build({
  type: "transfer",
  data: {
    chainId: targetChain.id,
    tokenAddress: mcUSDC.addressOn(targetChain.id),
    amount: parseUnits("0.1", 6),
    recipient: recipientAddress
  }
});

const quote = await meeClient.getQuote({
  instructions: [transferInstruction],
  feeToken: {
    address: mcUSDC.addressOn(paymentChain.id),
    chainId: paymentChain.id
  }
});

console.log("Quote received with payment amount:", quote.paymentInfo.tokenAmount);
```

## Delegated Transaction Example

```typescript
// Get a quote for executing a transaction using delegation
const quote = await meeClient.getQuote({
  delegate: true,
  instructions: [
    {
      calls: [
        {
          to: recipientAddress,
          value: 1n
        }
      ],
      chainId: sepolia.id
    }
  ],
  feeToken: {
    address: "0x0000000000000000000000000000000000000000", // Native token
    chainId: sepolia.id
  }
});

// Sign and execute the quote
const signedQuote = await meeClient.signQuote({ quote });
const { hash } = await meeClient.executeQuote({ quote });

// Wait for transaction receipt
const receipt = await meeClient.waitForSupertransactionReceipt({ hash });
console.log("Transaction status:", receipt.transactionStatus);
```

## Delegation

The `delegate` feature leverages EIP-7702 to deploy companion accounts more efficiently than traditional CREATE2 deployments. This provides significant benefits:

1. **Gas efficiency**: Companion accounts deployed via EIP-7702 are substantially cheaper than standard deployments
2. **Future compatibility**: The implementation anticipates the EIP-7702 protocol enhancement
3. **Enhanced capabilities**: Works with both existing smart accounts and EOAs

Key use cases include:
- Automated/recurring transactions
- Gasless experiences
- Simplified cross-chain operations
- Funds are returned to the EOA instead of nexus account

Your account must support delegation through its validation logic. The Biconomy MultichainNexusAccount includes built-in delegation support.

## Error Handling

The method throws an error if:
- The account is not deployed on required chains
- The fee token is not supported on the specified chain
- The chain(s) specified in the instructions are not supported by the MEE node

## Type Definitions

### Instruction
```typescript
type AbstractCall = {
  to: Address
  gasLimit?: bigint // Defaults to 500_000n. Overestimated gas will be refunded.
} & OneOf<
  | { value: bigint; data?: Hex }
  | { value?: bigint; data: Hex }
  | { value: bigint; data: Hex }
>

type Instruction = {
  calls: AbstractCall[] | ComposableCall[]
  chainId: number
  isComposable?: boolean
}
```

### FeeTokenInfo
```typescript
type FeeTokenInfo = {
  address: Address  // Address of the fee token
  chainId: number   // Chain ID where the fee token is deployed
}
```

### GetQuoteParams
```typescript
type GetQuoteParams = {
  instructions: InstructionLike[]
  feeToken: FeeTokenInfo
  account?: MultichainSmartAccount
  delegate?: boolean
  eoa?: Address
  lowerBoundTimestamp?: number
  upperBoundTimestamp?: number
  path?: string
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