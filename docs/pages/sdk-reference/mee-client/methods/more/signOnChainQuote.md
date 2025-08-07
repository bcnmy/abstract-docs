# signOnChainQuote

The `signOnChainQuote` method signs a fusion quote with an on-chain transaction. This method is used as part of the flow for executing transactions with tokens that don't support ERC20Permit, where an on-chain approval transaction is needed before executing the quote.

## Usage

```typescript
const signedQuote = await meeClient.signOnChainQuote({
  fusionQuote: onChainQuote,
  confirmations: 2
});
```

## Parameters

### `parameters`

An object containing the parameters for signing an on-chain quote.

```typescript
type SignOnChainQuoteParams = {
  /**
   * The fusion quote to sign, obtained from getOnChainQuote
   */
  fusionQuote: GetOnChainQuotePayload;
  
  /**
   * Optional account to use for signing (defaults to client.account)
   */
  account?: MultichainSmartAccount;
  
  /**
   * The number of confirmations to wait for (defaults to 2)
   */
  confirmations?: number;
}

/**
 * The payload from getOnChainQuote containing quote and trigger information
 */
type GetOnChainQuotePayload = {
  quote: GetQuotePayload;
  trigger: Trigger;
}
```

## Return Value

Returns a Promise that resolves to a `SignOnChainQuotePayload` object containing the quote details with the added signature.

```typescript
type SignOnChainQuotePayload = GetQuotePayload & {
  /**
   * The signature of the quote, produced by sending an on-chain transaction
   */
  signature: Hex;
}
```

## Examples

### Basic Example

```typescript
import { createMeeClient, toMultichainNexusAccount, mcUSDC, getMEEVersion, MEEVersion } from "@biconomy/abstractjs";
import { http } from "viem";
import { mainnet, optimism } from "viem/chains";

// Setup multichain account
const mcNexus = await toMultichainNexusAccount({
  signer: eoaAccount,
  chainConfigurations: [
    {
      chain: mainnet,
      transport: http(),
      version: getMEEVersion(MEEVersion.V2_1_0)
    },
    {
      chain: optimism,
      transport: http(),
      version: getMEEVersion(MEEVersion.V2_1_0)
    }
  ]
});

// Create MEE client
const meeClient = await createMeeClient({ account: mcNexus });

// Token information on Optimism
const tokenAddress = mcUSDC.addressOn(optimism.id);

// Create trigger information
const trigger = {
  chainId: optimism.id,
  tokenAddress: tokenAddress,
  amount: 1000000n // 1 USDC (6 decimals)
};

// Fee token information
const feeToken = {
  address: tokenAddress,
  chainId: optimism.id
};

try {
  // 1. Get an on-chain quote
  const onChainQuote = await meeClient.getOnChainQuote({
    instructions: [
      mcNexus.build({
        type: "default",
        data: {
          calls: [
            {
              to: "0x0000000000000000000000000000000000000000",
              gasLimit: 50000n,
              value: 0n
            }
          ],
          chainId: optimism.id
        }
      })
    ],
    feeToken,
    trigger
  });
  
  console.log("On-chain quote received:");
  console.log(`Quote ID: ${onChainQuote.quote.id}`);
  
  // 2. Sign the on-chain quote (this will send an on-chain transaction)
  const signedQuote = await meeClient.signOnChainQuote({
    fusionQuote: onChainQuote,
    confirmations: 2
  });
  
  console.log("Quote signed with signature:", signedQuote.signature);
  
  // The signedQuote can now be executed with executeSignedQuote
  
} catch (error) {
  console.error("Error during on-chain quote signing:", error);
}
```

### Full Execution Flow Example

```typescript
import { createMeeClient, toMultichainNexusAccount, mcUSDC, getMEEVersion, MEEVersion } from "@biconomy/abstractjs";
import { http, parseUnits } from "viem";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";
import { optimism } from "viem/chains";

// Setup multichain account
const mcNexus = await toMultichainNexusAccount({
  signer: eoaAccount,
  chainConfigurations: [
    {
      chain: optimism,
      transport: http(),
      version: getMEEVersion(MEEVersion.V2_1_0)
    }
  ]
});

// Create MEE client
const meeClient = await createMeeClient({ account: mcNexus });

// Create a recipient account for the transfer
const recipientAccount = privateKeyToAccount(generatePrivateKey());

// Token address on Optimism
const tokenAddress = mcUSDC.addressOn(optimism.id);

// Create trigger for a token transfer
const trigger = {
  chainId: optimism.id,
  tokenAddress: tokenAddress,
  amount: 1n // Minimal amount for testing
};

// Fee token (same as trigger token in this example)
const feeToken = {
  address: tokenAddress,
  chainId: optimism.id
};

// Get deployment information
const sender = mcNexus.signer.address;
const { address: recipient } = mcNexus.deploymentOn(optimism.id, true);

// Get an on-chain quote for a token transfer
const onChainQuote = await meeClient.getOnChainQuote({
  trigger,
  instructions: [
    // Transfer from EOA to smart account
    mcNexus.build({
      type: "transferFrom",
      data: { ...trigger, sender, recipient }
    }),
    // Transfer from smart account to recipient
    mcNexus.build({
      type: "transfer",
      data: {
        ...trigger,
        recipient: recipientAccount.address
      }
    })
  ],
  feeToken
});

// Sign the on-chain quote (this sends an on-chain transaction)
const signedQuote = await meeClient.signOnChainQuote({
  fusionQuote: onChainQuote
});

// Execute the signed quote
const executionResponse = await meeClient.executeSignedQuote({
  signedQuote
});

console.log(`Quote execution submitted with hash: ${executionResponse.hash}`);

// Wait for the supertransaction receipt
const receipt = await meeClient.waitForSupertransactionReceipt({
  hash: executionResponse.hash
});

console.log("Transaction confirmed!");
console.log(`Explorer links: ${receipt.explorerLinks.join(', ')}`);

// Verify the recipient received the tokens
const recipientBalance = await getBalance(
  mcNexus.deploymentOn(optimism.id, true).publicClient,
  recipientAccount.address,
  tokenAddress
);

console.log(`Recipient balance: ${recipientBalance}`);
```

### Using Custom Confirmations

```typescript
import { createMeeClient, toMultichainNexusAccount, mcUSDC, getMEEVersion, MEEVersion } from "@biconomy/abstractjs";
import { http } from "viem";
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

// Define trigger and fee token
const trigger = {
  chainId: optimism.id,
  tokenAddress: mcUSDC.addressOn(optimism.id),
  amount: 1n
};

const feeToken = {
  address: mcUSDC.addressOn(optimism.id),
  chainId: optimism.id
};

// Get on-chain quote
const onChainQuote = await meeClient.getOnChainQuote({
  trigger,
  instructions: [
    mcNexus.build({
      type: "transfer",
      data: {
        chainId: base.id,
        tokenAddress: mcUSDC.addressOn(base.id),
        amount: 1n,
        recipient: "0x1234567890123456789012345678901234567890"
      }
    })
  ],
  feeToken
});

// Sign the quote with a higher confirmation requirement
// This is useful for high-value transactions or on networks with frequent reorgs
const signedQuote = await meeClient.signOnChainQuote({
  fusionQuote: onChainQuote,
  confirmations: 5 // Wait for 5 confirmations instead of the default 2
});

console.log(`Quote signed with 5 confirmations. Signature: ${signedQuote.signature}`);
```

## Error Handling

The `signOnChainQuote` method may throw errors during the on-chain transaction process:

```typescript
try {
  const signedQuote = await meeClient.signOnChainQuote({
    fusionQuote: onChainQuote
  });
  
  // Process the signed quote
  
} catch (error) {
  console.error("Failed to sign on-chain quote:", error);
  
  if (error.message.includes("insufficient funds")) {
    console.log("Your account doesn't have enough funds to send the approval transaction.");
  } else if (error.message.includes("user rejected")) {
    console.log("The transaction was rejected by the user.");
  } else if (error.message.includes("transaction failed")) {
    console.log("The approval transaction failed. This might be due to network congestion or other issues.");
  } else {
    console.log("An unexpected error occurred. Please try again later.");
  }
}
```

## Related Methods

- [`getOnChainQuote`](/sdk-reference/mee-client/methods/more/getOnChainQuote) - Get an on-chain quote to be signed
- [`executeSignedQuote`](/sdk-reference/mee-client/methods/more/executeSignedQuote) - Execute a signed quote
- [`waitForSupertransactionReceipt`](/sdk-reference/mee-client/methods/more/getSupertransactionReceipt) - Wait for a supertransaction receipt

## When to Use

Use `signOnChainQuote` when:
- You need to sign a quote for tokens that don't support ERC20Permit
- You've obtained an on-chain quote with `getOnChainQuote` and need to proceed with execution
- You want to execute a transaction that requires an on-chain approval step
- You're building a flow that requires user confirmation via an on-chain transaction 