# isDelegated

The `isDelegated` method checks if your account is delegated across all chains where it's deployed.

## Overview

Delegation allows another address to control your smart account. This method provides a convenient way to check if your account has delegation active across all chains where it's deployed.

## Method Signature

```typescript
function isDelegated(parameters: IsDelegatedParameters): Promise<boolean>
```

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | `BaseMultichainSmartAccount` | Yes | The multichain smart account to check delegation status for |

## Returns

A `Promise` that resolves to a `boolean`:
- `true` if the account is delegated on ALL checked chains
- `false` if the account is not delegated on ANY checked chain

## Examples

### Basic Usage

```typescript
// Check if account is delegated on all chains
const delegated = await isDelegated({
  account: mcAccount
});

if (delegated) {
  console.log("Account is delegated on all chains");
} else {
  console.log("Account is not delegated on at least one chain");
}
```

### Using as Account Method

If the method is available as an instance method on your account object:

```typescript
// Check if account is delegated
const delegated = await mcAccount.isDelegated();

if (delegated) {
  console.log("Account is delegated on all chains");
} else {
  console.log("Account is not delegated on at least one chain");
}
```

## Implementation Details

The `isDelegated` method works by:

1. Checking the delegation status on each chain where the account is deployed
2. Only returning `true` if the account is delegated on ALL chains (using `every()` method)
3. Otherwise returning `false` if any chain has no delegation

## Use Cases

- Security checks to ensure expected delegations are active across all chains
- Verification before executing sensitive transactions
- UI indicators showing account control status
- Pre-transaction checks in applications handling user funds

## Related Methods

- [`unDelegate`](/sdk-reference/mee-client/account/methods/more/unDelegate) - Remove delegation permissions from the account 