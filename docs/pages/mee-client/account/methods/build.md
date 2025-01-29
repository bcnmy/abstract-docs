# build

The `build` method creates transaction instructions based on different action types. It supports building default instructions and bridge intent instructions.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `baseParams` | `BaseInstructionsParams` | Base configuration for building instructions |
| `baseParams.account` | `BaseMultichainSmartAccount` | The multichain smart account to check balances for |
| `baseParams.currentInstructions` | `Instruction[]` | (Optional) Array of existing instructions to append to |
| `parameters` | `BuildInstructionTypes` | The build action configuration |
| `parameters.type` | `"default" \| "intent"` | The type of build action |
| `parameters.data` | `BuildDefaultParams \| BuildIntentParameters` | Action-specific parameters based on the type |

## Returns

Promise resolving to an array of `Instruction` containing:

| Property | Type | Description |
|----------|------|-------------|
| `chainId` | `number` | Chain ID where the instruction will be executed |
| `calls` | `Call[]` | Array of contract calls to execute |
| `calls[].to` | `Address` | Target contract address |
| `calls[].value` | `bigint` | Amount of native tokens to send |
| `calls[].gasLimit` | `bigint` | Gas limit for the call |
| `calls[].data` | `Hex` | Encoded call data |

## Example

```typescript
// These instructions can be passed to the getQuote method of the meeClient
const instructions = [
    // Building bridge intent instructions
    mcAccount.build({
        type: "intent",
        data: {
            amount: BigInt("1000000"), // 1 USDC
            mcToken: mcUSDC,
            toChain: optimism
        }
    }),
    // Building default instructions
    mcAccount.build({
        type: "default",
        data: {
            calls: [{ 
                to: "0x...", 
                value: 0n 
            }],
            chainId: targetChain.id
        }
    })
]

// Get quote for the instructions
const quote = await meeClient.getQuote({ instructions, ... });
```

## Error Handling

Throws an error if:
- Unknown build action type is provided
- Invalid instruction parameters are provided
- Bridge intent building fails

## Type Definitions

### BuildInstructionTypes
```typescript
type BuildInstructionTypes =
  | BuildDefaultInstruction
  | BuildIntentInstruction
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

### BuildDefaultParams
```typescript
type BuildDefaultParams = {
  instructions: Instruction[] | Instruction
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
