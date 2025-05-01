# waitForConfirmedUserOperationReceipt

The `waitForConfirmedUserOperationReceipt` function allows you to wait for a user operation to be confirmed on the blockchain and receive its receipt. This is useful for ensuring that a transaction has been included in a block before proceeding with subsequent operations.

## Usage

```typescript
import { createBicoBundlerClient } from "@biconomy/abstractjs";
import { http } from "viem";

const bicoBundlerClient = createBicoBundlerClient({
  bundlerUrl: "https://bundler.biconomy.io/api/v3/5/your-api-key",
  account: nexusAccount
});

// After sending a user operation and receiving a hash
const userOpHash = "0x..."; // The hash returned from sendUserOperation
const receipt = await bicoBundlerClient.waitForConfirmedUserOperationReceipt({
  hash: userOpHash
});
```

## Parameters

The function accepts an object with the following properties:

```typescript
type GetUserOperationStatusParameters = {
  /** The hash of the User Operation. */
  hash: Hex
}
```

| Parameter | Type | Description |
| --- | --- | --- |
| hash | `Hex` | The hash of the user operation to wait for. This is the hash returned by the `sendUserOperation` function. |

## Return Value

The function returns a promise that resolves to a `UserOperationReceipt` object containing information about the confirmed operation:

```typescript
type UserOperationReceipt = {
  userOpHash: Hex
  entryPoint: Address
  sender: Address
  nonce: bigint
  paymaster?: Address
  actualGasUsed: bigint
  actualGasCost: bigint
  success: string
  reason?: string
  logs: Log[]
  receipt: TransactionReceipt
}
```

The receipt contains details about the user operation such as the sender, gas used, cost, success status, and the transaction receipt.

## Example

```typescript
import { http } from "viem";
import { createBicoBundlerClient, toNexusAccount, createBicoBundlerClient } from "@biconomy/abstractjs";
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

// Send a user operation
const recipientAddress = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"; // Example address
const hash = await nexusClient.sendUserOperation({
  calls: [
    {
      to: recipientAddress,
      value: 1n
    }
  ]
});

// Wait for the user operation to be confirmed
console.log("Waiting for user operation to be confirmed...");
const receipt = await nexusClient.waitForConfirmedUserOperationReceipt({
  hash
});

// Check the receipt information
console.log("User operation confirmed!");
console.log("Success:", receipt.success);
console.log("Gas used:", receipt.actualGasUsed.toString());
console.log("Gas cost:", receipt.actualGasCost.toString());
```

## Implementation Details

The function repeatedly checks the status of a user operation using the `getUserOperationStatus` function until it reaches a final state:

1. If the operation is `CONFIRMED`, it returns the user operation receipt.
2. If the operation is `REJECTED`, it throws an error with the failure message.
3. If the operation is still `PENDING`, it waits for the configured polling interval and checks again.

This provides a convenient way to wait for user operations to complete without manually implementing polling logic. 