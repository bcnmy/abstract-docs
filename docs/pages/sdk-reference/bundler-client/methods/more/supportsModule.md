# supportsModule

The `supportsModule` function checks whether an ERC-7579 compliant smart account supports a specific type of module (validator, executor, hook, or fallback). This allows you to verify that the account can work with a certain type of module before attempting to install one.

## Usage

```typescript
import { createBicoBundlerClient } from "@biconomy/abstractjs";
import { http } from "viem";

const nexusClient = createBicoBundlerClient({
  account: nexusAccount,
  transport: http(bundlerUrl)
});

const supportsValidators = await nexusClient.supportsModule({
  type: 'validator'
});
```

## Parameters

The function accepts an object with the following properties:

```typescript
type SupportsModuleParameters<TSmartAccount extends SmartAccount | undefined> = { 
  account?: TSmartAccount 
} & {
  type: 'validator' | 'executor' | 'hook' | 'fallback'
}
```

| Parameter | Type | Description |
| --- | --- | --- |
| account | `SmartAccount` | Optional. The smart account instance to use. If not provided, the client's account will be used. |
| type | `string` | The type of module to check support for. Valid values are 'validator', 'executor', 'hook', or 'fallback'. |

## Return Value

The function returns a promise that resolves to a boolean indicating whether the specified module type is supported.

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
});

// Create client
const nexusClient = createBicoBundlerClient({
  account: nexusAccount,
  transport: http(bundlerUrl)
});

// Check support for different module types
const supportsValidator = await nexusClient.supportsModule({ type: "validator" });
const supportsExecutor = await nexusClient.supportsModule({ type: "executor" });
const supportsHook = await nexusClient.supportsModule({ type: "hook" });
const supportsFallback = await nexusClient.supportsModule({ type: "fallback" });

console.log("Supports validators:", supportsValidator);
console.log("Supports executors:", supportsExecutor);
console.log("Supports hooks:", supportsHook);
console.log("Supports fallbacks:", supportsFallback);
```

## Implementation Details

The function makes a view call to the `supportsModule` method on the smart account contract, passing the appropriate module type ID as an argument. The module type ID is determined using the following mapping:

- 'validator' → 1
- 'executor' → 2
- 'hook' → 3
- 'fallback' → 4

The returned boolean indicates whether the smart account implementation supports the specified module type. This check is important because different smart account implementations might support different sets of module types.

This function is part of the ERC-7579 standard for smart accounts, which provides a standardized way to interact with modular smart accounts. 