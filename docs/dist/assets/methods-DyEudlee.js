import{u as i,j as e}from"./index-ZQOw4TQ3.js";const c={title:"Ownable Executor SDK Methods",description:"undefined"};function n(r){const s={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"ownable-executor-sdk-methods",children:["Ownable Executor SDK Methods",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ownable-executor-sdk-methods",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(s.h2,{id:"execute",children:[e.jsx(s.code,{children:"execute"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#execute",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Executes a transaction on a smart account through the Ownable Executor module."}),`
`,e.jsx(s.strong,{children:"Usage Example"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" userOpReceipt"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" UserOpReceipt"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ownableExecutorModule."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"execute"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    transaction,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    ownedSmartAccountAddress,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})})]})}),`
`,e.jsx(s.strong,{children:"Parameters"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["execution (",e.jsx(s.a,{href:"https://github.com/bcnmy/biconomy-client-sdk/blob/b3fe78f74ec366f50bbbb5ad8cf043e689df6bff/src/account/utils/Types.ts#L346",children:"Transaction"})," | ",e.jsx(s.code,{children:"Transaction[]"}),", required)"]}),`
`,e.jsxs(s.li,{children:["ownedAccountAddress (",e.jsx(s.code,{children:"Address"}),", required)"]}),`
`]}),`
`,e.jsx(s.strong,{children:"Returns"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"Promise<UserOpReceipt>"}),": A promise of ",e.jsx(s.a,{href:"https://github.com/bcnmy/biconomy-client-sdk/blob/b3fe78f74ec366f50bbbb5ad8cf043e689df6bff/src/bundler/utils/Types.ts#L23",children:"UserOpReceipt"})]}),`
`]}),`
`,e.jsxs(s.h2,{id:"addowner",children:[e.jsx(s.code,{children:"addOwner"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#addowner",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Add a new owner to the smart account"}),`
`,e.jsx(s.strong,{children:"Usage Example"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" userOpReceipt"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" UserOpReceipt"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ownableExecutorModule."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"addOwner"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(newOwner);"})]})})}),`
`,e.jsx(s.strong,{children:"Parameters"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["newOwner (",e.jsx(s.code,{children:"Address"}),", required)"]}),`
`]}),`
`,e.jsx(s.strong,{children:"Returns"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"Promise<UserOpReceipt>"}),": A promise of ",e.jsx(s.a,{href:"https://github.com/bcnmy/biconomy-client-sdk/blob/b3fe78f74ec366f50bbbb5ad8cf043e689df6bff/src/bundler/utils/Types.ts#L23",children:"UserOpReceipt"})]}),`
`]}),`
`,e.jsxs(s.h2,{id:"removeowner",children:[e.jsx(s.code,{children:"removeOwner"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#removeowner",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Remove an owner from the smart account"}),`
`,e.jsx(s.strong,{children:"Usage Example"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" userOpReceipt"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" UserOpReceipt"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ownableExecutorModule."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"removeOwner"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(ownerToRemove);"})]})})}),`
`,e.jsx(s.strong,{children:"Parameters"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["ownerToRemove (",e.jsx(s.code,{children:"Address"}),", required)"]}),`
`]}),`
`,e.jsx(s.strong,{children:"Returns"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"Promise<UserOpReceipt>"}),": A promise of ",e.jsx(s.a,{href:"https://github.com/bcnmy/biconomy-client-sdk/blob/b3fe78f74ec366f50bbbb5ad8cf043e689df6bff/src/bundler/utils/Types.ts#L23",children:"UserOpReceipt"})]}),`
`]}),`
`,e.jsxs(s.h2,{id:"getowners",children:[e.jsx(s.code,{children:"getOwners"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getowners",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Get owners of the smart account for Ownable Executor module"}),`
`,e.jsx(s.strong,{children:"Usage Example"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" userOpReceipt"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" UserOpReceipt"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ownableExecutorModule."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getOwners"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]})})}),`
`,e.jsx(s.strong,{children:"Parameters"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["accountAddress (",e.jsx(s.code,{children:"Address"}),", optional): Pass this parameter when you want to get the owners of another smart account"]}),`
`]}),`
`,e.jsx(s.strong,{children:"Returns"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"Promise<UserOpReceipt>"}),": A promise of ",e.jsx(s.a,{href:"https://github.com/bcnmy/biconomy-client-sdk/blob/b3fe78f74ec366f50bbbb5ad8cf043e689df6bff/src/bundler/utils/Types.ts#L23",children:"UserOpReceipt"})]}),`
`]})]})}function l(r={}){const{wrapper:s}={...i(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(n,{...r})}):n(r)}export{l as default,c as frontmatter};
