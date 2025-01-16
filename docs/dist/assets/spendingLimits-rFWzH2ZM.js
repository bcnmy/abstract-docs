import{u as a,j as e}from"./index-ZQOw4TQ3.js";const l={sidebar_label:"Spending Limits",sidebar_position:4,title:"Spending limits & Dashboard notifications",description:"undefined"};function n(t){const i={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.header,{children:e.jsxs(i.h1,{id:"spending-limits--dashboard-notifications",children:["Spending limits & Dashboard notifications",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#spending-limits--dashboard-notifications",children:e.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(i.p,{children:"This feature allows you to set limits to the gas usage. You can define global limits or per-user quotas, specifying either transaction count or total gas consumption."}),`
`,e.jsxs(i.h2,{id:"add-a-global-limit",children:["Add a global limit",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#add-a-global-limit",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:`Navigate to the Paymaster you have created, then click Rules and Spending.
If this is the first time you are adding a limit the page will look like this:`}),`
`,e.jsx(i.p,{children:e.jsx(i.img,{src:"/limits/new_limit.png",alt:"new limit"})}),`
`,e.jsxs(i.p,{children:["Click on ",e.jsx(i.code,{children:"Add limit"}),` inside the Global Limit card and the new global limit modal will appear.
Inside the modal you will be presented with the option of choosing:`]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Threshold type (Gas Spend | Number of user operations)"}),`
`,e.jsx(i.li,{children:"Threshold value"}),`
`,e.jsx(i.li,{children:"Cycle duration (minimum 1 hour, maximum 23 hours)"}),`
`]}),`
`,e.jsxs(i.p,{children:["After clicking ",e.jsx(i.code,{children:"Create"})," the limit will be created."]}),`
`,e.jsx(i.p,{children:`Please note that whenever the limit policy is edited (duration/ threshold/ threshold type), the cycle is reset, and the new cycle starts from the moment of edit.
Pausing/Activating a limit will not reset the cycle.`}),`
`,e.jsx(i.p,{children:e.jsx(i.img,{src:"/limits/global_limit_modal.png",alt:"add global limit"})}),`
`,e.jsxs(i.h2,{id:"add-a-user-limit",children:["Add a user limit",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#add-a-user-limit",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["Click on ",e.jsx(i.code,{children:"Add limit"}),` inside the User Limit card and the new user limit modal will appear.
Both the global and the user limit modals are very similar and offer the same options.`]}),`
`,e.jsx(i.p,{children:e.jsx(i.img,{src:"/limits/user_limit_modal.png",alt:"add user limit"})}),`
`,e.jsxs(i.h2,{id:"low-gas-tank-balance-notifications",children:["Low Gas Tank Balance Notifications",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#low-gas-tank-balance-notifications",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"The Low Gas Tank Balance Notification is designed to alert organizations when the balance in their Paymaster account falls below a predefined threshold, ensuring that they maintain sufficient funds to continue operations without disruption."}),`
`,e.jsxs(i.h3,{id:"how-it-works",children:["How It Works",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-it-works",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:"Depletion Rate Monitoring: The system tracks the depletion rate of each Paymaster by monitoring gas usage over time. This data is used to calculate the average gas consumption."}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:"Threshold Calculation: A threshold is dynamically computed based on the Paymaster’s historical gas usage. The threshold represents the estimated gas consumption for a defined period (3 days)."}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:"Balance Monitoring: The balance of each Paymaster is frequently checked against the calculated threshold. If the balance drops below this threshold, a notification is triggered."}),`
`]}),`
`]}),`
`,e.jsxs(i.h3,{id:"notification-process",children:["Notification Process",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#notification-process",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"When a Paymaster’s balance is below the calculated threshold, the system flags it for notification."}),`
`,e.jsx(i.li,{children:"Notifications are sent to the organization’s owner (email associated with the Paymaster)."}),`
`,e.jsx(i.li,{children:"The message informs the organization that their Paymaster is running low on funds, urging them to top up the gas tank. The email includes metadata such as the Paymaster ID, organization name, and relevant links for topping up."}),`
`,e.jsx(i.li,{children:"The system checks Paymasters' balances daily at midnight. When a Paymaster's balance falls below the threshold, the first notification is sent immediately. Subsequent notifications are only sent if 24 hours have passed since the last notification and the balance remains below the threshold."}),`
`]})]})}function o(t={}){const{wrapper:i}={...a(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(n,{...t})}):n(t)}export{o as default,l as frontmatter};
