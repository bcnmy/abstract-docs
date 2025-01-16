// vocs.config.ts
import { defineConfig } from "file:///Users/mickey/Development/Biconomy/abstract-docs/abstract-js-by-biconomy/node_modules/vocs/_lib/index.js";
var vocs_config_default = defineConfig({
  iconUrl: {
    dark: "https://i.imgur.com/WyX6ebY.png",
    light: "https://i.imgur.com/WyX6ebY.png"
  },
  logoUrl: {
    dark: "https://docs.biconomy.io/logo.svg",
    light: "https://docs.biconomy.io/logo.svg"
  },
  theme: {
    accentColor: "#ec5d31"
  },
  socials: [
    {
      icon: "x",
      link: "https://x.com/biconomy"
    }
  ],
  sidebar: [
    {
      text: "Why Choose Biconomy?",
      link: "/about"
    },
    { text: "AbstractJS SDK", link: "/abstractjs" },
    { text: "Demo Videos", link: "" },
    {
      text: "Biconomy Stack Explained",
      items: [
        {
          text: "Modular Smart Accounts",
          link: "/explained/modular-sca"
        },
        {
          text: "Modular Execution Environment",
          link: "/explained/mee"
        },
        {
          text: "Bundlers and Paymasters",
          link: "/explained/bundlers-paymasters"
        },
        { text: "EOA Support: Fusion and EIP7702", link: "/explained/eoa" }
      ]
    },
    {
      text: "Using Bundlers & Paymasters",
      collapsed: true,
      items: [
        { text: "Quickstart Guide", link: "/legacy/quickstart" },
        { text: "How to Sponsor Gas", link: "/legacy/tutorials/gasless" },
        {
          text: "Paying Gas in ERC20 Tokens",
          link: "/legacy/tutorials/tokenPaymaster"
        },
        {
          text: "Executing Batch Transactions",
          link: "/legacy/tutorials/batch"
        }
      ]
    },
    {
      text: "Using Modular Execution",
      collapsed: true,
      items: [
        { text: "Overview", link: "/mee/mee" },
        { text: "" },
        {
          text: "\u2192 Quickstart: Chain Abstracted App",
          link: "/mee/quickstart"
        },
        {
          text: "\u2192 Execute a Simple Supertransaction",
          link: "/mee/tutorials/execute-supertransaction"
        },
        {
          text: "\u2192 Execute an Intent",
          link: "/mee/tutorials/execute-intent"
        },
        {
          text: "\u2192 Execute a Cross-Chain Sequence",
          link: "/mee/tutorials/combine-intents-transactions"
        },
        {
          text: "\u2192 Use EOAs Like Smart Accounts",
          link: "/fusion/fusion"
        },
        {
          text: ""
        },
        {
          text: "Concepts",
          collapsed: true,
          items: [
            { text: "Multichain Smart Account" },
            { text: "Supertransaction" },
            { text: "MultichainContract" },
            { text: "BridgePlugin" }
          ]
        },
        {
          text: "SDK Reference",
          collapsed: true,
          items: [
            {
              text: "getUnifiedERC20Balance",
              link: "/mee/utils/getunifiederc20balance"
            },
            {
              text: "requireErc20Balance",
              link: "/mee/utils/requireerc20balance"
            }
          ]
        }
      ]
    },
    {
      text: "Account Modules",
      collapsed: true,
      items: [
        { text: "Overview" },
        { text: "Passkeys" },
        { text: "Smart Sessions" },
        { text: "Account Recovery" }
      ]
    },
    {
      text: "EIP7702",
      items: [
        { text: "Wallet Integration Guide", link: "/eip7702/wallet-guide" }
      ]
    },
    {
      text: "Resources",
      items: [
        { text: "Contracts & Audits", link: "/legacy/contractsAndAudits" },
        { text: "Supported Networks", link: "/legacy/supportedNetworks" }
      ]
    },
    {
      text: "Feature comparison - MEE vs AA",
      link: "/choosing-infra"
    },
    {
      text: "The Biconomy Network",
      items: [{ text: "Overview", link: "/network" }]
    }
  ]
});
export {
  vocs_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbWlja2V5L0RldmVsb3BtZW50L0JpY29ub215L2Fic3RyYWN0LWRvY3MvYWJzdHJhY3QtanMtYnktYmljb25vbXlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9taWNrZXkvRGV2ZWxvcG1lbnQvQmljb25vbXkvYWJzdHJhY3QtZG9jcy9hYnN0cmFjdC1qcy1ieS1iaWNvbm9teS92b2NzLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbWlja2V5L0RldmVsb3BtZW50L0JpY29ub215L2Fic3RyYWN0LWRvY3MvYWJzdHJhY3QtanMtYnktYmljb25vbXkvdm9jcy5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidm9jc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBpY29uVXJsOiB7XG4gICAgZGFyazogXCJodHRwczovL2kuaW1ndXIuY29tL1d5WDZlYlkucG5nXCIsXG4gICAgbGlnaHQ6IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9XeVg2ZWJZLnBuZ1wiLFxuICB9LFxuICBsb2dvVXJsOiB7XG4gICAgZGFyazogXCJodHRwczovL2RvY3MuYmljb25vbXkuaW8vbG9nby5zdmdcIixcbiAgICBsaWdodDogXCJodHRwczovL2RvY3MuYmljb25vbXkuaW8vbG9nby5zdmdcIixcbiAgfSxcbiAgdGhlbWU6IHtcbiAgICBhY2NlbnRDb2xvcjogXCIjZWM1ZDMxXCIsXG4gIH0sXG4gIHNvY2lhbHM6IFtcbiAgICB7IFxuICAgICAgaWNvbjogJ3gnLFxuICAgICAgbGluazogJ2h0dHBzOi8veC5jb20vYmljb25vbXknXG4gICAgfVxuICBdLFxuICBzaWRlYmFyOiBbXG4gICAge1xuICAgICAgdGV4dDogXCJXaHkgQ2hvb3NlIEJpY29ub215P1wiLFxuICAgICAgbGluazogXCIvYWJvdXRcIixcbiAgICB9LFxuICAgIHsgdGV4dDogXCJBYnN0cmFjdEpTIFNES1wiLCBsaW5rOiBcIi9hYnN0cmFjdGpzXCIgfSxcbiAgICB7IHRleHQ6IFwiRGVtbyBWaWRlb3NcIiwgbGluazogJyd9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiQmljb25vbXkgU3RhY2sgRXhwbGFpbmVkXCIsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJNb2R1bGFyIFNtYXJ0IEFjY291bnRzXCIsXG4gICAgICAgICAgbGluazogXCIvZXhwbGFpbmVkL21vZHVsYXItc2NhXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIk1vZHVsYXIgRXhlY3V0aW9uIEVudmlyb25tZW50XCIsXG4gICAgICAgICAgbGluazogXCIvZXhwbGFpbmVkL21lZVwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJCdW5kbGVycyBhbmQgUGF5bWFzdGVyc1wiLFxuICAgICAgICAgIGxpbms6IFwiL2V4cGxhaW5lZC9idW5kbGVycy1wYXltYXN0ZXJzXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHsgdGV4dDogXCJFT0EgU3VwcG9ydDogRnVzaW9uIGFuZCBFSVA3NzAyXCIsIGxpbms6IFwiL2V4cGxhaW5lZC9lb2FcIiB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiVXNpbmcgQnVuZGxlcnMgJiBQYXltYXN0ZXJzXCIsXG4gICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6IFwiUXVpY2tzdGFydCBHdWlkZVwiLCBsaW5rOiBcIi9sZWdhY3kvcXVpY2tzdGFydFwiIH0sXG4gICAgICAgIHsgdGV4dDogXCJIb3cgdG8gU3BvbnNvciBHYXNcIiwgbGluazogXCIvbGVnYWN5L3R1dG9yaWFscy9nYXNsZXNzXCIgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiUGF5aW5nIEdhcyBpbiBFUkMyMCBUb2tlbnNcIixcbiAgICAgICAgICBsaW5rOiBcIi9sZWdhY3kvdHV0b3JpYWxzL3Rva2VuUGF5bWFzdGVyXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkV4ZWN1dGluZyBCYXRjaCBUcmFuc2FjdGlvbnNcIixcbiAgICAgICAgICBsaW5rOiBcIi9sZWdhY3kvdHV0b3JpYWxzL2JhdGNoXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJVc2luZyBNb2R1bGFyIEV4ZWN1dGlvblwiLFxuICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiBcIk92ZXJ2aWV3XCIsIGxpbms6IFwiL21lZS9tZWVcIiB9LFxuICAgICAgICB7IHRleHQ6IFwiXCJ9LFxuICAgICAgICB7IHRleHQ6IFwiXHUyMTkyIFF1aWNrc3RhcnQ6IENoYWluIEFic3RyYWN0ZWQgQXBwXCIsXG4gICAgICAgICAgIGxpbms6IFwiL21lZS9xdWlja3N0YXJ0XCIgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiXHUyMTkyIEV4ZWN1dGUgYSBTaW1wbGUgU3VwZXJ0cmFuc2FjdGlvblwiLFxuICAgICAgICAgIGxpbms6IFwiL21lZS90dXRvcmlhbHMvZXhlY3V0ZS1zdXBlcnRyYW5zYWN0aW9uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIlx1MjE5MiBFeGVjdXRlIGFuIEludGVudFwiLFxuICAgICAgICAgIGxpbms6IFwiL21lZS90dXRvcmlhbHMvZXhlY3V0ZS1pbnRlbnRcIixcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIlx1MjE5MiBFeGVjdXRlIGEgQ3Jvc3MtQ2hhaW4gU2VxdWVuY2VcIixcbiAgICAgICAgICBsaW5rOiBcIi9tZWUvdHV0b3JpYWxzL2NvbWJpbmUtaW50ZW50cy10cmFuc2FjdGlvbnNcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdTIxOTIgVXNlIEVPQXMgTGlrZSBTbWFydCBBY2NvdW50cycsXG4gICAgICAgICAgbGluazogJy9mdXNpb24vZnVzaW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0NvbmNlcHRzJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ011bHRpY2hhaW4gU21hcnQgQWNjb3VudCcgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1N1cGVydHJhbnNhY3Rpb24nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdNdWx0aWNoYWluQ29udHJhY3QnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdCcmlkZ2VQbHVnaW4nIH0sXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJTREsgUmVmZXJlbmNlXCIsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiZ2V0VW5pZmllZEVSQzIwQmFsYW5jZVwiLFxuICAgICAgICAgICAgICBsaW5rOiBcIi9tZWUvdXRpbHMvZ2V0dW5pZmllZGVyYzIwYmFsYW5jZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogXCJyZXF1aXJlRXJjMjBCYWxhbmNlXCIsXG4gICAgICAgICAgICAgIGxpbms6IFwiL21lZS91dGlscy9yZXF1aXJlZXJjMjBiYWxhbmNlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJBY2NvdW50IE1vZHVsZXNcIixcbiAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogXCJPdmVydmlld1wiIH0sXG4gICAgICAgIHsgdGV4dDogXCJQYXNza2V5c1wiIH0sXG4gICAgICAgIHsgdGV4dDogXCJTbWFydCBTZXNzaW9uc1wiIH0sXG4gICAgICAgIHsgdGV4dDogXCJBY2NvdW50IFJlY292ZXJ5XCIgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIkVJUDc3MDJcIixcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogXCJXYWxsZXQgSW50ZWdyYXRpb24gR3VpZGVcIiwgbGluazogXCIvZWlwNzcwMi93YWxsZXQtZ3VpZGVcIiB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiUmVzb3VyY2VzXCIsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6IFwiQ29udHJhY3RzICYgQXVkaXRzXCIsIGxpbms6IFwiL2xlZ2FjeS9jb250cmFjdHNBbmRBdWRpdHNcIiB9LFxuICAgICAgICB7IHRleHQ6IFwiU3VwcG9ydGVkIE5ldHdvcmtzXCIsIGxpbms6IFwiL2xlZ2FjeS9zdXBwb3J0ZWROZXR3b3Jrc1wiIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJGZWF0dXJlIGNvbXBhcmlzb24gLSBNRUUgdnMgQUFcIixcbiAgICAgIGxpbms6IFwiL2Nob29zaW5nLWluZnJhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIlRoZSBCaWNvbm9teSBOZXR3b3JrXCIsXG4gICAgICBpdGVtczogW3sgdGV4dDogXCJPdmVydmlld1wiLCBsaW5rOiBcIi9uZXR3b3JrXCIgfV0sXG4gICAgfSxcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwWSxTQUFTLG9CQUFvQjtBQUV2YSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLEVBQUUsTUFBTSxrQkFBa0IsTUFBTSxjQUFjO0FBQUEsSUFDOUMsRUFBRSxNQUFNLGVBQWUsTUFBTSxHQUFFO0FBQUEsSUFDL0I7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBLEVBQUUsTUFBTSxtQ0FBbUMsTUFBTSxpQkFBaUI7QUFBQSxNQUNwRTtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsTUFDWCxPQUFPO0FBQUEsUUFDTCxFQUFFLE1BQU0sb0JBQW9CLE1BQU0scUJBQXFCO0FBQUEsUUFDdkQsRUFBRSxNQUFNLHNCQUFzQixNQUFNLDRCQUE0QjtBQUFBLFFBQ2hFO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsTUFDWCxPQUFPO0FBQUEsUUFDTCxFQUFFLE1BQU0sWUFBWSxNQUFNLFdBQVc7QUFBQSxRQUNyQyxFQUFFLE1BQU0sR0FBRTtBQUFBLFFBQ1Y7QUFBQSxVQUFFLE1BQU07QUFBQSxVQUNMLE1BQU07QUFBQSxRQUFrQjtBQUFBLFFBQzNCO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFFQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsT0FBTztBQUFBLFlBQ0wsRUFBRSxNQUFNLDJCQUEyQjtBQUFBLFlBQ25DLEVBQUUsTUFBTSxtQkFBbUI7QUFBQSxZQUMzQixFQUFFLE1BQU0scUJBQXFCO0FBQUEsWUFDN0IsRUFBRSxNQUFNLGVBQWU7QUFBQSxVQUN6QjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsTUFDWCxPQUFPO0FBQUEsUUFDTCxFQUFFLE1BQU0sV0FBVztBQUFBLFFBQ25CLEVBQUUsTUFBTSxXQUFXO0FBQUEsUUFDbkIsRUFBRSxNQUFNLGlCQUFpQjtBQUFBLFFBQ3pCLEVBQUUsTUFBTSxtQkFBbUI7QUFBQSxNQUM3QjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDTCxFQUFFLE1BQU0sNEJBQTRCLE1BQU0sd0JBQXdCO0FBQUEsTUFDcEU7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0wsRUFBRSxNQUFNLHNCQUFzQixNQUFNLDZCQUE2QjtBQUFBLFFBQ2pFLEVBQUUsTUFBTSxzQkFBc0IsTUFBTSw0QkFBNEI7QUFBQSxNQUNsRTtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE9BQU8sQ0FBQyxFQUFFLE1BQU0sWUFBWSxNQUFNLFdBQVcsQ0FBQztBQUFBLElBQ2hEO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
