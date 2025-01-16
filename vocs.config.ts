import { defineConfig } from "vocs";

export default defineConfig({
  iconUrl: {
    dark: "https://i.imgur.com/WyX6ebY.png",
    light: "https://i.imgur.com/WyX6ebY.png",
  },
  logoUrl: {
    dark: "https://docs.biconomy.io/logo.svg",
    light: "https://docs.biconomy.io/logo.svg",
  },
  theme: {
    accentColor: "#ec5d31",
  },
  socials: [
    {
      icon: "x",
      link: "https://x.com/biconomy",
    },
  ],
  sidebar: [
    {
      text: "Why Choose Biconomy?",
      link: "/about",
    },
    { text: "AbstractJS SDK", link: "/abstractjs" },
    { text: "Demo Videos", link: "" },
    {
      text: "Quickstart Guides",
      items: [
        { text: "Core Features" },
        { text: " Quickstart Guide", link: "/legacy/quickstart" },
        {
          text: " Sponsor Gas With Paymasters",
          link: "/legacy/tutorials/gasless",
        },
        {
          text: " Paying Gas with ERC20 Tokens",
          link: "/legacy/tutorials/tokenPaymaster",
        },
        {
          text: " Executing Batch Transactions",
          link: "/legacy/tutorials/batch",
        },
        { text: "" },
        { text: "Advanced Features" },

        {
          text: " Build a Chain Abstracted App",
          link: "/mee/tutorials/build-chainabstracted-app",
        },

        {
          text: " Manage Multichain Smart Accounts",
          link: "/mee/tutorials/manage-multichain-sca",
        },
        {
          text: " Build and Execute Intents",
          link: "/mee/tutorials/execute-intent",
        },
        {
          text: " Cross-Chain Gas Abstraction",
          link: "/mee/tutorials/pay-gas-across-chains",
        },

        {
          text: " Execute a Cross-Chain Tx",
          link: "/mee/tutorials/combine-intents-transactions",
        },

        { text: "" },
        { text: "Smart EOA Stack" },
        {
          text: " Use EOAs Like Smart Accounts",
          link: "/mee/fusion",
        },
        {
          text: " Integrate EIP7702 (for Wallets)",
          link: "/eip7702/wallet-guide",
        },

        { text: "" },
        { text: "Account Modules" },
        {
          text: " Sign Transactions with Passkeys",
          link: "/mee/tutorials/execute-intent",
        },
        {
          text: " Set Account Sessions",
          link: "/mee/tutorials/execute-intent",
        },
      ],
    },
    {
      text: "Learn",
      items: [
        {
          text: " Modular Smart Accounts",
          link: "/explained/modular-sca",
        },
        {
          text: " Modular Execution Environment",
          link: "/explained/mee",
        },
        {
          text: " Bundlers and Paymasters",
          link: "/explained/bundlers-paymasters",
        },
        { text: " EOA Support: Fusion and EIP7702", link: "/explained/eoa" },
      ],
    },
    {
      text: "Using Bundlers & Paymasters",
      collapsed: true,
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
      text: "Using Modular Execution",
      collapsed: true,
      items: [
        { text: "Overview", link: "/mee/mee" },
        { text: "" },

        {
          text: "→ Use EOAs Like Smart Accounts",
          link: "/fusion/fusion",
        },
        {
          text: "",
        },
        {
          text: "Concepts",
          collapsed: true,
          items: [
            { text: "Multichain Smart Account" },
            { text: "Supertransaction" },
            { text: "MultichainContract" },
            { text: "BridgePlugin" },
          ],
        },
        {
          text: "SDK Reference",
          collapsed: true,
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
      text: "Account Modules",
      collapsed: true,
      items: [
        { text: "Overview" },
        { text: "Passkeys" },
        { text: "Smart Sessions" },
        { text: "Account Recovery" },
      ],
    },
    {
      text: "EIP7702",
      items: [
        { text: "Wallet Integration Guide", link: "/eip7702/wallet-guide" },
      ],
    },
    {
      text: "Resources",
      items: [
        { text: "Contracts & Audits", link: "/legacy/contractsAndAudits" },
        { text: "Supported Networks", link: "/legacy/supportedNetworks" },
      ],
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
