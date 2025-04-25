# Methods

The Nexus client provides a comprehensive set of methods for interacting with smart accounts. The methods are categorized into different types based on their functionality.

## Transaction Methods

- [debugUserOperation](/sdk-reference/bundler-client/methods/debugUserOperation): Debug a user operation
- [sendTokenPaymasterUserOp](/sdk-reference/bundler-client/methods/sendTokenPaymasterUserOp): Send a user operation using ERC-20 tokens for gas payment
- [sendTransaction](/sdk-reference/bundler-client/methods/more/sendTransaction): Send a transaction from the smart account
- [sendUserOperation](/sdk-reference/bundler-client/methods/sendUserOperation): Send a user operation to the bundler
- [upgradeSmartAccount](/sdk-reference/bundler-client/methods/upgradeSmartAccount): Upgrade the smart account to a new implementation

## Preparation Methods

- [prepareTokenPaymasterUserOp](/sdk-reference/bundler-client/methods/prepareTokenPaymasterUserOp): Prepare a user operation using ERC-20 tokens for gas payment
- [prepareUserOperation](/sdk-reference/bundler-client/methods/more/prepareUserOperation): Prepare a user operation
- [prepareUserOperationWithoutSignature](/sdk-reference/bundler-client/methods/more/prepareUserOperationWithoutSignature): Prepare a user operation without adding a signature

## Signing Methods

- [signMessage](/sdk-reference/bundler-client/methods/more/signMessage): Sign a message with the smart account
- [signTypedData](/sdk-reference/bundler-client/methods/more/signTypedData): Sign typed data with the smart account

## Status & Information Methods

- [getGasFeeValues](/sdk-reference/bundler-client/methods/more/getGasFeeValues): Get estimated gas fee values
- [getUserOperationReceipt](/sdk-reference/bundler-client/methods/more/getUserOperationReceipt): Get the receipt of a user operation
- [waitForUserOperationReceipt](/sdk-reference/bundler-client/methods/waitForUserOperationReceipt): Wait for a user operation receipt

## Network Methods

- [getChainId](/sdk-reference/bundler-client/methods/more/getChainId): Get the chain ID

## ERC-7579 Methods

- [accountId](/sdk-reference/bundler-client/methods/more/accountId): Get the account ID
- [getActiveHook](/sdk-reference/bundler-client/methods/more/getActiveHook): Get the active hook
- [getFallbackBySelector](/sdk-reference/bundler-client/methods/more/getFallbackBySelector): Get the fallback by selector
- [getInstalledExecutors](/sdk-reference/bundler-client/methods/more/getInstalledExecutors): Get installed executors
- [getInstalledModules](/sdk-reference/bundler-client/methods/more/getInstalledModules): Get all installed modules
- [getInstalledValidators](/sdk-reference/bundler-client/methods/more/getInstalledValidators): Get installed validators
- [installModule](/sdk-reference/bundler-client/methods/more/installModule): Install a module
- [isModuleInstalled](/sdk-reference/bundler-client/methods/more/isModuleInstalled): Check if a module is installed
- [supportsExecutionMode](/sdk-reference/bundler-client/methods/more/supportsExecutionMode): Check if an execution mode is supported
- [supportsModule](/sdk-reference/bundler-client/methods/more/supportsModule): Check if a module is supported
- [uninstallModule](/sdk-reference/bundler-client/methods/more/uninstallModule): Uninstall a module
