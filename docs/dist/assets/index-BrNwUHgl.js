import{u as r,j as e}from"./index-ZQOw4TQ3.js";const t={title:"Passkey Validator Module Overview",description:"undefined"};function s(n){const i={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.header,{children:e.jsxs(i.h1,{id:"passkey-validator-module-overview",children:["Passkey Validator Module Overview",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#passkey-validator-module-overview",children:e.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"PasskeyValidator"})," is a WebAuthn-based validator module for ERC-7579 compliant smart accounts that enables passwordless authentication using the FIDO2 standard. It validates signatures generated through browser or device-based authenticators for ERC-4337 user operations."]}),`
`,e.jsxs(i.h2,{id:"key-features",children:["Key Features",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#key-features",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"WebAuthn-based signature validation for user operations"}),`
`,e.jsx(i.li,{children:"Supports both registration and authentication flows"}),`
`,e.jsx(i.li,{children:"Device-bound cryptographic key management"}),`
`,e.jsx(i.li,{children:"Phishing-resistant authentication"}),`
`,e.jsx(i.li,{children:"Compatible with hardware security tokens"}),`
`]}),`
`,e.jsxs(i.h2,{id:"core-functionality",children:["Core Functionality",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#core-functionality",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Installation and uninstallation as a module"}),`
`,e.jsx(i.li,{children:"Passwordless authentication for user operations using biometrics"}),`
`]}),`
`,e.jsxs(i.h3,{id:"authentication-operations",children:["Authentication Operations",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#authentication-operations",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(i.code,{children:[e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { toWebAuthnKey, WebAuthnMode } "}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "@biconomy/passkey"'}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Create new passkey"})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" registerWebAuthnKey"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" toWebAuthnKey"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    passkeyName: "}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"accountName"'}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    mode: WebAuthnMode.Register"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"})"})}),`
`,e.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Login with existing passkey"})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" loginWebAuthnKey"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" toWebAuthnKey"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    mode: WebAuthnMode.Login"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"})"})})]})}),`
`,e.jsxs(i.h3,{id:"signature-format",children:["Signature Format",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signature-format",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Field"}),e.jsx(i.th,{children:"Type"}),e.jsx(i.th,{children:"Description"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"authenticatorData"}),e.jsx(i.td,{children:"bytes"}),e.jsx(i.td,{children:"Raw authenticator data from WebAuthn response"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"clientDataJSON"}),e.jsx(i.td,{children:"string"}),e.jsx(i.td,{children:"Client data in JSON format containing challenge and origin"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"responseTypeLocation"}),e.jsx(i.td,{children:"uint256"}),e.jsx(i.td,{children:"Location identifier for the response type"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"r"}),e.jsx(i.td,{children:"uint256"}),e.jsx(i.td,{children:"R component of the ECDSA signature"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"s"}),e.jsx(i.td,{children:"uint256"}),e.jsx(i.td,{children:"S component of the ECDSA signature"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"usePrecompiled"}),e.jsx(i.td,{children:"bool"}),e.jsx(i.td,{children:"Flag to indicate if precompiled contract should be used"})]})]})]}),`
`,e.jsxs(i.h2,{id:"security-features",children:["Security Features",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#security-features",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Domain-bound credentials preventing phishing attacks"}),`
`,e.jsx(i.li,{children:"No exportable private keys"}),`
`,e.jsx(i.li,{children:"Optional hardware token support"}),`
`,e.jsx(i.li,{children:"Biometric authentication support"}),`
`,e.jsx(i.li,{children:"Challenge-response based authentication"}),`
`]}),`
`,e.jsxs(i.h2,{id:"limitations",children:["Limitations",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#limitations",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Requires WebAuthn-compatible environment (browser/device)"}),`
`,e.jsx(i.li,{children:"Device-specific authentication"}),`
`,e.jsx(i.li,{children:"Needs backup/recovery mechanism"}),`
`,e.jsx(i.li,{children:"Limited to client-side implementations"}),`
`]}),`
`,e.jsxs(i.h2,{id:"security-considerations",children:["Security Considerations",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#security-considerations",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Store passkey data securely using the device's secure storage"}),`
`,e.jsx(i.li,{children:"Implement proper error handling for failed authentications"}),`
`,e.jsx(i.li,{children:"Consider implementing multiple passkeys for backup"}),`
`,e.jsx(i.li,{children:"Regular validation of installed passkeys"}),`
`,e.jsx(i.li,{children:"Proper cleanup during uninstallation"}),`
`]}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"PasskeyValidator"})," provides a secure, user-friendly authentication mechanism for ERC-7579 compliant smart accounts, leveraging modern WebAuthn standards while maintaining the security requirements of blockchain operations."]})]})}function l(n={}){const{wrapper:i}={...r(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{l as default,t as frontmatter};
