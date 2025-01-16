import{u as r,j as t}from"./index-ZQOw4TQ3.js";const i={sidebar_label:"Paymaster Rules",sidebar_position:3,title:"Paymaster Rules",description:"undefined"};function n(a){const e={a:"a",div:"div",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...r(),...a.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.header,{children:t.jsxs(e.h1,{id:"paymaster-rules",children:["Paymaster Rules",t.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#paymaster-rules",children:t.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,t.jsx(e.p,{children:"For a paymaster, you can restrict the sponsorship to only specified contracts and methods if needed. If no contract is whitelisted, then paymaster will facilitate all the contract interactions."}),`
`,t.jsxs(e.h2,{id:"whitelist-a-smart-contract",children:["Whitelist a Smart Contract",t.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#whitelist-a-smart-contract",children:t.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,t.jsx(e.p,{children:"Navigate to the Paymaster you have created, then click rules and contract. If this is the first time you are adding a smart contract the page will look like this:"}),`
`,t.jsx(e.p,{children:t.jsx(e.img,{src:"/contracts/new_contract.png",alt:"new contract"})}),`
`,t.jsx(e.p,{children:"Click on Add your First Contract and a side menu will show up asking you for details. Name your contract and provide an address. If your contract is verified the dashboard will automatically fetch the ABI for it, otherwise you can manually paste in the ABI yourself. You will then be able to choose any write methods to whitelist for sponsorship. In the example below I added the USDC contract on the Goerli testnet and chose to authorize the approve method for sponsorship."}),`
`,t.jsx(e.p,{children:t.jsx(e.img,{src:"/contracts/add_contract.png",alt:"add contract"})}),`
`,t.jsxs(e.h2,{id:"updating-your-smart-contract",children:["Updating your Smart Contract",t.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#updating-your-smart-contract",children:t.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,t.jsx(e.p,{children:"After adding your contract and whitelisting your methods you can make a few changes on the contract."}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"You can edit the contract to change the name or update which write methods you would like to authorize."}),`
`,t.jsx(e.li,{children:"You can pause the contract to temporarily stop any sponsorships"}),`
`,t.jsx(e.li,{children:"You can delete the contract if you no longer need it on your Paymaster at all"}),`
`]}),`
`,t.jsx(e.p,{children:t.jsx(e.img,{src:"/contracts/changes.png",alt:"update contract"})})]})}function s(a={}){const{wrapper:e}={...r(),...a.components};return e?t.jsx(e,{...a,children:t.jsx(n,{...a})}):n(a)}export{s as default,i as frontmatter};
