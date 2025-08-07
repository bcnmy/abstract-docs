# Account Migration Guide

This section covers how to migrate between different versions of Biconomy smart accounts. AbstractJS provides migration paths that preserve your users' account addresses, balances, and transaction history while upgrading to newer implementations.

## Key Migration Concepts

### Address Preservation

The most important concept in any smart account migration is **address preservation**. When you migrate a smart account:

- The account's address remains unchanged
- All assets and tokens stay with the account
- External contracts and services that interact with the account continue to work
- User experience remains seamless with no visible interruption

### Migration Types

AbstractJS supports the following migration paths:

1. [**V2 to Nexus Migration**](/migrations/v2ToNexus): Migrate from Biconomy Smart Account v2 to Nexus accounts
2. [**Nexus to Nexus Migration**](/migrations/nexusToNexus): Upgrade between different versions of Nexus accounts

## Why User Address Persistence Is Critical

Smart account addresses are the cornerstone of user identity and asset ownership in blockchain applications. It's **absolutely essential** to maintain these addresses during and after migration for several key reasons:

### 1. Asset Preservation

All user assets (tokens, NFTs, etc.) are associated with their account address. If this address changes or access is lost:

- Users lose access to all their funds and digital assets
- Recovery may be impossible, resulting in permanent loss

### 2. External Relationship Preservation

Smart account addresses establish relationships with other contracts and services:

- Token allowances and approvals are tied to specific addresses
- DAO memberships, governance rights, and voting power
- Access control in permissioned systems

### 3. Technical Requirements

After migration, you **must always** use the `accountAddress` parameter when recreating the account instance:

```typescript
// CORRECT: Specifying accountAddress preserves access to the existing account
const nexusAccount = await toNexusAccount({
  signer: eoaAccount,
  chainConfiguration: {
    chain: baseChain,
    transport: http(),
    version: getMEEVersion(MEEVersion.V2_1_0)
  },
  accountAddress: "0xUserExistingAccountAddress" // CRITICAL!
});

// INCORRECT: Without accountAddress, a new account is created
// This will result in loss of access to the existing account and its funds!
const newAccount = await toNexusAccount({
  signer: eoaAccount,
  chainConfiguration: {
    chain: baseChain,
    transport: http(),
    version: getMEEVersion(MEEVersion.V2_1_0)
  },
});
```

## Best Practices for Migration

### 1. Store Account Addresses Persistently

Always store user account addresses in a persistent database or storage:

- Server-side database for backend applications
- Local storage or secure storage for frontend applications
- Consider multiple backup locations for critical applications

### 2. Test Before Full Deployment

- Run the migration on testnets first
- Perform small test transactions after migration
- Verify all functionality works as expected with the migrated account

### 3. Provide User Guidance

If your application has end users:

- Communicate the migration timeline in advance
- Explain that the migration preserves all assets and functionality
- Provide clear instructions for any user-initiated steps

### 4. Maintain Version Records

Keep records of:

- The account version before migration
- The account version after migration
- Timestamps of when migrations occurred

## Framework Support

AbstractJS provides comprehensive migration support with automatic handling of:

- Account implementation upgrades
- Initialization with the correct parameters
- Module installation and configuration
- Compatible validator setup

## Migration Links

Choose the appropriate migration path based on your current account type:

- [Migrate from V2 to Nexus](/migrations/v2ToNexus)
- [Upgrade Nexus Accounts](/migrations/nexusToNexus)

For additional support with migrations, please refer to the [AbstractJS GitHub repository](https://github.com/bcnmy/abstractjs) or join our [Discord community](https://discord.gg/biconomy).
