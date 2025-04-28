# getPermitQuote

The `getPermitQuote` method retrieves a quote for a permit-enabled transaction from the Modular Execution Environment (MEE) service. This method is specifically used when the payment token supports ERC20Permit (EIP-2612), allowing for gasless approvals and more efficient transactions.

## Usage

```typescript
const permitQuote = await meeClient.getPermitQuote({
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

An object containing the parameters for requesting a permit-enabled quote.

```typescript
type GetPermitQuoteParams = {
  /**
   * Array of transaction instructions to execute
   */
  instructions: Instruction[];
  
  /**
   * Fee token information including address and chain ID
   */
  feeToken: FeeTokenInfo;
  
  /**
   * Trigger information for the permit transaction
   * Must contain a permit-enabled token address
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
   * Must support ERC20Permit (EIP-2612)
   */
  tokenAddress: Address;
  
  /**
   * Amount of tokens to use
   */
  amount: bigint | string;
}
```

## Return Value

Returns a Promise that resolves to a `GetPermitQuotePayload` object containing both the standard quote payload and permit-specific trigger information.

```typescript
type GetPermitQuotePayload = {
  /**
   * Standard quote payload with transaction details
   */
  quote: GetQuotePayload;
  
  /**
   * Trigger information with updated amount including fees
   * The amount includes both the original amount and gas fees
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
  // Get permit quote for a simple transaction
  const permitQuote = await meeClient.getPermitQuote({
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
  
  console.log("Permit quote received:");
  console.log(`Quote ID: ${permitQuote.quote.id}`);
  console.log(`Payment Token: ${permitQuote.quote.paymentInfo.token}`);
  console.log(`Payment Chain: ${permitQuote.quote.paymentInfo.chainId}`);
  console.log(`Total Amount (including fees): ${permitQuote.trigger.amount}`);
  
  // The permit quote can now be signed and executed
  
} catch (error) {
  console.error("Error getting permit quote:", error);
}
```

### Intent and Transaction Example

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
  amount: 1n // Minimal amount for testing
};

// Fee token
const feeToken = {
  address: tokenAddress,
  chainId: mainnet.id
};

// Get permit quote for an intent and a transaction
try {
  const permitQuote = await meeClient.getPermitQuote({
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
  
  console.log("Permit quote received for intent and transaction");
  console.log(`Number of user operations: ${permitQuote.quote.userOps.length}`);
  console.log(`Quote ID: ${permitQuote.quote.id}`);
  console.log(`Total amount (including fees): ${permitQuote.trigger.amount}`);
  
} catch (error) {
  console.error("Error getting permit quote:", error);
}
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
  amount: 1n // Minimal amount for test
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

// Get permit quote for multiple instructions
try {
  const quote = await meeClient.getPermitQuote({
    instructions,
    feeToken,
    trigger
  });
  
  console.log("Permit quote received for multiple instructions");
  console.log(`Number of user operations: ${quote.quote.userOps.length}`);
  console.log(`Quote ID: ${quote.quote.id}`);
  
  // The quote can now be signed and executed
  
} catch (error) {
  console.error("Error getting permit quote:", error);
}
```

## Error Handling

The `getPermitQuote` method may throw errors if there are issues with the specified parameters or if the token doesn't support permits:

```typescript
try {
  const permitQuote = await meeClient.getPermitQuote({
    instructions: [/* your instructions */],
    feeToken,
    trigger
  });
  
  // Process the permit quote
  
} catch (error) {
  console.error("Failed to get permit quote:", error);
  
  if (error.message.includes("does not support ERC20Permit")) {
    console.log("The specified token does not support ERC20Permit (EIP-2612). Use getOnChainQuote instead.");
  } else if (error.message.includes("insufficient balance")) {
    console.log("Insufficient balance to cover the transaction.");
  } else if (error.message.includes("not supported")) {
    console.log("The specified token or chain is not supported.");
  } else {
    console.log("An unexpected error occurred. Please try again later.");
  }
}
```

## Related Methods

- [`signPermitQuote`](/sdk-reference/mee-client/methods/more/signPermitQuote) - Sign a permit quote for execution
- [`executeSignedQuote`](/sdk-reference/mee-client/methods/more/executeSignedQuote) - Execute a signed permit quote
- [`getOnChainQuote`](/sdk-reference/mee-client/methods/more/getOnChainQuote) - Get a quote for tokens that don't support ERC20Permit
- [`getQuote`](/sdk-reference/mee-client/methods/getQuote) - Get a standard quote for executing instructions

## When to Use

Use `getPermitQuote` when:
- The payment token supports ERC20Permit (EIP-2612)
- You want to benefit from gasless approvals
- You need more efficient transactions without pre-approvals
- You want to execute cross-chain operations using a permit-enabled token 