# waitForSupertransactionReceipt

Waits for a super transaction receipt to be available and returns the transaction details along with explorer links.

## Usage

```typescript
const receipt = await meeClient.waitForSuperTransactionReceipt(hash);
```

## Parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `hash` | `Hex` | The hash of the super transaction to wait for |

## Returns

Returns a promise that resolves to an object containing:

| Property | Type | Description |
| -------- | ---- | ----------- |
| `hash` | `Hex` | The hash of the super transaction |
| `node` | `Address` | Address of the MEE node that processed the transaction |
| `commitment` | `Hex` | Commitment hash for the transaction |
| `paymentInfo` | `FilledPaymentInfo` | Payment information object (see below) |
| `userOps` | `MeeFilledUserOpDetails[]` | Array of user operations (see below) |
| `explorerLinks` | `Url[]` | Array of links to view the transaction on block explorers |

### FilledPaymentInfo Object

| Property | Type | Description |
| -------- | ---- | ----------- |
| `token` | `Address` | Address of the token used for payment |
| `amount` | `bigint` | Amount of tokens to be paid |
| `decimals` | `number` | Number of decimals for the token |
| `symbol` | `string` | Token symbol |
| `exchangeRate` | `string` | Exchange rate used for the transaction |

### MeeFilledUserOpDetails Object

| Property | Type | Description |
| -------- | ---- | ----------- |
| `chainId` | `number` | Chain ID where the operation is executed |
| `sender` | `Address` | Address of the sender account |
| `nonce` | `bigint` | Account nonce |
| `initCode` | `Hex` | Account initialization code (if needed) |
| `callData` | `Hex` | The call data for the operation |
| `callGasLimit` | `bigint` | Gas limit for the main execution |
| `verificationGasLimit` | `bigint` | Gas limit for signature verification |
| `preVerificationGas` | `bigint` | Gas required for pre-verification |
| `maxFeePerGas` | `bigint` | Maximum fee per gas unit |
| `maxPriorityFeePerGas` | `bigint` | Maximum priority fee per gas unit |
| `paymasterAndData` | `Hex` | Paymaster contract address and data |
| `signature` | `Hex` | Operation signature |
| `factory` | `Address` | Account factory address |
| `executionStatus` | `"SUCCESS" \| "PENDING" \| "FAILED"` | Status of the operation execution |
| `executionData` | `Hex` | Data returned from the execution |
| `executionError` | `string \| null` | Error message if execution failed |

## Behavior

- Polls the MEE explorer API until all user operations are no longer in a "PENDING" state
- Uses the client's `pollingInterval` (defaults to 1000ms) between checks
- Throws an error if any user operation fails or contains invalid execution data
- Automatically generates relevant block explorer links for the transaction