# getFusionQuote

Gets a fusion quote that enables EOA (Externally Owned Account) holders to execute cross-chain transactions based on token triggers. This method is specifically designed to support EOA users who want to perform conditional cross-chain operations without needing to first upgrade to a smart account. The fusion quote includes both the trigger conditions and the instructions to be executed when those conditions are met.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| trigger | `Trigger` | Yes | The condition that must be met for the transaction to execute |
| instructions | `InstructionLike[]` | Yes | Array of instructions to be executed |
| feeToken | `FeeTokenInfo` | Yes | Token to be used for paying transaction fees |

### Trigger Object

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| chainId | `number` | Yes | Chain ID where the trigger condition will be monitored |
| tokenAddress | `Address` | Yes | Address of the token to monitor |
| amount | `bigint` | Yes | Amount of tokens required to trigger the transaction |
| useMaxAvailableAmount | `boolean` | No | Whether to use the maximum available token balance, automatically accounting for gas fees. When true, the specified amount will be ignored and the maximum available balance after deducting gas fees will be used. Should be used in combination with runtimeERC20BalanceOf in the instruction which uses the permitted token. Default is false. |

### FeeTokenInfo Object

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| address | `Address` | Yes | Address of the fee token |
| chainId | `number` | Yes | Chain ID where the fee token is deployed |

## Returns

The method returns a fusion quote that can be passed to `executeFusionQuote` to execute the transaction when the trigger condition is met.

## Basic Example

```typescript
// Define the trigger condition
const trigger = {
  chainId: paymentChain.id,
  tokenAddress: mcUSDC.addressOn(paymentChain.id),
  amount: 1n  // The amount that will trigger the transaction
};

// Get a fusion quote
const fusionQuote = await meeClient.getFusionQuote({
  trigger,
  instructions: [
    mcNexus.build({
      type: "default",
      data: {
        calls: [
          {
            to: zeroAddress,
            gasLimit: 50000n,
            value: 0n
          }
        ],
        chainId: paymentChain.id
      }
    })
  ],
  feeToken: {
    address: mcUSDC.addressOn(paymentChain.id),
    chainId: paymentChain.id
  }
});

// Execute the fusion quote
const { hash } = await meeClient.executeFusionQuote({ fusionQuote });
```

## AAVE Integration Example

```typescript
import { parseUnits } from "viem";

// Define the amount to supply to AAVE
const amountToSupply = parseUnits("0.1", 6);  // 0.1 USDC

// Check aUSDC balance before the transaction
const balanceBefore = await getBalance(
  mcNexus.deploymentOn(targetChain.id, true).publicClient,
  mcNexus.signer.address,
  mcAUSDC.addressOn(targetChain.id)
);

// Define the trigger for the transaction
const trigger = {
  chainId: paymentChain.id,
  tokenAddress: mcUSDC.addressOn(paymentChain.id),
  amount: amountToSupply
};

// Get a fusion quote for AAVE operations
const fusionQuote = await meeClient.getFusionQuote({
  instructions: [
    // Bridge USDC if needed
    mcNexus.build({
      type: "intent",
      data: {
        amount: amountToSupply,
        mcToken: mcUSDC,
        toChain: targetChain
      }
    }),
    // Approve AAVE to spend USDC
    mcNexus.build({
      type: "approve",
      data: {
        chainId: targetChain.id,
        tokenAddress: mcUSDC.addressOn(targetChain.id),
        amount: amountToSupply,
        spender: aave.pool.addressOn(targetChain.id)
      }
    }),
    // Supply USDC to AAVE
    mcAaveV3Pool.build({
      type: "supply",
      data: {
        chainId: targetChain.id,
        args: [
          mcUSDC.addressOn(targetChain.id),
          amountToSupply,
          mcNexus.signer.address,
          0
        ]
      }
    })
  ],
  feeToken: {
    address: mcUSDC.addressOn(paymentChain.id),
    chainId: paymentChain.id
  },
  trigger
});

// Execute the fusion quote
const { hash } = await meeClient.executeFusionQuote({ fusionQuote });

// Wait for the transaction receipt
const receipt = await meeClient.waitForSupertransactionReceipt({
  hash
});

// Verify that aUSDC balance increased
const balanceAfter = await getBalance(
  mcNexus.deploymentOn(targetChain.id, true).publicClient,
  mcNexus.signer.address,
  mcAUSDC.addressOn(targetChain.id)
);
console.log(`aUSDC balance increased: ${balanceAfter > balanceBefore}`);
```

## Complete Transaction Flow

Here's a complete transaction flow using `getFusionQuote` and related methods:

```typescript
import { parseUnits } from "viem";
import { mcUSDC } from "@biconomy/abstractjs";

// 1. Define the trigger condition
const trigger = {
  chainId: paymentChain.id,
  tokenAddress: mcUSDC.addressOn(paymentChain.id),
  amount: parseUnits("0.1", 6)  // 0.1 USDC
};

// 2. Get a fusion quote
const fusionQuote = await meeClient.getFusionQuote({
  trigger,
  instructions: [
    mcNexus.build({
      type: "transfer",
      data: {
        ...trigger,
        recipient: recipientAddress
      }
    })
  ],
  feeToken: {
    address: mcUSDC.addressOn(paymentChain.id),
    chainId: paymentChain.id
  }
});

// 3. Execute the fusion quote
const { hash } = await meeClient.executeFusionQuote({ fusionQuote });

// 4. Wait for the transaction receipt
const receipt = await meeClient.waitForSupertransactionReceipt({
  hash,
  confirmations: 3  // Optional: wait for multiple confirmations
});

// 5. Check transaction status
if (receipt.transactionStatus === "MINED_SUCCESS") {
  console.log("Transaction completed successfully!");
  console.log("Explorer links:", receipt.explorerLinks);
} else {
  console.error("Transaction failed:", receipt.transactionStatus);
}
```

## Implementation Details

Under the hood, `getFusionQuote` automatically determines whether to use permit-based or standard transactions by checking the payment token's permit support:

```typescript
const { permitEnabled } = await getPaymentToken(client, parameters.trigger);
return permitEnabled
  ? getPermitQuote(client, parameters)
  : getOnChainQuote(client, parameters);
```

## Related Methods

- [`executeFusionQuote`](/sdk-reference/mee-client/methods/executeFusionQuote) - Execute a fusion quote
- [`waitForSupertransactionReceipt`](/sdk-reference/mee-client/methods/waitForSupertransactionReceipt) - Wait for a transaction to complete
