# supportsExecutionMode

The `supportsExecutionMode` function checks whether an ERC-7579 compliant smart account supports a specific execution mode such as `call` or `delegatecall`. This allows you to verify that the account can execute transactions in a certain way before attempting to do so.

## Usage

```typescript
import { createBicoBundlerClient } from "@biconomy/abstractjs";
import { http } from "viem";

const nexusClient = createBicoBundlerClient({
  account: nexusAccount,
  transport: http(bundlerUrl)
});

const supportsDelegateCall = await nexusClient.supportsExecutionMode({
  type: 'delegatecall'
});
```

## Parameters

The function accepts an object with the following properties:

```typescript
type SupportsExecutionModeParameters<
  TSmartAccount extends SmartAccount | undefined,
  callType extends CallType = CallType
> = { 
  account?: TSmartAccount 
} & ExecutionMode<callType>

type ExecutionMode<callType extends CallType = CallType> = {
  type: callType
  revertOnError?: boolean
  selector?: Hex
  data?: Hex
}
```

| Parameter | Type | Description |
| --- | --- | --- |
| account | `SmartAccount` | Optional. The smart account instance to use. If not provided, the client's account will be used. |
| type | `CallType` | The type of execution to check support for. Valid values are 'call', 'delegatecall', 'staticcall', or 'create'. |
| revertOnError | `boolean` | Optional. Whether the execution should revert on error. Default is false. |
| selector | `Hex` | Optional. The function selector to check support for. |
| data | `Hex` | Optional. Additional data for the check. |

## Return Value

The function returns a promise that resolves to a boolean indicating whether the specified execution mode is supported.

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

// Check support for different execution modes
const supportsCall = await nexusClient.supportsExecutionMode({ type: "call" });
const supportsDelegateCall = await nexusClient.supportsExecutionMode({ type: "delegatecall" });
const supportsStaticCall = await nexusClient.supportsExecutionMode({ type: "staticcall" });
const supportsCreate = await nexusClient.supportsExecutionMode({ type: "create" });

console.log("Supports call:", supportsCall);
console.log("Supports delegatecall:", supportsDelegateCall);
console.log("Supports staticcall:", supportsStaticCall);
console.log("Supports create:", supportsCreate);

// Check support for a specific execution mode with additional parameters
const supportsSpecificExecution = await nexusClient.supportsExecutionMode({
  type: "call",
  revertOnError: true,
  selector: "0xcb5baf0f"
});

console.log("Supports specific execution:", supportsSpecificExecution);
```

## Implementation Details

The function makes a view call to the `supportsExecutionMode` method on the smart account contract, passing an encoded representation of the execution mode as an argument. The execution mode is encoded as a byte string that includes the call type, whether to revert on error, and optional selector and data fields.

The call type is encoded as a numeric value:
- 'call' → 0
- 'delegatecall' → 1
- 'staticcall' → 2
- 'create' → 3

The returned boolean indicates whether the smart account implementation supports the specified execution mode. This check is important because different smart account implementations might support different sets of execution modes.

This function is part of the ERC-7579 standard for smart accounts, which provides a standardized way to interact with modular smart accounts. 