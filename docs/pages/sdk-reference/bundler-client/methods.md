# Nexus client methods

## sendTransaction

This method is used to submit a User Operation object to the User Operation pool of the client. It signs the UserOperation using smart account owner and submits it to the bundler for on-chain processing.

### Usage

:::code-group

```typescript  [example.ts]
import { bicoBundlerClient } from "./bicoBundlerClient"
import { contractABI } from "./abi"
import { parseEther } from "viem"; 

const hash = await bicoBundlerClient.sendUserOperation({ // [!code focus:13]
  calls: [ 
    { 
      to: '0xf5715961C550FC497832063a98eA34673ad7C816', 
      value: parseEther('0.0001'), 
    }, 
    { 
      abi: contractABI, 
      functionName: 'mint', 
      to: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',   
    }
  ], 
}); 
```

```typescript  [bicoBundlerClient.ts] filename="bicoBundlerClient.ts"
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
})

```

```typescript  [abi.ts] filename="abi.ts"

export const contractABI = [
  //...
  {
    inputs: [],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  }
];
```

:::

### Parameters
- calls `{ data: Hex, to: Address, value: bigint }[]` : The calls to execute in the User Operation.
- paymaster  `Address | true | PaymasterClient | PaymasterAction` (optional)

### Response
- `Promise<Hash>` The transaction hash.
 

## waitForUserOperationReceipt

Waits for the User Operation to be included on a Block (one confirmation), and then returns the User Operation receipt.

### Usage
:::code-group

```typescript  [example.ts]
import { bicoBundlerClient } from "./bicoBundlerClient"

const receipt = await bicoBundlerClient.waitForUserOperationReceipt({  // [!code focus:3]
  hash: '0x315a882b82eb33250b919da6ebb2dd890df39ca0840e4026cbbad595b9a07e86'
})
```

```typescript  [bicoBundlerClient.ts] filename="bicoBundlerClient.ts"
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
})
```

:::

### Parameters
- hash `'0x${string}'`: A Transaction hash.
- pollingInterval (optional) `number`: Polling frequency (in ms) 
- retryCount (optional) `number`: The number of times to retry. Default value is 6.
- timeout (optional) `number`: Optional timeout (in ms) to wait before stopping polling. Default value is 5000.

### Response
- receipt `Promise<UserOperationReceipt>`: The User Operation receipt.


## estimateUserOperationGas

Estimates the gas values for a User Operation to be executed successfully.

### Usage

:::code-group

```typescript  [example.ts]
import { bicoBundlerClient } from "./bicoBundlerClient"

const gas = await bicoBundlerClient.estimateUserOperationGas({ // [!code focus:12]
  calls: [ 
    { 
      to: '0xf5715961C550FC497832063a98eA34673ad7C816', 
      value: parseEther('0.0001'), 
    }, 
    { 
      abi: contractABI, 
      functionName: 'contractFunction', 
      to: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',   
    }
  ], 
}); 
```

```typescript  [bicoBundlerClient.ts] filename="bicoBundlerClient.ts"
import { privateKeyToAccount } from "viem/accounts";
import { createBicoBundlerClient } from "@biconomy/abstractjs";
import { baseSepolia } from "viem/chains"; 
import { http } from "viem"; 

const privateKey = "PRIVATE_KEY";
const account = privateKeyToAccount(`0x${privateKey}`)
const bundlerUrl = "https://bundler.biconomy.io/api/v3/84532/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44"; 

export const bicoBundlerClient = createBicoBundlerClient({ 
    signer: account, 
    chain: baseSepolia,
    transport: http(), 
    bundlerTransport: http(bundlerUrl), 
});
```

:::

### Parameters
- calls `{ data: Hex, to: Address, value: bigint }[]` : The calls to execute in the User Operation.
- paymaster  `Address | true | PaymasterClient | PaymasterAction` (optional)

### Response
- `Promise<EstimateUserOperationGasReturnType>` The estimated gas values.

```typescript
{
  callGasLimit: bigint;
  preVerificationGas: bigint;
  verificationGasLimit: bigint;
  paymasterVerificationGasLimit: bigint | undefined;
  paymasterPostOpGasLimit: bigint | undefined;
}
```
 




## getUserOperation

Retrieves information about a User Operation given a hash.

### Usage

:::code-group

```typescript  [example.ts]
import { bicoBundlerClient } from "./bicoBundlerClient"

const receipt = await bicoBundlerClient.getUserOperation({ // [!code focus:3]
  hash: '0x315a882b82eb33250b919da6ebb2dd890df39ca0840e4026cbbad595b9a07e86'
})
```

```typescript  [bicoBundlerClient.ts] filename="bicoBundlerClient.ts"
import { privateKeyToAccount } from "viem/accounts";
import { createBicoBundlerClient } from "@biconomy/abstractjs";
import { baseSepolia } from "viem/chains"; 
import { http } from "viem"; 

const privateKey = "PRIVATE_KEY";
const account = privateKeyToAccount(`0x${privateKey}`)
const bundlerUrl = "https://bundler.biconomy.io/api/v3/84532/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44"; 

export const bicoBundlerClient = createBicoBundlerClient({ 
    signer: account, 
    chain: baseSepolia,
    transport: http(), 
    bundlerTransport: http(bundlerUrl), 
});
```

:::

### Parameters
- hash `'0x${string}'`: A User Operation hash.

### Response
- userOperation `Promise<GetUserOperationReturnType>`: User Operation information.

```typescript

type GetUserOperationReturnType = {
  /** The block hash the User Operation was included on. */
  blockHash: Hash
  /** The block number the User Operation was included on. */
  blockNumber: bigint
  /** The EntryPoint which handled the User Operation. */
  entryPoint: Address
  /** The hash of the transaction which included the User Operation. */
  transactionHash: Hash
  /** The User Operation. */
  userOperation: UserOperation
}

```

## getUserOperationReceipt

Returns the User Operation Receipt given a User Operation hash.

### Usage

:::code-group

```typescript  [example.ts]
import { bicoBundlerClient } from "./bicoBundlerClient"

const receipt = await bicoBundlerClient.getUserOperationReceipt({  // [!code focus:3]
  hash: '0x315a882b82eb33250b919da6ebb2dd890df39ca0840e4026cbbad595b9a07e86'
})
```

```typescript  [bicoBundlerClient.ts] filename="bicoBundlerClient.ts"
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
### Parameters
- hash `'0x${string}'`: A User Operation hash.

### Response
- receipt `Promise<UserOperationReceipt>`: User Operation receipt.


## getSupportedEntryPoints

Returns the EntryPoints that the nexus client supports.

### Usage

:::code-group

```typescript  [example.ts]
import { bicoBundlerClient } from "./bicoBundlerClient"

const entrypointAddresses = await bicoBundlerClient.getSupportedEntryPoints() // [!code focus:1]
```

```typescript  [bicoBundlerClient.ts] filename="bicoBundlerClient.ts"
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
})```

:::

### Response
- addresses `Promise<Address[]>`: The EntryPoints that the nexus client supports.



## getChainId

Returns the chain ID associated with the nexus client


### Usage

:::code-group

```typescript  [example.ts]
import { bicoBundlerClient } from "./bicoBundlerClient"

const chainId = await bicoBundlerClient.getChainId() // [!code focus:1]
```

```typescript  [bicoBundlerClient.ts] filename="bicoBundlerClient.ts"
import { privateKeyToAccount } from "viem/accounts";
import { createBicoBundlerClient } from "@biconomy/abstractjs";
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
})
```

:::

### Response
- chain Id `Promise<number>`: The current chain ID.















