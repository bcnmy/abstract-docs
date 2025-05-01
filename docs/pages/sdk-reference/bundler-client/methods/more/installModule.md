# installModule

The `installModule` function installs a module on an ERC-7579 compliant smart account. Modules can be validators, executors, or hooks that extend the functionality of the smart account.

## Usage

```typescript
import { createBicoBundlerClient } from "@biconomy/abstractjs";
import { http, encodePacked } from "viem";

const nexusClient = createBicoBundlerClient({
  account: nexusAccount,
  transport: http(bundlerUrl)
});

const hash = await nexusClient.installModule({
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
type InstallModuleParameters<TSmartAccount extends SmartAccount | undefined> = { 
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
| module | `ModuleMeta` | The module to install, containing type, address, and initialization data. |
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

// Install a custom validator module
const validatorAddress = "0x1234567890123456789012345678901234567890";
const hash = await nexusClient.installModule({
  module: {
    type: 'validator',
    address: validatorAddress,
    initData: encodePacked(["address"], [account.address])
  }
});

// Wait for the transaction to be confirmed
const receipt = await nexusClient.waitForUserOperationReceipt({ hash });
console.log("Module installation success:", receipt.success);
```

## Implementation Details

The function creates a transaction that calls the `installModule` method on the smart account contract with the module type, address, and initialization data as parameters.

If the module being installed is the smart sessions module, additional setup may be performed:
- Adds the module address as a safe sender to the validator if a validator address is available.
- Checks for and potentially sets up trusted attesters if they haven't been configured yet.

The function then sends the transaction as a user operation through the bundler network.

This function is part of the ERC-7579 standard for smart accounts, which provides a standardized way to interact with modular smart accounts. 