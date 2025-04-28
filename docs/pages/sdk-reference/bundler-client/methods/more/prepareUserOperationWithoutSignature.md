# prepareUserOperationWithoutSignature

The `prepareUserOperationWithoutSignature` function prepares a user operation without adding a signature. This allows for additional modifications to the user operation before it is signed and sent to the network. It also supports applying gas buffers to ensure transactions don't fail due to gas estimation issues.

## Usage

```typescript
import { createBicoBundlerClient } from "@biconomy/abstractjs";
import { http } from "viem";

const nexusClient = createBicoBundlerClient({
  account: nexusAccount,
  transport: http(bundlerUrl)
});

// This is exposed through the prepareUserOperation method
const userOp = await nexusClient.prepareUserOperation({
  calls: [
    {
      to: recipientAddress,
      value: 1n,
      data: "0x"
    }
  ],
  gasBuffer: {
    factor: 1.2,
    fields: ["preVerificationGas", "verificationGasLimit"]
  }
});
```

## Parameters

The function accepts all the same parameters as the standard `prepareUserOperation` function, plus an optional `gasBuffer` parameter:

```typescript
type PrepareUserOperationParameters<
  account extends SmartAccount | undefined,
  accountOverride extends SmartAccount | undefined = undefined,
  const calls extends readonly unknown[] = readonly unknown[],
  const request extends PrepareUserOperationRequest<account, accountOverride, calls> = PrepareUserOperationRequest<account, accountOverride, calls>
> & GasBufferFactor

type GasBufferFactor = {
  gasBuffer?: {
    /** The factor to multiply the gas limit by */
    factor: number
    /** The fields to apply the gas buffer to */
    fields: GasBufferFields[]
  }
}

type GasBufferFields = "preVerificationGas" | "verificationGasLimit" | "callGasLimit" | "maxFeePerGas" | "maxPriorityFeePerGas" | "paymasterVerificationGasLimit" | "paymasterPostOpGasLimit"
```

| Parameter | Type | Description |
| --- | --- | --- |
| account | `SmartAccount` | Optional. The smart account instance to use. If not provided, the client's account will be used. |
| calls | `Call[]` | Array of transactions to execute. |
| gasBuffer | `GasBufferFactor` | Optional. Configuration for applying a safety margin to gas estimates. |
| maxFeePerGas | `bigint` | Optional. The maximum fee per gas to pay for the transaction. |
| maxPriorityFeePerGas | `bigint` | Optional. The maximum priority fee per gas to pay for the transaction. |
| nonce | `bigint` | Optional. The nonce to use for the transaction. |

## Return Value

The function returns a promise that resolves to a user operation object without a signature, which can later be signed and sent.

```typescript
Promise<Omit<UserOperation<"0.7">, "signature">>
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

// Prepare a user operation with gas buffer
const userOp = await nexusClient.prepareUserOperation({
  calls: [
    {
      to: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
      value: 1n,
      data: "0x"
    }
  ],
  gasBuffer: {
    factor: 1.2, // Apply a 20% buffer
    fields: ["preVerificationGas", "verificationGasLimit"]
  }
});

// You can now make additional modifications to the user operation
const modifiedUserOp = {
  ...userOp,
  // Custom modifications
};

// Then send it
const hash = await nexusClient.sendUserOperation(modifiedUserOp);
console.log("User operation hash:", hash);
```

## Implementation Details

The function extends the standard `prepareUserOperation` functionality by:

1. Preparing the user operation using the standard `prepareUserOperation` action
2. If a `gasBuffer` is specified, applying the buffer factor to the specified gas fields
3. Removing the signature from the user operation (if it exists)

This is useful when you need to:
- Apply custom gas buffers to ensure transactions don't fail due to gas estimation inaccuracies
- Make additional modifications to the user operation before sending it
- Create complex transaction workflows that require manual adjustments to the user operation

The gas buffer can be applied to any of the following fields:
- `preVerificationGas`
- `verificationGasLimit`
- `callGasLimit`
- `maxFeePerGas`
- `maxPriorityFeePerGas`
- `paymasterVerificationGasLimit`
- `paymasterPostOpGasLimit` 