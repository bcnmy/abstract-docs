# getFusionQuote

Gets a fusion quote that enables EOA (Externally Owned Account) holders to execute cross-chain transactions based on token triggers. This method is specifically designed to support EOA users who want to perform conditional cross-chain operations without needing to first upgrade to a smart account. The fusion quote includes both the trigger conditions and the instructions to be executed when those conditions are met.

## Usage

```typescript
import { createMeeClient } from "@biconomy/abstractjs";
import { mcUSDC } from "@biconomy/abstractjs";
import { optimism, base } from "viem/chains";

const meeClient = createMeeClient({ account: mcNexus });

const fusionQuote = await meeClient.getFusionQuote({
  trigger: {
    chainId: optimism.id,
    tokenAddress: mcUSDC.addressOn(optimism.id),
    amount: parseUnits("0.1", 6)
  },
  instructions: [
    mcNexus.build({ ... }),
    mcNexus.build({ ... })
  ],
  feeToken: {
    address: mcUSDC.addressOn(optimism.id),
    chainId: optimism.id
  }
});
```

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| trigger | `Trigger` | Yes | The condition that must be met for the transaction to execute |
| instructions | `InstructionLike[]` | Yes | Array of instructions to be executed |
| feeToken | `FeeTokenInfo` | Yes | Token to be used for paying transaction fees |
| account | `MultichainSmartAccount` | No | Optional smart account to execute the transaction |
| path | `string` | No | Path to the quote endpoint. Defaults to "v1/fusion/quote" |

### Trigger Object

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| chainId | `number` | Yes | Chain ID where the trigger condition will be monitored |
| tokenAddress | `Address` | Yes | Address of the token to monitor |
| amount | `bigint` | Yes | Amount of tokens required to trigger the transaction |

### FeeTokenInfo Object

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| address | `Address` | Yes | Address of the fee token |
| chainId | `number` | Yes | Chain ID where the fee token is deployed |

## Response

| Property | Type | Description |
|----------|------|-------------|
| hash | `Hex` | Hash of the fusion transaction |
| node | `Address` | Address of the MEE node |
| commitment | `Hex` | Commitment hash for the fusion quote |
| paymentInfo | `FilledPaymentInfo` | Complete payment information with token amounts |
| userOps | `MeeFilledUserOpDetails[]` | Array of user operations with their details |
| trigger | `Trigger` | The trigger condition for the fusion quote |

## Example

```typescript
import { parseUnits } from "viem";
import { optimism, base } from "viem/chains";
import { aave, mcUSDC, mcAaveV3Pool } from "@biconomy/abstractjs";

const amountToSupply = parseUnits("0.1", 6);

// Example of using getFusionQuote with AAVE protocol
const fusionQuote = await meeClient.getFusionQuote({
  trigger: {
    chainId: optimism.id,
    tokenAddress: mcUSDC.addressOn(optimism.id),
    amount: amountToSupply
  },
  instructions: [
    mcNexus.build({
      type: "intent",
      data: {
        amount: amountToSupply,
        mcToken: mcUSDC,
        toChain: base
      }
    }),
    mcNexus.build({
      type: "approve",
      data: {
        chainId: base.id,
        tokenAddress: mcUSDC.addressOn(base.id),
        amount: amountToSupply,
        spender: aave.pool.addressOn(base.id)
      }
    }),
    mcAaveV3Pool.build({
      type: "supply",
      data: {
        chainId: base.id,
        args: [
          mcUSDC.addressOn(base.id),
          amountToSupply,  // 100 USDC
          mcNexus.addressOn(base.id, true),
          0
        ]
      }
    })
  ],
  feeToken: {
    address: mcUSDC.addressOn(optimism.id),
    chainId: optimism.id
  },
});

// Execute the fusion quote
const { hash } = await meeClient.executeFusionQuote({ fusionQuote });

// Wait for the transaction receipt
const receipt = await meeClient.waitForSupertransactionReceipt({ hash });
```

## Error Handling

The method will throw an error if:
- The account is not deployed on required chains
- The fee token is not supported
- The chain(s) are not supported by the node
- The trigger conditions are invalid
- The API request fails
