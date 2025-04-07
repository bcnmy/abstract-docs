# Production Contracts

## Biconomy Network: Genesis Mainnet Release
| Name    | Address    | 
|-------------|-------------|
| MEE EntryPoint & Paymaster | `0xE854C84cD68fC434cB3B0042c29235D452cAD977`  |
| MEE K1 Validator module | `0x00000000d12897DDAdC2044614A9677B191A2d95`  |
| Composability Module | `0x00000004430bB055dB66eBef6Fe5Ee1DA9668B10`  |
| Composable Storage | `0x0000000671eb337E12fe5dB0e788F32e1D71B183`  |
| ETH Forwarder Addr:  | `0x000000Afe527A978Ecb761008Af475cfF04132a1`  |

### Nexus v1.2.0 => For chains with EIP-7702 support

| Name    | Address    | 
|-------------|-------------|
| Nexus Implementation v1.2.0 | `0x000000004F43C49e93C970E84001853a70923B03`  |
| Nexus Bootstrap v1.2.0 | `0x00000000D3254452a909E4eeD47455Af7E27C289`  |
| Nexus Account Factory | `0x000000001D1D5004a02bAfAb9de2D6CE5b7B13de`  |

[GitHub](https://github.com/bcnmy/nexus/releases/tag/v1.2.0)



### Nexus v1.0.2 => For chains w/o EIP-7702 support

<details markdown="1">

| Name    | Address    | 
|-------------|-------------|
| Nexus implementation v1.0.2 | `0x000000aC74357BFEa72BBD0781833631F732cf19`  |
| Account Factory  | `0x000000c3A93d2c5E02Cb053AC675665b1c4217F9`  |
| Nexus Bootstrap v1.0.2 | `0x879fa30248eeb693dcCE3eA94a743622170a3658`  |

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

## Nexus v1.0.2 Production Contracts
<details markdown="1">

| Name    | Address    | 
|-------------|-------------|
| Nexus implementation  | `0x000000aC74357BFEa72BBD0781833631F732cf19`  |
| K1 Validator  | `0x0000002D6DB27c52E3C11c1Cf24072004AC75cBa`  | 
| K1 Validator Factory  | `0x2828A0E0f36d8d8BeAE95F00E2BbF235e4230fAc`  | 
| Account Factory  | `0x000000c3A93d2c5E02Cb053AC675665b1c4217F9`  |
| Bootstrap  | `0x879fa30248eeb693dcCE3eA94a743622170a3658`  |

</details>

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

## Paymasters Audits
<details markdown="1">

| Audited by    | Links    | 
|-------------|-------------|
| Chainlight | [Sponsorship Paymaster report](https://github.com/bcnmy/gasdaddy/blob/6bb9ad9b74cb48cd9284461b31b5624edf8a6eb5/audits/ChainLight_Biconomy_Sponsorship_Paymaster_Security_Audit_v1_1.pdf) |
| Chainlight | [Token Paymaster report](https://github.com/bcnmy/gasdaddy/blob/20239ae8bf5696d57341ff90e0be52e6038bf47f/audits/ChainLight_Biconomy_Token_Paymaster_Security_Audit_v1_0.pdf) |

</details>