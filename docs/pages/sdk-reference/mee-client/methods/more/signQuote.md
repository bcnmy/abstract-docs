# signQuote

The `signQuote` method is the second step in the three-step process for executing transactions through the MEE. It takes a quote obtained from `getQuote` and generates a digital signature that authorizes the execution of the transactions specified in the quote.

This step is crucial for user flow control, as it allows developers to insert confirmation steps between getting a quote and executing it, enabling users to approve transaction costs before proceeding.

## Usage

```typescript
const signedQuote = await meeClient.signQuote({
  quote
});
```

## Parameters

### `quote`

The quote object returned from `getQuote`.

```typescript
type SignQuoteParameters = {
  quote: GetQuotePayload;
  account?: SmartAccountSigner; // Optional account to use for signing
};
```

## Return Value

Returns a Promise that resolves to a signed quote payload.

```typescript
type SignQuotePayload = GetQuotePayload & {
  signature: Hex;
};
```

## Examples

### Basic Example

```typescript
import { createMeeClient, toMultichainNexusAccount, mcUSDC } from "@biconomy/abstractjs";
import { http, zeroAddress } from "viem";
import { optimism, base } from "viem/chains";

// Setup multichain account
const mcNexus = await toMultichainNexusAccount({
  chains: [optimism, base],
  signer: eoaAccount,
  transports: [http(), http()]
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

// After user confirmation, sign the quote
const signedQuote = await meeClient.signQuote({ quote });

// Now the signed quote can be executed
const { hash } = await meeClient.executeSignedQuote({
  signedQuote
});
```

### With Custom Account Signer

In some cases, you might want to use a specific account signer different from the one configured in the MEE client:

```typescript
import { createMeeClient, toMultichainNexusAccount, mcUSDC } from "@biconomy/abstractjs";
import { privateKeyToAccount } from "viem/accounts";
import { optimism, base } from "viem/chains";

// Create a specific signer
const customSigner = privateKeyToAccount("0x..." /* private key */);

// ... setup client and get quote as in previous example

// Sign the quote with the custom signer
const signedQuote = await meeClient.signQuote({ 
  quote,
  account: customSigner 
});

// Execute the signed quote
const { hash } = await meeClient.executeSignedQuote({
  signedQuote
});
```

## Error Handling

The `signQuote` method can throw errors in several situations:

```typescript
try {
  const signedQuote = await meeClient.signQuote({
    quote
  });
  
  console.log("Quote successfully signed");
} catch (error) {
  if (error.message.includes("signature")) {
    console.error("Failed to sign the quote. Check signer permissions.");
  } else if (error.message.includes("format")) {
    console.error("Invalid quote format");
  } else {
    console.error("Error signing quote:", error);
  }
}
```

## Related Methods

- [`getQuote`](/sdk-reference/mee-client/methods/getQuote) - Get a quote for executing instructions
- [`executeSignedQuote`](/sdk-reference/mee-client/methods/more/executeSignedQuote) - Execute a signed quote
- [`execute`](/sdk-reference/mee-client/methods/more/execute) - Convenience method that combines all three steps

## When to Use

Use `signQuote` as part of the three-step process (getQuote → signQuote → executeSignedQuote) when:
- You need to display gas costs to users before they authorize the transaction
- You want to implement a confirmation step in your application's UX flow
- You need to ensure users have explicitly approved the transaction costs
- You're building a UI with "Approve" and "Reject" buttons for transaction confirmation 