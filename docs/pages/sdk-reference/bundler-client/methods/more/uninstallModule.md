# uninstallModule

The `uninstallModule` function removes a module from an ERC-7579 compliant smart account. This can be used to remove validators, executors, or hooks that are no longer needed.

## Usage

```typescript
import { createBicoBundlerClient } from "@biconomy/abstractjs";
import { http } from "viem";

const nexusClient = createBicoBundlerClient({
  account: nexusAccount,
  transport: http(bundlerUrl)
});

const hash = await nexusClient.uninstallModule({
  module: {
    type: 'validator',
    address: validatorAddress,
    initData: '0x'
  }
});
```

## Parameters

The function accepts an object with the following properties:

```typescript
type UninstallModuleParameters<TSmartAccount extends SmartAccount | undefined> = { 
  account?: TSmartAccount 
} & {
  module: ModuleMeta
  maxFeePerGas?: bigint
  maxPriorityFeePerGas?: bigint
  nonce?: bigint
} & Partial<Omit<UserOperation<"0.7", bigint>, "callData">>
```

| Parameter | Type | Description |
| --- | --- | --- |
| account | `SmartAccount` | Optional. The smart account instance to use. If not provided, the client's account will be used. |
| module | `ModuleMeta` | The module to uninstall, containing type, address, and initialization data. |
| maxFeePerGas | `bigint` | Optional. The maximum fee per gas to pay for the transaction. |
| maxPriorityFeePerGas | `bigint` | Optional. The maximum priority fee per gas to pay for the transaction. |
| nonce | `bigint` | Optional. The nonce to use for the transaction. |

The `ModuleMeta` type includes:

```typescript
type ModuleMeta = {
  type: 'validator' | 'executor' | 'hook' | 'fallback'
  address: Address
  initData?: Hex
}
```

## Return Value

The function returns a promise that resolves to the hash of the user operation as a hexadecimal string.

```typescript
Promise<Hex>
```

## Example

```typescript
import { http, encodePacked } from "viem";
import { createBicoBundlerClient, toNexusAccount } from "@biconomy/abstractjs";
import { baseSepolia } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";

// Set up your account
const privateKey = "YOUR_PRIVATE_KEY";
const account = privateKeyToAccount(`0x${privateKey}`);
const bundlerUrl = "https://bundler.biconomy.io/api/v3/84532/your-api-key";

// Create Nexus account
const nexusAccount = await toNexusAccount({
  signer: account,
  chain: baseSepolia,
  transport: http(),
});

// Create client
const nexusClient = createBicoBundlerClient({
  account: nexusAccount,
  transport: http(bundlerUrl)
});

// Uninstall a validator module
const validatorAddress = "0x1234567890123456789012345678901234567890";
const hash = await nexusClient.uninstallModule({
  module: {
    type: 'validator',
    address: validatorAddress,
    initData: encodePacked(["address"], [account.address])
  }
});

// Wait for the transaction to be confirmed
const receipt = await nexusClient.waitForUserOperationReceipt({ hash });
console.log("Module uninstallation success:", receipt.success);
```

## Implementation Details

The function creates a transaction that calls the `uninstallModule` method on the smart account contract with the module type and address as parameters.

The function determines the appropriate method to call based on the module type:
- For validators, it calls `uninstallValidator`
- For executors, it calls `uninstallExecutor`
- For hooks, it calls `uninstallHook`
- For fallbacks, it calls `uninstallFallback`

The function then sends the transaction as a user operation through the bundler network.

This function is part of the ERC-7579 standard for smart accounts, which provides a standardized way to interact with modular smart accounts. 