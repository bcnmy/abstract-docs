# build

The `build` method creates transaction instructions based on different action types. It supports building various types of instructions including default transactions, bridge intents, transfers, approvals, and withdrawals.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| baseParams | `BaseInstructionsParams` | Yes | Base configuration for building instructions |
| baseParams.account | `BaseMultichainSmartAccount` | Yes | The multichain smart account to check balances for |
| baseParams.currentInstructions | `Instruction[]` | No | Array of existing instructions to append to |
| parameters | `BuildInstructionTypes` | Yes | The build action configuration |
| parameters.type | `"default" \| "intent" \| "transfer" \| "transferFrom" \| "approve" \| "withdrawal"` | Yes | The type of build action |
| parameters.data | Various (see below) | Yes | Action-specific parameters based on the type |

### Build Action Types

#### Default Instructions (`type: "default"`)
```typescript
type BuildDefaultParameters = {
  calls: {
    to: Address
    value?: bigint
    gasLimit?: bigint
    data?: Hex
  }[]
  chainId: number
}
```

#### Bridge Intent (`type: "intent"`)
```typescript
type BuildIntentParameters = {
  amount: bigint
  mcToken: MultichainToken
  toChain: Chain
}
```

#### Transfer (`type: "transfer"`)
```typescript
type BuildTransferParameters = {
  chainId: number
  tokenAddress: Address
  amount: bigint
  gasLimit?: bigint
  recipient?: Address
}
```

#### Transfer From (`type: "transferFrom"`)
```typescript
type BuildTransferFromParameters = {
  chainId: number
  tokenAddress: Address
  amount: bigint
  gasLimit?: bigint
  sender: Address
  recipient: Address
}
```

#### Approve (`type: "approve"`)
```typescript
type BuildApproveParameters = {
  chainId: number
  tokenAddress: Address
  amount: bigint
  gasLimit?: bigint
  spender: Address
}
```

#### Withdrawal (`type: "withdrawal"`)
```typescript
type BuildWithdrawalParameters = {
  chainId: number
  tokenAddress: Address
  amount: bigint
  gasLimit?: bigint
  recipient?: Address
}
```

## Returns

Promise resolving to an array of `Instruction` containing:

| Property | Type | Description |
|----------|------|-------------|
| chainId | `number` | Chain ID where the instruction will be executed |
| calls | `Call[]` | Array of contract calls to execute |
| calls[].to | `Address` | Target contract address |
| calls[].value | `bigint` | Amount of native tokens to send |
| calls[].gasLimit | `bigint` | Gas limit for the call |
| calls[].data | `Hex` | Encoded call data |

## Examples

### Bridge Intent Example
```typescript
const bridgeInstructions = await mcAccount.build({
  type: "intent",
  data: {
    amount: parseUnits("1", 6), // 1 USDC
    mcToken: mcUSDC,
    toChain: optimism
  }
});
```

### Token Transfer Example
```typescript
const transferInstructions = await mcAccount.build({
  type: "transfer",
  data: {
    chainId: optimism.id,
    tokenAddress: mcUSDC.addressOn(optimism.id),
    amount: parseUnits("1", 6),
    recipient: "0x..."
  }
});
```

### Token Approval Example
```typescript
const approvalInstructions = await mcAccount.build({
  type: "approve",
  data: {
    chainId: optimism.id,
    tokenAddress: mcUSDC.addressOn(optimism.id),
    amount: parseUnits("1", 6),
    spender: "0x..."
  }
});
```

### Default Transaction Example
```typescript
const defaultInstructions = await mcAccount.build({
  type: "default",
  data: {
    calls: [{ 
      to: "0x...",
      value: 0n,
      gasLimit: 50000n
    }],
    chainId: optimism.id
  }
});
```

## Error Handling

The method will throw an error if:
- Unknown build action type is provided
- Invalid instruction parameters are provided
- Required parameters are missing
- Chain ID is invalid
- Token address is invalid

## Type Definitions

### BuildInstructionTypes
```typescript
type BuildInstructionTypes =
  | BuildDefaultInstruction
  | BuildIntentInstruction
  | BuildTransferInstruction
  | BuildTransferFromInstruction
  | BuildApproveInstruction
  | BuildWithdrawalInstruction
```

### BuildDefaultInstruction
```typescript
type BuildDefaultInstruction = {
  type: "default"
  data: BuildDefaultParams
}
```

### BuildIntentInstruction
```typescript
type BuildIntentInstruction = {
  type: "intent"
  data: BuildIntentParameters
}
```

### BuildTransferInstruction
```typescript
type BuildTransferInstruction = {
  type: "transfer"
  data: BuildTransferParameters
}
```

### BuildTransferFromInstruction
```typescript
type BuildTransferFromInstruction = {
  type: "transferFrom"
  data: BuildTransferFromParameters
}
```

### BuildApproveInstruction
```typescript
type BuildApproveInstruction = {
  type: "approve"
  data: BuildApproveParameters
}
```

### BuildWithdrawalInstruction
```typescript
type BuildWithdrawalInstruction = {
  type: "withdrawal"
  data: BuildWithdrawalParameters
}
```

### BuildDefaultParams
```typescript
type BuildDefaultParams = {
  calls: {
    to: Address
    value?: bigint
    gasLimit?: bigint
    data?: Hex
  }[]
  chainId: number
}
```

### BuildIntentParameters
```typescript
type BuildIntentParameters = {
  amount: bigint
  mcToken: MultichainToken
  toChain: Chain
}
```

### BuildTransferParameters
```typescript
type BuildTransferParameters = {
  chainId: number
  tokenAddress: Address
  amount: bigint
  gasLimit?: bigint
  recipient?: Address
}
```

### BuildTransferFromParameters
```typescript
type BuildTransferFromParameters = {
  chainId: number
  tokenAddress: Address
  amount: bigint
  gasLimit?: bigint
  sender: Address
  recipient: Address
}
```

### BuildApproveParameters
```typescript
type BuildApproveParameters = {
  chainId: number
  tokenAddress: Address
  amount: bigint
  gasLimit?: bigint
  spender: Address
}
```

### BuildWithdrawalParameters
```typescript
type BuildWithdrawalParameters = {
  chainId: number
  tokenAddress: Address
  amount: bigint
  gasLimit?: bigint
  recipient?: Address
}
```
