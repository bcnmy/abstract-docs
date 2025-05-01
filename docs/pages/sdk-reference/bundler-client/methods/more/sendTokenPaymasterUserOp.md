# sendTokenPaymasterUserOp

The `sendTokenPaymasterUserOp` function allows you to send transactions and pay for gas fees using ERC-20 tokens instead of the native blockchain token. This is a convenient way to enable gasless transactions where users can pay with stablecoins or other tokens.

## Usage

```typescript
import { createBicoBundlerClient } from "@biconomy/abstractjs";
import { http } from "viem";

const nexusClient = createBicoBundlerClient({
  account: nexusAccount,
  transport: http(bundlerUrl)
});

const hash = await nexusClient.sendTokenPaymasterUserOp({
  calls: [
    {
      to: recipientAddress,
      value: 1n,
      data: "0x"
    }
  ],
  feeTokenAddress: "0x036cbd53842c5426634e7929541ec2318f3dcf7e" // USDC on Base Sepolia
});
```

## Parameters

The function accepts an object with the following properties:

```typescript
type SendTokenPaymasterUserOpParameters = {
  calls: Transaction[]
  feeTokenAddress: Address
  customApprovalAmount?: bigint
}

type Transaction = {
  to: Address
  data: `0x${string}`
  value: bigint
}
```

| Parameter | Type | Description |
| --- | --- | --- |
| calls | `Transaction[]` | Array of transactions to be executed. |
| feeTokenAddress | `Address` | The address of the ERC-20 token to use for paying gas fees. |
| customApprovalAmount | `bigint` | Optional. The amount to approve for the token paymaster. If not provided, unlimited approval (max uint256) will be used. |

## Return Value

The function returns a promise that resolves to the hash of the user operation as a hexadecimal string.

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
const paymasterUrl = "https://paymaster.biconomy.io/api/v3/84532/your-paymaster-api-key";

// Create Nexus account
const nexusAccount = await toNexusAccount({
  signer: account,
  chain: baseSepolia,
  transport: http(),
});

// Create client with paymaster configuration
const nexusClient = createBicoBundlerClient({
  account: nexusAccount,
  transport: http(bundlerUrl),
  paymaster: createBicoPaymasterClient({
    transport: http(paymasterUrl)
  }),
  paymasterContext: toBiconomyTokenPaymasterContext({
    feeTokenAddress: "0x036cbd53842c5426634e7929541ec2318f3dcf7e" // USDC on Base Sepolia
  })
});

// Send a transaction paying for gas with USDC
const hash = await nexusClient.sendTokenPaymasterUserOp({
  calls: [
    {
      to: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
      value: 1n,
      data: "0x"
    }
  ],
  feeTokenAddress: "0x036cbd53842c5426634e7929541ec2318f3dcf7e", // USDC on Base Sepolia
  customApprovalAmount: 10000000n // Approve 10 USDC (assuming 6 decimals)
});

// Wait for the transaction to be confirmed
const receipt = await nexusClient.waitForUserOperationReceipt({ hash });
console.log("Transaction success:", receipt.success);
```

## Implementation Details

The function combines the steps of preparing and sending a token paymaster user operation:

1. It creates a combined transaction array that includes:
   - An ERC-20 approval transaction to grant the token paymaster contract permission to spend tokens
   - The original transactions specified in the `calls` parameter
   
2. It prepares the user operation with these transactions using `prepareTokenPaymasterUserOp`

3. It sends the prepared user operation to the network using `sendUserOperation`

By default, the function approves the maximum possible amount (unlimited approval), but this can be customized using the `customApprovalAmount` parameter. This function requires that the client is configured with a proper paymaster and paymaster context. 