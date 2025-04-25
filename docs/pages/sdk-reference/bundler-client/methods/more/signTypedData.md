# signTypedData

Signs typed data in EIP-712 format using a smart account.

## Usage

```typescript
import { createNexusClient, createEOA } from "@biconomy/abstractjs";

const client = createNexusClient({
  chain: 'base-sepolia',
  eoa: createEOA({
    privateKey: '0xYOUR_PRIVATE_KEY'
  })
});

const domain = {
  name: 'Ether Mail',
  version: '1',
  chainId: 1,
  verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC'
};

const types = {
  Person: [
    { name: 'name', type: 'string' },
    { name: 'wallet', type: 'address' }
  ],
  Mail: [
    { name: 'from', type: 'Person' },
    { name: 'to', type: 'Person' },
    { name: 'contents', type: 'string' }
  ]
};

const message = {
  from: {
    name: 'Cow',
    wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826'
  },
  to: {
    name: 'Bob',
    wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB'
  },
  contents: 'Hello, Bob!'
};

const signature = await client.signTypedData({
  domain,
  types,
  primaryType: 'Mail',
  message
});
```

## Parameters

- `account` (optional): The smart account instance to use for signing. Defaults to the client's account.
- `domain`: The domain object containing name, version, chainId, and verifyingContract.
- `message`: The structured data to sign.
- `primaryType`: The primary type of the message.
- `types`: Type definitions for the structured data.

## Return Value

- `string`: The signature as a hexadecimal string.

## Implementation Details

The function calculates an Ethereum-specific signature in [EIP-712 format](https://eips.ethereum.org/EIPS/eip-712) using the formula:
`sign(keccak256("\x19\x01" ‖ domainSeparator ‖ hashStruct(message)))`.

It internally validates the typed data and uses the smart account's `signTypedData` method to generate the signature. 