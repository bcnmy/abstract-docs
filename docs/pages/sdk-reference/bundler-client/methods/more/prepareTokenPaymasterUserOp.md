# prepareTokenPaymasterUserOp

The `prepareTokenPaymasterUserOp` function prepares a user operation that can pay for gas fees using ERC-20 tokens instead of the native blockchain token. This is useful for enabling gasless transactions where users can pay with stablecoins or other tokens.

## Usage

```typescript
import { createBicoBundlerClient } from "@biconomy/abstractjs";
import { http } from "viem";

const nexusClient = createBicoBundlerClient({
  account: nexusAccount,
  transport: http(bundlerUrl)
});

const userOp = await nexusClient.prepareTokenPaymasterUserOp({
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
type PrepareTokenPaymasterUserOpParameters = {
  /** Array of transactions to be executed */
  calls: Transaction[]
  /** Token used for paying for the gas */
  feeTokenAddress: Address
  /** Optional custom approval amount for the token paymaster. If not provided, max uint256 will be used */
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

// USDC token address on Base Sepolia
const baseSepoliaUSDCAddress = "0x036cbd53842c5426634e7929541ec2318f3dcf7e";

// Create a user operation that uses USDC for gas payment
const userOp = await nexusClient.prepareTokenPaymasterUserOp({
  calls: [
    {
      to: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
      value: 1n,
      data: "0x"
    }
  ],
  feeTokenAddress: baseSepoliaUSDCAddress,
  customApprovalAmount: 10000000n // Approve 10 USDC (assuming 6 decimals)
});

// Now you can send the user operation
const hash = await nexusClient.sendUserOperation(userOp);
console.log("User operation hash:", hash);
```

## Implementation Details

The function creates a user operation that includes two parts:
1. An ERC-20 approval transaction that allows the token paymaster contract to spend tokens on behalf of the smart account
2. The original transactions provided in the `calls` parameter

The token approval is automatically added as the first transaction in the batch. By default, the function approves the maximum possible amount (unlimited approval), but this can be customized using the `customApprovalAmount` parameter.

This function is commonly used in conjunction with a properly configured paymaster context that specifies ERC-20 token payment. 