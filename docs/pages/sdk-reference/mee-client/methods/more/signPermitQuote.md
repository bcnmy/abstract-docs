# signPermitQuote

The `signPermitQuote` method signs a permit quote using EIP-2612 permit signatures. This enables gasless approvals for ERC20 tokens that implement the permit extension, allowing for more efficient transactions without requiring separate approval transactions.

## Usage

```typescript
const signedQuote = await meeClient.signPermitQuote({
  fusionQuote: permitQuote
});
```

## Parameters

### `parameters`

An object containing the parameters for signing a permit quote.

```typescript
type SignPermitQuoteParams = {
  /**
   * The fusion quote to sign, obtained from getPermitQuote
   */
  fusionQuote: GetPermitQuotePayload;
  
  /**
   * Optional account to use for signing (defaults to client.account)
   */
  account?: MultichainSmartAccount;
}

/**
 * The payload from getPermitQuote containing quote and trigger information
 */
type GetPermitQuotePayload = {
  quote: GetQuotePayload;
  trigger: Trigger;
}

/**
 * Trigger information
 */
type Trigger = {
  /**
   * Chain ID where the token exists
   * @example 1 // Ethereum Mainnet
   */
  chainId: number;
  
  /**
   * Address of the token to use for payment
   * Must support ERC20Permit (EIP-2612)
   * @example "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" // USDC
   */
  tokenAddress: Address;
  
  /**
   * Amount of tokens to use, in the token's smallest unit
   * @example 1000000n // 1 USDC (6 decimals)
   */
  amount: bigint;
}
```

## Return Value

Returns a Promise that resolves to a `SignPermitQuotePayload` object containing the quote details with the added permit signature.

```typescript
type SignPermitQuotePayload = GetQuotePayload & {
  /**
   * The signature of the quote, prefixed with '0x02' and concatenated with
   * the encoded permit parameters and signature components
   */
  signature: Hex;
}
```

## Examples

### Basic Example

```typescript
import { createMeeClient, toMultichainNexusAccount, mcUSDC } from "@biconomy/abstractjs";
import { http, zeroAddress } from "viem";
import { mainnet, optimism } from "viem/chains";

// Setup multichain account
const mcNexus = await toMultichainNexusAccount({
  chains: [mainnet, optimism],
  signer: eoaAccount,
  transports: [http(), http()]
});

// Create MEE client
const meeClient = await createMeeClient({ account: mcNexus });

// Token information (using a token that supports EIP-2612 permits)
const tokenAddress = mcUSDC.addressOn(mainnet.id);

// Create trigger information
const trigger = {
  chainId: mainnet.id,
  tokenAddress: tokenAddress,
  amount: 1000000n // 1 USDC (6 decimals)
};

// Fee token information
const feeToken = {
  address: tokenAddress,
  chainId: mainnet.id
};

try {
  // 1. Get a permit quote
  const permitQuote = await meeClient.getPermitQuote({
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
          chainId: optimism.id
        }
      })
    ],
    feeToken,
    trigger
  });
  
  console.log("Permit quote received:");
  console.log(`Quote ID: ${permitQuote.quote.id}`);
  
  // 2. Sign the permit quote
  const signedQuote = await meeClient.signPermitQuote({
    fusionQuote: permitQuote
  });
  
  console.log("Quote signed with signature:", signedQuote.signature);
  
  // The signedQuote can now be executed with executeSignedQuote
  
} catch (error) {
  console.error("Error during permit quote signing:", error);
}
```

### Complete Flow Example with Execution

```typescript
import { createMeeClient, toMultichainNexusAccount, mcUSDC } from "@biconomy/abstractjs";
import { http, generatePrivateKey, privateKeyToAccount } from "viem";
import { mainnet } from "viem/chains";

// Setup multichain account
const mcNexus = await toMultichainNexusAccount({
  chains: [mainnet],
  signer: eoaAccount,
  transports: [http()]
});

// Create MEE client
const meeClient = await createMeeClient({ account: mcNexus });

// Create a recipient account
const recipientAccount = privateKeyToAccount(generatePrivateKey());

// Token address that supports EIP-2612 permit
const tokenAddress = mcUSDC.addressOn(mainnet.id);

// Create trigger for a minimal transfer (for testing)
const trigger = {
  chainId: mainnet.id,
  tokenAddress: tokenAddress,
  amount: 1n
};

// Fee token (same as trigger token in this example)
const feeToken = {
  address: tokenAddress,
  chainId: mainnet.id
};

// Get smart account information
const recipient = mcNexus.addressOn(mainnet.id, true);
const sender = mcNexus.signer.address;

try {
  // 1. Get the fusion quote
  const permitQuote = await meeClient.getPermitQuote({
    trigger,
    instructions: [
      // Transfer from EOA to smart account
      mcNexus.build({
        type: "transferFrom",
        data: { ...trigger, recipient, sender }
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
  
  // Calculate total amount including fees
  const fusionQuote = {
    quote: permitQuote.quote,
    trigger: {
      ...trigger,
      amount: BigInt(trigger.amount) + BigInt(permitQuote.quote.paymentInfo.tokenWeiAmount)
    }
  };
  
  // 2. Sign the permit quote
  const signedQuote = await meeClient.signPermitQuote({ fusionQuote });
  
  // 3. Execute the signed quote
  const { hash } = await meeClient.executeSignedQuote({ signedQuote });
  
  console.log(`Quote execution submitted with hash: ${hash}`);
  
  // 4. Wait for the transaction to be confirmed
  const receipt = await meeClient.waitForSupertransactionReceipt({ hash });
  
  console.log("Transaction confirmed!");
  console.log(`Explorer links: ${receipt.explorerLinks.join(', ')}`);
  
  // 5. Verify the recipient received the tokens
  const recipientBalance = await getBalance(
    mcNexus.deploymentOn(mainnet.id, true).publicClient,
    recipientAccount.address,
    tokenAddress
  );
  
  console.log(`Recipient balance: ${recipientBalance}`);
  
} catch (error) {
  console.error("Error during permit flow:", error);
}
```

### Using Intent and Transaction Instructions

```typescript
import { createMeeClient, toMultichainNexusAccount, mcUSDC } from "@biconomy/abstractjs";
import { http, zeroAddress } from "viem";
import { mainnet, optimism } from "viem/chains";

// Setup multichain account
const mcNexus = await toMultichainNexusAccount({
  chains: [mainnet, optimism],
  signer: eoaAccount,
  transports: [http(), http()]
});

// Create MEE client
const meeClient = await createMeeClient({ account: mcNexus });

// Token address
const tokenAddress = mcUSDC.addressOn(mainnet.id);

// Create trigger
const trigger = {
  chainId: mainnet.id,
  tokenAddress: tokenAddress,
  amount: 1n // Minimal amount for test
};

// Fee token
const feeToken = {
  address: tokenAddress,
  chainId: mainnet.id
};

// Get permit quote for an intent and a transaction
try {
  const fusionQuote = await meeClient.getPermitQuote({
    trigger,
    instructions: [
      // Intent to bridge USDC to the target chain
      mcNexus.build({
        type: "intent",
        data: {
          amount: 1n,
          mcToken: mcUSDC,
          toChain: optimism
        }
      }),
      // A simple transaction on the target chain
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
          chainId: optimism.id
        }
      })
    ],
    feeToken
  });
  
  // Sign the fusion quote with the permit
  const signedQuote = await meeClient.signPermitQuote({ fusionQuote });
  
  console.log("Permit quote signed for intent and transaction");
  console.log(`Number of user operations: ${signedQuote.userOps.length}`);
  console.log(`Quote ID: ${signedQuote.id}`);
  console.log(`Signature: ${signedQuote.signature.slice(0, 66)}...`);
  
} catch (error) {
  console.error("Error signing permit quote:", error);
}
```

## Error Handling

The `signPermitQuote` method may throw errors during the signing process:

```typescript
try {
  const signedQuote = await meeClient.signPermitQuote({
    fusionQuote: permitQuote
  });
  
  // Process the signed quote
  
} catch (error) {
  console.error("Failed to sign permit quote:", error);
  
  if (error.message.includes("does not support ERC20Permit")) {
    console.log("The specified token does not support ERC20Permit (EIP-2612). Use signOnChainQuote instead.");
  } else if (error.message.includes("user rejected")) {
    console.log("The signature request was rejected by the user.");
  } else if (error.message.includes("domain separator")) {
    console.log("Error with token contract domain separator. Verify the token implements permit correctly.");
  } else {
    console.log("An unexpected error occurred. Please try again later.");
  }
}
```

## Related Methods

- [`getPermitQuote`](/sdk-reference/mee-client/methods/more/getPermitQuote) - Get a permit quote to be signed
- [`executeSignedQuote`](/sdk-reference/mee-client/methods/more/executeSignedQuote) - Execute a signed quote
- [`signOnChainQuote`](/sdk-reference/mee-client/methods/more/signOnChainQuote) - Sign a quote for tokens that don't support ERC20Permit

## When to Use

Use `signPermitQuote` when:
- You're working with tokens that support ERC20Permit (EIP-2612)
- You've obtained a permit quote with `getPermitQuote` and need to sign it
- You want to execute transactions without requiring separate approval transactions
- You want to create a more efficient and user-friendly transaction flow with fewer on-chain steps 