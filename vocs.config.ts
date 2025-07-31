import { defineConfig } from "vocs";


export default defineConfig({
	ogImageUrl:
		"https://vocs.dev/api/og?logo=%logo&title=%title&description=%description",
	description:
		"Biconomy is the universal interface to all blockchains",
	title: "Biconomy",
	titleTemplate: "%s | Biconomy Docs",
	rootDir: "./docs",
	editLink: {
		pattern:
			"https://github.com/bcnmy/abstract-docs/edit/develop/docs/pages/:path",
		text: "Edit on GitHub",
	},
	iconUrl: {
		dark: "https://i.imgur.com/WyX6ebY.png",
		light: "https://i.imgur.com/WyX6ebY.png",
	},
	logoUrl: {
		dark: "https://i.imgur.com/Mt2TmLl.png",
		light: "https://i.imgur.com/Mt2TmLl.png",
	},
	theme: {
		accentColor: "#ec5d31",
		variables: {
			sidebar: {
				width: '370px',
				horizontalPadding: '40px',
				verticalPadding: '20px',
			},
			lineHeight: {
				sidebarItem: '1.75em'
			},

		}
	},
	socials: [
		{
			icon: "x",
			link: "https://x.com/biconomy",
		},
	],
	topNav: [
		// { text: "Examples", link: "https://github.com/bcnmy/examples" },
		// {
		// 	text: "API Docs",
		// 	link: "https://bcnmy.github.io/abstractjs",
		// },
		{
			text: 'Biconomy Network',
			items: [
				{
					text: 'Overview',
					link: 'https://blog.biconomy.io/launching-biconomy-network-the-application-layer-to-make-a-thousand-chains-feel-like-one-2/'
				},
				{
					text: 'Litepaper',
					link: 'https://blog.biconomy.io/launching-biconomy-network-the-application-layer-to-make-a-thousand-chains-feel-like-one-2/'
				},
			]
		}
	],
	sidebar: [
		{
			text: '',
			items: [
				{
					text: '🍊 Welcome to Biconomy',
					link: '/'
				},
				{
					text: '🤖 Modular Execution Environment (MEE)',
					link: '/new/learn-about-biconomy/what-is-mee',
				},
				{
					text: '⚖️ MEE vs. ERC-4337',
					link: '/new/learn-about-biconomy/mee-vs-4337'
				},
				{
					text: '📑 Nexus Smart Account',
					link: '/new/learn-about-biconomy/nexus'
				}
			]
		},
		{
			text: 'Integrate Biconomy 🦮',
			items: [
				{
					text: '🎬 Getting Started',
					link: '/new/getting-started/getting-started'
				},
				{
					text: '🏁 Set up AbstractJS',
					link: '/new/getting-started/set-up-abstractjs'
				},
				{
					text: '🔐 Enable MEE for EOA Users',
					link: '/new/getting-started/enable-mee-eoa-users',
				},
				{
					text: '🔶 MEE + EIP-7702 (Embedded Wallets)',
					link: '/new/getting-started/enable-mee-eoa-7702'
				},
				{
					text: '🧡 MEE + Fusion (External Wallets)',
					link: '/new/getting-started/enable-mee-eoa-fusion'
				}
			]
		},
		{
			text: 'Quickstart Guides 🏃‍♂️',
			items: [
				{
					text: '🔶 Get Started w/ Embedded Wallets',
					link: '/new/quickstart/embedded-wallets-quickstart'
				},
				{
					text: '🧡 Get Started w/ External Wallets',
					link: '/new/quickstart/external-wallets-quickstart'
				}
			]
		},

		{
			text: 'Gasless Multichain Orchestration 🎻',
			items: [
				{
					text: '📖 Introduction to Orchestration',
					link: '/new/learn-about-biconomy/understanding-composable-orchestration'
				},
				{
					text: '⛽️ Pay Gas With ERC-20 Tokens',
					link: '/new/getting-started/pay-gas-erc20-token',
				},
				{
					text: '📃 Supported Gas Tokens',
					link: '/new/getting-started/supported-gas-tokens'
				},
				{
					text: '🤝 Sponsor Gas for Users',
					link: '/new/getting-started/sponsor-gas-for-users'
				},
				{
					text: '⏱️ Set Execution Time Bounds',
					link: '/new/getting-started/set-execution-time-bounds'
				},
				{
					text: '💉 Use Runtime Parameter Injection',
					link: '/new/getting-started/understanding-runtime-injection'
				},
				{
					text: '🧩 Execute Composable Batch Calls',
					link: '/new/getting-started/composable-batch-execute'
				},
				{
					text: '↔️ Batch Composable Cross-Chain Calls',
					link: '/new/getting-started/orchestrate-transactions-across-chains'
				},
				{
					text: '🧹 Cleanup if Instruction Fails',
					link: '/new/getting-started/handling-partial-execution'
				},
				{
					text: '🔎 Monitor Execution & Completion',
					link: '/new/getting-started/monitor-execution-completion'
				}
			]
		},
		{
			text: 'Smart Sessions (Account Permissions) 🗝️',
			items: [
				{
					text: '🔖 Introduction to Smart Sessions',
					link: '/new/smart-sessions/introduction'
				},
				{
					text: '✍️ Execute Transactions on Users Behalf',
					link: '/new/smart-sessions/execute-transactions-on-users-behalf'
				},
				{
					text: '📐 Smart Sessions Policies Overview',
					link: '/new/smart-sessions/policies',
					collapsed: true,
					items: [
						{
							text: 'Sudo Policy',
							link: '/new/smart-sessions/policies/sudo-policy'
						},
						{
							text: 'Time Range',
							link: '/new/smart-sessions/policies/time-range-policy'
						},
						{
							text: 'Universal Action',
							link: '/new/smart-sessions/policies/universal-action-policy'
						},
						{
							text: 'Usage Limit Policy',
							link: '/new/smart-sessions/policies/usage-limit-policy'
						}
					]
				},
			]
		},
		{
			text: 'Preparing for Production ⚠️',
			items: [

				{
					text: '📏 Set Manual Gas Limits',
					link: '/new/preparing-for-production/set-gas-limits-manually'
				},
				{
					text: '🔑 Set a Production API Key',
					link: '/api-key'
				},
			]
		},
		{
			text: 'Integration Guides',
			items: [
				{
					text: '💳 Embedded Wallets',
					items: [
						{
							text: 'Privy',
							link: '/new/integration-guides/wallets-and-signers/privy'
						},
						{
							text: 'Turnkey',
							link: '/new/integration-guides/wallets-and-signers/turnkey'
						}
					]
				},
				{
					text: '🌉 Bridges and Solvers',
					items: [
						{
							text: 'LiFi',
							link: '/new/integration-guides/bridges-and-solvers/integrate-lifi'
						},
						{
							text: 'Across',
							link: '/new/integration-guides/bridges-and-solvers/integrate-across'
						},
						{
							text: 'Relay',
							link: '/new/integration-guides/bridges-and-solvers/integrate-relay'
						},
					]
				}
			]
		},
		{
			text: 'Examples👇',
			items: [
								{
					text: '🔏 Single Signature Approve + Execute',
					link: '/new/examples/single-sig-approve-execute'
				},
				{
					text: '⭤ Move DeFi Positions With One Signature',
					link: '/new/examples/move-positions'
				}
				// {
				// 	text: '🔄 One Sig: Swap → Bridge → Execute',
				// 	link: '/new/examples/swap-bridge-execute'
				// },

			]
		},
		{
			text: '🧠 Advanced',
			items: [
				{
					text: '💾 Self-Hosted Sponsorship',
					link: '/new/advanced/self-hosted-sponsorship'
				}
			]
		},
		{
			text: 'Resources 📦',
			items: [
				{
					text: '📑 Contract Addresses & Audits',
					link: '/contracts-and-audits'
				},
				{
					text: "⛓️ Supported Chains",
					link: "/supportedNetworks",
				},
			]
		},
		{
			text: "MEE SDK Reference ⚙️",
			link: "/sdk-reference",
			items: [
				{
					text: "Multichain Account Object Methods",
					link: "/sdk-reference/mee-client/account",
					collapsed: true,
					items: [
						{
							text: "build",
							link: "/sdk-reference/mee-client/account/methods/build",
						},
						{
							text: "buildComposable",
							link: "/sdk-reference/mee-client/account/methods/buildComposable",
						},
						{
							text: "deploymentOn",
							link: "/sdk-reference/mee-client/account/methods/more/deploymentOn",
						},
						{
							text: "addressOn",
							link: "/sdk-reference/mee-client/account/methods/more/addressOn",
						},
						{
							text: "isDelegated",
							link: "/sdk-reference/mee-client/account/methods/more/isDelegated",
						},
						{
							text: "unDelegate",
							link: "/sdk-reference/mee-client/account/methods/more/unDelegate",
						},
						{
							text: "waitForTransactionReceipts",
							link: "/sdk-reference/mee-client/account/methods/more/waitForTransactionReceipts",
						},
					],
				},
				{
					text: "MEE Client Object Methods",
					link: "/sdk-reference/mee-client/methods",
					collapsed: true,
					items: [
						{
							text: "getQuote",
							link: "/sdk-reference/mee-client/methods/getQuote",
						},
						{
							text: "executeQuote",
							link: "/sdk-reference/mee-client/methods/executeQuote",
						},
						{
							text: "getFusionQuote",
							link: "/sdk-reference/mee-client/methods/getFusionQuote",
						},
						{
							text: "executeFusionQuote",
							link: "/sdk-reference/mee-client/methods/executeFusionQuote",
						},
						{
							text: "waitForSuperTransactionReceipt",
							link: "/sdk-reference/mee-client/methods/waitForSuperTransactionReceipt",
						},
						{
							text: "getSuperTransactionReceipt",
							link: "/sdk-reference/mee-client/methods/more/getSuperTransactionReceipt",
						},
						{
							text: "execute",
							link: "/sdk-reference/mee-client/methods/more/execute",
						},
						{
							text: "executeSignedQuote",
							link: "/sdk-reference/mee-client/methods/more/executeSignedQuote",
						},
						{
							text: "signQuote",
							link: "/sdk-reference/mee-client/methods/more/signQuote",
						},
						{
							text: "getGasToken",
							link: "/sdk-reference/mee-client/methods/more/getGasToken",
						},
						{
							text: "getInfo",
							link: "/sdk-reference/mee-client/methods/more/getInfo",
						},
						{
							text: "getOnChainQuote",
							link: "/sdk-reference/mee-client/methods/more/getOnChainQuote",
						},
						{
							text: "getPermitQuote",
							link: "/sdk-reference/mee-client/methods/more/getPermitQuote",
						},
						{
							text: "signOnChainQuote",
							link: "/sdk-reference/mee-client/methods/more/signOnChainQuote",
						},
						{
							text: "signPermitQuote",
							link: "/sdk-reference/mee-client/methods/more/signPermitQuote",
						},
						{
							text: "getPaymentToken",
							link: "/sdk-reference/mee-client/methods/more/getPaymentToken",
						},
					],
				},
				{
					text: "Helper / Utility Methods",
					link: "/sdk-reference/mee-client/helpers",
					collapsed: true,
					items: [
						{
							text: "runtimeERC20BalanceOf",
							link: "/sdk-reference/mee-client/helpers/runtimeERC20BalanceOf",
						},
						{
							text: "runtimeEncodeAbiParameters",
							link: "/sdk-reference/mee-client/helpers/runtimeEncodeAbiParameters",
						},
						{
							text: "getMultichainContract",
							link: "/sdk-reference/mee-client/helpers/getMultichainContract",
						},
						{
							text: "getExplorerTxLink",
							link: "/sdk-reference/mee-client/helpers/more/getExplorerTxLink",
						},
						{
							text: "getMeeScanLink",
							link: "/sdk-reference/mee-client/helpers/more/getMeeScanLink",
						},
						{
							text: "getJiffyScanLink",
							link: "/sdk-reference/mee-client/helpers/more/getJiffyScanLink",
						},

					],
				},
			],

		},
		{
			text: "Account Migrations 🛣️",
			link: "/migrations",
			collapsed: false,
			items: [
				{
					text: "V2 to Nexus Migration",
					link: "/migrations/v2ToNexus",
				},
				{
					text: "Nexus to Nexus Migration",
					link: "/migrations/nexusToNexus",
				},
			],
		}
	],
});
