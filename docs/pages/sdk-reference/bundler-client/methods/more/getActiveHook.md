# getActiveHook

The `getActiveHook` function retrieves the address of the active hook module on an ERC-7579 compliant smart account. Hook modules can intercept and modify transactions before they are executed.

## Usage

```typescript
import { createBicoBundlerClient } from "@biconomy/abstractjs";
import { http } from "viem";

const nexusClient = createBicoBundlerClient({
  account: nexusAccount,
  transport: http(bundlerUrl)
});

const activeHook = await nexusClient.getActiveHook();
```

## Parameters

The function accepts an optional object with the following properties:

```typescript
type GetActiveHookParameters<TSmartAccount extends SmartAccount | undefined> = { 
  account?: TSmartAccount 
}
```

| Parameter | Type | Description |
| --- | --- | --- |
| account | `SmartAccount` | Optional. The smart account instance to use. If not provided, the client's account will be used. |

## Return Value

The function returns a promise that resolves to the address of the active hook as a hexadecimal string. If no hook is active, it returns the zero address (`0x0000000000000000000000000000000000000000`).

```typescript
Promise<Hex>
```

## Example

```typescript
import { http, isHex } from "viem";
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

// Get the active hook
const activeHook = await nexusClient.getActiveHook();
console.log("Active hook address:", activeHook);

// Check if a hook is set
if (isHex(activeHook) && activeHook !== '0x0000000000000000000000000000000000000000') {
  console.log("The account has an active hook module");
} else {
  console.log("No hook module is currently active");
}
```

## Implementation Details

The function makes a view call to the `getActiveHook` method on the smart account contract, which returns the address of the currently active hook module.

The hook module (if any) will be executed before any transaction executed by the account, allowing for pre-execution checks, modifications, or rejections of transactions.

This function is part of the ERC-7579 standard for smart accounts, which provides a standardized way to interact with modular smart accounts. 