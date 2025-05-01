# runtimeEncodeAbiParameters

The `runtimeEncodeAbiParameters` function encodes complex data structures with runtime values for use in smart contract interactions. This is particularly useful when you need to pass structured data that includes dynamic values determined at execution time.

## Overview

Smart contracts often require complex structured data as input parameters. The `runtimeEncodeAbiParameters` function allows you to encode this data while incorporating runtime values like token balances or references to previous transaction outputs.

This is especially useful for:
- Creating complex parameter tuples or structs with runtime components
- Encoding calldata for contracts with complex parameter requirements
- Working with ABI-encoded byte parameters that contain dynamic values

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| types | `AbiParameter[]` | Yes | Array of parameter types according to ABI specification |
| values | `any[]` | Yes | Array of values to encode (can include runtime values) |

## Examples

### Basic Usage

```typescript
// Encode complex parameters with one runtime value
const encodedData = runtimeEncodeAbiParameters(
  [
    { name: "x", type: "uint256" },
    { name: "y", type: "uint256" },
    { name: "z", type: "bool" }
  ],
  [
    420n,  // Static value
    runtimeERC20BalanceOf({  // Dynamic value resolved at execution time
      targetAddress: mcNexus.addressOn(chainId),
      tokenAddress: mcUSDC.addressOn(chainId)
    }),
    true  // Static value
  ]
);

// Use the encoded data in a contract call
const instruction = await mcNexus.buildComposable({
  type: "default",
  data: {
    to: contractAddress,
    abi: CONTRACT_ABI,
    functionName: "processData",
    args: [encodedData],  // Pass as a single bytes parameter
    chainId: chainId
  }
});
```

### Complex Nested Structures

```typescript
// Create a complex nested structure with runtime values
const encodedStruct = runtimeEncodeAbiParameters(
  [
    { name: "owner", type: "address" },
    { name: "amounts", type: "uint256[]" },
    { name: "details", type: "tuple", components: [
      { name: "active", type: "bool" },
      { name: "limit", type: "uint256" }
    ]}
  ],
  [
    mcNexus.addressOn(chainId),
    [
      100n,
      runtimeERC20BalanceOf({
        targetAddress: mcNexus.addressOn(chainId),
        tokenAddress: mcUSDC.addressOn(chainId)
      })
    ],
    [
      true,
      500n
    ]
  ]
);
```

### Using in a Contract Method

```typescript
// Example from the tests: calling a contract with complex encoded parameters
const instruction = await mcNexus.buildComposable({
  type: "default",
  data: {
    to: fooContractAddress,
    abi: FOO_CONTRACT_ABI,
    functionName: "foo",
    args: [
      param1,
      param2,
      runtimeEncodeAbiParameters(
        [
          { name: "x", type: "uint256" },
          { name: "y", type: "uint256" },
          { name: "z", type: "bool" }
        ],
        [
          420n,
          runtimeERC20BalanceOf({
            targetAddress: mcNexus.addressOn(chainId),
            tokenAddress: mcUSDC.addressOn(chainId),
            constraints: []
          }),
          true
        ]
      ),
      param4,
      param5
    ],
    chainId: chainId
  }
});
```

## When to Use

Use `runtimeEncodeAbiParameters` when:

- Working with contracts that require complex structured inputs
- You need to combine static values with dynamic runtime values in a single parameter
- Passing tuples, structs, or arrays that contain runtime values
- Creating encoded calldata with dynamic components for custom contract interactions