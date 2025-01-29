# MEE Client

The MEE (Multi-chain Execution Environment) Client is an interface for executing transactions across multiple chains. It enables seamless cross-chain operations by handling quote generation, signing, and execution of transactions across different blockchain networks.

## Usage

```typescript
import { privateKeyToAccount } from "viem/accounts";
import { createMeeClient, toMultichainNexusAccount } from "@biconomy/abstractjs";
import { baseSepolia, mainnet } from "viem/chains";

const privateKey = "PRIVATE_KEY";
const account = privateKeyToAccount(`0x${privateKey}`);

// Create multichain account
const mcNexus = await toMultichainNexusAccount({
  chains: [baseSepolia, mainnet],
  signer: account
});

const meeClient = await createMeeClient({ account: mcNexus });
```

## Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| account | `MultichainSmartAccount` | Yes | - | The multichain smart account used for cross-chain transactions. Must be created using `toMultichainNexusAccount` |
| pollingInterval | `number` | No | `1000` | Frequency in milliseconds for polling actions and events |
| url | `string` | No | `"https://mee-node.biconomy.io"` | The URL for the MEE node service |

### MultichainSmartAccount Configuration

When creating a multichain account using `toMultichainNexusAccount`, the following parameters are required:

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| chains | `Chain[]` | Yes | - | Array of chains the account will interact with |
| signer | `Account` | Yes | - | The signer account that controls the smart account |

## Response

| Type | Description |
|------|-------------|
| `Promise<MeeClient>` | MEE client instance providing methods for cross-chain transaction management |

## Developer Notice

> **Note:** You are using the Developer Preview version of Biconomy MEE. The underlying contracts are currently under audit.
