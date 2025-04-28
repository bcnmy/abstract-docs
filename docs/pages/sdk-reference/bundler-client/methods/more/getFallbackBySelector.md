# getFallbackBySelector

The `getFallbackBySelector` function retrieves the fallback handler address and function selector for a specific function selector on an ERC-7579 compliant smart account. Fallback handlers allow the smart account to delegate function calls that it doesn't natively support to external contracts.

## Usage

```typescript
import { createBicoBundlerClient } from "@biconomy/abstractjs";
import { http } from "viem";

const nexusClient = createBicoBundlerClient({
  account: nexusAccount,
  transport: http(bundlerUrl)
});

const [fallbackAddress, functionSelector] = await nexusClient.getFallbackBySelector({
  selector: "0xcb5baf0f"
});
```

## Parameters

The function accepts an object with the following properties:

```typescript
type GetFallbackBySelectorParameters<TSmartAccount extends SmartAccount | undefined> = { 
  account?: TSmartAccount 
} & {
  selector: Hex
}
```

| Parameter | Type | Description |
| --- | --- | --- |
| account | `SmartAccount` | Optional. The smart account instance to use. If not provided, the client's account will be used. |
| selector | `Hex` | The 4-byte function selector to look up. |

## Return Value

The function returns a promise that resolves to a tuple containing:

1. The address of the fallback handler as a hexadecimal string
2. The function selector to call on the fallback handler as a hexadecimal string

```typescript
Promise<[Hex, Hex]>
```

## Example

```typescript
import { http } from "viem";
import { createBicoBundlerClient, toNexusAccount } from "@biconomy/abstractjs";
import { baseSepolia } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";

// Set up your account
const privateKey = "YOUR_PRIVATE_KEY";
const account = privateKeyToAccount(`0x${privateKey}`);
const bundlerUrl = "https://bundler.biconomy.io/api/v3/84532/your-api-key";

// Create Nexus account
const nexusAccount = await toNexusAccount({
  signer: account,
  chain: baseSepolia,
  transport: http(),
});

// Create client
const nexusClient = createBicoBundlerClient({
  account: nexusAccount,
  transport: http(bundlerUrl)
});

// Get a fallback handler for a specific function selector
const functionSelector = "0xcb5baf0f"; // Example selector
const fallbackSelector = await nexusClient.getFallbackBySelector({ selector: functionSelector });

console.log("Fallback handler address:", fallbackSelector[0]);
console.log("Fallback function selector:", fallbackSelector[1]);

// Check if a fallback exists
if (fallbackSelector[0] !== '0x0000000000000000000000000000000000000000') {
  console.log("A fallback handler exists for this function");
} else {
  console.log("No fallback handler exists for this function");
}
```

## Implementation Details

The function makes a view call to the `getFallbackBySelector` method on the smart account contract, passing the function selector as an argument. The contract returns the address of the fallback handler and the function selector that should be called on that handler.

When the smart account receives a call to a function it doesn't support, it can delegate the call to a fallback handler if one is configured for that function selector. This mechanism enables smart accounts to support arbitrary functionalities through modular extensions.

This function is part of the ERC-7579 standard for smart accounts, which provides a standardized way to interact with modular smart accounts. 