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
| `executeQuote` | Alternative method to execute a quote directly |
| `getFusionQuote` | Get a fusion quote with on-chain trigger |
| `executeFusionQuote` | Execute a previously signed fusion quote |
| `waitForSupertransactionReceipt` | Wait for a supertransaction receipt |

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
  instructions: [
    mcNexus.build({ ... }),
  ],
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
  executeQuote: (params: SignQuoteParams) => Promise<ExecuteSignedQuotePayload>
  getFusionQuote: (params: GetFusionQuoteParams) => Promise<GetFusionQuotePayload>
  executeFusionQuote: (params: ExecuteFusionQuoteParams) => Promise<ExecuteFusionQuotePayload
  waitForSupertransactionReceipt: (params: WaitForSupertransactionReceiptParams) => Promise<WaitForSupertransactionReceiptPayload>
}
```