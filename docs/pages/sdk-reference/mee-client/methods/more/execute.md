# execute

The `execute` method is a convenience function that combines three steps into a single operation:

1. Fetches a quote using `getQuote`
2. Signs the quote using `signQuote`
3. Executes the signed quote using `executeSignedQuote`

This streamlined approach simplifies the process of executing transactions through the MEE.

> **Important Limitation**: When using the `execute` method, there is no intermediate step to display gas values to users for confirmation. If your application requires showing gas costs to users before proceeding with the transaction, you should use the individual methods (`getQuote`, `signQuote`, and `executeSignedQuote`) instead.

## Usage

```typescript
const { hash } = await meeClient.execute({
  instructions: instructions,
  feeToken: {
    address: mcUSDC.addressOn(chainId),
    chainId
  }
});
```

## Parameters

### `instructions` 

An array of instruction objects that describe the transactions to be executed.

```typescript
type Instruction = {
  calls: {
    to: Address; // Recipient address
    gasLimit?: bigint; // Optional gas limit
    value: bigint; // Amount of native tokens to send (in wei)
    data?: Hex; // Call data for the transaction
  }[];
  chainId: number; // Target chain ID
};
```

### `feeToken`

Information about the token used to pay for transaction fees.

```typescript
type FeeTokenInfo = {
  address: Address; // Token contract address
  chainId: number; // Chain ID where the fee token resides
};
```

## Return Value

Returns a Promise that resolves to an execution payload containing transaction details.

```typescript
interface ExecuteSignedQuotePayload {
  hash: Hex; // Transaction hash
  // Additional transaction details may be included
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
  ],
});

// Create MEE client
const meeClient = await createMeeClient({ account: mcNexus });

// Define fee token on payment chain (optimism in this case)
const feeToken = {
  address: mcUSDC.addressOn(optimism.id),
  chainId: optimism.id
};

// Execute a simple transaction on the target chain
const { hash } = await meeClient.execute({
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

// Wait for transaction receipt
const receipt = await meeClient.waitForSupertransactionReceipt({ hash });
console.log("Transaction completed:", receipt);
```

### Complex Example with Multiple Instructions

```typescript
import { createMeeClient, toMultichainNexusAccount, mcUSDC, getMEEVersion, MEEVersion } from "@biconomy/abstractjs";
import { parseUnits } from "viem";
import { optimism, base } from "viem/chains";

// Setup account and client
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

const meeClient = await createMeeClient({ account: mcNexus });

// Define payment token
const feeToken = {
  address: mcUSDC.addressOn(optimism.id),
  chainId: optimism.id
};

// Prepare multiple instructions using build
const transferAmount = parseUnits("10", 6); // 10 USDC with 6 decimals
const recipientAddress = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";

// First instruction: Intent to move tokens to target chain
const bridgeInstruction = await mcNexus.build({
  type: "intent",
  data: {
    amount: transferAmount,
    mcToken: mcUSDC,
    toChain: base
  }
});

// Second instruction: Transfer tokens to recipient on target chain
const transferInstruction = await mcNexus.build({
  type: "transfer",
  data: {
    chainId: base.id,
    tokenAddress: mcUSDC.addressOn(base.id),
    amount: transferAmount,
    recipient: recipientAddress
  }
});

// Combine instructions and execute
const { hash } = await meeClient.execute({
  instructions: [bridgeInstruction, transferInstruction],
  feeToken
});

// Wait for transaction completion
const receipt = await meeClient.waitForSupertransactionReceipt({ hash });
console.log("Cross-chain transfer completed:", receipt);
```

## Error Handling

The `execute` method can throw errors at any of the three stages:

1. During quote generation (`getQuote`)
2. During quote signing (`signQuote`)
3. During execution (`executeSignedQuote`)

Here's how to handle potential errors:

```typescript
try {
  const { hash } = await meeClient.execute({
    instructions,
    feeToken
  });
  
  console.log("Transaction submitted:", hash);
  
  const receipt = await meeClient.waitForSupertransactionReceipt({ hash });
  console.log("Transaction completed:", receipt);
} catch (error) {
  if (error.message.includes("insufficient funds")) {
    console.error("Not enough tokens to pay for transaction fees");
  } else if (error.message.includes("signature")) {
    console.error("Failed to sign the transaction");
  } else if (error.message.includes("execution reverted")) {
    console.error("Transaction execution failed");
  } else {
    console.error("Error executing transaction:", error);
  }
}
```

## Comparison with Manual Approach

The `execute` method combines three separate API calls into one for convenience. If you need more control over the process, you can use the individual methods instead:

```typescript
// Manual approach with separate steps
const quote = await meeClient.getQuote({
  instructions,
  feeToken
});

// At this point, you can display gas costs to the user
console.log("Gas fee in tokens:", quote.paymentInfo.amount);
console.log("Token symbol:", quote.paymentInfo.tokenSymbol);

// Proceed with signing and execution only after user confirmation
const signedQuote = await meeClient.signQuote({ quote });
const { hash } = await meeClient.executeSignedQuote({ signedQuote });
```

This is equivalent to:

```typescript
// Streamlined approach with execute
const { hash } = await meeClient.execute({
  instructions,
  feeToken
});
```

### When to Use Each Approach

- Use `execute` when:
  - You don't need to display gas costs to users before proceeding
  - You're building automated processes without user interaction
  - Simplicity is more important than granular control

- Use the manual approach (`getQuote` → `signQuote` → `executeSignedQuote`) when:
  - You need to show users the gas costs before they confirm
  - You want to implement custom logic between steps
  - Your app requires more complex error handling at each stage

The `execute` method is recommended for most use cases where you don't need special handling between the quote, signing, and execution steps.
