# MultichainNexusAccount

The `MultichainNexusAccount` represents a smart account that can be deployed and operated across multiple chains. It provides methods for managing balances, bridging tokens, and executing transactions across different networks.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `chains` | `Chain[]` | Array of chains where the account will be deployed |
| `signer` | `Signer` | The signer instance used for account creation |
| `validatorAddress` | `Address` | (Optional) Custom validator address |
| `factoryAddress` | `Address` | (Optional) Custom factory address |
| `attesters` | `Address[]` | (Optional) Custom attesters array |

## Returns

| Property | Type | Description |
|----------|------|-------------|
| `deployments` | `ModularSmartAccount[]` | Array of account deployments across different chains |
| `signer` | `Signer` | The signer associated with this multichain account |
| `deploymentOn` | `(chainId: number, strictMode?: boolean) => ModularSmartAccount \| undefined` | Function to get deployment for a specific chain |
| `addressOn` | `(chainId: number, strictMode?: boolean) => Hex \| undefined` | Function to get address for a specific chain |

## Example

```typescript
const account = await toMultichainNexusAccount({
  signer: mySigner,
  chains: [optimism, base]
});

// Get deployment on specific chain
const optimismDeployment = account.deploymentOn(10);

// Check token balance across chains
const balance = await account.getUnifiedERC20Balance(mcUSDC);

```

## Error Handling

Throws an error if:
- Invalid chain configuration is provided
- Signer is not connected
- Account deployment fails on any chain

## Type Definitions

### MultichainNexusParams
```typescript
type MultichainNexusParams = Partial<Omit<ToNexusSmartAccountParameters, "signer">> & {
  chains: Chain[]
  signer: Signer
}
```

### MultichainSmartAccount
```typescript
type MultichainSmartAccount = {
  deployments: ModularSmartAccount[]
  signer: Signer
  deploymentOn: (chainId: number, strictMode?: boolean) => ModularSmartAccount | undefined
  addressOn: (chainId: number, strictMode?: boolean) => Hex | undefined
}
``` 