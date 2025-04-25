# sendTransaction

The `sendTransaction` function creates, signs, and sends a transaction using a smart account. This function supports both single transactions and batched calls, and can leverage sponsorship (gas abstraction) if a paymaster is configured.

## Usage

```typescript
import { createBicoBundlerClient } from "@biconomy/abstractjs";
import { http } from "viem";

const nexusClient = createBicoBundlerClient({
  account: nexusAccount,
  transport: http(bundlerUrl)
});

// Single transaction
const hash = await nexusClient.sendTransaction({
  to: recipientAddress,
  value: 1000000000000000n, // 0.001 ETH
  data: "0x"
});

// Batched transactions
const hash = await nexusClient.sendTransaction({
  calls: [
    {
      to: recipientAddress,
      value: 1000000000000000n,
      data: "0x"
    },
    {
      to: contractAddress,
      value: 0n,
      data: "0x..." // encoded contract call
    }
  ]
});
```

## Parameters

The function accepts either a single transaction or a batch of transactions:

### Single Transaction

```typescript
type SendTransactionParameters = {
  to: Address
  value?: bigint
  data?: Hex
  account?: SmartAccount
  maxFeePerGas?: bigint
  maxPriorityFeePerGas?: bigint
  nonce?: bigint
}
```

| Parameter | Type | Description |
| --- | --- | --- |
| to | `Address` | The recipient address. |
| value | `bigint` | Optional. The amount of ether to send in wei. |
| data | `Hex` | Optional. The call data for the transaction. |
| account | `SmartAccount` | Optional. The smart account to use. If not provided, the client's account will be used. |
| maxFeePerGas | `bigint` | Optional. The maximum fee per gas to pay for the transaction. |
| maxPriorityFeePerGas | `bigint` | Optional. The maximum priority fee per gas to pay for the transaction. |
| nonce | `bigint` | Optional. The nonce to use for the transaction. |

### Batched Transactions

```typescript
type SendTransactionParameters = SendUserOperationParameters
```

Which includes:

| Parameter | Type | Description |
| --- | --- | --- |
| calls | `Call[]` | Array of transactions to execute. |
| account | `SmartAccount` | Optional. The smart account to use. If not provided, the client's account will be used. |
| maxFeePerGas | `bigint` | Optional. The maximum fee per gas to pay for the transaction. |
| maxPriorityFeePerGas | `bigint` | Optional. The maximum priority fee per gas to pay for the transaction. |
| nonce | `bigint` | Optional. The nonce to use for the transaction. |

## Return Value

The function returns a promise that resolves to the transaction hash as a hexadecimal string.

```typescript
Promise<Hash>
```

## Example

```typescript
import { http, parseEther, encodeFunctionData } from "viem";
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

// Example 1: Simple ETH transfer
const transferHash = await nexusClient.sendTransaction({
  to: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
  value: parseEther("0.001"),
  data: "0x"
});

console.log("Transfer transaction hash:", transferHash);

// Example 2: Contract interaction
const contractAddress = "0x..."; // Your contract address
const contractABI = [...]; // Your contract ABI
const encodedCallData = encodeFunctionData({
  abi: contractABI,
  functionName: "setMessage",
  args: ["Hello from Biconomy!"]
});

const contractHash = await nexusClient.sendTransaction({
  to: contractAddress,
  value: 0n,
  data: encodedCallData
});

console.log("Contract transaction hash:", contractHash);

// Example 3: Batch transactions
const batchHash = await nexusClient.sendTransaction({
  calls: [
    {
      to: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
      value: parseEther("0.001"),
      data: "0x"
    },
    {
      to: contractAddress,
      value: 0n,
      data: encodedCallData
    }
  ]
});

console.log("Batch transaction hash:", batchHash);
```

## Implementation Details

The function handles both single transactions and batched transactions:

1. For a single transaction (when `to` is present in the parameters):
   - It converts the single transaction into a user operation with a single call
   - It sends the user operation using `sendUserOperation`
   
2. For batched transactions (when `calls` is present in the parameters):
   - It directly forwards the parameters to `sendUserOperation`

3. After the user operation is sent, it waits for the operation receipt using `waitForUserOperationReceipt`

4. It returns the actual transaction hash from the receipt rather than the user operation hash

This function is particularly useful for smart accounts since it abstracts away the complexities of user operations while providing the familiar transaction sending interface. When a paymaster is configured on the client, transactions can be sponsored (gasless) or paid with ERC-20 tokens. 