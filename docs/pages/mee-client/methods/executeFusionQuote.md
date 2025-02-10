# executeFusionQuote

The `executeFusionQuote` method enables EOA (Externally Owned Account) holders to execute cross-chain transactions with trigger conditions. This method combines `signFusionQuote` and `executeSignedQuote` into a single operation, making it easier for EOA users to perform conditional cross-chain transactions without first upgrading to a smart account. It automatically handles the signing process (either permit or on-chain) and executes the transaction in one step.

## Usage

```typescript
import { createMeeClient } from "@biconomy/abstractjs";
import { mcUSDC } from "@biconomy/abstractjs";
import { optimism, base } from "viem/chains";

const meeClient = createMeeClient({ account: mcNexus });

const { hash } = await meeClient.executeFusionQuote({
  fusionQuote: await meeClient.getFusionQuote({
    trigger: {
      chainId: optimism.id,
      tokenAddress: mcUSDC.addressOn(optimism.id),
      amount: parseUnits("1", 6) // 1 USDC
    },
    instructions: [
      mcNexus.build({
        type: "transfer",
        data: {
          chainId: base.id,
          tokenAddress: mcUSDC.addressOn(base.id),
          amount: parseUnits("1", 6),
          recipient: "0x..."
        }
      })
    ],
    feeToken: {
      address: mcUSDC.addressOn(optimism.id),
      chainId: optimism.id
    }
  })
});

// Wait for the transaction receipt
const receipt = await meeClient.waitForSupertransactionReceipt({ hash });
```

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| fusionQuote | `FusionQuote` | Yes | The fusion quote to execute |
| account | `MultichainSmartAccount` | No | Optional account to use for signing |

### FusionQuote Object

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| trigger | `Trigger` | Yes | The condition that must be met for execution |
| instructions | `InstructionLike[]` | Yes | Array of instructions to execute |
| feeToken | `FeeTokenInfo` | Yes | Token used for paying transaction fees |

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
| hash | `Hex` | The transaction hash of the executed supertransaction |

## Example with AAVE Integration

```typescript
import { parseUnits } from "viem";
import { optimism, base } from "viem/chains";
import { aave, mcUSDC } from "@biconomy/abstractjs";

const amountToSupply = parseUnits("100", 6); // 100 USDC

const { hash } = await meeClient.executeFusionQuote({
  fusionQuote: await meeClient.getFusionQuote({
    trigger: {
      chainId: optimism.id,
      tokenAddress: mcUSDC.addressOn(optimism.id),
      amount: amountToSupply
    },
    instructions: [
      // Bridge USDC from Optimism to Base
      mcNexus.build({
        type: "intent",
        data: {
          amount: amountToSupply,
          mcToken: mcUSDC,
          toChain: base
        }
      }),
      // Approve AAVE to spend USDC
      mcNexus.build({
        type: "approve",
        data: {
          chainId: base.id,
          tokenAddress: mcUSDC.addressOn(base.id),
          amount: amountToSupply,
          spender: aave.pool.addressOn(base.id)
        }
      }),
      // Supply USDC to AAVE
      aave.pool.on(base.id).supply({
        args: [
          mcUSDC.addressOn(base.id),
          amountToSupply,
          mcNexus.signer.address,
          0
        ]
      })
    ],
    feeToken: {
      address: mcUSDC.addressOn(optimism.id),
      chainId: optimism.id
    }
  })
});

// Wait for the transaction receipt
const receipt = await meeClient.waitForSupertransactionReceipt({ 
  hash,
  confirmations: 3 
});
```