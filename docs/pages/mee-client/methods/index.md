# MeeClient methods

The `MeeClient` is created by extending a base HTTP client with MEE-specific actions. It provides methods for interacting with the MEE (Multichain Execution Environment) service.

## Base Client Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | `Url` | (Optional) URL for the MEE node service. Defaults to "https://mee-node.biconomy.io" |
| `pollingInterval` | `number` | (Optional) Polling interval in milliseconds. Defaults to 1000 |
| `account` | `MultichainSmartAccount` | The multichain smart account to use for transactions |

## Available Actions

The base HTTP client is extended with the following MEE actions:

| Method | Description |
|--------|-------------|
| `getQuote` | Get a quote for executing a set of instructions |
| `signQuote` | Sign a quote for executing instructions |
| `executeSignedQuote` | Execute a previously signed quote |
| `execute` | Convenience method to get quote, sign, and execute in one call |
| `executeQuote` | Alternative method to execute a quote directly |
| `waitForSupertransactionReceipt` | Wait for a supertransaction receipt |
| `signFusionQuote` | Sign a fusion quote with on-chain trigger |
| `executeSignedFusionQuote` | Execute a previously signed fusion quote |

## Example

```typescript
import { createMeeClient } from '@biconomy/abstract'

const meeClient = await createMeeClient({
  account: multiChainAccount,
  url: "https://custom-mee-node.example.com",
  pollingInterval: 2000
});

// Use any of the extended actions
const quote = await meeClient.getQuote({
  instructions: [...],
  feeToken: {
    address: "0x...",
    chainId: 1
  }
});
```

## Type Definitions

### BaseMeeClient
```typescript
type BaseMeeClient = {
  pollingInterval: number
  account: MultichainSmartAccount
} & HttpClient
```

### MeeClient
```typescript
type MeeClient = BaseMeeClient & {
  getQuote: (params: GetQuoteParams) => Promise<GetQuotePayload>
  signQuote: (params: SignQuoteParams) => Promise<SignQuotePayload>
  executeSignedQuote: (params: ExecuteSignedQuoteParams) => Promise<ExecuteSignedQuotePayload>
  execute: (params: GetQuoteParams) => Promise<ExecuteSignedQuotePayload>
  executeQuote: (params: SignQuoteParams) => Promise<ExecuteSignedQuotePayload>
  waitForSupertransactionReceipt: (params: WaitForSupertransactionReceiptParams) => Promise<WaitForSupertransactionReceiptPayload>
  signFusionQuote: (params: SignFusionQuoteParams) => Promise<SignFusionQuotePayload>
  executeSignedFusionQuote: (params: ExecuteSignedFusionQuoteParams) => Promise<ExecuteSignedFusionQuotePayload>
}
```