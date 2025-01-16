import{u as i,j as n}from"./index-ZQOw4TQ3.js";const s={title:"EOA Support",description:"undefined"};function a(t){const e={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.header,{children:n.jsxs(e.h1,{id:"eoa-support",children:["EOA Support",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#eoa-support",children:n.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,n.jsx(e.p,{children:`The Biconomy stack offers industry-leading support for giving EOA account smart account features. With support for
both wallets trying to migrate their users to smart accounts through EIP7702 and for apps looking to provide their
EOA users with advanced smart account features - the Biconomy stack is the perfect choice for all developers building
for users with EOA accounts.`}),`
`,n.jsxs(e.h2,{id:"fusion-execution",children:["Fusion Execution",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#fusion-execution",children:n.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(e.p,{children:[`Biconomy Fusion allows you to encode and execute batch transactions, including multichain batch transactions - with a single
onchain EVM transaction. The Fusion module works by employing the concept of a `,n.jsx(e.code,{children:"Companion"}),` Smart Contract Account assinged
to every EOA account. The Companion account is used by the MEE to execute an arbitrary number of transactions across
multiple chains.`]}),`
`,n.jsx(e.p,{children:`In order to enable the execution of the Fusion transaction though the Companion account, the user needs to sign a specially
formatted EVM transaction (encoded by our SDK) and post it onchain. This transaction contains instructions on how much
funds will be consumed by the Fusion transaction as well as all of the instructions that the user wants to execute.`}),`
`,n.jsxs(e.div,{"data-vocs-steps":"true",children:[n.jsxs(e.div,{"data-depth":"4",children:[n.jsxs(e.h4,{id:"transfer-funds-to-companion-account",children:["Transfer Funds to Companion Account",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#transfer-funds-to-companion-account",children:n.jsx(e.div,{"data-autolink-icon":!0})})]}),n.jsx(e.p,{children:`The user encodes a Fusion formatted transaction which transfers the amount of funds required for the execution of the
desired action to the Companion Account address. (e.g. transfer 1000 USDC to Companion account)`})]}),n.jsxs(e.div,{"data-depth":"4",children:[n.jsxs(e.h4,{id:"execute-transactions",children:["Execute Transactions",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#execute-transactions",children:n.jsx(e.div,{"data-autolink-icon":!0})})]}),n.jsx(e.p,{children:`Once the funds arrive to the Companion account, the MEE Node starts executing all required transactions - even across
multiple chains. (e.g. once 1000 USDC arrive to Companio account - bridge the funds to Base and supply to a lending protocol)`})]}),n.jsxs(e.div,{"data-depth":"4",children:[n.jsxs(e.h4,{id:"return-funds-to-eoa",children:["Return Funds to EOA",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#return-funds-to-eoa",children:n.jsx(e.div,{"data-autolink-icon":!0})})]}),n.jsx(e.p,{children:`The last action encoded in the instructions can be the transfer of any resulting funds from the Companion account to the
EOA`})]})]}),`
`,n.jsxs(e.h4,{id:"single-signature-execution",children:["Single Signature Execution",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#single-signature-execution",children:n.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,n.jsx(e.p,{children:`The real magic of the Fusion Module comes from an innovative transaction encoding scheme, all of those transactions to be
executed with a single user signature.`}),`
`,n.jsxs(e.p,{children:["Read more about Fusion Accounts ",n.jsx(e.a,{href:"https://ethresear.ch/t/fusion-module-7702-alternative-with-no-protocol-changes/20949",children:"here"})]}),`
`,n.jsxs(e.h2,{id:"eip7702-support",children:["EIP7702 Support",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#eip7702-support",children:n.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(e.p,{children:["If you're a wallet looking to integrate EIP7702, read our ",n.jsx(e.a,{href:"/eip7702/wallet-guide",children:"Integration Guide"}),` to get a comprehensive
overview of the steps needed to enable gas abstraction, gas sponsorhips and batch execution for your users.`]}),`
`,n.jsx(e.p,{children:`Our EIP7702 stack uses the advanced Biconomy Modular Execution Environment as the backbone, offering notable benefits
compared to alternatives using the Bundler/Paymaster stack.`}),`
`,n.jsxs(e.h3,{id:"biconomy-mee-stack-benefits-for-eip7702-integrators",children:["Biconomy MEE Stack Benefits for EIP7702 Integrators",n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#biconomy-mee-stack-benefits-for-eip7702-integrators",children:n.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(e.h4,{id:"multichain-gas-sponsorships",children:[n.jsx(e.strong,{children:"Multichain Gas Sponsorships"}),n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#multichain-gas-sponsorships",children:n.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,n.jsx(e.p,{children:"Use a single gas tank to sponsor user transactions across all supported blockchains."}),`
`,n.jsxs(e.h4,{id:"multichain-gas-abstraction",children:[n.jsx(e.strong,{children:"Multichain Gas Abstraction"}),n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#multichain-gas-abstraction",children:n.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,n.jsx(e.p,{children:`Use native or ERC20 tokens on any chain to pay for transaction execution on any other chain. E.g. pay for
a transaction on Optimism with USDC on Arbitrum.`}),`
`,n.jsxs(e.h4,{id:"unfied-balances",children:[n.jsx(e.strong,{children:"Unfied Balances"}),n.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#unfied-balances",children:n.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,n.jsx(e.p,{children:`Treat user balances across multiple chains as a single balance. When users wish to execute an action on one chain
the Biconomy MEE infrastructure will enable you to encode a Suprtransaction which pulls their funds from multiple
blockchains and executes the action on the destination chain - in a single signature.`})]})}function r(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(a,{...t})}):a(t)}export{r as default,s as frontmatter};
