# accountId

The `accountId` function retrieves the unique identifier for an ERC-7579 compliant smart account. This ID can be used to identify the account across different chains and implementations.

## Usage

```typescript
import { createBicoBundlerClient } from "@biconomy/abstractjs";
import { http } from "viem";

const nexusClient = createBicoBundlerClient({
  account: nexusAccount,
  transport: http(bundlerUrl)
});

const id = await nexusClient.accountId();
```

## Parameters

The function accepts an optional object with the following properties:

```typescript
type AccountIdParameters<TSmartAccount extends SmartAccount | undefined> = {
  account?: TSmartAccount
}
```

| Parameter | Type | Description |
| --- | --- | --- |
| account | `SmartAccount` | Optional. The smart account instance to use. If not provided, the client's account will be used. |

## Return Value

The function returns a promise that resolves to a string representing the account's unique identifier.

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

// Get the account ID
const accountId = await nexusClient.accountId();
console.log("Account ID:", accountId);
```

## Implementation Details

The function attempts to call the `accountId` function on the smart account contract. If the account is not yet deployed, it simulates the call through the factory to retrieve the account ID that would be assigned upon deployment.

This function is part of the ERC-7579 standard for smart accounts, which provides a standardized way to interact with modular smart accounts. 