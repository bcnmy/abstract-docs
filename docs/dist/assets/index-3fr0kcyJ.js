import{u as a,j as e}from"./index-ZQOw4TQ3.js";const d={title:"NexusSmartAccount",description:"undefined"};function i(s){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"nexussmartaccount",children:["NexusSmartAccount",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#nexussmartaccount",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"NexusSmartAccount"})," class is a comprehensive implementation of a smart contract account that is compliant with ERC-7579 and ERC-4337 standards. It is part of the Biconomy suite of contracts for Modular Smart Accounts."]}),`
`,e.jsxs(n.h2,{id:"overview",children:["Overview",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"NexusSmartAccount"})," extends ",e.jsx(n.code,{children:"BaseSmartContractAccount"})," and provides a wide range of functionality for managing and interacting with smart contract accounts. It includes features such as:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Account creation and deployment"}),`
`,e.jsx(n.li,{children:"Transaction execution"}),`
`,e.jsx(n.li,{children:"User operation building and sending"}),`
`,e.jsx(n.li,{children:"Module management (installation, uninstallation, and querying)"}),`
`,e.jsx(n.li,{children:"Balance checking"}),`
`,e.jsx(n.li,{children:"Gas estimation"}),`
`,e.jsx(n.li,{children:"Signature validation"}),`
`]}),`
`,e.jsxs(n.h2,{id:"key-components",children:["Key Components",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#key-components",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"modules",children:["Modules",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#modules",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The account supports various types of modules:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Validation modules"}),`
`,e.jsx(n.li,{children:"Execution modules"}),`
`,e.jsx(n.li,{children:"Fallback modules"}),`
`,e.jsx(n.li,{children:"Hook modules"}),`
`]}),`
`,e.jsx(n.p,{children:"These modules can be installed, uninstalled, and queried, allowing for a flexible and extensible account structure."}),`
`,e.jsxs(n.h3,{id:"bundler-and-paymaster",children:["Bundler and Paymaster",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#bundler-and-paymaster",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The class integrates with a bundler for submitting user operations and a paymaster for gas abstraction, enhancing the user experience by potentially allowing gasless transactions."}),`
`,e.jsxs(n.h3,{id:"user-operations",children:["User Operations",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#user-operations",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The class provides methods for building, signing, and sending user operations, which are the core concept of ERC-4337 for account abstraction."}),`
`,e.jsxs(n.h2,{id:"main-methods",children:["Main Methods",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#main-methods",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Some of the key methods include:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"create"}),": Static method to create a new NexusSmartAccount instance"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getAddress"}),": Retrieves the account's address"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"sendTransaction"}),": Sends a transaction (or batch of transactions)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"buildUserOp"}),": Builds a user operation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"sendUserOp"}),": Sends a user operation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"installModule"}),": Installs a module on the account"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"uninstallModule"}),": Uninstalls a module from the account"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getBalances"}),": Retrieves token balances for the account"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"signMessage"}),": Signs a message using the account"]}),`
`]}),`
`,e.jsxs(n.h2,{id:"usage",children:["Usage",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#usage",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"NexusSmartAccount"})," is designed to be used as part of a larger system for managing smart contract accounts. It provides a high level of flexibility and functionality, allowing developers to create sophisticated account-based applications."]}),`
`,e.jsx(n.p,{children:"To use this class, you would typically:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Create an instance using the static ",e.jsx(n.code,{children:"create"})," method"]}),`
`,e.jsx(n.li,{children:"Use the instance to perform actions like sending transactions, managing modules, or interacting with the blockchain"}),`
`]}),`
`,e.jsxs(n.h2,{id:"advanced-features",children:["Advanced Features",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#advanced-features",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The class also includes advanced features such as:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Counterfactual address calculation"}),`
`,e.jsx(n.li,{children:"ERC-6492 compliant signature generation"}),`
`,e.jsx(n.li,{children:"Gas estimation for user operations"}),`
`,e.jsx(n.li,{children:"Token fee estimation and management"}),`
`,e.jsx(n.li,{children:"Support for various execution modes"}),`
`]})]})}function r(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{r as default,d as frontmatter};
