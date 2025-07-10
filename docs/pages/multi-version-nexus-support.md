# Multi-Version Nexus Support in Multichain MEE SDK

The MEE SDK now supports initializing multichain Nexus accounts using multiple contract versions — enabling compatibility across chains with different feature sets or upgrade statuses.

This is critical for chains that must continue using Nexus v1.0.2, while others can work with newer version like v1.2.0.

## ✅ SDK API: `toMultichainNexusAccount(...)`

Basic Usage (Default to Latest Version)

```ts
const nexusAccount = await toMultichainNexusAccount({
  signer: eoaAccount,
  chains: [base, optimism],
  transports: [http(), http()],
});
```

This will default to the latest Nexus version (e.g. 1.2.1) for all chains.

Provide Specific Mixed Versions

```ts
const nexusAccount = await toMultichainNexusAccount({
  signer: eoaAccount,
  chains: [polygon, chilliz, optimism, arbitrum],
  transports: [http(), http()],
  options: [
    { version: getNexus("1.0.2") }, // Applied to polygon
    { version: getNexus("1.0.2") }, // Applied to chilliz
    { version: getNexus("1.0.2") }, // Applied to polygon
  ],
});
```

## 🔍 Automatic Version Detection (Fallback)

If no version is provided:

- SDK performs RPC-based Cancun support check

- Chooses appropriate version (1.2.0 for Cancun chains, 1.0.2 otherwise)

- Can be overridden manually as shown above

## 🧰 Version Helper: `getNexus(version)`

An utility function that returns contract configuration for a given version:

```ts
import { getNexus } from "@biconomy/sdk";
console.log(getNexus("1.2.0").implementation);
```
