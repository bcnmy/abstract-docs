# isDelegated

The `isDelegated` method checks if your eoa has been delegated to a nexus account via [EIP-7702](https://eips.ethereum.org/EIPS/eip-7702).

## Overview

Delegation allows another address to control your smart account. This method provides a convenient way to check if your account has delegated permissions active across any of the chains where it's deployed.

## Method Signature

```typescript
function isDelegated(parameters?: IsDelegatedParameters): Promise<IsDelegatedPayload>
```

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `chainIds` | `number[]` | No | Optional array of chain IDs to check. If not provided, checks all chains where the account is deployed |

## Returns

A `Promise` that resolves to an `IsDelegatedPayload` object with the following properties:

| Property | Type | Description |
|----------|------|-------------|
| `isDelegated` | `boolean` | `true` if the account is delegated on any checked chain, `false` otherwise |
| `details` | `{ chainId: number; delegated: boolean }[]` | Array of delegation status details per chain |

## Examples

### Basic Usage

```typescript
import { optimism, base } from "viem/chains";

// Check if account is delegated on any chain
const delegationStatus = await mcAccount.isDelegated();

if (delegationStatus.isDelegated) {
  console.log("Account is delegated on at least one chain");
  
  // See which chains have delegations
  delegationStatus.details.forEach(detail => {
    if (detail.delegated) {
      console.log(`Delegated on chain ID: ${detail.chainId}`);
    }
  });
} else {
  console.log("Account is not delegated on any chain");
}
```

### Checking Specific Chains

```typescript
import { optimism, base } from "viem/chains";

// Check delegation status only on specific chains
const specificStatus = await mcAccount.isDelegated({
  chainIds: [optimism.id, base.id]
});

console.log(`Delegation status on Optimism: ${
  specificStatus.details.find(d => d.chainId === optimism.id)?.delegated
}`);

console.log(`Delegation status on Base: ${
  specificStatus.details.find(d => d.chainId === base.id)?.delegated
}`);
```

## Use Cases

- Security checks to ensure no unexpected delegations are active
- Verification before executing sensitive transactions
- UI indicators showing account control status
- Pre-transaction checks in applications handling user funds

## Related Methods

- [`unDelegate`](/sdk-reference/mee-client/account/methods/unDelegate) - Remove delegation permissions from the account 