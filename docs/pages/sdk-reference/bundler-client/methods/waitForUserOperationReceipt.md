# waitForUserOperationReceipt

Waits for the User Operation to be included on a Block (one confirmation), and then returns the User Operation receipt.

## Usage

:::code-group

```typescript [example.ts]
import { bicoBundlerClient } from "./bicoBundlerClient"

const receipt = await bicoBundlerClient.waitForUserOperationReceipt({
  hash: '0x315a882b82eb33250b919da6ebb2dd890df39ca0840e4026cbbad595b9a07e86'
})
```
```typescript [bicoBundlerClient.ts] filename="bicoBundlerClient.ts"
import { privateKeyToAccount } from "viem/accounts";
import { createBicoBundlerClient, toNexusAccount } from "@biconomy/abstractjs";
import { baseSepolia } from "viem/chains"; 
import { http } from "viem"; 

const privateKey = "PRIVATE_KEY";
const account = privateKeyToAccount(`0x${privateKey}`)
const bundlerUrl = "https://bundler.biconomy.io/api/v3/84532/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44"; 

export const bicoBundlerClient = createBicoBundlerClient({ 
  account: await toNexusAccount({ 
    signer: account, 
    chain: baseSepolia,
    transport: http(),
  }),
  transport: http(bundlerUrl),
});
```

:::

## Parameters
- hash `'0x${string}'`: A Transaction hash.
- pollingInterval (optional) `number`: Polling frequency (in ms) 
- retryCount (optional) `number`: The number of times to retry. Default value is 6.
- timeout (optional) `number`: Optional timeout (in ms) to wait before stopping polling. Default value is 5000.

## Response
- receipt `Promise<UserOperationReceipt>`: The User Operation receipt. 