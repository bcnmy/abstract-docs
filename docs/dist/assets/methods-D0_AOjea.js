import{u as a,j as s}from"./index-ZQOw4TQ3.js";const l={sidebar_label:"Methods",sidebar_position:3,custom_edit_url:"https://github.com/bcnmy/docs/blob/master/docs/GasEstimations/methods.md",title:"Methods",description:"undefined"};function r(i){const e={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...a(),...i.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.header,{children:s.jsxs(e.h1,{id:"methods",children:["Methods",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#methods",children:s.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsxs(e.h2,{id:"estimateuseroperationgas",children:[s.jsx(e.a,{href:"https://github.com/bcnmy/entry-point-gas-estimations/blob/52dee03ee0ecdff78e4dae16152277de8505d4c8/src/gas-estimator/entry-point-v6/GasEstimator/GasEstimator.ts#L118C9-L118C33",children:"estimateUserOperationGas"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#estimateuseroperationgas",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"This method is used to estimate gas for the userOp. It returns estimates for preVerificationGas, verificationGasLimit, and callGasLimit for a given UserOperation. It requires passing a semi-valid/ dummy signature in userOp (e.g. a signature of the correct length and format)."}),`
`,s.jsx(e.strong,{children:"Usage"}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" estimateUserOperationGasResponse"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" EstimateUserOperationGas"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" gasEstimator."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"estimateUserOperationGas"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  userOperation,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  supportsEthCallStateOverride,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  supportsEthCallByteCodeOverride,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  stateOverrideSet"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  baseFeePerGas"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"});"})})]})}),`
`,s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["userOperation(",s.jsx(e.code,{children:"UserOperation"}),", required): userOperation to calculate gas estimates for."]}),`
`,s.jsxs(e.li,{children:["stateOverrideSet(",s.jsx(e.code,{children:"StateOverrideSet"}),"): optional state override set for estimating gas for a userOperation under different blockchain states."]}),`
`,s.jsxs(e.li,{children:["supportsEthCallStateOverride (",s.jsx(e.code,{children:"boolean"}),"): optional param, default set to true, set to false if eth_call does not support state overrides"]}),`
`,s.jsxs(e.li,{children:["supportsEthCallByteCodeOverride (",s.jsx(e.code,{children:"boolean"}),"): optional param, default set to true, set to false if eth_call does not give the correct response to bytecode overrides"]}),`
`,s.jsxs(e.li,{children:["baseFeePerGas (",s.jsx(e.code,{children:"bigint"}),"): optional param, but required for Optimism based networks"]}),`
`]}),`
`,s.jsx(e.strong,{children:"returns"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:["estimateUserOperationGasResponse(",s.jsx(e.code,{children:"Promise<EstimateUserOperationGas>"}),"): It returns an object containing the following gas limits."]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"type"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" EstimateUserOperationGas"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  callGasLimit"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" bigint"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  verificationGasLimit"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" bigint"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  preVerificationGas"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" bigint"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  validAfter"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" number"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  validUntil"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" number"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"};"})})]})}),`
`]}),`
`]}),`
`,s.jsxs(e.h2,{id:"estimateverificationgaslimit",children:[s.jsx(e.a,{href:"https://github.com/bcnmy/entry-point-gas-estimations/blob/52dee03ee0ecdff78e4dae16152277de8505d4c8/src/gas-estimator/entry-point-v6/GasEstimator/GasEstimator.ts#L177C9-L177C37",children:"estimateVerificationGasLimit"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#estimateverificationgaslimit",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"This method is used to estimate the verificationGasLimit for a given userOperation."}),`
`,s.jsx(e.strong,{children:"Usage"}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" verificationGasLimitResponse"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" EstimateVerificationGasLimit"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" gasEstimator."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"estimateVerificationGasLimit"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    userOperation,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    supportsEthCallStateOverride,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    supportsEthCallByteCodeOverride,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    stateOverrideSet,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  });"})})]})}),`
`,s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["userOperation(",s.jsx(e.code,{children:"UserOperation"}),", required): userOperation to calculate gas estimates for."]}),`
`,s.jsxs(e.li,{children:["stateOverrideSet(",s.jsx(e.code,{children:"StateOverrideSet"}),"): optional state override set for estimating gas for a userOperation under different blockchain states."]}),`
`,s.jsxs(e.li,{children:["supportsEthCallStateOverride (",s.jsx(e.code,{children:"boolean"}),"): optional param, default set to true, set to false if eth_call does not support state overrides"]}),`
`,s.jsxs(e.li,{children:["supportsEthCallByteCodeOverride (",s.jsx(e.code,{children:"boolean"}),"): optional param, default set to true, set to false if eth_call does not give the correct response to bytecode overrides"]}),`
`]}),`
`,s.jsx(e.strong,{children:"returns"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:["verificationGasLimitResponse(",s.jsx(e.code,{children:"Promise<EstimateVerificationGasLimit>"}),"): It returns an object containing the verificationGasLimit, validUntil, and validAfter values"]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"type"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" EstimateVerificationGasLimit"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  verificationGasLimit"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" bigint"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  validAfter"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" number"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  validUntil"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" number"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"};"})})]})}),`
`]}),`
`]}),`
`,s.jsxs(e.h2,{id:"estimatecallgaslimit",children:[s.jsx(e.a,{href:"https://github.com/bcnmy/entry-point-gas-estimations/blob/52dee03ee0ecdff78e4dae16152277de8505d4c8/src/gas-estimator/entry-point-v6/GasEstimator/GasEstimator.ts#L221C9-L221C29",children:"estimateCallGasLimit"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#estimatecallgaslimit",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"This method is used to estimate the callGasLimit for a given userOperation."}),`
`,s.jsx(e.strong,{children:"Usage"}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" callGasLimitResponse"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" gasEstimator."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"estimateCallGasLimit"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  userOperation,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  supportsEthCallStateOverride,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  supportsEthCallByteCodeOverride,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  stateOverrideSet,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"});"})})]})}),`
`,s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["userOperation(",s.jsx(e.code,{children:"UserOperation"}),", required): userOperation to calculate gas estimates for."]}),`
`,s.jsxs(e.li,{children:["stateOverrideSet(",s.jsx(e.code,{children:"StateOverrideSet"}),"): optional state override set for estimating gas for a userOperation under different blockchain states."]}),`
`,s.jsxs(e.li,{children:["supportsEthCallStateOverride (",s.jsx(e.code,{children:"boolean"}),"): optional param, default set to true, set to false if eth_call does not support state overrides"]}),`
`,s.jsxs(e.li,{children:["supportsEthCallByteCodeOverride (",s.jsx(e.code,{children:"boolean"}),"): optional param, default set to true, set to false if eth_call does not give the correct response to bytecode overrides"]}),`
`]}),`
`,s.jsx(e.strong,{children:"returns"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:["callGasLimitResponse(",s.jsx(e.code,{children:"Promise<EstimateCallGasLimit>"}),"): It returns an object containing the callGasLimit value"]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"type"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" EstimateCallGasLimit"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  callGasLimit"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" bigint"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"};"})})]})}),`
`]}),`
`]}),`
`,s.jsxs(e.h2,{id:"calculatepreverificationgas",children:[s.jsx(e.a,{href:"https://github.com/bcnmy/entry-point-gas-estimations/blob/52dee03ee0ecdff78e4dae16152277de8505d4c8/src/gas-estimator/entry-point-v6/GasEstimator/GasEstimator.ts#L291C9-L291C36",children:"calculatePreVerificationGas"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#calculatepreverificationgas",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"This method is used to estimate the preVerificationGas for a given userOperation. The exact implementation of this method is network-dependent hence make sure to use network-specific gas estimator clients"}),`
`,s.jsx(e.strong,{children:"Usage"}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" preVerficationGasResponse"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" gasEstimator."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"calculatePreVerificationGas"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    userOperation,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    baseFeePerGas,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  });"})})]})}),`
`,s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["userOperation(",s.jsx(e.code,{children:"UserOperation"}),", required): userOperation to calculate gas estimates for."]}),`
`,s.jsxs(e.li,{children:["baseFeePerGas (",s.jsx(e.code,{children:"bigint"}),"): optional param, but required for Optimism based networks"]}),`
`]}),`
`,s.jsx(e.strong,{children:"returns"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:["preVerificationGasResponse(",s.jsx(e.code,{children:"Promise<CalculatePreVerificationGas>"}),") : It returns an object containing the preVerficationGas value"]}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"type"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" CalculatePreVerificationGas"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  preVerificationGas"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" bigint"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"};"})})]})}),`
`]}),`
`]}),`
`,s.jsxs(e.h2,{id:"setentrypointaddress",children:[s.jsx(e.a,{href:"https://github.com/bcnmy/entry-point-gas-estimations/blob/413261a88e0842d9d6a93815106372d87452d02a/src/gas-estimator/entry-point-v6/GasEstimator/GasEstimator.ts#L320",children:"setEntryPointAddress"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#setentrypointaddress",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"This method is used to set the entryPointAddress that is being used in the Gas Estimator instance"}),`
`,s.jsx(e.strong,{children:"Usage"}),`
`,s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"await"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" gasEstimator."}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"setEntryPointAddress"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"<ENTRY_POINT_ADDRESS>"'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]})})}),`
`,s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["entryPointAddress(",s.jsx(e.code,{children:"string"}),", required): entry point address that one might need to change to."]}),`
`]}),`
`,s.jsx(e.strong,{children:"returns"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"void"}),`
`]})]})}function t(i={}){const{wrapper:e}={...a(),...i.components};return e?s.jsx(e,{...i,children:s.jsx(r,{...i})}):r(i)}export{t as default,l as frontmatter};
