# Bundler Client

The Bundler Client is a key component in the AbstractJS SDK that provides an interface to interact with ERC-4337 bundlers for sending and managing User Operations in account abstraction implementations.

## Overview

A Bundler Client enables smart contract wallets to execute transactions through the ERC-4337 protocol, allowing for features like gasless transactions, batched operations, and custom authorization logic. This client extends the standard bundler functionality with Biconomy-specific enhancements.

## Import

```ts
import { createBicoBundlerClient, http } from '@biconomy/abstractjs'
```

## Usage

Initialize a Bundler Client with your desired Chain and Transport options:

```ts
import { createBicoBundlerClient, http } from '@biconomy/abstractjs'
import { mainnet } from 'viem/chains'

const bundlerClient = createBicoBundlerClient({ 
  chain: mainnet,
  apiKey: 'YOUR_API_KEY_HERE' // Optional
})
```

## Configuration

The `createBicoBundlerClient` function accepts the following parameters:

```ts
type BicoBundlerClientConfig = {
  /**
   * Whether to use the test bundler. Conditionally used by the `getGasFeeValues` decorator.
   */
  mock?: boolean
  
  /**
   * The chain to use for the bundler client
   */
  chain?: Chain
  
  /**
   * Optional paymaster configuration
   */
  paymaster?: BundlerClientConfig["paymaster"]
  
  /**
   * Optional paymaster context
   */
  paymasterContext?: unknown
  
  /**
   * Optional user operation configuration
   */
  userOperation?: BundlerClientConfig["userOperation"]
} & OneOf<
  | { transport: Transport }
  | { bundlerUrl: string }
  | { apiKey?: string }
>
```

You must provide one of the following:
- A custom `transport` instance
- A `bundlerUrl` endpoint 
- An `apiKey` (which will use Biconomy's bundler endpoint)
- A `chain` (which will use Biconomy's default bundler endpoint)

## Key Features

The Bundler Client provides several actions for working with User Operations:

### Standard Bundler Actions

- **estimateUserOperationGas**: Estimates gas costs for a User Operation
- **sendUserOperation**: Sends a User Operation to the bundler
- **getUserOperationReceipt**: Gets the receipt of a User Operation
- **supportedEntryPoints**: Gets the entry points supported by the bundler
- **getUserOperationByHash**: Gets a User Operation by its hash

### Biconomy-Specific Actions

- **getGasFeeValues**: Gets recommended gas fee values (slow, standard, fast)
- **getUserOperationStatus**: Gets the status of a User Operation
- **waitForUserOperationReceipt**: Waits for a User Operation receipt
- **waitForConfirmedUserOperationReceipt**: Waits for a confirmed User Operation receipt

### ERC-7579 Actions

The client also includes ERC-7579 support for modular smart accounts.

### Smart Account Actions

Additional actions for working with smart accounts are available.

## Example

Here's an example of sending a User Operation and waiting for its receipt:

```ts
import { createBicoBundlerClient, http } from '@biconomy/abstractjs'
import { mainnet } from 'viem/chains'
import { toNexusAccount } from '@biconomy/abstractjs'

// Create a Nexus Account
const nexusAccount = await toNexusAccount({
  signer: account, // Your signer account
  chain: mainnet,
  transport: http()
})

// Create a Bundler Client
const bundlerClient = createBicoBundlerClient({
  chain: mainnet,
  account: nexusAccount
})

// Get gas fees
const gasFees = await bundlerClient.getGasFeeValues()

// Send a user operation
const hash = await bundlerClient.sendUserOperation({
  ...gasFees.fast,
  calls: [
    { 
      to: '0xYourAddress', 
      value: 1n 
    }
  ],
  account: nexusAccount
})

// Wait for the receipt
const receipt = await bundlerClient.waitForUserOperationReceipt({ hash })
console.log('Transaction successful:', receipt.success)
```

## Gas Buffer Configuration

You can add a buffer to the gas estimates to ensure your transactions don't fail due to gas estimation inaccuracies:

```ts
const userOperation = await bundlerClient.prepareUserOperation({
  gasBuffer: {
    factor: 1.2, // 20% buffer
    fields: ["preVerificationGas", "verificationGasLimit"]
  },
  calls: [
    {
      to: account.address,
      value: 1n
    }
  ]
})
```

## Aliases

For backward compatibility, the following aliases are provided:

```ts
import { 
  createBicoBundlerClient, 
  createNexusClient, 
  createNexusSessionClient 
} from '@biconomy/abstractjs'

// All of these are equivalent to createBicoBundlerClient
```

