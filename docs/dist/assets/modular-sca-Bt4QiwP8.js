import{u as r,j as e}from"./index-ZQOw4TQ3.js";const a={title:"Modular Smart Accounts",description:"undefined"};function t(s){const n={a:"a",aside:"aside",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"modular-smart-accounts",children:["Modular Smart Accounts",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#modular-smart-accounts",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:`Smart accounts drastically simplify the user exeperience of interacting with
blockchains and enable developers to build feature-rich accounts. Traditionally,
users would interact with blockchain though their Externally Owned Account (EOA).`}),`
`,e.jsxs(n.p,{children:["With Smart Accounts, the user accounts themselves become ",e.jsx(n.em,{children:"programmable"}),`, allowing
you to take advantage of powerful features like:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"",children:"Sponsoring user transcations"})}),`
`,e.jsxs(n.li,{children:["Enabling users to ",e.jsx(n.a,{href:"",children:"pay for gas with ERC20 tokens"})]}),`
`,e.jsxs(n.li,{children:["Enabling login with ",e.jsx(n.a,{href:"",children:"Passkeys or Social Accounts"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"",children:"Sign transactions with biometrics"})," (fingerprint, FaceID)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"",children:"Add automation to accounts"})," (with bots, or AI Agents)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"",children:"Add additional signers"})," - require multiple signers for a single call"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"",children:"Add policies to accounts"})," - restrict what certain signers can do with your accounts.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Which contracts a signer can call"}),`
`,e.jsx(n.li,{children:"Conditions - Under which conditions is a signer allowed to execute calls"}),`
`,e.jsx(n.li,{children:"Time bounds - When can a signer execute calls"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Add custom functionality to accounts with ",e.jsx(n.a,{href:"",children:"Account Modules"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Biconomy infrastructure and our ",e.jsx(n.a,{href:"",children:"AbstractJS"}),` SDK work with industry-standard
`,e.jsx(n.a,{href:"",children:"ERC4337"})," and ",e.jsx(n.a,{href:"",children:"ERC7579"}),` compliant smart accounts. You can use our reference
account implementation - `,e.jsx(n.a,{href:"",children:"Nexus"})," or use ",e.jsx(n.a,{href:"",children:"other ERC7579 smart accout providers"})]}),`
`,e.jsxs(n.h2,{id:"choose-nexus-as-your-smart-account",children:["Choose Nexus as Your Smart Account",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#choose-nexus-as-your-smart-account",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.aside,{"data-callout":"tip",children:[e.jsx(n.p,{children:`Biconomy has an in-house implementation of the Modular Smart Account called Nexus. It's a
fully featured smart account using the ERC4337 and ERC7579 standards.`}),e.jsx(n.hr,{}),e.jsx(n.p,{children:"Nexus highlights:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The most gas efficient Smart Account implementation on the market. ",e.jsx(n.a,{href:"",children:"Check Benchmarks"})]}),`
`,e.jsxs(n.li,{children:["Rigorously audited. Backed by 92% score from the industry leader ",e.jsx(n.a,{href:"https://www.defisafety.com/app/pqrs/603",children:"@DefiSafety"}),"! ",e.jsx(n.a,{href:"",children:"Check Audits"})]}),`
`]}),e.jsx(n.hr,{}),e.jsx(n.p,{children:e.jsx(n.a,{href:"/overview",children:"Learn More About Nexus"})})]}),`
`,e.jsxs(n.h2,{id:"smart-account-modules",children:["Smart Account Modules",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#smart-account-modules",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Smart accounts compliant with the ",e.jsx(n.a,{href:"",children:"ERC7579"}),` standard enable developers to
install `,e.jsx(n.a,{href:"/modules",children:"Account Modules"})," and add extra functionality to their users accounts."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"AbstractJS"})," makes ",e.jsx(n.a,{href:"",children:"installing and managing account modules"})," easy."]}),`
`,e.jsx(n.p,{children:"Some common modules are:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.strong,{children:"Passkeys"}),`
`,e.jsx(n.p,{children:"Get rid of seed phrases and enable your users to sign transactions with their fingerprints or other biometrics."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.strong,{children:"Smart Sessions"}),`
`,e.jsx(n.p,{children:`Enable bots or AI agents to automate execution on your account while providing strict guardrails on what they're
allowed to execute. Smart Sessions allow you to build complex automation, while giving your users the peace of
mind that their funds can't be misappropriated.`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.strong,{children:"Resource Locks"}),`
`,e.jsx(n.p,{children:`Enable unified balances and lightning fast cross-chain liquidity fronting with a resource lock module. Apps
interacting with users who have resource locks installed can access their funds across multiple chains in a
fraction of the time it would take to bridge them.`}),`
`]}),`
`]}),`
`,e.jsx(n.aside,{"data-callout":"success",children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"🔒 Security:"}),` Nexus has been rigorously audited and tested, ensuring that dapps integrating it can trust its smart
account implementation. `,e.jsx(n.a,{href:"/contractsAndAudits",children:"Audits"}),` by leading firms Spearbit and Cyfrin provide top-tier security
assurances. Backed by 92% score from the industry leader `,e.jsx(n.a,{href:"https://www.defisafety.com/app/pqrs/603",children:"@DefiSafety"}),"!"]})}),`
`,e.jsx(n.aside,{"data-callout":"info",children:e.jsxs(n.p,{children:[`🪙 Nexus is the most gas efficient smart account on the market, being - on average - 25% cheaper than alternatives.
Check the `,e.jsx(n.a,{href:"https://pbs.twimg.com/media/GgseeCeWoAAP1pA?format=png&name=900x900",children:"Overview"}),` and
`,e.jsx(n.a,{href:"https://github.com/bcnmy/aa-benchmarks",children:"Benchmarks"})]})})]})}function c(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{c as default,a as frontmatter};
