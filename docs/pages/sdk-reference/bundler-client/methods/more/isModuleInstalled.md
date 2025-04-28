# isModuleInstalled

The `isModuleInstalled` function checks whether a specific module is installed on an ERC-7579 compliant smart account. This can be used to verify that a validator, executor, or hook is available before attempting to use it.

## Usage

```typescript
import { createBicoBundlerClient } from "@biconomy/abstractjs";
import { http } from "viem";

const nexusClient = createBicoBundlerClient({
  account: nexusAccount,
  transport: http(bundlerUrl)
});

const isInstalled = await nexusClient.isModuleInstalled({
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
type IsModuleInstalledParameters<TSmartAccount extends SmartAccount | undefined> = { 
  account?: TSmartAccount 
} & {
  module: ModuleMeta
}
```

| Parameter | Type | Description |
| --- | --- | --- |
| account | `SmartAccount` | Optional. The smart account instance to use. If not provided, the client's account will be used. |
| module | `ModuleMeta` | The module to check, containing type, address, and initialization data. |

The `ModuleMeta` type includes:

```typescript
type ModuleMeta = {
  type: 'validator' | 'executor' | 'hook' | 'fallback'
  address: Address
  initData?: Hex
}
```

## Return Value

The function returns a promise that resolves to a boolean indicating whether the module is installed.

```typescript
Promise<boolean>
```

## Example

```typescript
import { http } from "viem";
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
  validatorAddress: "0x1234567890123456789012345678901234567890"
});

// Create client
const nexusClient = createBicoBundlerClient({
  account: nexusAccount,
  transport: http(bundlerUrl)
});

// Check if a specific validator is installed
const isK1ValidatorInstalled = await nexusClient.isModuleInstalled({
  module: {
    type: "validator",
    address: nexusAccount.validatorAddress,
    initData: "0x"
  }
});

console.log("Is K1 validator installed:", isK1ValidatorInstalled);
```

## Implementation Details

The function makes a view call to the smart account contract to check if the module with the given type and address is installed. It checks the appropriate registry based on the module type:

- For validators, it looks in the validator registry
- For executors, it looks in the executor registry 
- For hooks, it looks in the hooks registry
- For fallbacks, it checks the fallback handlers

This function is part of the ERC-7579 standard for smart accounts, which provides a standardized way to interact with modular smart accounts. 