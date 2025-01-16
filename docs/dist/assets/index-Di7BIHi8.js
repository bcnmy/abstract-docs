import{u as i,j as e}from"./index-ZQOw4TQ3.js";const a={sidebar_position:4,title:"ERC-7677 Paymaster Web Service Capability"};function s(n){const t={a:"a",aside:"aside",p:"p",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.p,{children:["The Biconomy Paymaster supports ERC-7677 standard, which is an ",e.jsx(t.a,{href:"https://eips.ethereum.org/EIPS/eip-5792",children:"EIP-5792"}),` compliant capability for paymasters
to standardize the interaction between wallets and ERC-4337 paymaster web services.`]}),`
`,e.jsxs(t.p,{children:["You can read more about ERC-7677 ",e.jsx(t.a,{href:"https://eips.ethereum.org/EIPS/eip-7677",children:"here"}),"."]}),`
`,e.jsx(t.aside,{"data-callout":"info",children:e.jsx(t.p,{children:"The current support of ERC-7677 is only for Entry Point v6, deployed at: 0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"})}),`
`,e.jsx(t.aside,{"data-callout":"info",children:e.jsxs(t.p,{children:[`Currently, the Biconomy SDK does not support 7677 capabilities. You can either directly interact with
Biconomy Paymaster Service using JSON RPC calls as described in the upcoming sections
or refer to `,e.jsx(t.a,{href:"https://github.com/arcticfloyd1984/7677-playground",children:"this playground"}),` that uses
Safe Smart Account with Pimlico's permissionless.js SDK's 7677 paymaster client to send user operation`]})})]})}function o(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{o as default,a as frontmatter};
