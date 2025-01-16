import{u as n,j as s}from"./index-ZQOw4TQ3.js";const d={title:"Base ERC-7579 Methods",description:"undefined"};function l(i){const e={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...n(),...i.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.header,{children:s.jsxs(e.h1,{id:"base-erc-7579-methods",children:["Base ERC-7579 Methods",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#base-erc-7579-methods",children:s.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsxs(e.h2,{id:"installmodule",children:[s.jsx(e.code,{children:"installModule"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#installmodule",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"Installs the module on the smart account."}),`
`,s.jsx(e.strong,{children:"Usage Example"}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" userOpReceipt"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" UserOpReceipt"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" smartAccount."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"installModule"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    moduleAddress: "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"K1_VALIDATOR"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    type: "}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'validator'"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    data: "}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodePacked"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(["}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"address"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"], ["}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" smartAccount."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getAddress"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()])"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"})"})})]})}),`
`,s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["moduleAddress (",s.jsx(e.code,{children:"Address"}),", required)"]}),`
`,s.jsxs(e.li,{children:["type (",s.jsx(e.a,{href:"https://github.com/bcnmy/biconomy-client-sdk/blob/b66b611aa35af13da879995078892827aabf30e4/src/modules/utils/Types.ts#L232",children:"ModuleType"}),", required)"]}),`
`,s.jsxs(e.li,{children:["data (",s.jsx(e.code,{children:"0x${string}"})," | undefined, optional)"]}),`
`]}),`
`,s.jsx(e.strong,{children:"Returns"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"Promise<UserOpReceipt>"}),": A promise of ",s.jsx(e.a,{href:"https://github.com/bcnmy/biconomy-client-sdk/blob/b3fe78f74ec366f50bbbb5ad8cf043e689df6bff/src/bundler/utils/Types.ts#L23",children:"UserOpReceipt"})]}),`
`]}),`
`,s.jsxs(e.h2,{id:"uninstallmodule",children:[s.jsx(e.code,{children:"uninstallModule"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#uninstallmodule",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"Uninstalls the module of the smart account."}),`
`,s.jsx(e.strong,{children:"Usage Example"}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" smartAccount."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"uninstallModule"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(moduleAddress, ModuleType.Validation);"})]})})}),`
`,s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["moduleAddress (",s.jsx(e.code,{children:"Address"}),", required)"]}),`
`,s.jsxs(e.li,{children:["type (",s.jsx(e.a,{href:"https://github.com/bcnmy/biconomy-client-sdk/blob/b66b611aa35af13da879995078892827aabf30e4/src/modules/utils/Types.ts#L232",children:"ModuleType"}),", required)"]}),`
`,s.jsxs(e.li,{children:["moduleSelector (",s.jsx(e.code,{children:"0x${string}"})," | undefined, optional) This will only be needed when uninstalling ",s.jsx(e.code,{children:"Fallback"})," modules"]}),`
`,s.jsxs(e.li,{children:["data (",s.jsx(e.code,{children:"0x${string}"})," | undefined, optional)"]}),`
`]}),`
`,s.jsx(e.strong,{children:"Returns"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"Promise<UserOpReceipt>"}),": A promise of ",s.jsx(e.a,{href:"https://github.com/bcnmy/biconomy-client-sdk/blob/b3fe78f74ec366f50bbbb5ad8cf043e689df6bff/src/bundler/utils/Types.ts#L23",children:"UserOpReceipt"})]}),`
`]}),`
`,s.jsxs(e.h2,{id:"ismoduleinstalled",children:[s.jsx(e.code,{children:"isModuleInstalled"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ismoduleinstalled",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"Checks if a module is installed on the smart account."}),`
`,s.jsx(e.strong,{children:"Usage Example"}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" isInstalled"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" boolean"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" smartAccount."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"isModuleInstalled"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    type,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    moduleAddress"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"});"})})]})}),`
`,s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["type (",s.jsx(e.a,{href:"https://github.com/bcnmy/biconomy-client-sdk/blob/b66b611aa35af13da879995078892827aabf30e4/src/modules/utils/Types.ts#L232",children:"ModuleType"}),", required)"]}),`
`,s.jsxs(e.li,{children:["moduleAddress (",s.jsx(e.code,{children:"Address"}),", required)"]}),`
`,s.jsxs(e.li,{children:["data (",s.jsx(e.code,{children:"0x${string}"})," | undefined, optional)"]}),`
`]}),`
`,s.jsx(e.strong,{children:"Returns"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"Promise<boolean>"}),": A promise of a boolean"]}),`
`]}),`
`,s.jsxs(e.h2,{id:"getpreviousmodule",children:[s.jsx(e.code,{children:"getPreviousModule"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getpreviousmodule",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["Gets the pointer to the previously installed module based on given ",s.jsx(e.code,{children:"moduleAddress"})," and ",s.jsx(e.code,{children:"type"})]}),`
`,s.jsx(e.strong,{children:"Usage Example"}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" previousModule"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" smartAccount."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getPreviousModule"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    moduleAddress,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    type"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"});"})})]})}),`
`,s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["moduleAddress (",s.jsx(e.code,{children:"Address"}),", required)"]}),`
`,s.jsxs(e.li,{children:["type (",s.jsx(e.a,{href:"https://github.com/bcnmy/biconomy-client-sdk/blob/b66b611aa35af13da879995078892827aabf30e4/src/modules/utils/Types.ts#L232",children:"ModuleType"}),", required)"]}),`
`]}),`
`,s.jsx(e.strong,{children:"Returns"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"Promise<{moduleAddress: Address; type: ModuleType}>"}),": A promise of an object"]}),`
`]}),`
`,s.jsxs(e.h2,{id:"getinstalledvalidators",children:[s.jsx(e.code,{children:"getInstalledValidators"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getinstalledvalidators",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"Gets the installed validators"}),`
`,s.jsx(e.strong,{children:"Usage Example"}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" validators"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" smartAccount."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getInstalledValidators"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]})})}),`
`,s.jsx(e.strong,{children:"Returns"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"Promise<Address[]>"}),": A promise of validator addresses"]}),`
`]}),`
`,s.jsxs(e.h2,{id:"getinstalledexecutors",children:[s.jsx(e.code,{children:"getInstalledExecutors"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getinstalledexecutors",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"Gets the installed executors"}),`
`,s.jsx(e.strong,{children:"Usage Example"}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" executors"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" smartAccount."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getInstalledExecutors"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]})})}),`
`,s.jsx(e.strong,{children:"Returns"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"Promise<Address[]>"}),": A promise of executor addresses"]}),`
`]}),`
`,s.jsxs(e.h2,{id:"getinstalledmodules",children:[s.jsx(e.code,{children:"getInstalledModules"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getinstalledmodules",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"Gets all the installed modules"}),`
`,s.jsx(e.strong,{children:"Usage Example"}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" modules"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" smartAccount."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getInstalledModules"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]})})}),`
`,s.jsx(e.strong,{children:"Returns"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"Promise<Address[]>"}),": A promise of module addresses"]}),`
`]}),`
`,s.jsxs(e.h2,{id:"getactivehook",children:[s.jsx(e.code,{children:"getActiveHook"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getactivehook",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"Gets the active hook module"}),`
`,s.jsx(e.strong,{children:"Usage Example"}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" hook"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" smartAccount."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getActiveHook"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]})})}),`
`,s.jsx(e.strong,{children:"Returns"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"Promise<Address>"}),": A promise of a hook address"]}),`
`]}),`
`,s.jsxs(e.h2,{id:"getfallbackbyselector",children:[s.jsx(e.code,{children:"getFallbackBySelector"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getfallbackbyselector",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"Gets the fallback module by the selector"}),`
`,s.jsx(e.strong,{children:"Usage Example"}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" fallback"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" smartAccount."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getFallbackBySelector"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]})})}),`
`,s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["selector (",s.jsx(e.code,{children:"Hex"}),", optional) The fallback module selector, if not passed, the ",s.jsx(e.a,{href:"https://github.com/bcnmy/biconomy-client-sdk/blob/b3fe78f74ec366f50bbbb5ad8cf043e689df6bff/src/account/utils/Constants.ts#L122",children:"GENERIC_FALLBACK_SELECTOR"})," will be used"]}),`
`]}),`
`,s.jsx(e.strong,{children:"Returns"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"Promise<Address>"}),": A promise of a fallback module address"]}),`
`]}),`
`,s.jsxs(e.h2,{id:"supportsmodule",children:[s.jsx(e.code,{children:"supportsModule"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#supportsmodule",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"Check if the smart account supports a module"}),`
`,s.jsx(e.strong,{children:"Usage Example"}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" isSupported"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" smartAccount."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"supportsModule"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(ModuleType.Hook);"})]})})}),`
`,s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["type (",s.jsx(e.a,{href:"https://github.com/bcnmy/biconomy-client-sdk/blob/b66b611aa35af13da879995078892827aabf30e4/src/modules/utils/Types.ts#L232",children:"ModuleType"}),", required)"]}),`
`]}),`
`,s.jsx(e.strong,{children:"Returns"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"Promise<boolean>"}),": A promise of a boolean"]}),`
`]}),`
`,s.jsxs(e.h2,{id:"sendtransactionwithexecutor",children:[s.jsx(e.code,{children:"sendTransactionWithExecutor"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sendtransactionwithexecutor",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"Sends a transaction using an active executor module."}),`
`,s.jsx(e.strong,{children:"Usage Example"}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" userOpReceipt"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" UserOpReceipt"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" smartAccount."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"sendTransactionWithExecutor"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    [transaction], "})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    ownedAccountAddress"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})})]})}),`
`,s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["manyOrOneTransactions (",s.jsx(e.a,{href:"https://github.com/bcnmy/biconomy-client-sdk/blob/b3fe78f74ec366f50bbbb5ad8cf043e689df6bff/src/account/utils/Types.ts#L346",children:"Transaction"})," | ",s.jsx(e.code,{children:"Transaction[]"}),", required)"]}),`
`,s.jsxs(e.li,{children:["ownedAccountAddress (",s.jsx(e.code,{children:"Address"}),", required)"]}),`
`]}),`
`,s.jsx(e.strong,{children:"Returns"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"Promise<UserOpReceipt>"}),": A promise of ",s.jsx(e.a,{href:"https://github.com/bcnmy/biconomy-client-sdk/blob/b3fe78f74ec366f50bbbb5ad8cf043e689df6bff/src/bundler/utils/Types.ts#L23",children:"UserOpReceipt"})]}),`
`]})]})}function a(i={}){const{wrapper:e}={...n(),...i.components};return e?s.jsx(e,{...i,children:s.jsx(l,{...i})}):l(i)}export{a as default,d as frontmatter};
