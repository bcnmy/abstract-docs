import{u as a,j as e}from"./index-ZQOw4TQ3.js";const t={sidebar_position:6,title:"Sessions"};function i(n){const s={a:"a",code:"code",div:"div",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.h2,{id:"sessions",children:["Sessions",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sessions",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"The following tutorials provide a detailed, step-by-step guide on how to integrate Account Abstraction Sessions. If you're developing in TypeScript, it's recommended to utilize the SDK."}),`
`,e.jsxs(s.p,{children:["Before proceeding it is worth understanding an important data model that developers are expected to understand prior to working with sessions (both single and batch). It is a low-level building block upon which sessions are built: the ",e.jsx(s.a,{href:"#rules",children:"Rule"})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"/** Defines permissions for the args of an allowed method. */"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" interface"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Rule"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"  /**"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"   * The offset in the ABI SVM contract helps locate the relevant data within the function call data"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"   */"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  offset"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" number"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"  /**"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"   * condition"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"   *"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"   * 0 - Equal"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"   * 1 - Less than or equal"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"   * 2 - Less than"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"   * 3 - Greater than or equal"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"   * 4 - Greater than"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"   * 5 - Not equal"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"   */"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  condition"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" number"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"  /** The value to compare against. */"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  referenceValue"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    |"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" string"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    |"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" number"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    |"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" bigint"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    |"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" boolean"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    |"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" ByteArray"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    |"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" HardcodedReference"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"/** Use the HardcodedReference type to bypass the auto-formatting which may mis-align your offset. */"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" type"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" HardcodedReference"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  raw"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Hex"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"};"})})]})}),`
`,e.jsxs(s.h2,{id:"rules",children:["Rules",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#rules",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`Rules define permissions for the args of an allowed method.
The purpose of these rules is to define what arguments are allowed in a transaction during a session.
Every Rule works with a single static argument or a 32-byte chunk of the dynamic argument.`}),`
`,e.jsxs(s.p,{children:["Since the ABI encoding translates every static parameter into a 32-byte word, even the shorter ones (like ",e.jsx(s.code,{children:"address"})," or ",e.jsx(s.code,{children:"uint8"}),"), every Rule defines a desired relation (",e.jsx(s.code,{children:"Condition"}),") between n-th 32-byte word of the ",e.jsx(s.code,{children:"calldata"})," and a reference Value (also a 32-byte word)."]}),`
`,e.jsxs(s.p,{children:["When creating ",e.jsx(s.code,{children:"_sessionKeyData"})," to enable a session, shorter static arguments need to be converted to 32-byte words to match how they will be encoded in the ",e.jsx(s.code,{children:"userOp.callData"}),"."]}),`
`,e.jsxs(s.p,{children:["For the dynamic args, like ",e.jsx(s.code,{children:"bytes"}),", every 32-bytes word of the ",e.jsx(s.code,{children:"calldata"})," such as offset of the bytes arg, length of the bytes arg, and n-th 32-bytes word of the bytes arg can be controlled by a dedicated Rule."]}),`
`,e.jsxs(s.h3,{id:"offset",children:["Offset",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#offset",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[`The offset in the ABI SVM contract helps locate the relevant data within the function call data, it serves as a reference point from which to start reading or extracting specific information required for validation.
When processing function call data, particularly in low-level languages like Solidity assembly, it's necessary to locate where specific parameters or arguments are stored.
The offset is used to calculate the starting position within the `,e.jsx(s.code,{children:"calldata"}),` where the desired data resides.
Suppose we have a function call with multiple arguments passed as `,e.jsx(s.code,{children:"calldata"}),". Each argument occupies a certain number of bytes, and the offset helps determine where each argument begins within the ",e.jsx(s.code,{children:"calldata"}),"."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Using the offset to Extract Data:"}),`
In the contract, the offset is used to calculate the position within the `,e.jsx(s.code,{children:"calldata"})," where specific parameters or arguments are located. Since every arg is a 32-bytes word, offsets are always multiplier of 32 (or of 0x20 in hex)."]}),`
`,e.jsx(s.p,{children:"Let's see how the offset is applied to extract the to and value arguments of a transfer(address to, uint256 value) method:"}),`
`,e.jsxs(s.p,{children:["Extracting ",e.jsx(s.code,{children:"to"}),` Argument:
The `,e.jsx(s.code,{children:"to"})," argument is the first parameter of the transfer function, representing the recipient address. Every ",e.jsx(s.code,{children:"calldata"})," starts with the 4-bytes method selector. However, the ABI SVM is adding the selector length itself, so for the first argument the offset will always be 0 (0x00);"]}),`
`,e.jsxs(s.p,{children:["Extracting ",e.jsx(s.code,{children:"value"}),` Argument:
The value argument is the second parameter of the transfer function, representing the amount of tokens to be transferred. To extract this argument, the offset for the value parameter would be calculated based on its position in the function `,e.jsx(s.code,{children:"calldata"}),". Despite a 20-bytes address, in the solidity abi encoding it is always appended with zeroes to a 32-bytes word. So the offset for the second 32-bytes argument (which is the value in our case) will be 32 (or 0x20 in hex)."]}),`
`,e.jsxs(s.p,{children:["If you need to deal with dynamic-length arguments, such as bytes, please refer to this document ",e.jsx(s.a,{href:"https://docs.soliditylang.org/en/v0.8.24/abi-spec.html#function-selector-and-argument-encoding",children:"https://docs.soliditylang.org/en/v0.8.24/abi-spec.html#function-selector-and-argument-encoding"}),`
to learn more about how dynamic arguments are represented in the `,e.jsx(s.code,{children:"calldata"})," and which offsets should be used to access them."]}),`
`,e.jsxs(s.h3,{id:"condition",children:["Condition",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#condition",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"The condition specifies the type of comparison to be made with the reference value, the condition can be of the following types:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"0: EQUAL"}),`
`,e.jsx(s.li,{children:"1: LESS_THAN_OR_EQUAL"}),`
`,e.jsx(s.li,{children:"2: LESS_THAN"}),`
`,e.jsx(s.li,{children:"3: GREATER_THAN_OR_EQUAL"}),`
`,e.jsx(s.li,{children:"4: GREATER_THAN"}),`
`,e.jsx(s.li,{children:`5: NOT_EQUAL
In our example the condition is 0, this means we check that the receiver of the NFT is EQUAL to what we set it to be.`}),`
`]})]})}function l(n={}){const{wrapper:s}={...a(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{l as default,t as frontmatter};
