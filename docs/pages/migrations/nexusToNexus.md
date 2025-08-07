# Nexus Account Migration Guide

This guide explains how to upgrade Nexus smart accounts from older versions to the latest implementation. The migration process preserves your account's address, balance, and history while providing access to new features, security fixes, and performance improvements.

## Why Upgrade?

Upgrading your Nexus smart account is recommended for several important reasons:

1. **Security Improvements**: The latest implementation includes critical security enhancements.
2. **New Features**: Access to the newest account abstraction capabilities.
3. **Performance Improvements**: Enhanced gas efficiency and transaction processing.
4. **Compatibility**: Ensure your smart account remains compatible with the latest AbstractJS SDK.

## Migration Process Overview

The migration consists of these key steps:

1. **Update AbstractJS Package**: Install the latest SDK version
2. **Connect to Existing Account**: Use your existing account address
3. **Upgrade Implementation**: Call `upgradeSmartAccount()`
4. **Verify Upgrade**: Test the account with a transaction
5. **Update Application**: Adjust your application to use the latest features

## Important Notes for Migration

> **CRITICAL**: After migration, you **must store your account address** and use it with the `accountAddress` parameter in `toNexusAccount()` for all future interactions. This is how you'll maintain access to your upgraded account and its balances.

## Step 1: Update AbstractJS Package

First, update to the latest version of the AbstractJS SDK:

```bash
# npm
npm update @biconomy/abstractjs

# yarn
yarn upgrade @biconomy/abstractjs

# pnpm
pnpm update @biconomy/abstractjs

# bun
bun update @biconomy/abstractjs
```

## Step 2: Connect to Your Existing Account

When connecting to an account created with an older SDK version, you'll need your existing account address:

```typescript
import { privateKeyToAccount } from "viem/accounts";
import { createBicoBundlerClient, toNexusAccount, getMEEVersion, MEEVersion } from "@biconomy/abstractjs";
import { baseSepolia } from "viem/chains";
import { http } from "viem";

const privateKey = "YOUR_PRIVATE_KEY";
const account = privateKeyToAccount(`0x${privateKey}`);
const bundlerUrl = "YOUR_BUNDLER_URL";

// First, get your existing account address if you don't already have it stored
// This is crucial - you MUST store this address for future use
const existingAccountAddress = "YOUR_EXISTING_ACCOUNT_ADDRESS"; 

// Connect to your existing account
const nexusAccount = await toNexusAccount({
  signer: account,
  chainConfiguration: {
    chain: baseSepolia,
    transport: http(),
    version: getMEEVersion(MEEVersion.V2_1_0)
  },
  accountAddress: existingAccountAddress // Use your existing account address
});

const bundlerClient = createBicoBundlerClient({
  account: nexusAccount,
  transport: http(bundlerUrl)
});
```

> **IMPORTANT**: You must preserve your existing account address and use it with the `accountAddress` parameter in all future SDK interactions. This is the only way to access your account and its funds after migration.

## Step 3: Upgrade the Smart Account

Call the `upgradeSmartAccount()` method to upgrade your account to the latest implementation:

```typescript
// Upgrade the account to the latest implementation
const hash = await bundlerClient.upgradeSmartAccount();

// Wait for the upgrade transaction to be processed
const receipt = await bundlerClient.waitForUserOperationReceipt({ hash });
console.log("Upgrade successful:", receipt.success);

// Verify the account has been upgraded by checking the accountId
const accountId = await bundlerClient.accountId();
console.log("New account ID:", accountId);
```

## Step 4: Verify the Upgrade

After upgrading, verify that your account works correctly by performing a test transaction:

```typescript
// Test with a simple transaction after upgrade
const testTxHash = await bundlerClient.sendUserOperation({
  calls: [{
    to: "0x0000000000000000000000000000000000000000",
    value: 0n,
    data: "0x"
  }]
});

const testReceipt = await bundlerClient.waitForUserOperationReceipt({
  hash: testTxHash
});
console.log("Test transaction successful:", testReceipt.success);
```

## Step 5: Store Your Account Address

After successful migration, you **MUST store your account address** for future use:

```typescript
// Get and store your account address
const accountAddress = await bundlerClient.account.getAddress();
console.log("IMPORTANT - Store this account address:", accountAddress);

// In your application, store this address securely 
// (database, local storage, user profile, etc.)
storeAccountAddress(userIdentifier, accountAddress);
```

## Note on additional configurations after the upgrade
After an upgrade you may want/need to perform additional configurations for the Smart Account.

For example, when you upgrade Nexus `1.0.2` to Nexus `1.2.0`, by default the behavior will be like this:
- The MEE K1 validator will be installed automatically as a default validator, however it won’t be initialized (Nexus owner won’t be set)
- At the same time, the old, non-MEE K1 validator (or any other validators you have installed before the upgrade) will still be installed on the account.

You can pass the `initData` parameter to the `upgradeSmartAccount` method. It will be used to make a call that configures the Smart Account after the upgrade to a new implementation. 


For example, in the above case of upgrading Nexus from `1.0.2` to `1.2.0`, you can use the following function to build the initData:
```
export const getInitData = (ownerAddress: Address): Hex => {
  const initData = encodeAbiParameters(
    [
      { name: "bootstrap", type: "address" },
      { name: "initData", type: "bytes" }
    ],
    [
      NEXUS_BOOTSTRAP_ADDRESS,
      encodeFunctionData({
        abi: NexusBootstrapAbi,
        functionName: "initNexusWithDefaultValidator",
        args: [
          ownerAddress as `0x${string}`
        ]
      })
    ]
  )

  return encodeFunctionData({
    abi: parseAbi([
      "function initializeAccount(bytes initData)"
    ]),
    functionName: "initializeAccount",
    args: [initData]
  })
}
```
With the initData generated by the above code, the MEE validator will be initialized and `ownerAddress` will be set as owner for the upgraded Nexus account.

## Complete Migration Example

Here's a full example that demonstrates the migration process:

```typescript
import { privateKeyToAccount } from "viem/accounts";
import { 
  createBicoBundlerClient, 
  toNexusAccount,
  getMEEVersion,
  MEEVersion
} from "@biconomy/abstractjs";
import { baseSepolia } from "viem/chains";
import { http } from "viem";

async function migrateNexusAccount() {
  // Setup
  const privateKey = "YOUR_PRIVATE_KEY";
  const account = privateKeyToAccount(`0x${privateKey}`);
  const bundlerUrl = "YOUR_BUNDLER_URL";
  
  // Your existing account address - CRITICAL for migration
  const existingAccountAddress = "YOUR_EXISTING_ACCOUNT_ADDRESS";
  
  // Connect to your existing account
  const nexusAccount = await toNexusAccount({
    signer: account,
    chainConfiguration: {
      chain: baseSepolia,
      transport: http(),
      version: getMEEVersion(MEEVersion.V2_1_0)
    },
    accountAddress: existingAccountAddress
  });
  
  const bundlerClient = createBicoBundlerClient({
    account: nexusAccount,
    transport: http(bundlerUrl)
  });
  
  // Check the account ID before upgrade
  const oldAccountId = await bundlerClient.accountId();
  console.log("Account ID before upgrade:", oldAccountId);
  
  // Verify account is deployed
  const isDeployed = await bundlerClient.account.isDeployed();
  if (!isDeployed) {
    console.log("Account not deployed. Please deploy the account first.");
    return;
  }
  
  console.log("Starting account upgrade...");
  
  // Upgrade the account to the latest implementation
  const hash = await bundlerClient.upgradeSmartAccount();
  console.log("Upgrade transaction submitted:", hash);
  
  // Wait for the upgrade transaction to be processed
  const receipt = await bundlerClient.waitForUserOperationReceipt({ hash });
  console.log("Upgrade transaction completed. Success:", receipt.success);
  
  if (!receipt.success) {
    console.error("Upgrade failed. Please check gas, balance, and permissions.");
    return;
  }
  
  // Verify the account has been upgraded
  const newAccountId = await bundlerClient.accountId();
  console.log("Account ID after upgrade:", newAccountId);
  
  // CRITICAL: Verify and store the account address for future use
  const accountAddress = await bundlerClient.account.getAddress();
  console.log("STORE THIS ACCOUNT ADDRESS:", accountAddress);
  
  // Test the upgraded account with a transaction
  console.log("Testing upgraded account with a transaction...");
  
  // Example: Simple transaction to verify everything works
  try {
    const testHash = await bundlerClient.sendUserOperation({
      calls: [{
        to: "0x0000000000000000000000000000000000000000",
        value: 0n,
        data: "0x"
      }]
    });
    
    const testReceipt = await bundlerClient.waitForUserOperationReceipt({
      hash: testHash
    });
    
    console.log("Test transaction successful:", testReceipt.success);
    console.log("Migration completed successfully!");
  } catch (error) {
    console.error("Test transaction failed:", error);
  }
}

migrateNexusAccount().catch(console.error);
```

## Post-Migration: Future Account Access

After migration, **ALL** future interactions with your account must use the `accountAddress` parameter:

```typescript
// CORRECT WAY to access your account after migration
const nexusAccount = await toNexusAccount({
  signer: account,
  chainConfiguration: {
    chain: baseSepolia,
    transport: http(),
    version: getMEEVersion(MEEVersion.V2_1_0)
  },
  accountAddress: "YOUR_STORED_ACCOUNT_ADDRESS" // This is essential
});

// INCORRECT WAY - this will create a new account, not access your existing one
const incorrectAccount = await toNexusAccount({
  signer: account,
  chainConfiguration: {
    chain: baseSepolia,
    transport: http(),
    version: getMEEVersion(MEEVersion.V2_1_0)
  },
  // Missing accountAddress
});
```

## Troubleshooting

If you encounter issues during the migration:

### Upgrade Transaction Fails

- Ensure the account has sufficient funds for gas
- Verify the account is properly deployed on-chain
- Check that your application is using the latest SDK version

### Cannot Access Account After Upgrade

- Make sure you're using the correct account address in the `accountAddress` parameter
- Verify the upgrade transaction completed successfully
- Ensure you're using the exact same address as your pre-migration account

## Next Steps

After successfully migrating your Nexus account:

1. **STORE YOUR ACCOUNT ADDRESS** in your application's persistent storage
2. **Update your application code** to use the `accountAddress` parameter in all future interactions
3. **Test thoroughly** with real transactions to ensure everything works as expected

By following this migration guide and properly storing your account address, you've successfully upgraded your Nexus account to the latest implementation while preserving its address, balance, and history.
