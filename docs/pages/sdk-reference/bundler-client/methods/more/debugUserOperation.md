# debugUserOperation

The `debugUserOperation` function helps developers debug and simulate a user operation before actually sending it to the network. It provides detailed logs, Tenderly simulation links, and error information.

## Usage

```typescript
import { createBicoBundlerClient } from "@biconomy/abstractjs";
import { http } from "viem";

const nexusClient = createBicoBundlerClient({
  account: nexusAccount,
  transport: http(bundlerUrl)
});

const hash = await nexusClient.debugUserOperation({
  calls: [
    {
      to: recipientAddress,
      value: 1n,
      data: "0x"
    }
  ]
});
```

## Parameters

The function accepts the same parameters as `sendUserOperation`:

```typescript
type DebugUserOperationParameters = SendUserOperationParameters
```

| Parameter | Type | Description |
| --- | --- | --- |
| account | `SmartAccount` | Optional. The smart account instance to use. If not provided, the client's account will be used. |
| calls | `Call[]` | Array of transactions to execute. |
| maxFeePerGas | `bigint` | Optional. The maximum fee per gas to pay for the transaction. |
| maxPriorityFeePerGas | `bigint` | Optional. The maximum priority fee per gas to pay for the transaction. |
| nonce | `bigint` | Optional. The nonce to use for the transaction. |
| signature | `Hex` | Optional. The signature to use for the user operation. If not provided, it will be generated. |
| entryPointAddress | `Address` | Optional. The entry point address to use. |

## Return Value

The function returns a promise that resolves to the hash of the user operation as a hexadecimal string.

```typescript
Promise<Hex>
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

// Debug a user operation
try {
  const hash = await nexusClient.debugUserOperation({
    calls: [
      {
        to: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
        value: 1n,
        data: "0x"
      }
    ]
  });
  
  console.log("User operation hash:", hash);
} catch (error) {
  console.error("Debug error:", error);
}
```

## Implementation Details

The function prepares a user operation, signs it, and logs detailed information including:

1. The packed user operation in JSON format
2. The RPC parameters being sent to the bundler
3. A Tenderly simulation URL that can be used to inspect the operation in detail
4. Any errors that occur during the process, with detailed debugging information

If the operation fails, the function will attempt to generate a Tenderly simulation URL for the failed operation to help with debugging.

This function is primarily intended for development and debugging purposes, not for production use. 