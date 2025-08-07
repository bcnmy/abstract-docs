# executeSignedQuote

The `executeSignedQuote` method represents the final step in the quote flow, where a previously signed quote is submitted to the blockchain through the MEE service. This method is part of the three-step process for executing transactions:

1. Get a quote using `getQuote`
2. Sign the quote using `signQuote`
3. Execute the signed quote using `executeSignedQuote`

This method is essential when you need more control over the transaction flow, particularly when you want to display gas fees to users for confirmation before executing the transaction.

## Usage

```typescript
const { hash } = await meeClient.executeSignedQuote({
  signedQuote
});
```

## Parameters

### `signedQuote`

The signed quote payload obtained from `signQuote`.

```typescript
type ExecuteSignedQuoteParams = {
  signedQuote: SignQuotePayload;
}
```

## Return Value

Returns a Promise that resolves to an object containing the transaction hash.

```typescript
type ExecuteSignedQuotePayload = {
  hash: Hex; // The transaction hash of the executed supertransaction
}
```

## Examples

### Basic Example

```typescript
import { createMeeClient, toMultichainNexusAccount, mcUSDC, getMEEVersion, MEEVersion } from "@biconomy/abstractjs";
import { http, zeroAddress } from "viem";
import { optimism, base } from "viem/chains";

// Setup multichain account
const mcNexus = await toMultichainNexusAccount({
  signer: eoaAccount,
  chainConfigurations: [
    {
      chain: optimism,
      transport: http(),
      version: getMEEVersion(MEEVersion.V2_1_0)
    },
    {
      chain: base,
      transport: http(),
      version: getMEEVersion(MEEVersion.V2_1_0)
    }
  ]
});

// Create MEE client
const meeClient = await createMeeClient({ account: mcNexus });

// Define fee token on payment chain
const feeToken = {
  address: mcUSDC.addressOn(optimism.id),
  chainId: optimism.id
};

// Step 1: Get a quote
const quote = await meeClient.getQuote({
  instructions: [
    {
      calls: [
        { 
          to: zeroAddress, 
          value: 0n, 
          gasLimit: 50000n 
        }
      ],
      chainId: base.id
    }
  ],
  feeToken
});

// Display gas cost to user for confirmation
console.log("Gas fee in tokens:", quote.paymentInfo.amount);
console.log("Token symbol:", quote.paymentInfo.tokenSymbol);

// Step 2: Sign the quote after user confirms
const signedQuote = await meeClient.signQuote({ quote });

// Step 3: Execute the signed quote
const { hash } = await meeClient.executeSignedQuote({
  signedQuote
});

// Wait for transaction receipt
const receipt = await meeClient.waitForSupertransactionReceipt({ hash });
console.log("Transaction completed:", receipt);
```

### Full Flow with User Confirmation

```typescript
import { createMeeClient, toMultichainNexusAccount, mcUSDC, getMEEVersion, MEEVersion } from "@biconomy/abstractjs";
import { parseUnits } from "viem";
import { optimism, base } from "viem/chains";

// Setup account and client
const mcNexus = await toMultichainNexusAccount({
  chainConfigurations: [
    {
      chain: optimism,
      transport: http(),
      version: getMEEVersion(MEEVersion.V2_1_0)
    },
    {
      chain: base,
      transport: http(),
      version: getMEEVersion(MEEVersion.V2_1_0)
    }
  ],
  signer: eoaAccount,
  transports: [http(), http()]
});

const meeClient = await createMeeClient({ account: mcNexus });

// Define instructions for a token transfer
const transferAmount = parseUnits("10", 6); // 10 USDC with 6 decimals
const recipientAddress = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";

// Define payment token
const feeToken = {
  address: mcUSDC.addressOn(optimism.id),
  chainId: optimism.id
};

// Step 1: Get quote for a cross-chain token transfer
const quote = await meeClient.getQuote({
  instructions: [
    mcNexus.build({
      type: "intent",
      data: {
        amount: transferAmount,
        mcToken: mcUSDC,
        toChain: base
      }
    }),
    mcNexus.build({
      type: "transfer",
      data: {
        chainId: base.id,
        tokenAddress: mcUSDC.addressOn(base.id),
        amount: transferAmount,
        recipient: recipientAddress
      }
    })
  ],
  feeToken
});

// Calculate USD equivalent for better UX (example)
const tokenDecimals = 6; // USDC has 6 decimals
const amountInToken = Number(quote.paymentInfo.amount) / 10**tokenDecimals;
console.log(`This transaction will cost approximately ${amountInToken} ${quote.paymentInfo.tokenSymbol}`);

// Simulate user confirmation (in a real app, this would be a UI prompt)
const userConfirmed = await userConfirmationPrompt(amountInToken, quote.paymentInfo.tokenSymbol);

if (userConfirmed) {
  // Step 2: Sign the quote
  const signedQuote = await meeClient.signQuote({ quote });
  
  // Step 3: Execute the signed quote
  const { hash } = await meeClient.executeSignedQuote({
    signedQuote
  });
  
  console.log("Transaction submitted with hash:", hash);
  
  // Wait for transaction completion
  const receipt = await meeClient.waitForSupertransactionReceipt({ hash });
  console.log("Cross-chain transfer completed:", receipt);
} else {
  console.log("Transaction cancelled by user");
}

// Helper function for user confirmation (in a real app, this would be a UI component)
async function userConfirmationPrompt(amount, symbol) {
  // In a real application, this would be a UI prompt
  // Here we're just simulating a confirmation
  return true; // User confirmed
}
```

## Error Handling

The `executeSignedQuote` method can throw errors in several situations:

```typescript
try {
  const { hash } = await meeClient.executeSignedQuote({
    signedQuote
  });
  
  console.log("Transaction submitted:", hash);
} catch (error) {
  if (error.message.includes("insufficient funds")) {
    console.error("Not enough tokens to pay for transaction fees");
  } else if (error.message.includes("signature")) {
    console.error("Invalid signature in the signed quote");
  } else if (error.message.includes("execution reverted")) {
    console.error("Transaction execution failed");
  } else {
    console.error("Error executing signed quote:", error);
  }
}
```

## Related Methods

- [`getQuote`](/sdk-reference/mee-client/methods/getQuote) - Get a quote for executing instructions
- [`signQuote`](/sdk-reference/mee-client/methods/more/signQuote) - Sign a quote before execution 
- [`execute`](/sdk-reference/mee-client/methods/more/execute) - Convenience method that combines all three steps
- [`waitForSupertransactionReceipt`](/sdk-reference/mee-client/methods/waitForSupertransactionReceipt) - Wait for a transaction receipt

## When to Use

Use `executeSignedQuote` as part of the three-step process (getQuote → signQuote → executeSignedQuote) when:
- You need to display gas costs to users before execution
- You want more control over error handling at each stage
- You need to implement custom logic between steps
