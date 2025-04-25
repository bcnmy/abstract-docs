# getGasFeeValues

The `getGasFeeValues` function returns live gas prices that can be used to send a user operation. It provides different gas price tiers (slow, standard, and fast) with corresponding `maxFeePerGas` and `maxPriorityFeePerGas` values for each tier.

## Usage

```typescript
import { createBicoBundlerClient } from "@biconomy/abstractjs";
import { http } from "viem";

const bicoBundlerClient = createBicoBundlerClient({
  bundlerUrl: "https://bundler.biconomy.io/api/v3/5/your-api-key",
  account: nexusAccount
});

const gasFees = await bicoBundlerClient.getGasFeeValues();
```

## Return Value

The function returns a promise that resolves to an object containing gas fee suggestions for different speed tiers:

```typescript
type GetGasFeeValuesReturnType = {
  slow: {
    maxFeePerGas: bigint
    maxPriorityFeePerGas: bigint
  }
  standard: {
    maxFeePerGas: bigint
    maxPriorityFeePerGas: bigint
  }
  fast: {
    maxFeePerGas: bigint
    maxPriorityFeePerGas: bigint
  }
}
```

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

// Get gas fee values
const gasFees = await bicoBundler.getGasFeeValues();
console.log("Fast gas fees:", gasFees.fast);
console.log("Standard gas fees:", gasFees.standard);
console.log("Slow gas fees:", gasFees.slow);

// Use these values in a transaction
const calls = [{ to: recipientAddress, value: 1n }];
const hash = await bicoBundler.sendUserOperation({
  maxFeePerGas: gasFees.standard.maxFeePerGas,
  maxPriorityFeePerGas: gasFees.standard.maxPriorityFeePerGas,
  calls,
  account: nexusAccount
});
```

## Implementation Details

The function works by checking if the client is using Pimlico or Biconomy's bundler and calls the appropriate RPC method:
- For Pimlico: `pimlico_getUserOperationGasPrice`
- For Biconomy: `biconomy_getGasFeeValues`

The returned hex values are then converted to BigInt for use in your user operations.
