import{u as a,j as e}from"./index-ZQOw4TQ3.js";const c={title:"Managing Smart Accounts on Multiple Chains",description:"undefined"};function t(i){const n={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",h4:"h4",header:"header",p:"p",pre:"pre",span:"span",strong:"strong",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"managing-smart-accounts-on-multiple-chains",children:["Managing Smart Accounts on Multiple Chains",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#managing-smart-accounts-on-multiple-chains",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"AbstractJS"}),` was built from the ground-up to serve the needs of teams working in both single and multi-chain
environments. Until now, using Smart Account SDKs for multichain operations has been quite cumbersome. While
it was theoretically possible to work with Smart Accounts across chains, building such flows made the code
long and difficult to read.`]}),`
`,e.jsxs(n.p,{children:["That's why ",e.jsx(n.code,{children:"AbstractJS"})," comes with a built-in utility type called a ",e.jsx(n.code,{children:"MultichainAccount"}),". ",e.jsx(n.code,{children:"MultichainAccount"}),`
manages and keeps track of multiple Smart Account deployments across different chains. It lazily deploys accounts
chain-by-chain, only when they're needed.`]}),`
`,e.jsx(n.p,{children:`Beyond this, it manages address derivations for chains which don't derive contract addresses in the same way
as Ethereum (namely zkSync and other Elastic Chain chains).`}),`
`,e.jsx(n.p,{children:`All of this combines to give developers a pleasurable experience when dealing with Smart Accounts in a multichain
environment.`}),`
`,e.jsxs(n.aside,{"data-callout":"tip",children:[e.jsx(n.strong,{"data-callout-title":!0,children:"Single-Chain Friendly"}),e.jsxs(n.p,{children:["Like all other ",e.jsx(n.code,{children:"AbstractJS"})," multichain utilities, ",e.jsx(n.code,{children:"MultichainSmartAccount"}),` behaves as expected in a single chain
environment and can be used by teams who are now working on a single-chain app, which might get the need for
multichain capabilities down the line.`]})]}),`
`,e.jsxs(n.h2,{id:"guide",children:["Guide",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#guide",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["This will be a short guide, presenting an overview of the functionalities of the ",e.jsx(n.code,{children:"MultichainSmartAccount"})," type."]}),`
`,e.jsx(n.div,{"data-vocs-steps":"true",children:e.jsxs(n.div,{"data-depth":"4",children:[e.jsxs(n.h4,{id:"creating-a-multichainsmartaccount",children:["Creating a MultichainSmartAccount",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#creating-a-multichainsmartaccount",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"CreatingAccount","data-lang":"ts",children:e.jsx(n.code,{children:e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "})})})]})})]})}function r(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{r as default,c as frontmatter};
