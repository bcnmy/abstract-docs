# getInstalledValidators

The `getInstalledValidators` function retrieves the list of validator modules currently installed on an ERC-7579 compliant smart account. Validators are modules that verify transaction signatures and permissions.

## Usage

```typescript
import { createBicoBundlerClient } from "@biconomy/abstractjs";
import { http } from "viem";

const nexusClient = createBicoBundlerClient({
  account: nexusAccount,
  transport: http(bundlerUrl)
});

const [validators, nextCursor] = await nexusClient.getInstalledValidators();
```

## Parameters

The function accepts an optional object with the following properties:

```typescript
type GetInstalledValidatorsParameters<TSmartAccount extends SmartAccount | undefined> = { 
  account?: TSmartAccount 
} & {
  pageSize?: bigint
  cursor?: Hex
}
```

| Parameter | Type | Description |
| --- | --- | --- |
| account | `SmartAccount` | Optional. The smart account instance to use. If not provided, the client's account will be used. |
| pageSize | `bigint` | Optional. The number of validators to return per page. Default is 100. |
| cursor | `Hex` | Optional. The address from which to start retrieving validators. Default is the sentinel address. |

## Return Value

The function returns a promise that resolves to a tuple containing:

1. An array of validator addresses as hexadecimal strings
2. A cursor for pagination as a hexadecimal string

```typescript
Promise<readonly [readonly Hex[], Hex]>
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

// Get the installed validators
const [validators, nextCursor] = await nexusClient.getInstalledValidators({
  pageSize: 10n
});

console.log("Installed validators:", validators);
console.log("Next cursor:", nextCursor);

// To get the next page of validators
if (nextCursor !== '0x0000000000000000000000000000000000000001') {
  const [nextValidators, newCursor] = await nexusClient.getInstalledValidators({
    pageSize: 10n,
    cursor: nextCursor
  });
  console.log("Next page of validators:", nextValidators);
}
```

## Implementation Details

The function calls the `getValidatorsPaginated` method on the smart account contract, which returns a paginated list of validator addresses. The pagination system uses a cursor-based approach, where the cursor represents the last address processed.

This function is part of the ERC-7579 standard for smart accounts, which provides a standardized way to interact with modular smart accounts. 