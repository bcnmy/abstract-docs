# getChainId

Returns the chain ID associated with the bundler.

## Usage

:::code-group

```typescript [example.ts]
import { bicoBundlerClient } from "./bicoBundlerClient"

// Get chain ID
const chainId = await bicoBundlerClient.getChainId()
// Returns: 84532 (for Base Sepolia)
```

```typescript [bicoBundlerClient.ts]
import { privateKeyToAccount } from "viem/accounts";
import { createBicoBundlerClient, toNexusAccount } from "@biconomy/abstractjs";
import { baseSepolia } from "viem/chains"; 
import { http } from "viem"; 

const privateKey = "PRIVATE_KEY";
const account = privateKeyToAccount(`0x${privateKey}`)
const bundlerUrl = "https://bundler.biconomy.io/api/v3/84532/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44"; 


const bicoBundlerClient = createBicoBundlerClient({
  account: await toNexusAccount({ 
    signer: account, 
    chain: baseSepolia,
    transport: http(),
  }),
  transport: http(bundlerUrl),
})
```

:::

## Returns

```typescript
number
```

Returns the current chain ID that the bundler is operating on.

## Related Methods

- [getSupportedEntryPoints](/sdk-reference/bundler-client/methods/more/getSupportedEntryPoints)
- [sendUserOperation](/sdk-reference/bundler-client/methods/sendUserOperation) 