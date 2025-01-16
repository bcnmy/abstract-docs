import{u as a,j as e}from"./index-ZQOw4TQ3.js";const o={sidebar_position:4,title:"Batched Session Validation",description:"undefined"};function n(i){const s={a:"a",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"batched-session-validation",children:["Batched Session Validation",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#batched-session-validation",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(s.p,{children:"This module works hand in hand with the Session Key Manager Module. It allows for multiple session validation modules to be activated for a user."}),`
`,e.jsxs(s.h2,{id:"what-it-enables",children:["What it enables",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-it-enables",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Those who are familiar with the Biconomy Modular Session Keys framework know that it provides great flexibility and allows for quick building of the Session Validation Modules for every new use case without touching the core Session Keys logic. Batched Session Router adds composability, allowing batching of several session key signed operations which should be validated by different Session Validation modules into one User Operation and execute them atomically."}),`
`,e.jsxs(s.h2,{id:"ux-impact",children:["UX Impact",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ux-impact",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"This module allows batching several operations (actions) into one atomically executed User Operation, thus ensuring better UX for many DeFi use cases."}),`
`,e.jsx(s.p,{children:"Let’s take a very simple example. Some dApp wants to allow users to perform a simple flow of actions:"}),`
`,e.jsx(s.p,{children:`Approve token A to a DEX
Swap token A for token B
Stake token B on some Protocol
It also doesn’t want to make this on behalf of the users when the rate of the swap is optimal.`}),`
`,e.jsx(s.p,{children:"In this case, they will use Session Keys to sign those operations. Since those actions are very common there already are the building blocks for this = appropriate Session Validation Modules (SVMs): ERC20ApprovalSVM, DEXSwapSVM, ProtocolERC20StakeSVM."}),`
`,e.jsx(s.p,{children:"Each of those SVMs is only able to validate userOps which specifically performs a given action: swap, approve, or stake. So none of them is able to validate the userOp which leverages executeBatch() method to perform those 3 actions together."}),`
`,e.jsx(s.p,{children:"Of course, we can always build 3 separate userOps for those 3 actions, however, they won’t be included in the same bundle as per ERC-4337 specification, so they end up on 3 different bundles, and that’s not what the user wants in DeFi."}),`
`,e.jsx(s.p,{children:"It’s also possible to build a custom Session Validation Module that works with this specific flow and validates such atomic userOps which leverages executeBatch(). However, if in the future there’s a need to add one more step to this flow, this will require a new Session Validation Module to be built. Such an SVM would also double-use some of the code already implemented in the basic SVMs and that is not a good practice. Also, this would require permissions to be separately set up for every new SVM."}),`
`,e.jsx(s.p,{children:"Session Router addresses those issues by parsing executeBatch() calldata and routing validation flow to the specific SVMs based on the actions into the batch."}),`
`,e.jsx(s.p,{children:"Now, dApps can construct flows based on the actions validated by basic SVMs and share common permissions across flows."}),`
`,e.jsxs(s.h2,{id:"how-it-works",children:["How it works",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-it-works",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Batched Session Router leverages ",e.jsx(s.strong,{children:e.jsx(s.em,{children:"SmartAccount.executeBatch()"})})," method to execute atomic operations."]}),`
`,e.jsxs(s.p,{children:["It is a Validation module, that validates the ",e.jsx(s.strong,{children:e.jsx(s.em,{children:"userOps"})})," with the ",e.jsx(s.strong,{children:e.jsx(s.em,{children:"callData"})})," field containing a call to ",e.jsx(s.strong,{children:e.jsx(s.em,{children:"SmartAccount.executeBatch()"})}),"."]}),`
`,e.jsx(s.p,{children:"Every operation in the batch is expected to be an action managed by a specific Session Validation Module."}),`
`,e.jsx(s.p,{children:"Of course, this action should be permitted for a given session key by enabling the appropriate session key + parameters in the Session Key Manager module."}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"/smartAccountsV2/modules/batchedSVM.png",alt:"BatchedSessionDiagram"})}),`
`,e.jsx(s.p,{children:"So, the Batched Session Router"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Verifies every action this userOp claims to perform is enabled for a given Smart Account."}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Checks which Session Key was used to sign the userOp."}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Checks this is the actual signer who is allowed to perform the actions."}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Parses the executeBatch() calldata to get the per-action calldatas and passes them to the appropriate Session Validation Module. SVMs perform permissions checks to ensure that actions that are about to be performed with this calldata comply with the permissions."}),`
`]}),`
`]}),`
`,e.jsx(s.p,{children:"It also intersects validity timeframes for all the enabled sessions. if at least one session is expired or not due, the whole atomic operation fails to be validated."}),`
`,e.jsxs(s.h2,{id:"installation",children:["Installation",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#installation",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"npm"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" @biconomy/account"})]})})}),`
`,e.jsxs(s.h2,{id:"integration",children:["Integration",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#integration",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Integration is the same as using the Session Key Manager Module with the additional step of starting a session router module."}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  createSessionKeyManagerModule,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  createBatchedSessionRouterModule,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  DEFAULT_BATCHED_SESSION_ROUTER_MODULE,"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"} "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "@biconomy/account"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" sessionModule"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" createSessionKeyManagerModule"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  moduleAddress: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"DEFAULT_SESSION_KEY_MANAGER_MODULE"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  smartAccountAddress: address,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"});"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" sessionRouterModule"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" createBatchedSessionRouterModule"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  moduleAddress: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"DEFAULT_BATCHED_SESSION_ROUTER_MODULE"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  sessionKeyManagerModule: sessionModule,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  smartAccountAddress: saAddress,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"});"})})]})}),`
`,e.jsxs(s.p,{children:["Implementation of this is similar to the Session Key Manager module guide - a full implementation example is shown ",e.jsx(s.a,{href:"/smartAccountsV2/tutorials/sessions/createBatchSession",children:"here"})]})]})}function r(i={}){const{wrapper:s}={...a(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(n,{...i})}):n(i)}export{r as default,o as frontmatter};
