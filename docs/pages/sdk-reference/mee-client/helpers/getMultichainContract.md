# getMultichainContract

Creates a contract instance that can encode function calls and read state across multiple chains. The SDK provides several pre-configured multichain contracts like mcUSDC, mcUniswapSwapRouter, and mcAaveV3Pool that can be used out of the box. This is a simple in-memory dictionary used to index similar contracts that have been previously deployed to different chains.

## Parameters

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| abi | Abi | Yes | The contract's ABI |
| deployments | [Address, number][] | Yes | Array of tuples containing [address, chainId] for each deployment |

## Returns

Returns a `MultichainContract` instance with the following methods:

| Method | Description |
|--------|-------------|
| `on(chainId)` | Returns a chain-specific contract instance with methods for each contract function |
| `build(params)` | Builds an instruction for function execution |
| `addressOn(chainId)` | Gets contract address for a specific chain |
| `read(params)` | Reads contract state across multiple chains |

## Basic Example

```typescript
import { getMultichainContract } from "@biconomy/abstractjs";
import { erc20Abi } from "viem";
import { optimism, base } from "viem/chains";

// Create a multichain contract instance
const mcUSDC = getMultichainContract({
  abi: erc20Abi,
  deployments: [
    ["0x7F5c764cBc14f9669B88837ca1490cCa17c31607", optimism.id], // Optimism USDC
    ["0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", base.id]      // Base USDC
  ]
});

// Get contract address on a specific chain
const optimismUSDCAddress = mcUSDC.addressOn(optimism.id);
console.log("USDC on Optimism:", optimismUSDCAddress);
```

## Creating Instructions

The `on` method provides a chain-specific contract instance with methods for each function in the ABI:

```typescript
// Create a transfer instruction using the 'on' method
const recipient = "0x1111111111111111111111111111111111111111";
const amount = parseUnits("1.0", 6); // 1 USDC with 6 decimals
const gasLimit = 100000n;

const transferInstruction = mcUSDC.on(optimism.id).transfer({
  args: [recipient, amount],
  gasLimit,
  value: 0n // Optional, defaults to 0n
});

// The instruction can be used in getQuote
const quote = await meeClient.getQuote({
  instructions: [transferInstruction],
  feeToken: {
    address: mcUSDC.addressOn(optimism.id),
    chainId: optimism.id
  }
});
```

Alternatively, you can use the `build` method to create instructions:

```typescript
// Create a transfer instruction using the 'build' method
const transferInstruction = await mcUSDC.build({
  type: "transfer", // The function name in the ABI
  data: {
    chainId: optimism.id,
    args: [recipient, amount],
    gasLimit: 100000n // Optional
  }
});

console.log("Chain ID:", transferInstruction.chainId);
console.log("Calls:", transferInstruction.calls.length);
```

## Reading Contract State

You can read contract state across multiple chains using the `read` method:

```typescript
// Read balances across chains
const balances = await mcUSDC.read({
  onChains: [optimism, base],
  functionName: "balanceOf",
  args: [myAddress],
  account: mcNexus
});

balances.forEach(({ chainId, result }) => {
  console.log(`Balance on chain ${chainId}: ${result}`);
});
```

## AAVE Integration Example

Here's a more complex example using the AAVE protocol:

```typescript
import { mcAaveV3Pool, mcUSDC } from "@biconomy/abstractjs";
import { parseUnits } from "viem";

// Define amount to supply
const amountToSupply = parseUnits("0.1", 6); // 0.1 USDC

// Create an AAVE supply instruction
const supplyInstruction = mcAaveV3Pool.build({
  type: "supply",
  data: {
    chainId: targetChain.id,
    args: [
      mcUSDC.addressOn(targetChain.id),  // Asset to supply
      amountToSupply,                    // Amount to supply
      mcNexus.signer.address,            // On behalf of
      0                                  // Referral code
    ]
  }
});

// Create an approval instruction first
const approvalInstruction = mcUSDC.build({
  type: "approve",
  data: {
    chainId: targetChain.id,
    args: [
      mcAaveV3Pool.addressOn(targetChain.id),  // Spender
      amountToSupply                          // Amount
    ]
  }
});

// Get quote for both instructions
const quote = await meeClient.getQuote({
  instructions: [approvalInstruction, supplyInstruction],
  feeToken: {
    address: mcUSDC.addressOn(paymentChain.id),
    chainId: paymentChain.id
  }
});
```

## Error Handling

The Multichain Contract methods throw errors in these cases:

```typescript
// Error when accessing a non-existent deployment
try {
  const address = mcUSDC.addressOn(1); // Assuming no deployment on chain ID 1
} catch (error) {
  console.error(error.message); // "No deployment found for chain 1"
}

// Error when calling a non-existent function
try {
  // TypeScript would catch this at compile time, but this can happen at runtime
  mcUSDC.on(optimism.id).nonExistentFunction({
    args: [],
    gasLimit: 100000n
  });
} catch (error) {
  console.error(error.message); // "Function nonExistentFunction not found in ABI"
}
```

## Type Definitions

### MultichainContract
```typescript
type MultichainContract<TAbi extends Abi> = {
  abi: TAbi
  deployments: Map<number, Address>
  on: (chainId: number) => ChainSpecificContract<TAbi>
  addressOn: (chainId: number) => Address
  read: <TFunctionName extends ContractFunctionName<TAbi, "pure" | "view">>(params: {
    onChains: Chain[]
    functionName: TFunctionName
    args: ContractFunctionArgs<TAbi, "pure" | "view", TFunctionName>
    account: MultichainSmartAccount
  }) => Promise<Array<{
    chainId: number
    result: ContractFunctionReturnType<TAbi, "pure" | "view", TFunctionName>
  }>>
  build: <TFunctionName extends ContractFunctionName<TAbi, "payable" | "nonpayable">>(params: {
    type: TFunctionName
    data: {
      chainId: number
      args: ContractFunctionArgs<TAbi, "payable" | "nonpayable", TFunctionName>
      gasLimit?: bigint
    }
  }) => Promise<Instruction>
}
```

