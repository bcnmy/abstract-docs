# Biconomy Passkey SDK Integration Guide

## Why use Passkeys?

Developers can leverage Passkeys to enable their users to sign transactions and log in with FaceID or Fingerprints. This
reduces a major point of friction when interacting with blockchain as it enables users to store their private key within
the Hardware Secure enclave provided by computer and smartphone manufacturers such as Apple.

::::tip[🪄 Passkey Benefits]

- No apps can access the private key within the Secure Enclave, they can only request signatures
- Users can store their Passkeys on a secure cloud such as iCloud
- Users don't have to remember seed phrases
- Onboarding users is instant
- Signing transactions is much safer than using pure passwords, like in browser extension wallets
  ::::

This guide demonstrates how to integrate the Biconomy SDK with passkey authentication in a client-side application.

:::danger[🚨 Important]
Passkey functionality only works in client-side applications (browsers) as it requires access to the WebAuthn API. It cannot be implemented in backend services.
::::

::::steps

#### Setup Environment Variables

Create a `.env` file with your Biconomy configuration:

```
NEXT_PUBLIC_BUNDLER_URL=your_bundler_url
NEXT_PUBLIC_PAYMASTER_URL=your_paymaster_url
```

#### Create Nexus Client

```typescript "
import { createBicoBundlerClient, createBicoPaymasterClient, toNexusAccount } from "@biconomy/abstractjs";
import { baseSepolia } from "wagmi/chains";
import { http, useAccount, useWalletClient } from "wagmi";

const account = useAccount();
const { data: walletClient } = useWalletClient({ account: account.address });

async function initNexusClient() {
  if (walletClient) {
    const nexusClient = createBicoBundlerClient({
      account: await toNexusAccount({
        signer: walletClient,
        chain: baseSepolia, // or your preferred chain
        transport: http(),
      }),
      paymaster: createBicoPaymasterClient({
        paymasterUrl: process.env.NEXT_PUBLIC_PAYMASTER_URL || "",
      }),
      transport: http(process.env.NEXT_PUBLIC_BUNDLER_URL),
    });

    return nexusClient;
  }
  throw new Error("Wallet client not found");
}
```

#### Register a New Passkey

```typescript
import {
  toWebAuthnKey,
  toPasskeyValidator,
  WebAuthnMode,
} from "@biconomy/passkey";
import { NexusClient } from "@biconomy/abstractjs";

async function registerPasskey(nexusClient: NexusClient, passkeyName: string) {
  // Create WebAuthn key
  // Ideally "passkeyName" would be set by the user in the UI
  const webAuthnKey = await toWebAuthnKey({
    passkeyName: passkeyName,
    mode: WebAuthnMode.Register,
  });

  // Create passkey validator
  const passkeyValidator = await toPasskeyValidator({
    account: nexusClient.account,
    webAuthnKey,
  });

  // Store webAuthnKey for future use
  const formattedWebAuthnKey = {
    pubX: webAuthnKey.pubX.toString(),
    pubY: webAuthnKey.pubY.toString(),
    authenticatorId: webAuthnKey.authenticatorId,
    authenticatorIdHash: webAuthnKey.authenticatorIdHash,
  };
  localStorage.setItem("webAuthnKey", JSON.stringify(formattedWebAuthnKey));

  return passkeyValidator;
}
```

#### Login with Existing Passkey

```typescript
import { NexusClient } from "@biconomy/abstractjs";
import {
  toWebAuthnKey,
  WebAuthnMode,
  toPasskeyValidator,
} from "@biconomy/passkey";

async function loginPasskey(nexusClient: NexusClient) {
  const webAuthnKey = await toWebAuthnKey({
    mode: WebAuthnMode.Login,
  });

  const passkeyValidator = await toPasskeyValidator({
    account: nexusClient.account,
    webAuthnKey,
  });

  return passkeyValidator;
}
```

#### Install Passkey Validator Module

```typescript
import type { NexusClient, Module } from "@biconomy/abstractjs";

async function installPasskeyValidator(
  nexusClient: NexusClient,
  passkeyValidator: Module
) {
  const passkeyValidatorAddress = "0xD990393C670dCcE8b4d8F858FB98c9912dBFAa06";
  const userOpHash = await nexusClient?.installModule({
    module: {
      address: passkeyValidatorAddress,
      type: "validator",
      initData: passkeyValidator?.initData,
    },
  });

  // Wait for transaction to be confirmed
  await nexusClient?.waitForUserOperationReceipt({ hash: userOpHash });
}
```

#### Using Passkey for Transactions

```typescript
import {
  createBicoBundlerClient,
  createBicoPaymasterClient,
  type Module,
  type NexusClient,
  moduleActivator,
} from "@biconomy/abstractjs";
import { baseSepolia } from "wagmi/chains";
import { http, useAccount, useWalletClient } from "wagmi";
import type { Address } from "viem";

const account = useAccount();
const { data: walletClient } = useWalletClient({ account: account.address });

async function sendTransactionWithPasskey(
  nexusClient: NexusClient,
  passkeyValidator: Module,
  recipientAddress: Address
) {
  // Extend NexusClient with passkey validator
  nexusClient.extend(moduleActivator(passkeyValidator));
  // Send transaction
  const hash = await nexusClient.sendUserOperation({
    calls: [
      {
        to: recipientAddress,
        value: BigInt(0), // or your desired value
      },
    ],
  });

  // Wait for confirmation
  const receipt = await nexusClient.waitForUserOperationReceipt({ hash });
  return receipt;
}
```

#### Uninstall Passkey Validator (Optional)

```typescript
import {
  type NexusClient,
  type Module,
  createBicoBundlerClient,
  moduleActivator,
} from "@biconomy/abstractjs";

async function uninstallPasskeyValidator(
  nexusClient: NexusClient,
  passkeyValidator: Module
) {
  nexusClient.extend(moduleActivator(passkeyValidator));
  const userOpHash = await nexusClient?.uninstallModule({
    module: {
      address: passkeyValidator.address,
      type: "validator",
      deInitData: "0x",
    },
  });

  await nexusClient?.waitForUserOperationReceipt({ hash: userOpHash });

  // Clear stored passkey data
  localStorage.removeItem("webAuthnKey");
}
```

::::
