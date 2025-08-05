# Production Contracts

## MEE Contracts suite v2.1.0
New K1 Mee module introduced that allows ERC-7702-delegated EOAs owning Nexus accounts

### Nexus & MEE Validator
| Name    | Address    | 
|-------------|-------------|
| Nexus Implementation v1.2.0 | `0x00000000383e8cBe298514674Ea60Ee1d1de50ac`  |
| MEE K1 Validator module v1.0.3 | `0x0000000031ef4155C978d48a8A7d4EDba03b04fE`  |
| Nexus Bootstrap v1.2.1 | `0x0000003eDf18913c01cBc482C978bBD3D6E8ffA3`  |
| Nexus Account Factory | `0x0000006648ED9B2B842552BE63Af870bC74af837`  |

### Composability and utility
| Name    | Address    | 
|-------------|-------------|
| Composable Storage | `0x0000000671eb337E12fe5dB0e788F32e1D71B183`  |
| ETH Forwarder Addr:  | `0x000000Afe527A978Ecb761008Af475cfF04132a1`  |


## MEE Contracts suite v2.0.0
Major release, featuring Nexus 1.2.0 with ERC-7702 support and native composability.
MEE K1 Validator is pre-installed as a default validator module.

### Nexus & MEE
| Name    | Address    | 
|-------------|-------------|
| Nexus Implementation v1.2.0 | `0x000000004F43C49e93C970E84001853a70923B03`  |
| MEE K1 Validator module v1.0.1 | `0x00000000d12897DDAdC2044614A9677B191A2d95`  |
| Nexus Bootstrap v1.2.1 | `0x00000000D3254452a909E4eeD47455Af7E27C289`  |
| Nexus Account Factory | `0x000000001D1D5004a02bAfAb9de2D6CE5b7B13de`  |
| MEE EntryPoint & Paymaster | `0xE854C84cD68fC434cB3B0042c29235D452cAD977`  |

### Composability and utility
| Name    | Address    | 
|-------------|-------------|
| Composable Storage | `0x0000000671eb337E12fe5dB0e788F32e1D71B183`  |
| ETH Forwarder Addr:  | `0x000000Afe527A978Ecb761008Af475cfF04132a1`  |

## MEE Contracts suite v1.0.3
Features:
- Nexus v1.0.2 
- New Account Factory 
- MEE K1 Validator v1.0.3
- **Compiled for evm Paris** (No PUSH0, no MCOPY, no TSTORE)

### Nexus v1.0.2 with the new Account Factory and latest MEE K1 Validator, compiled 

| Name    | Address    | 
|-------------|-------------|
| Nexus Implementation v1.0.2 | `0x000000001964d23C59962Fc7A912872EE8fB3b6A`  |
| MEE K1 Validator module v1.0.3 | `0x00000000E894100bEcFc7c934Ab7aC8FBA08A44c`  |
| Nexus Bootstrap v1.0.2 | `0x000000c4781Be3349F81d341027fd7A4EdFa4Dd2`  |
| Nexus Account Factory  | `0x0000000C8B6b3329cEa5d15C9d8C15F1f254ec3C`  |

### Composability and utility
| Name    | Address    | 
|-------------|-------------|
| Composability Module | `0x000000eff5C221A6bdB12381868307c9Db5eB462`  |
| Composable Storage | `0x0000002C2A3b6DA7dfa38AAcdD950097B30B108d`  |
| ETH Forwarder Addr:  | `0x000000001f1c68bD5bF69aa1cCc1d429700D41Da`  |

## MEE Contracts suite v1.0.2
Same as MEE Contracts suite v1.0.1, just the Nexus Account Factory introduced at `0x000000903887EA36EBe051038287f49fD4A07733`

## MEE Contracts suite v1.0.1
First release for the MEE contracts suite, based on Nexus 1.0.2
Requires installing MEE K1 validator and Composability module explicitly
### Nexus v1.0.2 & MEE
| Name    | Address    | 
|-------------|-------------|
| Nexus Implementation v1.0.2 | `0x000000aC74357BFEa72BBD0781833631F732cf19`  |
| MEE K1 Validator module v1.0.1 | `0x00000000d12897DDAdC2044614A9677B191A2d95`  |
| Nexus Bootstrap v1.0.2 | `0x879fa30248eeb693dcCE3eA94a743622170a3658`  |
| Nexus Account Factory  | `0x000000c3A93d2c5E02Cb053AC675665b1c4217F9`  |
| MEE EntryPoint & Paymaster | `0xE854C84cD68fC434cB3B0042c29235D452cAD977`  |

### Composability and utility
| Name    | Address    | 
|-------------|-------------|
| Composability Module | `0x00000004430bB055dB66eBef6Fe5Ee1DA9668B10`  |
| Composable Storage | `0x0000000671eb337E12fe5dB0e788F32e1D71B183`  |
| ETH Forwarder Addr:  | `0x000000Afe527A978Ecb761008Af475cfF04132a1`  |

[GitHub](https://github.com/bcnmy/nexus/releases/tag/v1.0.2)

</details>

## Audits

### Nexus

| Audited by    | Links    | 
|-------------|-------------|
| Cyfrin  | [report](https://github.com/bcnmy/nexus/blob/dev/audits/CodeHawks-Cyfrin-Competition-170924.pdf)  |
| Spearbit  | [report](https://github.com/bcnmy/nexus/blob/dev/audits/report-cantinacode-biconomy-0708-final.pdf)  + [erc-7739 add-on](https://github.com/bcnmy/nexus/blob/dev/audits/report-cantinacode-biconomy-erc7739-addon-final.pdf) 
| Zenith  | [report](https://github.com/bcnmy/nexus/blob/b58b0260cbab6e9e5e8abdd3e061fe1628f0540d/audits/Biconomy-Nexus_Zenith-Audit-Report.pdf)  |
| Pashov  | [report](https://github.com/bcnmy/nexus/blob/c516ec892f3314dbf4992576aee62229b6c31bb4/audits/Nexus-Pashov-Review_2025-03.pdf)  |

### MEE Stack

| Audited by    | Links    | 
|-------------|-------------|
| Zenith | [MEE contracts: MEE EP, Node PM, MEEK1 validator](https://github.com/bcnmy/mee-contracts/blob/main/audit/Zenith%20Audit%20Report%20-%20Biconomy%20MEE%20Contracts.pdf) |

### Composability stack

| Audited by    | Links    | 
|-------------|-------------|
| Zenith | [Report](https://github.com/bcnmy/composability/blob/main/audits/Biconomy-Composability_Zenith-Audit-Report.pdf) |
| Pashov | [Report](https://github.com/bcnmy/composability/blob/9e090c24b195822f668f96cb4ff518a9b7ff712d/audits/2025-03-Composability-Pashov-Review.pdf) |


# Legacy Production Contracts

## Nexus v1.0.1 Production Contracts
<details markdown="1">

| Name    | Address    | 
|-------------|-------------|
| Nexus implementation  | `0x000000008761E87F023f65c49DC9cb1C7EdFEaaf`  |
| K1 Validator  | `0x0000002D6DB27c52E3C11c1Cf24072004AC75cBa`  | 
| K1 Validator Factory  | `0x00000024115AA990F0bAE0B6b0D5B8F68b684cd6`  | 
| Account Factory  | `0x000000226cada0d8b36034F5D5c06855F59F6F3A`  |
| Bootstrap  | `0x000000F5b753Fdd20C5CA2D7c1210b3Ab1EA5903`  |
| Entrypoint V7 | `0x0000000071727de22e5e9d8baf0edac6f37da032` |

</details>

### Paymaster contracts
<details markdown="1">

#### Base and Optimism
| Name    | Address    | 
|-------------|-------------|
| Sponsorship Paymaster | `0x0000006087310897e0BFfcb3f0Ed3704f7146852` |
| Token Paymaster | `0x00000000301515A5410e0d768aF4f53c416edf19` |

### Other chains
| Name    | Address    | 
|-------------|-------------|
| Sponsorship Paymaster | `0x00000072a5F551D6E80b2f6ad4fB256A27841Bbc` |
| Token Paymaster | `0x00000000301515A5410e0d768aF4f53c416edf19` |

</details>
