# useSendSponsoredTransaction

## Description

Sends a transaction, using a paymaster for sponsorship.

## Usage

```tsx 
import {
  useSendSponsoredTransaction,
  useUserOpWait,
  useSmartAccount,
} from "@biconomy/use-aa";
import { polygonAmoy } from "viem/chains";
import { encodeFunctionData, parseAbi, Hex } from "viem";
import React, { useEffect } from "react"

const SendSponsoredTx = () => {
  const { smartAccountAddress } = useSmartAccount();

  const {
    mutate,
    data: userOpResponse,
    error,
    isPending,
  } = useSendSponsoredTransaction();

  const {
    isLoading: waitIsLoading,
    isSuccess: waitIsSuccess,
    error: waitError,
    data: waitData,
  } = useUserOpWait(userOpResponse);

  useEffect(() => {
    if (waitData?.success === "true") {
      console.log(waitData?.receipt?.transactionHash);
    }
  }, [waitData]);

  const mintNftTx = () =>
    mutate({
      transactions: {
        to: "0x1758f42Af7026fBbB559Dc60EcE0De3ef81f665e",
        data: encodeFunctionData({
          abi: parseAbi(["function safeMint(address _to)"]),
          functionName: "safeMint",
          args: [smartAccountAddress],
        }),
      },
    });

  return (
    <button
      title={isPending || waitIsLoading ? "Loading..." : "Mint NFT"}
      onClick={mintNftTx}
    />
  );
};
```

## Parameters

```ts
type Transaction = {
  to: string;
  value: BigNumberish | string;
  data: string;
};

type UseSendSponsoredTransactionProps = {
  /** The transaction or transactions to send */
  transactions: Transaction | Transaction[];
  /** The BuildUserOpOptions options. See https://bcnmy.github.io/biconomy-client-sdk/types/BuildUserOpOptions.html for further detail */
  options?: BuildUserOpOptions;
};
```

## Returns

```ts 
import type { UserOpReceipt, UserOpStatus } from "@biconomy/account";
// ---cut---
type UserOpResponse = {
  userOpHash: string;
  wait(_confirmations?: number): Promise<UserOpReceipt>;
  waitForTxHash(): Promise<UserOpStatus>;
};
```


## Source

[hooks/useSendSponsoredTransaction.ts:77](https://github.com/bcnmy/useAA/blob/main/src/hooks/useSendSponsoredTransaction.ts#L77)
