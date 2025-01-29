# addressOn

The `addressOn` method retrieves the smart account address for a specific chain. It can operate in strict or non-strict mode to handle cases where deployments don't exist.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `chainId` | `number` | The ID of the chain to query |
| `strictMode` | `boolean` | (Optional) Whether to throw an error if no deployment exists for the specified chain |

## Returns

| Return Type | Description |
|------------|-------------|
| `Hex` | When strictMode is true or deployment exists |
| `Hex \| undefined` | When strictMode is false and deployment may not exist |

## Example

```typescript
// Get address with strict mode (throws if not found). Type safely returns the address
const optimismAddress = account.addressOn(10, true);

// Get address without strict mode (returns undefined if not found)
const baseAddress = account.addressOn(8453);

// Use the address
if (baseAddress) {
  console.log(`Account address on Base: ${baseAddress}`);
}
```

## Error Handling

Throws an error if:
- `strictMode` is true and no deployment exists for the specified chain
- Invalid chain ID is provided

## Type Definitions

### AddressOnFunction
```typescript
type AddressOnFunction = {
  (chainId: number, strictMode: true): Hex
  (chainId: number, strictMode?: false): Hex | undefined
}
```
