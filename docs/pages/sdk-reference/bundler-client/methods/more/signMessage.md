# signMessage

The `signMessage` function allows a smart account to sign a message according to [EIP-191 format](https://eips.ethereum.org/EIPS/eip-191). It creates a signature that can be used for verifying the identity of the smart account.

## Usage

```typescript
import { createBicoBundlerClient } from "@biconomy/abstractjs";
import { http } from "viem";

const nexusClient = createBicoBundlerClient({
  account: nexusAccount,
  transport: http(bundlerUrl)
});

const signature = await nexusClient.signMessage({
  message: "Hello, Biconomy!"
});

console.log(signature); // '0x...'
```

## Parameters

The function accepts an object with the following properties:

```typescript
type SignMessageParameters = {
  message: string | Uint8Array
  account?: SmartAccount
}
```

| Parameter | Type | Description |
| --- | --- | --- |
| message | `string \| Uint8Array` | The message to sign. Can be a string or byte array. |
| account | `SmartAccount` | Optional. The smart account to use for signing. If not provided, the client's account will be used. |

## Return Value

The function returns a promise that resolves to the signature as a hexadecimal string.

```typescript
Promise<Hash>
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

// Sign a message
try {
  const message = "I am verifying my ownership of this smart account";
  const signature = await nexusClient.signMessage({
    message
  });
  
  console.log("Message:", message);
  console.log("Signature:", signature);
  
  // This signature can now be verified by third parties to confirm
  // that the message was signed by this smart account
} catch (error) {
  console.error("Error signing message:", error);
}
```

## Implementation Details

The function performs the following operations:

1. It checks if an account exists (either provided in the parameters or using the client's account)
2. It parses the account to ensure it's a valid smart account
3. It delegates the signing operation to the smart account's `signMessage` method

The signature is created using the Ethereum-specific personal signature format:
`keccak256("\x19Ethereum Signed Message:\n" + len(message) + message))`

This format prefixes the message with the string "\x19Ethereum Signed Message:\n" followed by the length of the message, which helps prevent malicious DApps from tricking users into signing transactions that look like regular messages.

Smart accounts can implement their own method of signing messages that may differ from EOA (Externally Owned Account) signatures, depending on their architecture and implementation. 