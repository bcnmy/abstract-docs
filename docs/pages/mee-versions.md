# MEE Versions

The **Modular Execution Environment (MEE)** supports multiple versions of its contract suite. Each version introduces new capabilities around **smart accounts**, **validator configuration**, and **composability**.

> 🛠️ This guide helps SDK developers understand and select the appropriate version for their use case.

## 📦 Versions Table

The table below outlines all supported MEE versions and their core capabilities. Use this to determine the best version for your project based on EVM support, composability, and ERC-7702 compatibility.

| Version   | Nexus Version | ERC-7702 Support                         | Composability | Notes |
|-----------|----------------|-----------------------------------------|----------------|-------|
| `2.1.0`   | 1.2.0          | ✅ Yes — with **delegated/upgraded EOAs** | ✅ Native      | **Latest and recommended.** Allows EOAs to directly own smart accounts in Nexus 1.2.0. |
| `2.0.0`   | 1.2.0          | ✅ Yes — **without** delegated EOAs       | ✅ Native      | Supports ERC-7702 flows but **does not** support EOAs as direct owners of smart accounts. |
| `1.1.0`   | 1.0.2          | ❌ No                                    | ⚠️ Manual       | Composability must be installed manually (handled by the SDK). Best for EVM Paris–only chains with limited opcode support. |
| `1.0.0`   | 1.0.2          | ❌ No                                    | ⚠️ Manual       | Same as `1.1.0`. Composability module installed via SDK. |

## 🔍 Version Breakdown

### `2.1.0` — Latest & Recommended

- ✅ Fully supports **ERC-7702**, including **delegated/upgraded EOAs** as direct owners of Smart Contract Accounts (SCAs).
- ✅ Features **native composability** — no need for manual module installation.
- ✅ Built on Nexus `1.2.0` with pre-installed MEE K1 validator.
- 🚀 **Recommended for all new projects** seeking the latest capabilities and simplest developer experience.

---

### `2.0.0` — Native Composability, No Delegated EOAs

- ✅ Supports **ERC-7702**, but **does not allow delegated or upgraded EOAs** to directly own smart accounts.
- ✅ Includes **native composability**, reducing setup complexity.
- 🛠️ Suitable for applications that do not require EOAs as direct smart account owners but want full ERC-7702 support.

---

### `1.1.0` — EVM Paris Compatibility with Manual Composability

- ❌ Does **not support ERC-7702**.
- ⚠️ Requires **manual installation** of composability modules, though the SDK automates this during deployment.
- 🛠️ Targeted for EVM chains limited to Paris upgrade opcodes (no PUSH0, MCOPY, or TSTORE).
- Good choice for compatibility-constrained environments.

---

### `1.0.0` — Supports all EVM chains prior to the Cancun upgrade

- ❌ No ERC-7702 support.
- ⚠️ Requires manual installation of composability modules, automatically handled by the SDK.
- ✅ Compatible with all EVM environments **below the Cancun upgrade**.
- Suitable for legacy or specialized chains where native composability isn’t available but can be enabled via modules.

## ✅ Recommendation

For most development needs, **version `2.1.0` is strongly recommended** due to its full support for delegated EOAs and native composability. Earlier versions remain available for legacy or specialized chains but require additional setup steps handled by the SDK.

```ts
// Example usage in SDK
import { MEEVersion } from "@your-sdk/core";

const version = MEEVersion.V2_1_0;
```

## 🔍 How to Find Your Current Nexus Version

Not sure which Nexus version your smart account is using? Follow these simple steps to find out:

1. **Locate your existing Nexus smart account address** on the specific blockchain you’re working with.
2. **Open the block explorer** for that chain (e.g., Etherscan, Polygonscan) and paste the smart account address into the search bar.
3. Navigate to the **Contracts** tab on the explorer page.
4. If the contract is a **proxy** and the proxy contract isn’t verified yet, you’ll need to verify it first. (If “Read as proxy” option isn’t available, this usually means verification is needed.)
5. Once verified, go to the **Read as proxy** section and call the `getImplementation` function. This will return the address of the actual implementation contract your smart account is using.
6. Compare this implementation contract address against the addresses listed on our [Contracts and Audits](https://your-docs-site.com/contracts-and-audits) page. This will help you identify exactly which MEE version you are using.

If you need further assistance, feel free to join our [Discord community](https://discord.gg/biconomy) and ask for help!

**Tip:** Keeping track of your Nexus version is key for smooth upgrades and compatibility checks.

## 🤔 Not Sure Which Version to Choose?

If you're still confused about which MEE version fits your needs, or if you’re unsure about your current version for migration, don’t worry!

Join our [Discord community](https://discord.gg/biconomy) to ask questions and get real-time support from the team and other developers.

We’re here to help you choose the best path forward!