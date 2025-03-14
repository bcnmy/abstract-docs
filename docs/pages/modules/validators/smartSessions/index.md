# Smart Sessions

Smart sessions enable powerful UX improvements for web3 applications by allowing users to delegate specific permissions to session keys. This creates a more seamless user experience while maintaining security through granular controls.

![Smart Session](https://i.imgur.com/gN0Xhm6.png)


## Smart Sessions Explained

You can think of smart sessions as giving some signers/keys special granular access to your smart account. They can 
execute transactions on that account, but they can't execute *any* transaction - only the transactions they were 
explicitly approved to execute.

These fall into a few broad categories:

| Restriction Type | Description |
|-----------------|-------------|
| **How much they can execute** | Set the maximum amount of transactions a key can execute. |
| **When they can execute** | Set time restrictions which prevent the signers from executing in any times beyond the ones approved by you. |
| **How much funds they can use** | Set restrictions on how much tokens the signer can use in total or in a single call. |
| **Which contracts they can call** | Set restrictions saying which *exact* contracts the signer is allowed to call. |

All of these permissions can be combined with eachother to create powerful guardrails for signers - primarily bots or 
AI agents.

:::tip[Example of a complex session]
A bot signer is allowed to:
- Execute 20 transactions
- Execute between 8AM - 8PM on Weekdays
- Call only Uniswap and AAVE Contracts
- Can spend maximum of 5000 USDC
:::


## Why Sessions Matter

Smart sessions solve several critical UX challenges in web3:

1. **Reduced Transaction Friction**: Instead of requiring users to sign every transaction, session keys can handle repeated actions automatically within defined parameters.

2. **Enhanced Security**: Rather than storing a user's primary wallet key in a browser, applications can use temporary session keys with limited permissions and expiration dates.

3. **Granular Control**: Users can grant very specific permissions to session keys, such as:
   - Maximum transaction amounts
   - Specific contract interactions
   - Time-based restrictions
   - Usage limits
   - Parameter-based rules

## Real World Examples

Smart sessions enable seamless experiences like:

- **Gaming**: Players can pre-authorize common in-game actions without constant signing
- **DeFi**: Trading apps can execute trades within user-defined limits
- **NFT Markets**: Marketplaces can list/delist items without repeated signatures
- **Social Platforms**: Apps can post content or interact with smart contracts seamlessly

## Technical Benefits

1. **Gas Optimization**: Session keys can batch multiple transactions and optimize gas usage
2. **Flexible Implementation**: Supports various validation schemes (time-based, value-limited, etc.)
3. **Composable Security**: Combine multiple policies to create sophisticated permission systems
4. **Standards Compliant**: Built on established standards like ERC-7579 for maximum compatibility

## User Experience Impact

- **Reduced Cognitive Load**: Users don't need to understand every transaction detail
- **Familiar Web2 Feel**: Actions feel instant and seamless like traditional web applications
- **Maintained Security**: Users retain full control through granular permissions
- **Better Error Handling**: Applications can handle failed transactions more gracefully

Smart sessions represent a crucial evolution in web3 UX, bridging the gap between blockchain security and seamless user experiences.

