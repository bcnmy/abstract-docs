# upgradeSmartAccount

This method upgrades a Nexus smart account to a new implementation, allowing an easy path to migration to the latest features, security fixes, and performance improvements while preserving your account's address, balance, and history.

## Usage

:::code-group

```typescript [example.ts]
import { nexusClient } from "./nexusClient";

// Upgrade the smart account to the latest implementation
const upgradeHash = await nexusClient.upgradeSmartAccount();

// Wait for the upgrade transaction to be confirmed
const receipt = await nexusClient.waitForUserOperationReceipt({ hash: upgradeHash });
console.log("Upgrade successful:", receipt.success);
```

```typescript [nexusClient.ts] filename="nexusClient.ts"
import { privateKeyToAccount } from "viem/accounts";
import { createSmartAccountClient, toNexusAccount } from "@biconomy/abstractjs";
import { baseSepolia } from "viem/chains"; 
import { http } from "viem"; 

const privateKey = "PRIVATE_KEY";
const account = privateKeyToAccount(`0x${privateKey}`)
const bundlerUrl = "https://bundler.biconomy.io/api/v3/84532/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44"; 

export const nexusClient = createSmartAccountClient({
  account: await toNexusAccount({ 
    signer: account, 
    chain: baseSepolia,
    transport: http(),
    oldVersion: "0.0.33", // Specify the SDK version your users account was created with. Remember to store this in your application to access the upgraded account & balances moving forward
  }),
  transport: http(bundlerUrl),
});
```

:::

## Parameters

- `implementationAddress` `Hex` (optional): Custom implementation address. If not provided, the latest default implementation will be used.
- `initData` `Hex` (optional): Initialization data to pass to the new implementation. Default is "0x".
- `maxFeePerGas` `bigint` (optional): Maximum fee per gas for User Operation execution.
- `maxPriorityFeePerGas` `bigint` (optional): Maximum priority fee per gas.
- `nonce` `bigint` (optional): Nonce for the User Operation.
- Other standard User Operation parameters are also supported.

## Response

- `Promise<Hash>`: Returns the User Operation hash of the upgrade transaction.

## Updating the AbstractJS Package

:::warning[Important]
Before upgrading smart accounts, you should update the AbstractJS package to the latest version using your package manager. This ensures you have access to the latest implementation addresses and features.
:::

:::code-group
```bash [npm]
npm update @biconomy/abstractjs
```
```bash [yarn]
yarn upgrade @biconomy/abstractjs
```
```bash [pnpm]
pnpm update @biconomy/abstractjs
```
```bash [bun]
bun update @biconomy/abstractjs
```
:::

After updating the package, you should also update your application code to use any new APIs or handle any breaking changes in the latest version.

## Migrating from Older Versions

### Using the `oldVersion` Parameter

When migrating from an older version of a Nexus smart account, the `oldVersion` parameter in `toNexusAccount` is crucial for connecting to accounts created with previous implementations.

:::tip[Important for Migrations]
You must specify the `oldVersion` parameter when initializing your account to ensure you can access the correct account address and funds from older versions.
:::

```typescript [migration-example.ts]
// Connect to an older version of the smart account
const nexusClient = createSmartAccountClient({
  account: await toNexusAccount({ 
    signer: account, 
    chain: baseSepolia,
    transport: http(),
    oldVersion: "0.0.33", // Specify the SDK version your users account was created with. Remember to store this in your application to access the upgraded account & balances moving forward
  }),
  transport: http(bundlerUrl),
});

// Now upgrade to the latest version
const upgradeHash = await nexusClient.upgradeSmartAccount();
```

## Migration Process

1. **Update AbstractJS package**: Use your package manager to update to the latest version: `npm update @biconomy/abstractjs`
2. **Connect to existing account**: Use the `oldVersion` parameter to connect to the old account
3. **Upgrade implementation**: Call `upgradeSmartAccount()` to update it to the latest version
4. **Verify upgrade**: Test that the account works correctly after upgrading
5. **Update application**: Modify any code that depends on specific implementation details
6. **Store the version**: Store the users oldVersion in your application to access the upgraded account & balances moving forward

## Advanced Usage

### Custom Implementation and Parameters

```typescript
import { parseGwei } from "viem";

// Upgrade with custom parameters
const upgradeHash = await nexusClient.upgradeSmartAccount({
  implementationAddress: '0x1234567890123456789012345678901234567890',
  initData: '0x1234',
  maxFeePerGas: parseGwei('20'),
  maxPriorityFeePerGas: parseGwei('2'),
});
```

### Verification After Upgrade

```typescript
// Check the account ID after upgrade
const accountId = await nexusClient.accountId();
console.log("New account ID:", accountId);

// Test with a simple transaction
const testTxHash = await nexusClient.sendUserOperation({
  calls: [{
    to: "0x0000000000000000000000000000000000000000",
    value: 0n,
    data: "0x",
  }],
});
```

## Troubleshooting

If the upgrade transaction fails, check:
- The account has sufficient funds for gas
- The account is deployed on-chain
- The implementation address is valid (if custom)
- You're using the correct `oldVersion` parameter if migrating from an older version
- You've updated to the latest AbstractJS package

## When to Upgrade

Consider upgrading your smart account when:
- A new implementation is released with security fixes
- New features are added that you want to utilize
- Performance improvements are available
- You need to migrate from an older version to maintain compatibility

[Upgrade Smart Account SDK Test](https://github.com/bcnmy/abstractjs/blob/develop/src/sdk/clients/decorators/smartAccount/upgradeSmartAccount.test.ts)