import{u as s,j as e}from"./index-ZQOw4TQ3.js";const r={title:"Gas Estimations SDK",description:"undefined"};function n(t){const i={a:"a",div:"div",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.header,{children:e.jsxs(i.h1,{id:"gas-estimations-sdk",children:["Gas Estimations SDK",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gas-estimations-sdk",children:e.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(i.p,{children:"The Gas estimation SDK enables you to estimate gas limits accurately. This functionality is packaged within an npm package, enabling other infrastructure providers to reuse the same logic."}),`
`,e.jsxs(i.p,{children:[`While sending a userOp, it is essential to accurately estimate callGasLimit, verificationGasLimit and preVerificationGas. This ensures the userOp is included on the chain.
The exact definition of these values is mentioned in the ERC 4337 spec `,e.jsx(i.a,{href:"https://eips.ethereum.org/EIPS/eip-4337#useroperation",children:"here"}),"."]}),`
`,e.jsx(i.p,{children:"Accurately estimating gas limits is crucial, as failure to do so may result in the following scenarios:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"If preVerificationGas is not enough the userOp can be rejected by bundlers"}),`
`,e.jsx(i.li,{children:"If callGasLimit is not enough the transaction will be included on-chain but the call data execution will not be completed and the paymaster or account will still pay for the userOp"}),`
`,e.jsx(i.li,{children:"If verificationGasLimit is low the userOp will revert to the simulation step"}),`
`]}),`
`,e.jsx(i.p,{children:"All the above problems result in bad UX, failed and reverted transactions which are also hard to debug."})]})}function o(t={}){const{wrapper:i}={...s(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(n,{...t})}):n(t)}export{o as default,r as frontmatter};
