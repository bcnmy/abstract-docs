import{u as t,j as e}from"./index-ZQOw4TQ3.js";const o={title:"Modules",description:"undefined"};function i(s){const n={a:"a",aside:"aside",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"modules",children:["Modules",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#modules",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["Modular smart accounts (MSA) offer more flexibility than 'static' accounts. Static accounts often need a developer for changes and involve complex proxy upgrades. In contrast, with MSA the functionalities are moved to external contracts called ",e.jsx(n.code,{children:"modules"})," to increase the speed of feature development. MSA lets users install or uninstall these modules, avoiding the need for entire account redeployment."]}),`
`,e.jsx(n.p,{children:"Biconomy MSA (Modular Smart Account) has two types of modules:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Validation modules"})," - These modules define different signature schemes or authorization mechanisms to validate who is allowed to perform what action on the account, by implementing standard interfaces."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Execution modules"})," - These modules define custom execution functions to facilitate the actions allowed by the account."]}),`
`]}),`
`,e.jsx(n.strong,{children:"Standardizing Modularity for Smart Accounts"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"ERC 6900"})," is the first proposal that aims to standardize modularity for Smart Accounts, introduced by Alchemy in April 2023. It provides standards for how plugins (modules) should be written as well as how compliant accounts should add, update, remove, and inspect plugins."]}),`
`,e.jsxs(n.p,{children:["Similarly, ",e.jsx(n.em,{children:"ERC 7579"})," enables developers to standardize these modules with minimal impact on the implementation logic of the account. It was developed by Rhinestone, Biconomy, ZeroDev, and OKX and presented in December 2023. This proposal outlines the minimally required interfaces and behavior for smart accounts and modules to ensure interoperability across implementations."]}),`
`,e.jsx(n.p,{children:"ERC 7579 is less opinionated and allows developers to experiment and innovate, making their own trade-offs around complexity and security. In contrast, ERC 6900 is more prescriptive due to an extensive description of all the aspects of compliant account behavior."}),`
`,e.jsxs(n.h3,{id:"how-to-enable-modules",children:["How to enable modules",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-enable-modules",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The Modular smart account is designed to be adaptable and flexible. Instead of storing ownership data internally or relying on a fixed signature verification method, it empowers users to choose their primary validation module. This flexibility, as part of Biconomy's ",e.jsx(n.a,{href:"https://github.com/bcnmy/scw-contracts/blob/main/contracts/smart-account/factory/SmartAccountFactory.sol#L73",children:"SmartAccountFactory"}),", ensures each account can validate userOps effectively and support diverse user requirements."]}),`
`,e.jsx(n.p,{children:"Modules can be enabled using the following methods:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["During MSA deployment, a default validation module is enabled. Internally, it calls the ",e.jsx(n.a,{href:"https://github.com/bcnmy/scw-contracts/blob/develop/contracts/smart-account/factory/SmartAccountFactory.sol#L57",children:"deployCounterFactualAccount"})," method on the smart account factory. The module selected to deploy the MSA determines its final address, due to its counterfactual nature."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["A new module can be enabled via a userOp transaction on a smart account by specifying the module address and moduleSetupData. Internally, it calls ",e.jsx(n.a,{href:"https://github.com/bcnmy/scw-contracts/blob/develop/contracts/smart-account/base/ModuleManager.sol#L196",children:"setupAndEnableModule"})," method on Module Manager. It can be set as an active validation module to be used for the next transactions."]}),`
`]}),`
`]}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" isEnabled"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" smartAccount."}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"isModuleEnabled"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(module_address);"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"if"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"!"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"isEnabled) {"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  const"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" enableModuleTrx"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" smartAccount."}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getEnableModuleData"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    module_address"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  );"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  transactionArray."}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"push"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(enableModuleTrx);"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"smartAccount "}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" smartAccount."}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"setActiveValidationModule"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"module"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]})]})}),`
`,e.jsx(n.p,{children:"As per the code, the initial step is to verify whether the module is already enabled. If the module is not enabled, a transaction can be performed to enable it."}),`
`,e.jsx(n.aside,{"data-callout":"note",children:e.jsx(n.p,{children:"The module passed during the deployment acts as the default validation module. This module gets used as an active validation module if no other module is enabled."})}),`
`,e.jsxs(n.h2,{id:"validation-modules",children:["Validation Modules",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#validation-modules",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/smartAccountsV2/modules/validationModule.png",alt:"validationModule.png"})}),`
`,e.jsxs(n.p,{children:["The validation Module is a module that extends the abstract contract ",e.jsx(n.strong,{children:"BaseAuthorizationModule**"})," - which implements the ",e.jsx(n.strong,{children:"IBaseAuthorizationModule"})," interface. This interface requires the implementation of the following methods:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"validateUserOp"}),": this method validates userOperation. It expects userOp callData to execute method calls of the Smart account and userOp signature being the ABI-encoded signature and module address."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isValidSignature"}),": this method validates an EIP-1271 signature."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isValidSignatureUnsafe"}),": this method validates an EIP-1271 signature but expects the data Hash to already include smart account address information."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Validation modules are invoked with a “call”. It has its own storage and doesn’t share storage with Biconomy Smart Account. Since validation module storage is accessed during the validation phase, ERC-4337 ",e.jsx(n.a,{href:"https://github.com/eth-infinitism/account-abstraction/blob/abff2aca61a8f0934e533d0d352978055fddbd96/eip/EIPS/eip-4337.md#storage-associated-with-an-address",children:"storage rules"})," apply to this."]}),`
`,e.jsx(n.aside,{"data-callout":"info",children:e.jsx(n.p,{children:"Validation Modules in MSA play a crucial role in determining who can perform actions, ensuring security and proper authorization."})}),`
`,e.jsx(n.p,{children:"Following is the list of Validation Modules:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/smartAccountsV2/modules/ecdsa",children:e.jsx(n.strong,{children:"ECDSA Ownership Module"})}),": This module is widely adopted as a validation module for Biconomy smart accounts. It can seamlessly integrate with MPC providers such as Web3Auth, abstracting EOA Private Key storage and enabling a web2-like experience such as email login."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/smartAccountsV2/modules/multichain",children:e.jsx(n.strong,{children:"Multichain ECDSA Validator Module"})}),": This module significantly improves UX for deploying and setting up Smart Accounts on several chains. It is an extension of the ECDSA Module enabling to dispatch multiple userOps on different chains using a single signature."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/smartAccountsV2/modules/sessions/sessionvalidationmodule",children:e.jsx(n.strong,{children:"Session key Manager Validation Module"})}),": This module enables the use of sessions to execute transactions. It verifies whether a given user operation adheres to the permissions defined within the session key and confirms that the operation has been signed by that session key. This can only be used as an active validation module."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"MultiOwnedECDSAModule"}),": This is an alteration of the ECDSA Module which allows multiple signers to be set up, and any one of the enabled owners can authorize a transaction using the ECDSA signature."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"how-to-create-a-custom-validation-module",children:["How to create a custom Validation Module",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-create-a-custom-validation-module",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Developers have the flexibility to create a custom validation module according to their specific requirements. This validation module must extend the BaseAuthorizationModule, which further implements the IAuthorizationModule and ISignatureValidator interfaces."}),`
`,e.jsx(n.strong,{children:"Key Imports and Their Roles"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"BaseAuthorizationModule"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Core Structure"}),": Forms the foundation of your custom module."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Link to Interfaces"}),": Connects to IAuthorizationModule and ISignatureValidator"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"IAuthorizationModule"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Operation Validation"}),": Manages validation of user operations (userOp)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Method Implementation"}),": Defines methods for operation validation your module must implement."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ISignatureValidator"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Signature Security & Standardization"}),": Focuses on signature validation and adheres to the ERC-1271 standard for smart contract-based signature"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"isValidSignature Method"}),": Essential for verifying signatures and ensuring security."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.aside,{"data-callout":"note",children:e.jsx(n.p,{children:"Adhering closely to the functionalities and specifications of these interfaces and standards is fundamental. It ensures your custom validation module operates securely and efficiently."})}),`
`,e.jsxs(n.p,{children:["After thorough testing and auditing, a pull request (PR) can be submitted to integrate the module with the SDK. A detailed walkthrough of the same is linked ",e.jsx(n.a,{href:"/smartAccountsV2/tutorials/customValidationModule",children:"here"}),"."]}),`
`,e.jsxs(n.h2,{id:"execution-modules",children:["Execution Modules",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#execution-modules",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Execution functions"})," execute any custom logic allowed by the account."]}),`
`,e.jsx(n.p,{children:`There are two default execution functions - called execute and executeBatch which allow for open-ended execution that is required for AA-flow. The custom execution module needs to call back into Smart Account to initialize a function call from within the context of the account.
The diagram below illustrates the execution flow for Modular Smart Accounts.`}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/smartAccountsV2/modules/executionModule.png",alt:"executionModule.png"})}),`
`,e.jsx(n.div,{children:e.jsx(n.p,{children:"Execution modules should be carefully developed and integrated, as they directly control the actions an account can perform."})})]})}function l(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{l as default,o as frontmatter};
