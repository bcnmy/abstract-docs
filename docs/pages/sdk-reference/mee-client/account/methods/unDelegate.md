# unDelegate

The `unDelegate` method removes delegation permissions from your multichain smart account across one or more chains.

## Overview

If you have previously delegated your account to another address, this method allows you to revoke those permissions. It's an important security feature that lets you regain exclusive control of your account.

## Method Signature

```typescript
function unDelegate(parameters?: UnDelegateParameters): Promise<UnDelegatePayload>
```

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `chainIds` | `number[]` | No | Optional array of chain IDs to remove delegations from. If not provided, removes delegations from all chains where the account is deployed |

## Returns

A `Promise` that resolves to a `UnDelegatePayload` object with the following properties:

| Property | Type | Description |
|----------|------|-------------|
| `transactionHashes` | `Record<number, Hex>` | Object mapping chain IDs to transaction hashes for each undelegation transaction |

## Examples

### Remove Delegations on All Chains

```typescript
// Remove delegations on all chains where the account is deployed
const result = await mcAccount.unDelegate();

console.log("Undelegation transactions submitted:");
for (const [chainId, hash] of Object.entries(result.transactionHashes)) {
  console.log(`Chain ${chainId}: ${hash}`);
}

// Wait for transactions to be mined
await mcAccount.waitForTransactionReceipts({
  transactionHashes: result.transactionHashes
});

console.log("All undelegation transactions confirmed");
```

### Remove Delegations on Specific Chains

```typescript
import { optimism, base } from "viem/chains";

// Remove delegations only on specific chains
const result = await mcAccount.unDelegate({
  chainIds: [optimism.id, base.id]
});

// Check if transactions were submitted
if (result.transactionHashes[optimism.id]) {
  console.log(`Undelegation on Optimism: ${result.transactionHashes[optimism.id]}`);
}

if (result.transactionHashes[base.id]) {
  console.log(`Undelegation on Base: ${result.transactionHashes[base.id]}`);
}
```

## Security Considerations

- Always verify the success of undelegation operations using `isDelegated` after transactions are confirmed
- Consider removing delegations before executing high-value transactions if they're no longer needed
- Monitor for unexpected delegation changes as part of security best practices

## Related Methods

- [`isDelegated`](/sdk-reference/mee-client/account/methods/isDelegated) - Check if the account is delegated
- [`waitForTransactionReceipts`](/sdk-reference/mee-client/account/methods/waitForTransactionReceipts) - Wait for transaction receipts across multiple chains 