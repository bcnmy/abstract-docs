import { defineConfig } from "vocs";

export default defineConfig({
  iconUrl: {
    dark: "https://docs.biconomy.io/logo.svg",
    light: "https://docs.biconomy.io/logo.svg",
  },
  logoUrl: {
    dark: "https://docs.biconomy.io/logo.svg",
    light: "https://docs.biconomy.io/logo.svg",
  },
  theme: {
    accentColor: "#ec5d31",
  },
  sidebar: [
    {
      text: "Why Choose Biconomy?",
      link: "/about",
    },
    {
      text: "Biconomy Stack Explained",
      items: [
        { text: "AbstractJS", link: "/abstractjs" },
        {
          text: "Modular Execution Environment",
          link: "/explained/mee",
        },
        {
          text: "Bundlers and Paymasters",
          link: "/explained/bundlers-paymasters",
        },
        {
          text: "Nexus Account & Modules",
          link: "/explained/nexus",
        },
        { text: "EOA Support: Fusion and EIP7702", link: "/explained/eoa" },
      ],
    },
    {
      text: "Bundlers & Paymasters",
      items: [
        { text: "Quickstart Guide", link: "/legacy/quickstart" },
        { text: "How to Sponsor Gas", link: "/legacy/tutorials/gasless" },
        {
          text: "Paying Gas in ERC20 Tokens",
          link: "/legacy/tutorials/tokenPaymaster",
        },
        {
          text: "Executing Batch Transactions",
          link: "/legacy/tutorials/batch",
        },
      ],
    },
    {
      text: "Modular Execution Environment",
      items: [
        { text: "Quickstart Guide", link: "/mee/quickstart" },
        {
          text: "Multichain Smart Accounts",
          link: "/mee/multichain-smart-account",
        },
        { text: "Multichain Contracts", link: "/mee/multichain-contract" },
        { text: "Bridging Plugins", link: "/mee/utils/bridgingplugin" },
        {
          text: "Utilities",
          items: [
            {
              text: "getUnifiedERC20Balance",
              link: "/mee/utils/getunifiederc20balance",
            },
            {
              text: "requireErc20Balance",
              link: "/mee/utils/requireerc20balance",
            },
          ],
        },
      ],
    },
    {
      text: "EIP7702",
      items: [
        { text: "Wallet Integration Guide", link: "/eip7702/wallet-guide" },
      ],
    },
    {
      text: "Account Modules",
      items: [
        { text: "About Account Modules" },
        { text: "Passkeys" },
        { text: "Smart Sessions" },
      ],
    },
    {
      text: 'Resources',
      items: [
        { text: 'Contracts & Audits', link: '/legacy/contractsAndAudits' },
        { text: 'Supported Networks', link: '/legacy/supportedNetworks' },
      ]
    },
    {
      text: "Feature comparison - MEE vs AA",
      link: "/choosing-infra",
    },
    {
      text: "The Biconomy Network",
      items: [{ text: "Overview", link: "/network" }],
    },
  ],
});
