# build

The `build` method creates transaction instructions for the MEE Client, serving as the primary way to construct operations that will be executed across multiple blockchains as part of supertransactions.

## What is the `build` Method?

The `build` method is a fundamental building block in the AbstractJS SDK that transforms your desired actions into standardized instruction objects that the MEE (Modular Execution Environment) can understand and execute. It serves as the bridge between your application logic and the cross-chain execution infrastructure.

## Why is `build` Important?

The `build` method is critical for several reasons:

- **Creates Standardized Instructions**: Transforms your application-specific operations into a universal format that the MEE Client can process.

- **Supports Multiple Action Types**: Provides a consistent interface for creating different types of operations (transfers, approvals, intents, etc.).

- **Enables Supertransactions**: The instructions created by `build` are the components that make up supertransactions - cross-chain operations executed with a single signature.

- **Abstracts Complexity**: Handles the technical details of encoding contract calls, managing chain-specific parameters, and preparing instructions for execution.

- **Supports Modularity**: Built instructions can be combined, sequenced, and customized to create complex cross-chain workflows.

## When to Use `build` vs `buildComposable`

### Use `build` When:

- You need to create standard blockchain operations with known parameters
- You're working with static values that won't change between creation and execution
- You want to bridge tokens from one chain to another using intents
- You're performing basic operations like transfers, approvals, or withdrawals
- You need to create a batch of transactions on the same chain
- You're creating instructions for immediate execution with `getQuote` and `executeQuote`

Example:
```typescript
// Bridge tokens from Optimism to Base using an intent
const bridgeIntent = await mcAccount.build({
  type: "intent",
  data: {
    amount: parseUnits("5", 6),  // Fixed, known amount
    mcToken: mcUSDC,
    toChain: base
  }
});

// Execute the intent as a supertransaction
const quote = await meeClient.getQuote({
  instructions: [bridgeIntent],
  feeToken: {
    address: mcUSDC.addressOn(optimism.id),
    chainId: optimism.id
  }
});

const { hash } = await meeClient.executeQuote({ quote });
```

### Use `buildComposable` When:

- You need runtime values that are determined at execution time
- Your operations depend on results from other operations
- You're working with values that may change between creation and execution
- You need advanced constraints or conditional logic
- You're creating complex cross-chain workflows with interdependencies

## Real-World Use Cases for `build`

1. **Token Bridging**: Create intent instructions to move tokens from one chain to another.

2. **Multi-Step DeFi Operations**: Bundle multiple operations (approval, swap, liquidity provision) on a single chain.

3. **Cross-Chain Portfolio Rebalancing**: Move tokens between chains based on predetermined allocation.

4. **NFT Minting and Trading**: Create instructions to mint, approve, and trade NFTs across multiple marketplaces.

5. **Cross-Chain DAO Governance**: Submit proposals and vote on multiple chains with a single user action.

## Building Supertransactions

A supertransaction is a powerful abstraction that allows a single user signature to execute operations across multiple blockchains. The process of creating a supertransaction involves:

1. **Building Instructions**: Use `build` (or `buildComposable` for advanced cases) to create the instructions for each operation.

2. **Gathering Instructions**: Collect all instructions into an array.

3. **Getting a Quote**: Pass the instructions to `meeClient.getQuote()` along with fee payment details.

4. **Executing the Quote**: Call `meeClient.executeQuote()` with the quote to execute the supertransaction.

Example of a complete supertransaction workflow:

```typescript
// 1. Build instructions for operations on different chains
const optimismTransfer = await mcAccount.build({
  type: "transfer",
  data: {
    chainId: optimism.id,
    tokenAddress: mcUSDC.addressOn(optimism.id),
    amount: parseUnits("10", 6),
    recipient: recipientAddress
  }
});

const baseSwap = await mcAccount.build({
  type: "default",
  data: {
    chainId: base.id,
    calls: [{
      to: swapRouterAddress,
      data: encodeSwapFunction(/* swap parameters */),
      value: 0n
    }]
  }
});

// 2. Combine instructions
const instructions = [optimismTransfer, baseSwap];

// 3. Get quote for the supertransaction
const quote = await meeClient.getQuote({
  instructions,
  feeToken: {
    address: mcUSDC.addressOn(optimism.id),
    chainId: optimism.id
  }
});

// 4. Execute the supertransaction
const { hash } = await meeClient.executeQuote({ quote });

// 5. Wait for receipt
const receipt = await meeClient.waitForSupertransactionReceipt({ hash });
```

This workflow demonstrates how `build` serves as the foundation for creating powerful cross-chain experiences with minimal user interaction.

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
