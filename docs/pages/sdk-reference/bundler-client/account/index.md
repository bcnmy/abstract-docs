# Nexus Account

The Nexus Account is a smart contract account that enables powerful account abstraction features and cross-chain functionality within the AbstractJS SDK.

## Overview

The Nexus Account provides a seamless way to interact with smart contracts across multiple chains while leveraging account abstraction capabilities (ERC-4337). It serves as the foundation for executing transactions through both the Bundler Client and MEE Client.

## Modularity & Benefits

Nexus implements the ERC-7579 modular smart account standard with five key module types:

- **Validator Modules**: Handle transaction authorization and signature validation
- **Executor Modules**: Execute custom transaction logic across protocols
- **Hook Modules**: Perform checks before and after transaction execution
- **Fallback Modules**: Handle specialized contract interactions
- **Prevalidation Hooks**: Process transaction details before validation

This modular architecture delivers significant advantages:

### User Experience
- Gasless transactions with any token for gas fees
- Batch multiple operations in single transactions
- Transaction automation and session keys

### Security
- Custom validation rules and multi-signature support
- Account recovery mechanisms
- Spending limits and transaction guards

### Cross-Chain
- Interact with multiple blockchains using a single account
- Build complex workflows with runtime-resolved values
- Seamless asset transfers between networks

The modular design ensures Nexus accounts can adapt to evolving blockchain ecosystems while maintaining security and user-friendliness.

## Key Features

| Feature | Description |
|---------|-------------|
| Account Abstraction | Based on ERC-4337 standard for gasless transactions and batch operations |
| Cross-Chain Support | Works seamlessly across multiple blockchain networks |
| Modular Architecture | Supports customizable validation modules and executor modules |
| Composability | Enables complex cross-chain transactions through runtime values |
| EIP-1271 Signatures | Native support for contract-based signatures verification |
| Delegation | Ability to delegate transaction authorization via EIP-7702 |

## Creating a Nexus Account

```typescript
import { toNexusAccount } from '@biconomy/abstractjs';
import { createWalletClient, http } from 'viem';
import { mainnet } from 'viem/chains';

// Create a basic Nexus account with default settings
const nexusAccount = await toNexusAccount({
  chain: mainnet,
  transport: http(),
  signer: yourSigner // EOA, private key, or other signer
});

// Create a Nexus account with custom settings
const customNexusAccount = await toNexusAccount({
  chain: mainnet,
  transport: http(),
  signer: yourSigner,
  index: 1n, // Optional salt for account address derivation
  validators: [customValidator], // Custom validator modules
  executors: [customExecutor], // Custom executor modules
  hook: customHook, // Custom hook module
  fallbacks: [customFallback] // Custom fallback modules
});
```

## Core Methods

| Method | Description |
|--------|-------------|
| `getAddress()` | Gets the counterfactual address of the account |
| `getInitCode()` | Gets the initialization code required for account deployment |
| `encodeExecute(call)` | Encodes a single transaction call |
| `encodeExecuteBatch(calls)` | Encodes multiple transaction calls for batch execution |
| `encodeExecuteComposable(calls)` | Encodes calls for composable execution with runtime values |
| `signMessage(message)` | Signs a message using the account's active module |
| `signTypedData(data)` | Signs typed data (EIP-712) with the account |
| `getNonce()` | Gets the current nonce for the account |
| `getModule()` | Gets the active validation module |
| `setModule(validationModule)` | Sets a new active validation module |
| `toDelegation()` | Creates authorization data for EOA to smart account delegation |
| `unDelegate()` | Revokes previous delegation |
| `isDelegated()` | Checks if the account is currently delegated |

## Important Notes

1. When using composable transactions with runtime values (such as `runtimeERC20BalanceOf`), you must use `encodeExecuteComposable()` method.

2. The account can be used with both the Bundler Client for regular transactions and the MEE Client for cross-chain operations.

3. For security-sensitive operations, you can configure custom validation modules that implement different signature validation schemes.

## Bundler Client Methods

The Nexus Account can be used with the Bundler Client to perform various operations. See the following method references for detailed information:

- [sendUserOperation](../methods/sendUserOperation.md) - Submit a custom User Operation
- [sendTokenPaymasterUserOp](../methods/sendTokenPaymasterUserOp.md) - Send a transaction with ERC-20 token for gas
- [waitForUserOperationReceipt](../methods/waitForUserOperationReceipt.md) - Wait for a User Operation to be confirmed
- [estimateUserOperationGas](../methods/more/estimateUserOperationGas.md) - Estimate gas for a User Operation
- [getUserOperation](../methods/more/getUserOperation.md) - Retrieve information about a User Operation
- [getUserOperationReceipt](../methods/more/getUserOperationReceipt.md) - Get the receipt for a User Operation
- [prepareUserOperation](../methods/more/prepareUserOperation.md) - Prepare a User Operation without sending it
- [prepareTokenPaymasterUserOp](../methods/prepareTokenPaymasterUserOp.md) - Prepare a User Operation with token paymaster
- [getSupportedEntryPoints](../methods/more/getSupportedEntryPoints.md) - Get the supported EntryPoints
- [getChainId](../methods/more/getChainId.md) - Get the current chain ID
- [debugUserOperation](../methods/debugUserOperation.md) - Debug a User Operation
- [upgradeSmartAccount](../methods/upgradeSmartAccount.md) - Upgrade your Nexus Account implementation

For a complete overview of all available methods, see the [methods index](../methods/index.md).
