# getUserOperationStatus

The `getUserOperationStatus` function allows you to check the status of a previously submitted user operation. It provides information about whether the operation is confirmed, pending, or rejected, along with relevant details about the transaction.

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
const status = await bicoBundlerClient.getUserOperationStatus({
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
| hash | `Hex` | The hash of the user operation to check. This is the hash returned by the `sendUserOperation` function. |

## Return Value

The function returns a promise that resolves to an object containing the status information:

```typescript
type GetUserOperationStatusReturnType = {
  state: "CONFIRMED" | "PENDING" | "REJECTED"
  message: string
  transactionHash: string
  userOperationReceipt: UserOperationReceipt
}
```

| Property | Type | Description |
| --- | --- | --- |
| state | `"CONFIRMED" \| "PENDING" \| "REJECTED"` | The current state of the user operation. |
| message | `string` | A descriptive message about the current status. |
| transactionHash | `string` | The transaction hash if the operation has been included in a blockchain transaction. |
| userOperationReceipt | `UserOperationReceipt` | A receipt containing details about the operation execution. |

## Example

```typescript
import { http } from "viem";
import { createBicoBundlerClient, toNexusAccount } from "@biconomy/abstractjs";
import { baseSepolia } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";

// Set up your account and bundler client
const privateKey = "YOUR_PRIVATE_KEY";
const account = privateKeyToAccount(`0x${privateKey}`);
const bundlerUrl = "https://bundler.biconomy.io/api/v3/84532/your-api-key";

// Create Nexus account
const nexusAccount = await toNexusAccount({
  signer: account,
  chain: baseSepolia,
  transport: http(),
});

// Create bundler client
const bicoBundler = createBicoBundlerClient({
  bundlerUrl,
  account: nexusAccount
});

// Send a user operation
const calls = [{ to: recipientAddress, value: 1n }];
const hash = await bicoBundler.sendUserOperation({
  calls,
  account: nexusAccount
});

// Check the status of the user operation
console.log("Checking user operation status...");
const status = await bicoBundler.getUserOperationStatus({ hash });

console.log("User operation state:", status.state);
console.log("Status message:", status.message);

if (status.state === "CONFIRMED") {
  console.log("Transaction confirmed with hash:", status.transactionHash);
  console.log("Receipt:", status.userOperationReceipt);
}
```

## Implementation Details

The function makes a request to the Biconomy bundler's API using the `biconomy_getUserOperationStatus` RPC method, passing the user operation hash as a parameter. The bundler then returns the current status of that operation along with relevant details. 