# getOnChainQuote

The `getOnChainQuote` method retrieves a quote for an on-chain transaction from the Modular Execution Environment (MEE) service. This method is specifically used when the payment token doesn't support ERC20Permit or when a standard on-chain transaction is preferred.

## Usage

```typescript
const onChainQuote = await meeClient.getOnChainQuote({
  instructions: [
    // Instructions to execute
  ],
  feeToken: {
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC
    chainId: 1 // Ethereum
  },
  trigger: {
    chainId: 1, // Ethereum
    tokenAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC
    amount: 1000000n // 1 USDC (6 decimals)
  }
});
```

## Parameters

### `parameters`

An object containing the parameters for requesting an on-chain quote.

```typescript
type GetOnChainQuoteParams = {
  /**
   * Array of transaction instructions to execute
   */
  instructions: Instruction[];
  
  /**
   * Fee token information including address and chain ID
   */
  feeToken: FeeTokenInfo;
  
  /**
   * Trigger information for the transaction
   */
  trigger: Trigger;
  
  /**
   * Optional account to use (defaults to client.account)
   */
  account?: MultichainSmartAccount;
}

/**
 * Fee token information
 */
type FeeTokenInfo = {
  /**
   * The address of the token to pay fees with
   */
  address: Address;
  
  /**
   * The chain ID where the fee token exists
   */
  chainId: number;
}

/**
 * Trigger information
 */
type Trigger = {
  /**
   * Chain ID where the token exists
   */
  chainId: number;
  
  /**
   * Address of the token to use for payment
   */
  tokenAddress: Address;
  
  /**
   * Amount of tokens to use
   */
  amount: bigint | string;
}
```

## Return Value

Returns a Promise that resolves to a `GetOnChainQuotePayload` object containing both the standard quote payload and trigger information.

```typescript
type GetOnChainQuotePayload = {
  /**
   * Standard quote payload with transaction details
   */
  quote: GetQuotePayload;
  
  /**
   * Trigger information with updated amount including fees
   */
  trigger: Trigger;
}
```

## Examples

### Basic Example

```typescript
import { createMeeClient, toMultichainNexusAccount, mcUSDC } from "@biconomy/abstractjs";
import { http } from "viem";
import { mainnet, optimism } from "viem/chains";

// Setup multichain account
const mcNexus = await toMultichainNexusAccount({
  chains: [mainnet, optimism],
  signer: eoaAccount,
  transports: [http(), http()]
});

// Create MEE client
const meeClient = await createMeeClient({ account: mcNexus });

// Token information
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
  // Get on-chain quote for a simple transaction
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
  console.log(`Payment Token: ${onChainQuote.quote.paymentInfo.token}`);
  console.log(`Payment Chain: ${onChainQuote.quote.paymentInfo.chainId}`);
  console.log(`Total Amount (including fees): ${onChainQuote.trigger.amount}`);
  
  // The quote can now be signed and executed
  
} catch (error) {
  console.error("Error getting on-chain quote:", error);
}
```

### Transfer Example

```typescript
import { createMeeClient, toMultichainNexusAccount, mcUSDC } from "@biconomy/abstractjs";
import { http, parseUnits } from "viem";
import { mainnet, base } from "viem/chains";

// Setup multichain account
const mcNexus = await toMultichainNexusAccount({
  chains: [mainnet, base],
  signer: eoaAccount,
  transports: [http(), http()]
});

// Create MEE client
const meeClient = await createMeeClient({ account: mcNexus });

// Create recipient account
const recipientAddress = "0x1234567890123456789012345678901234567890";

// Set up the trigger for the on-chain payment
const trigger = {
  chainId: mainnet.id,
  tokenAddress: mcUSDC.addressOn(mainnet.id),
  amount: parseUnits("5", 6) // 5 USDC
};

// Fee token information (same as the trigger token in this example)
const feeToken = {
  address: mcUSDC.addressOn(mainnet.id),
  chainId: mainnet.id
};

// Get on-chain quote for transferring USDC on Base
const onChainQuote = await meeClient.getOnChainQuote({
  trigger,
  instructions: [
    mcNexus.build({
      type: "transfer",
      data: {
        chainId: base.id,
        tokenAddress: mcUSDC.addressOn(base.id),
        amount: parseUnits("5", 6), // 5 USDC
        recipient: recipientAddress
      }
    })
  ],
  feeToken
});

console.log(`Quote obtained with ID: ${onChainQuote.quote.id}`);
console.log(`Total payment amount (including fees): ${onChainQuote.trigger.amount}`);

// The quote can now be signed and executed using signOnChainQuote and executeSignedQuote
```

### Multiple Instructions Example

```typescript
import { createMeeClient, toMultichainNexusAccount, mcUSDC } from "@biconomy/abstractjs";
import { http } from "viem";
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
  amount: 1000000n // 1 USDC
};

// Fee token
const feeToken = {
  address: tokenAddress,
  chainId: mainnet.id
};

// Create multiple instructions
const instructions = [
  // First instruction on Optimism
  {
    calls: [
      {
        to: "0x0000000000000000000000000000000000000000",
        gasLimit: 50000n,
        value: 0n
      }
    ],
    chainId: optimism.id
  },
  // Second instruction on Optimism
  {
    calls: [
      {
        to: "0x0000000000000000000000000000000000000000",
        gasLimit: 50000n,
        value: 0n
      }
    ],
    chainId: optimism.id
  }
];

// Get on-chain quote for multiple instructions
try {
  const fusionQuote = await meeClient.getOnChainQuote({
    instructions,
    feeToken,
    trigger
  });
  
  console.log("On-chain quote received for multiple instructions");
  console.log(`Number of user operations: ${fusionQuote.quote.userOps.length}`);
  console.log(`Quote ID: ${fusionQuote.quote.id}`);
  
  // The fusionQuote can now be signed and executed
  
} catch (error) {
  console.error("Error getting on-chain quote:", error);
}
```

## Error Handling

The `getOnChainQuote` method may throw errors if there are issues with the specified parameters or if the MEE service is unavailable:

```typescript
try {
  const onChainQuote = await meeClient.getOnChainQuote({
    instructions: [/* your instructions */],
    feeToken,
    trigger
  });
  
  // Process the on-chain quote
  
} catch (error) {
  console.error("Failed to get on-chain quote:", error);
  
  if (error.message.includes("not supported")) {
    console.log("The specified token or chain is not supported.");
  } else if (error.message.includes("insufficient balance")) {
    console.log("Insufficient balance to cover the transaction.");
  } else {
    console.log("An unexpected error occurred. Please try again later.");
  }
}
```

## Related Methods

- [`signOnChainQuote`](/sdk-reference/mee-client/methods/more/signOnChainQuote) - Sign an on-chain quote for execution
- [`executeSignedQuote`](/sdk-reference/mee-client/methods/more/executeSignedQuote) - Execute a signed on-chain quote
- [`getQuote`](/sdk-reference/mee-client/methods/getQuote) - Get a standard quote for executing instructions

## When to Use

Use `getOnChainQuote` when:
- The payment token doesn't support ERC20Permit
- You prefer a standard on-chain transaction flow
- You need to trigger transactions based on token transfers
- You want to execute multi-chain operations using on-chain triggers 