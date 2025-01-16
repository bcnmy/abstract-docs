import{u as i,j as e}from"./index-ZQOw4TQ3.js";const r={title:"Modular Execution Environments & Supertransactions (MEEs)",description:"undefined"};function a(t){const n={a:"a",aside:"aside",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",p:"p",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"modular-execution-environments--supertransactions-mees",children:["Modular Execution Environments & Supertransactions (MEEs)",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#modular-execution-environments--supertransactions-mees",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"MEEs represent a breakthrough in onchain execution, replacing the ERC4337 Bundler & Paymaster stack through Smart Accounts integration."}),`
`,e.jsxs(n.h2,{id:"smart-accounts",children:["Smart Accounts",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#smart-accounts",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:`Smart Contract Accounts (SCAs) are programmable blockchain accounts offering custom execution logic, contrasting with
traditional External Owned Accounts (EOAs). They provide enhanced security through validation rules,
automated management with spending limits and recovery mechanisms, batched transactions, and gas fee abstraction.`}),`
`,e.jsx(n.p,{children:"SCAs can enforce daily spending limits, require multi-signature approval, and automatically reject blacklisted addresses, making them valuable for both individual and organizational use."}),`
`,e.jsxs(n.h2,{id:"bundlers-and-paymasters",children:["Bundlers and Paymasters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#bundlers-and-paymasters",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The ERC4337 stack's Bundlers and Paymasters have revolutionized onchain UX by enabling gas sponsorship, ERC20 token gas payments, and Account Module functionality."}),`
`,e.jsxs(n.p,{children:["If you're interested in using the Biconomy Bundler & Paymaster infra, please click ",e.jsx(n.a,{href:"/overview",children:"here"})]}),`
`,e.jsxs(n.h3,{id:"problems-with-bundlers-and-paymasters",children:["Problems with Bundlers and Paymasters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#problems-with-bundlers-and-paymasters",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h4,{id:"multichain-execution",children:["Multichain Execution",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#multichain-execution",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"While ERC4337 infrastructure exists across hundreds of EVM chains, it lacks interoperability. Bundlers and Paymasters are chain-specific, preventing cross-chain operations."}),`
`,e.jsxs(n.h4,{id:"intents",children:["Intents",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#intents",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Traditional bridge limitations with finality and chain reordering led to the development of Intent-based execution. This system uses Fillers to front capital on destination chains before finality, charging a fee while assuming reorg risk. Current Bundler and Paymaster infrastructure cannot handle Intents or interact with Solvers."}),`
`,e.jsxs(n.h2,{id:"multichain-execution-with-transactions-and-intents",children:["Multichain Execution with Transactions and Intents",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#multichain-execution-with-transactions-and-intents",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:`Modular Execution Environments (MEEs) are able to execute multiple transactions on multiple chains with a single user signature. They're also able to
combine intent-based and transaction-based execution.`}),`
`,e.jsxs(n.h3,{id:"supertransaction",children:["Supertransaction",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#supertransaction",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["MEEs are powered by an innovative data model - called a ",e.jsx(n.code,{children:"Supertransaction"}),`. A Supertransaction contains instructions for executing multiple transactions
across different chains. The Supertransaction is executed by one or more MEE Nodes.`]}),`
`,e.jsxs(n.h4,{id:"cross-chain-gas",children:["Cross-chain gas",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cross-chain-gas",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:`The cost of execution for the entire Supertransaction, no matter how many chains it's being
executed on - can be paid on a single chain. This enables native cross-chain gas sponsorships and paying for execution on one chain, with tokens on another.`}),`
`,e.jsxs(n.h4,{id:"merkle-tree",children:["Merkle Tree",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#merkle-tree",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:`All of the instructions within the Supertransaction can be represented by a single hash - called the Supertransaction hash. This hash is derived by hashing the
individual instructions within the Supertransaction and putting them as leafs of a Merkle Tree. The root hash of that Merkle Tree is the Supertransaction hash.`}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"https://i.imgur.com/AxGcTiJ.jpeg",alt:"Supertransaction"})}),`
`,e.jsxs(n.h3,{id:"mee-node",children:["MEE Node",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#mee-node",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:`An MEE Node is a Node which can execute and orchestrate instructions within a Supertransaction. The MEE Node has
two primary roles:`}),`
`,e.jsxs(n.h4,{id:"1-execution",children:["1. Execution",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-execution",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:`The MEE Node acts like a multichain Bundler and Paymaster in one. It's able to execute transactions onchain and pay for users
gas. The Key difference is that the MEE Node can do this across multiple blockchains.`}),`
`,e.jsx(n.p,{children:`If there are some instructions within a Supertransaction that are on chains which the specific MEE Node doesn't support, it
can allways collaborate with another MEE Node to execute that part of the Supertransaction.`}),`
`,e.jsxs(n.p,{children:["This is called ",e.jsx(n.em,{children:`Collaborative
Execution`})," and it's what enables Modular Execution Environments, such as the ",e.jsx(n.a,{href:"/mee/mee",children:"Biconomy Network"}),` to effortlessly
scale across thousands for rollups and appchains.`]}),`
`,e.jsxs(n.h4,{id:"2-orchestration",children:["2. Orchestration",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-orchestration",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[`When working in multichain environments, just executing the instructions is not enough. Multichain actions are
`,e.jsx(n.em,{children:"asynchronous"})," by default which means that the MEE Node needs to know how to ",e.jsx(n.em,{children:"orchestrate"}),` the intents and transactions
in the correct sequence.`]}),`
`,e.jsx(n.p,{children:`The Biconomy MEE Node has a built-in orchestrator which is able to intelligently deduce dependencies between transactions
by checking the necessary conditions for transaction execution.`}),`
`,e.jsxs(n.aside,{"data-callout":"info",children:[e.jsx(n.strong,{"data-callout-title":!0,children:"Example"}),e.jsx(n.p,{children:`For example. If a transaction is to supply 1000 USDC to a Morpho Valut on Optimism, but the funds must first arrive via an Intent
which moves the funds from Base, the MEE Node will wait for the execution of the Optimism transaction until the funds have arrived.`})]}),`
`,e.jsxs(n.aside,{"data-callout":"success",children:[e.jsx(n.strong,{"data-callout-title":!0,children:"Scalable Orchestration"}),e.jsx(n.p,{children:`The Biconomy MEE Node is able to orchestrate an arbitrary amount of transactions across an arbitraty amount of chains. Need to orchestrate
a 300 transaction sequence across 15 different chains? The MEE Node can do it automatically.`})]})]})}function o(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{o as default,r as frontmatter};
