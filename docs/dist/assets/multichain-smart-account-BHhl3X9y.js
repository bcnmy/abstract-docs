import{u as a,j as s}from"./index-ZQOw4TQ3.js";const r={title:"Understanding ",description:"undefined"};function i(n){const e={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...a(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.header,{children:s.jsxs(e.h1,{id:"understanding-multichainsmartaccount",children:["Understanding ",s.jsx(e.code,{children:"MultichainSmartAccount"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#understanding-multichainsmartaccount",children:s.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsxs(e.p,{children:["The ",s.jsx(e.code,{children:"MultichainSmartAccount"})," is a foundational abstraction in the MEE SDK that unifies multiple smart contract accounts across different chains into a single interface. While currently implemented with Biconomy's Nexus account system, it's designed to be compatible with any ERC4337/ERC7579-compliant smart contract account."]}),`
`,s.jsxs(e.h2,{id:"core-concept",children:["Core Concept",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#core-concept",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["Think of ",s.jsx(e.code,{children:"MultichainSmartAccount"})," as a master key that manages a collection of smart contract accounts, one for each chain you operate on. When you create a MultichainSmartAccount:"]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" mcNexus"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" toMultichainNexusAccount"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    chains: [polygon, optimism, base],"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    signer: signer,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"});"})})]})}),`
`,s.jsx(e.p,{children:"Behind the scenes, this creates or connects to separate smart contract account instances on each chain, all controlled by the same signer. Each of these accounts follows the ERC4337/ERC7579 standards, which means they can:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Execute batched transactions"}),`
`,s.jsx(e.li,{children:"Pay for gas in any token"}),`
`,s.jsx(e.li,{children:"Use advanced validation logic"}),`
`,s.jsx(e.li,{children:"Handle complex account recovery scenarios"}),`
`]}),`
`,s.jsxs(e.h2,{id:"chain-specific-access",children:["Chain-Specific Access",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#chain-specific-access",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"You can access chain-specific account instances using the deployment method:"}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Get the account instance for Optimism"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" optimismAccount"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" mcNexus."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"deploymentOn"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(optimism.id);"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Get the actual account address on Base"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" baseAddress"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" mcNexus."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"deploymentOn"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(base.id).address;"})]})]})}),`
`,s.jsx(e.p,{children:"This is particularly useful when you need to:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Get account addresses for specific chains"}),`
`,s.jsx(e.li,{children:"Access chain-specific account features"}),`
`,s.jsx(e.li,{children:"Verify account deployment status"}),`
`,s.jsx(e.li,{children:"Check balances or permissions"}),`
`]}),`
`,s.jsxs(e.h2,{id:"account-abstraction-compatibility",children:["Account Abstraction Compatibility",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#account-abstraction-compatibility",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["While the current implementation uses Biconomy's Nexus accounts, the ",s.jsx(e.code,{children:"MultichainSmartAccount"})," interface is designed to work with any compliant smart account implementation:"]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Biconomy accounts"}),`
`,s.jsx(e.li,{children:"Safe accounts"}),`
`,s.jsx(e.li,{children:"ZeroDev accounts"}),`
`,s.jsx(e.li,{children:"Any ERC4337/ERC7579-compliant implementation"}),`
`]}),`
`,s.jsx(e.p,{children:"This is achieved through a standardized interface that captures the essential functionality any smart contract account must provide, regardless of its specific implementation."}),`
`,s.jsxs(e.h2,{id:"future-extensibility",children:["Future Extensibility",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#future-extensibility",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"The design anticipates future developments in the account abstraction ecosystem:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"New account implementations can be added without changing the core interface"}),`
`,s.jsx(e.li,{children:"Advanced features can be accessed through provider-specific extensions"}),`
`,s.jsx(e.li,{children:"Cross-chain operations work consistently regardless of the underlying account type"}),`
`]}),`
`,s.jsxs(e.h2,{id:"common-use-cases",children:["Common Use Cases",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#common-use-cases",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["The ",s.jsx(e.code,{children:"MultichainSmartAccount"})," is essential for operations like:"]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Managing assets across multiple chains"}),`
`,s.jsx(e.li,{children:"Executing coordinated cross-chain transactions"}),`
`,s.jsx(e.li,{children:"Maintaining consistent permissions and recovery settings"}),`
`,s.jsx(e.li,{children:"Paying gas fees in different tokens on different chains"}),`
`]}),`
`,s.jsxs(e.h2,{id:"integration-example",children:["Integration Example",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#integration-example",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"Here's how it all comes together in a typical cross-chain operation:"}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Create account instance"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" mcNexus"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" toMultichainNexusAccount"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    chains: [optimism, base],"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    signer: signer,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"});"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Create a supertransaction using the account"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" quote"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" supertransaction"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    ."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"injectAccount"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(mcNexus)"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    ."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"payGasWith"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"USDC"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", { on: optimism.id })"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    ."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"addInstructions"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // The account automatically handles all chain-specific details"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        await"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" requireErc20Balance"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            amount: supplyAmount,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            chain: base,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            token: xUSDC,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        }),"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // Operations on any chain using the same account interface"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        xAAVE."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"on"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(base.id)."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"supply"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"}),s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"/*...*/"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"})"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    )"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    ."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getQuote"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(meeService);"})]})]})}),`
`,s.jsx(e.p,{children:"The beauty of this abstraction is that it handles all the complexity of managing multiple accounts while presenting a clean, unified interface for cross-chain operations. Whether you're using Biconomy accounts today or plan to switch to a different implementation in the future, your code remains consistent and portable."}),`
`,s.jsxs(e.h2,{id:"mee-orchestration--security-model",children:["MEE Orchestration & Security Model",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#mee-orchestration--security-model",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"The Modular Execution Environment (MEE) uses MultichainSmartAccounts to execute developer-defined routes across multiple chains. A key distinction is that all route calculations and optimizations happen locally in the SDK - developers have complete control over how operations are structured and sequenced. The MEE's role is to reliably execute these pre-calculated routes, ensuring proper orchestration of the defined transactions across chains."}),`
`,s.jsx(e.p,{children:"When you initiate a supertransaction, you're essentially defining an execution plan:"}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" quote"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" supertransaction"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    ."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"injectAccount"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(mcNexus)  "}),s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// MEE now has access to all your chain accounts"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    ."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"payGasWith"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"USDC"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", { on: optimism.id })"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    ."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"addInstructions"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // Your custom cross-chain operations defined here"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    )"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    ."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getQuote"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(meeService);"})]})]})}),`
`,s.jsx(e.p,{children:"The critical security aspect is that all of these cross-chain operations are executed with a single signature and validated through an ERC7579 validator module on each chain. This means:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Each operation inherits the full security guarantees of the underlying blockchain"}),`
`,s.jsx(e.li,{children:"Transactions must pass validation rules defined in your smart account"}),`
`,s.jsx(e.li,{children:"The execution flow cannot be tampered with or reordered"}),`
`,s.jsx(e.li,{children:"The system's security is anchored in the smart contract accounts themselves"}),`
`]}),`
`,s.jsx(e.p,{children:"For instance, when orchestrating a complex operation:"}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"await"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" requireErc20Balance"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    amount: "}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"parseUnits"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"1000"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"6"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"),"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    chain: base,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    token: xUSDC,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"})"})})]})}),`
`,s.jsx(e.p,{children:"The process works like this:"}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsx(e.li,{children:"The SDK calculates optimal routes and creates an execution plan"}),`
`,s.jsx(e.li,{children:"You sign this plan once"}),`
`,s.jsx(e.li,{children:"The MEE executes the plan across chains"}),`
`,s.jsx(e.li,{children:"Each operation is validated by your account's ERC7579 validator module"}),`
`,s.jsx(e.li,{children:"The orchestration ensures operations happen in the correct sequence"}),`
`]}),`
`,s.jsx(e.p,{children:"The MEE's role is purely operational - it ensures your signed instructions are executed correctly and in sequence. The security comes from:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"On-chain validation through ERC7579 modules"}),`
`,s.jsx(e.li,{children:"Smart account signature verification"}),`
`,s.jsx(e.li,{children:"Blockchain-level transaction integrity"}),`
`,s.jsx(e.li,{children:"Deterministic execution of your pre-defined routes"}),`
`]}),`
`,s.jsx(e.p,{children:"Developers can implement custom routing logic, optimization strategies, and validation rules. The MEE will faithfully execute these custom implementations while maintaining the security guarantees of the underlying smart accounts and blockchains."}),`
`,s.jsx(e.p,{children:"All of this is possible because the MEE can interact with your MultichainSmartAccount on any chain, coordinating actions between different account instances while maintaining security and atomicity guarantees. The single-signature model, combined with ERC7579 validation, ensures that complex cross-chain operations remain as secure as single-chain transactions."})]})}function l(n={}){const{wrapper:e}={...a(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(i,{...n})}):i(n)}export{l as default,r as frontmatter};
