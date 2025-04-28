# getInstalledModules

The `getInstalledModules` method retrieves a list of all modules that are currently installed on the smart account. These modules extend the functionality of the smart account and provide additional features.

## Usage

```ts
const modules = await nexusClient.getInstalledModules();
```

## Parameters

The `getInstalledModules` method does not accept any parameters.

## Returns

The `getInstalledModules` method returns an array of `Module` objects, each containing:

| Property | Type | Description |
| --- | --- | --- |
| `module` | `Address` | The address of the module |
| `moduleType` | `number` | The type of the module (0 = Validator, 1 = Executor, 2 = Hook, 3 = Fallback) |
| `data` | `Hex` | Additional data associated with the module |

## Example

```ts
import { createBicoBundlerClient, toNexusAccount } from "@biconomy/abstractjs";
import { baseSepolia } from "viem/chains";
import { http } from "viem";
import { privateKeyToAccount } from "viem/accounts";

// Setup account and client
const account = privateKeyToAccount("0xYourPrivateKey");
const bundlerUrl = "https://bundler.biconomy.io/api/v3/84532/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f14";

const nexusClient = createBicoBundlerClient({
  account: await toNexusAccount({
    signer: account,
    chain: baseSepolia,
    transport: http(),
  }),
  transport: http(bundlerUrl),
});

// Get all installed modules
const modules = await nexusClient.getInstalledModules();

// Display information about each module
modules.forEach((module, index) => {
  console.log(`Module ${index + 1}:`);
  console.log(`  Address: ${module.module}`);
  console.log(`  Type: ${module.moduleType}`);
  console.log(`  Data: ${module.data}`);
});
```

## Notes

- This method is specifically for ERC-7579 compatible smart accounts that support modular architecture.
- The module types correspond to the ERC-7579 specification: 0 = Validator, 1 = Executor, 2 = Hook, 3 = Fallback.
- Validators are modules that check if a user operation is valid.
- Executors are modules that execute operations on behalf of the smart account.
- Hooks are modules that are called before or after specific operations.
- Fallbacks are modules that handle function calls that do not match any other function signature. 