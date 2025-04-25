# deploymentOn

The `deploymentOn` method retrieves deployment information for a smart account on a specific chain. It can operate in strict or non-strict mode to handle cases where deployments don't exist.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `chainId` | `number` | The ID of the chain to query |
| `strictMode` | `boolean` | (Optional) Whether to throw an error if no deployment exists for the specified chain |

## Returns

| Return Type | Description |
|------------|-------------|
| `ModularSmartAccount` | When strictMode is true or deployment exists |
| `ModularSmartAccount \| undefined` | When strictMode is false and deployment may not exist |

## Example

```typescript
// Get deployment with strict mode (throws if not found). Type safely returns the ModularSmartAccount
const optimismDeployment = account.deploymentOn(10, true);

// Get deployment without strict mode (returns undefined if not found)
const baseDeployment = account.deploymentOn(8453);

// Use the deployment
if (baseDeployment) {
  const address = baseDeployment.address;
  const chainId = baseDeployment.client.chain?.id;
}
```

## Error Handling

Throws an error if:
- `strictMode` is true and no deployment exists for the specified chain
- Invalid chain ID is provided

## Type Definitions

### ModularSmartAccount
```typescript
type ModularSmartAccount = {
  address: Hex
  client: SmartAccountClient
  entryPoint: Address
  factoryAddress: Address
  initCode: Hex
}
```

### DeploymentOnFunction
```typescript
type DeploymentOnFunction = {
  (chainId: number, strictMode: true): ModularSmartAccount
  (chainId: number, strictMode?: false): ModularSmartAccount | undefined
}
```
