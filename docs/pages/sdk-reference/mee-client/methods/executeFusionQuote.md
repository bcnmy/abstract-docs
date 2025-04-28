# executeFusionQuote

The `executeFusionQuote` method enables EOA (Externally Owned Account) holders to execute cross-chain transactions with trigger conditions. This method combines `signFusionQuote` and `executeSignedQuote` into a single operation, making it easier for EOA users to perform conditional cross-chain transactions without first upgrading to a smart account. It automatically handles the signing process (either permit or on-chain) and executes the transaction in one step.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| fusionQuote | `FusionQuote` | Yes | The fusion quote to execute, obtained from `getFusionQuote` |

## Returns

| Property | Type | Description |
|----------|------|-------------|
| hash | `Hex` | The transaction hash of the executed supertransaction |

## Example

Based on the test files, here's how to use `executeFusionQuote`:

```typescript
import { createMeeClient } from "@biconomy/abstractjs";
import { mcUSDC } from "@biconomy/abstractjs";

// Define the transaction trigger
const trigger = {
  chainId: paymentChain.id,
  tokenAddress: mcUSDC.addressOn(paymentChain.id),
  amount: 1n // Amount of tokens that triggers the transaction
};

// Get a fusion quote
const fusionQuote = await meeClient.getFusionQuote({
  trigger,
  instructions: [
    mcNexus.build({
      type: "transfer",
      data: {
        ...trigger, // Same chain, token and amount
        recipient: recipientAddress
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

// Wait for the transaction with optional confirmations
const receipt = await meeClient.waitForSupertransactionReceipt({
  hash,
  confirmations: 3
});

// Transaction links
console.log(receipt.explorerLinks);
```

## Example with AAVE Integration

```typescript
import { parseUnits } from "viem";
import { aave, mcUSDC, mcAUSDC } from "@biconomy/abstractjs";

const amountToSupply = parseUnits("0.1", 6); // 0.1 USDC

// Check balance before the transaction
const balanceBefore = await getBalance(
  mcNexus.deploymentOn(targetChain.id, true).publicClient,
  mcNexus.signer.address,
  mcAUSDC.addressOn(targetChain.id)
);

// Define trigger
const trigger = {
  chainId: paymentChain.id,
  tokenAddress: mcUSDC.addressOn(paymentChain.id),
  amount: amountToSupply
};

// Get fusion quote for AAVE supply operation
const fusionQuote = await meeClient.getFusionQuote({
  trigger,
  instructions: [
    // Bridge USDC to target chain if needed
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
  }
});

// Execute the fusion quote
const { hash } = await meeClient.executeFusionQuote({ fusionQuote });

// Wait for the transaction receipt
const receipt = await meeClient.waitForSupertransactionReceipt({
  hash
});

// Verify increased aUSDC balance
const balanceAfter = await getBalance(
  mcNexus.deploymentOn(targetChain.id, true).publicClient,
  mcNexus.signer.address,
  mcAUSDC.addressOn(targetChain.id)
);
console.log(`aUSDC balance increased: ${balanceAfter > balanceBefore}`);
```

## Checking for Transaction Success

After executing a fusion quote, you should wait for the receipt and check if it was successful:

```typescript
const receipt = await meeClient.waitForSupertransactionReceipt({ hash });

if (receipt.transactionStatus === "MINED_SUCCESS") {
  console.log("Transaction completed successfully!");
  console.log("View transaction:");
  receipt.explorerLinks.forEach(link => console.log(link));
} else {
  console.error("Transaction failed:", receipt.transactionStatus);
}
```

## Related Methods

- [`getFusionQuote`](/sdk-reference/mee-client/methods/getFusionQuote) - Get a fusion quote to execute
- [`waitForSupertransactionReceipt`](/sdk-reference/mee-client/methods/waitForSupertransactionReceipt) - Wait for a transaction to complete