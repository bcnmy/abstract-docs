import { defineConfig } from "vocs";

export const smartAccountsV2Sidebar = [
	{ link: "/smartAccountsV2/overview", text: "Overview" },
	{ link: "/smartAccountsV2/quickstart-react", text: "Quickstart: React" },
	{ link: "/smartAccountsV2/quickstart", text: "Quickstart: Core SDK" },
	{
		link: "/smartAccountsV2/react",
		text: "React",
		collapsed: true,
		items: [
			{
				link: "/smartAccountsV2/react/BiconomyProvider",
				text: "BiconomyProvider",
			},
			{
				link: "/smartAccountsV2/react/useBatchSession",
				text: "UseBatchSession",
			},
			{
				link: "/smartAccountsV2/react/useCreateBatchSession",
				text: "UseCreateBatchSession",
			},
			{
				link: "/smartAccountsV2/react/useCreateSession",
				text: "UseCreateSession",
			},
			{
				link: "/smartAccountsV2/react/useDeploySmartAccount",
				text: "UseDeploySmartAccount",
			},
			{ link: "/smartAccountsV2/react/useGasEstimate", text: "UseGasEstimate" },
			{
				link: "/smartAccountsV2/react/useSendGasTokenTransaction",
				text: "UseSendGasTokenTransaction",
			},
			{
				link: "/smartAccountsV2/react/useSendSponsoredTransaction",
				text: "UseSendSponsoredTransaction",
			},
			{
				link: "/smartAccountsV2/react/useSendTransaction",
				text: "UseSendTransaction",
			},
			{
				link: "/smartAccountsV2/react/useSendWithdrawals",
				text: "UseSendWithdrawals",
			},
			{ link: "/smartAccountsV2/react/useSession", text: "UseSession" },
			{
				link: "/smartAccountsV2/react/useSmartAccount",
				text: "UseSmartAccount",
			},
			{ link: "/smartAccountsV2/react/useTokenFees", text: "UseTokenFees" },
			{ link: "/smartAccountsV2/react/useUserOpWait", text: "UseUserOpWait" },
		],
	},
	{
		link: "/smartAccountsV2/tutorials",
		text: "Tutorials",
		collapsed: true,
		items: [
			{
				link: "/smartAccountsV2/tutorials/sendSimpleTransaction",
				text: "Send a simple transaction",
			},
			{
				link: "/smartAccountsV2/tutorials/sendTransactionsBatch",
				text: "Send transactions batch",
			},
			{
				link: "/smartAccountsV2/tutorials/sendGasless",
				text: "Send a gasless transaction",
			},
			{
				link: "/smartAccountsV2/tutorials/payERC20Token",
				text: "Pay gas in ERC20 token",
			},
			{
				link: "/smartAccountsV2/tutorials/parallelUserOps",
				text: "Send parallel userOps",
			},
			{
				link: "/smartAccountsV2/tutorials/sessions",
				text: "Sessions",
				items: [
					{
						link: "/smartAccountsV2/tutorials/sessions/createSession",
						text: "Create Session",
					},
					{
						link: "/smartAccountsV2/tutorials/sessions/useSession",
						text: "Use Session",
					},
					{
						link: "/smartAccountsV2/tutorials/sessions/createBatchSession",
						text: "Create Batch Session",
					},
					{
						link: "/smartAccountsV2/tutorials/sessions/useBatchSession",
						text: "Use Batch Session",
					},
					{
						link: "/smartAccountsV2/tutorials/sessions/customSessionStorage",
						text: "Custom Session Storage",
					},
				],
			},
			{
				link: "/smartAccountsV2/tutorials/customValidationModule",
				text: "Custom Validation Module",
			},
			{
				link: "/smartAccountsV2/tutorials/utils",
				text: "Utils",
				items: [
					{
						link: "/smartAccountsV2/tutorials/utils/offsetGasValues",
						text: "Offset Gas Values",
					},
					{
						link: "/smartAccountsV2/tutorials/utils/transferOwnership",
						text: "Transfer Ownership",
					},
				],
			},
			{
				link: "/smartAccountsV2/tutorials/apiIntegration",
				text: "API Integration",
				collapsed: true,
				items: [
					{
						link: "/smartAccountsV2/tutorials/apiIntegration/userSponsored",
						text: "User sponsored",
					},
					{
						link: "/smartAccountsV2/tutorials/apiIntegration/paymasterSponsored",
						text: "Paymaster Sponsored",
					},
					{
						link: "/smartAccountsV2/tutorials/apiIntegration/paymasterERC20",
						text: "Paymaster ERC20",
					},

					{
						link: "/smartAccountsV2/tutorials/apiIntegration/signUserOperation",
						text: "Sign userOp",
					},
				],
			},
			{ link: "/smartAccountsV2/tutorials/v4Migration", text: "V4 Migration" },
			{
				text: "Migrate from stackUp",
				link: "/smartAccountsV2/tutorials/migrate",
			},
		],
	},
	{
		link: "/smartAccountsV2/account",
		text: "Smart Account",
		collapsed: true,
		items: [
			{ link: "/smartAccountsV2/account/integration", text: "Integration" },
			{ link: "/smartAccountsV2/account/methods", text: "Methods" },
			{
				link: "/smartAccountsV2/account/signers",
				text: "Signers",
				items: [
					{
						link: "/smartAccountsV2/account/signers/eoa",
						text: "Eoa",
						items: [
							{
								link: "/smartAccountsV2/account/signers/eoa/ethers",
								text: "Ethers",
							},
							{
								link: "/smartAccountsV2/account/signers/eoa/viem",
								text: "Viem",
							},
							{
								link: "/smartAccountsV2/account/signers/eoa/wagmi",
								text: "Wagmi",
							},
						],
					},
					{ link: "/smartAccountsV2/account/signers/capsule", text: "Capsule" },
					{ link: "/smartAccountsV2/account/signers/dfns", text: "Dfns" },
					{ link: "/smartAccountsV2/account/signers/dynamic", text: "Dynamic" },
					{ link: "/smartAccountsV2/account/signers/magic", text: "Magic" },
					{
						link: "/smartAccountsV2/account/signers/particle",
						text: "Particle",
					},
					{
						link: "/smartAccountsV2/account/signers/passport",
						text: "Passport",
					},
					{ link: "/smartAccountsV2/account/signers/privy", text: "Privy" },
					{ link: "/account/signers/turnkey", text: "Turnkey" },
					{
						link: "/smartAccountsV2/account/signers/web3auth",
						text: "Web3auth",
					},
				],
			},
			{
				link: "/smartAccountsV2/account/fiatonramp",
				text: "Enable Fiat On-Ramp",
			},
		],
	},
	{
		link: "/smartAccountsV2/bundler",
		text: "Bundler",
		collapsed: true,
		items: [
			{
				link: "/smartAccountsV2/bundler/api",
				text: "Api",
				items: [
					{ link: "/smartAccountsV2/bundler/api/explorer", text: "Explorer" },

					{
						link: "/smartAccountsV2/bundler/api/estimate-useroperation-gas",
						text: "eth_estimateUserOperationGas",
					},
					{
						link: "/smartAccountsV2/bundler/api/send-UserOperation",
						text: "eth_sendUserOperation",
					},
					{
						link: "/smartAccountsV2/bundler/api/get-useroperation-receipt",
						text: "eth_getUserOperationReceipt",
					},
					{
						link: "/smartAccountsV2/bundler/api/get-useroperation-by-hash",
						text: "eth_getUserOperationByHash",
					},
					{ link: "/smartAccountsV2/bundler/api/chainId", text: "eth_chainId" },
					{
						link: "/smartAccountsV2/bundler/api/supported-EntryPoints",
						text: "eth_supportedEntryPoints",
					},
					{
						link: "/smartAccountsV2/bundler/api/get-gas-fee-values",
						text: "biconomy_getGasFeeValues",
					},
					{
						link: "/smartAccountsV2/bundler/api/get-useroperation-status",
						text: "biconomy_getUserOperationStatus",
					},
				],
			},
			{
				link: "/smartAccountsV2/bundler/bundlermethods",
				text: "Bundler Methods",
			},
			{ link: "/smartAccountsV2/bundler/integration", text: "Integration" },
			{ link: "/smartAccountsV2/bundler/usingViem", text: "Using Viem" },
		],
	},
	{
		link: "/smartAccountsV2/paymaster",
		text: "Paymaster",
		collapsed: true,
		items: [
			{
				link: "/smartAccountsV2/paymaster/7677",
				text: "7677",
				items: [
					{
						link: "/smartAccountsV2/paymaster/7677/pm_getPaymasterData",
						text: "pm_getPaymasterData",
					},
					{
						link: "/smartAccountsV2/paymaster/7677/pm_getPaymasterStubData",
						text: "pm_getPaymasterStubData",
					},
					// { link: "/paymaster/7677/usingViem", text: "Using Viem" },
				],
			},
			{
				link: "/smartAccountsV2/paymaster/api",
				text: "Api",
				items: [
					{
						link: "/smartAccountsV2/paymaster/api/explorer",
						text: "Explorer",
					},
					{
						link: "/smartAccountsV2/paymaster/api/get-fee-quotes",
						text: "pm_getFeeQuoteOrData",
					},
					{
						link: "/smartAccountsV2/paymaster/api/sponsor-useroperation",
						text: "pm_sponsorUserOperation",
					},
				],
			},
			{ link: "/smartAccountsV2/paymaster/integration", text: "Integration" },
			{ link: "/smartAccountsV2/paymaster/methods", text: "Methods" },
		],
	},
	{
		link: "/smartAccountsV2/gasEstimations",
		text: "Gas Estimations",
		collapsed: true,
		items: [
			{
				link: "/smartAccountsV2/gasEstimations/integration",
				text: "Integration",
			},
			{ link: "/smartAccountsV2/gasEstimations/methods", text: "Methods" },
		],
	},
	{
		link: "/smartAccountsV2/modules",
		text: "Modules",
		collapsed: true,
		items: [
			{ link: "/smartAccountsV2/modules/ecdsa", text: "Ecdsa" },
			{ link: "/smartAccountsV2/modules/multichain", text: "Multichain" },
			{
				link: "/smartAccountsV2/modules/sessions",
				text: "Sessions",
				items: [
					{
						link: "/smartAccountsV2/modules/sessions/abiSessionValidationModule",
						text: "AbiSessionValidationModule",
					},
					{
						link: "/smartAccountsV2/modules/sessions/BatchedSession",
						text: "BatchedSession",
					},
					{
						link: "/smartAccountsV2/modules/sessions/sessionvalidationmodule",
						text: "Sessionvalidationmodule",
					},
				],
			},
		],
	},

	{ link: "/smartAccountsV2/contracts", text: "Contracts" },
	{ link: "/smartAccountsV2/audits", text: "Audits" },
	{
		link: "/smartAccountsV2/troubleshooting",
		text: "Troubleshooting",
		collapsed: true,
		items: [
			{
				link: "/smartAccountsV2/troubleshooting/commonerrors",
				text: "Common errors",
			},
			{ link: "/smartAccountsV2/troubleshooting/polyfill", text: "Polyfill" },
		],
	},

	{ link: "/smartAccountsV2/FAQ", text: "FAQ" },
	{ link: "/smartAccountsV2/supportedNetworks", text: "SupportedNetworks" },
];

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
			"https://github.com/bcnmy/documentation/edit/develop/docs/pages/:path",
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
				width: '350px',
				horizontalPadding: '40px',
				verticalPadding: '20px'
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
		{ text: "Examples", link: "https://github.com/bcnmy/examples" },
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
			text: "Why Biconomy?",
			link: "/about",
		},
		{
			text: "Supported Chains",
			link: "/supportedNetworks",
		},
		{
			text: "Pricing",
			link: "/pricing",
		},
		{
			text: 'Get API Key',
			link: '/api-key'
		},
		{
			text: 'Modular Execution Environment (MEE)',
			items: [
				{
					text: 'What is MEE',
					link: '/mee/what-is-mee'
				},
				{
					text: 'MEE vs. ERC-4337',
					link: '/mee/mee-vs-4337'
				}
			]
		},	
		{
			text: 'QuickStart Guides',
			items: [
				{
					text: 'Multichain Orchestration',
					link: '/multichain-orchestration/quickstart'
				},
				{
					text: 'Pay for Gas With ERC-20 Tokens',
					link: '/multichain-gas-abstraction/for-sca'
				},
				{
					text: 'EIP-7702 for Embedded Wallets',
					collapsed: true,
					items: [
							{
								text: 'Gas Abstracted Batch Execute w/ Privy',
								link: '/smarteoa/demos/privy-7702-gasless'
							},
							{
								text: 'Gas Abstracted Batch Execute w/ Turnkey',
								link: '/smarteoa/demos/turnkey-7702-gasless'
							},
							{
								text: 'In-Depth Tutorial w/ Privy',
								link: '/smarteoa/demos/privy-7702-demo'
							},
					]
				},
				{
					text: 'EIP-7702 for External Wallets',
					collapsed: true,
					items: [
						{
							text: 'Batch Execute from EOA with ERC-5792',
							link: '/smarteoa/demos/batch-execute-5792-fusion'
						},
						{
							text: 'Batch Execute from EOA with Fusion'
						}
					]
				}
				
			]
		},
		{
			text: 'Multichain Orchestration APIs',
			collapsed: true,
			items: [
				{
					text: 'Overview',
					link: '/multichain-orchestration/overview'
				},
				{
					text: 'Zero-to-Hero Guide',
					link: '/multichain-orchestration/comprehensive'
				},
				{
					text: 'Using Different Account Types',
					items: [
						{
							text: 'Native EOA',
							link: '/multichain-orchestration/eoa'
						},
						{
							text: 'Smart Account',
							link: '/multichain-orchestration/sca'
						},
						{
							text: 'EIP-7702 EOA',
							link: '/multichain-orchestration/eip7702'
						}
					]
				},
				{
					text: 'Learn Concepts',
					items: [
						{
							text: 'Runtime Parameter Injection',
							link: '/multichain-orchestration/runtimeinjection'
						},
					]
				},
				{
					text: 'Instruction Builders',
					collapsed: true,
					items: [
						{
							text: 'Overview',
							link: '/multichain-orchestration/instruction-builders/overview'
						},
						{
							text: 'Default',
							link: '/multichain-orchestration/instruction-builders/default'
						},
						{
							text: 'Multichain',
							link: '/multichain-orchestration/instruction-builders/multichain'
						},
						{
							text: 'Composable',
							link: '/multichain-orchestration/instruction-builders/composable'
						},
						{
							text: 'Raw CallData',
							link: '/multichain-orchestration/instruction-builders/rawcalldata'
						}
					]
				}
			]
		},
		{
			text: 'Smart EOAs (EIP-7702 & Fusion)',
			collapsed: true,
			items: [
				{ text: "Overview", link: '/smarteoa' },
				{ text: 'Explained', items: [
					{ text: "EIP-7702 Explained", link: '/eip7702/explained' },
					{ text: 'Companion Accounts Explained', link: '/smarteoa/companion-explained'},	
				]},
				{ text: 'Developer Guides', items: [
					{ text: 'dApps using External Wallets', link: '/mee/fusion'},
					{ text: 'dApps using Embedded Wallets', link: '/eip7702/wallet-guide'},
					{ text: 'MetaMask Delegator Framework', link: '/smarteoa/delegator' }
				]}
					]
		},
		{
			text: "Signer Guides",
			collapsed: true,
			items: [
				{ text: "Privy", link: "/tutorials/signers/privy" },
				{ text: "Web3Auth", link: "/tutorials/signers/web3auth" },
				{ text: "Magic", link: "/tutorials/signers/magic" },
				{ text: "Particle", link: "/tutorials/signers/particle" },
				{ text: "Passport", link: "/tutorials/signers/passport" },
				{ text: "Turnkey", link: "/tutorials/signers/turnkey" },
				{ text: "Dynamic", link: "/tutorials/signers/dynamic" },
				{ text: "Capsule", link: "/tutorials/signers/capsule" },
				{ text: "DFNS", link: "/tutorials/signers/dfns" },
			],
		},
		{
			text: "Smart Accounts",
			collapsed: true,
			items: [
				{ text: "Smart Accounts Overview", link: "/account-providers/overview" },
				{ text: "Nexus Smart Account", link: "/overview", collapsed: true },				
				{ text: "EIP-7702: Smart EOAs Overview", link: '/eip7702/wallet-guide' },
				{ text: 'Companion Accounts Overview', link: '/mee/fusion' }
			],
		},
		{
			text: 'Gas Abstraction APIs',
			collapsed: true,
			items: [
				{
					text: 'Overview',
					link: '/multichain-gas-abstraction/overview'
				},
				{
					text: 'Paying for Gas with ERC20 Tokens',
					items: [
						{
							text: 'For EOA Accounts',
							link: '/multichain-gas-abstraction/for-eoa'
						},
						{
							text: 'For Smart Accounts',
							link: '/multichain-gas-abstraction/for-sca'
						}
					]
				},
				{
					text: 'Sponsoring Gas For Users',
					link: '/multichain-gas-abstraction/sponsoring-gas'
				}
			]
		},
		{
			text: 'Smart Sessions APIs',
			collapsed: true,
			items: [
				{
					text: 'Overview',
					link: '/multichain-smart-sessions/overview'
				},
				{
					text: 'Single Chain',
					items: [
						{
							text: 'Granting a Smart Session',
							link: '/multichain-smart-sessions/grant'
						},
						{
							text: 'Redeeming a Smart Session',
							link: '/multichain-smart-sessions/redeem'
						}
					]
				},
			]
		},
		{
			text: 'Learn Concepts',
			collapsed: true,
			items: [
				{
					text: 'EIP-7702 Guide for Apps 🔗',
					link: 'https://blog.biconomy.io/a-comprehensive-eip-7702-guide-for-apps/'
				},
				{
					text: 'Companion Accounts & Fusion 🔗',
					link: 'https://blog.biconomy.io/introduction-to-companion-accounts-fusion/'
				},
				{
					text: 'Supertransactions 🔗',
					link: 'https://blog.biconomy.io/introduction-to-supertransactions-2/'
				},
				{
					text: 'Compsability Stack 🔗',
					link: 'https://blog.biconomy.io/introduction-to-the-composability-stack/'
				},
				{
					text: 'Modular Execution Environment 🔗',
					link: 'https://blog.biconomy.io/learn-modular-execution-environment-mee/'
				}
			]
		},
		{
			text: "Resources",
			collapsed: true,
			items: [
				{ text: "Contracts & Audits", link: "/contractsAndAudits" },
				{ text: "Supported Networks", link: "/supportedNetworks" },
			],
		},

		{
			text: "Demos",
			collapsed: true,
			items: [
				{
					text: "#001 SmartSessions",
					link: "/demos/smartSessions",
				},
				{
					text: "#002 Fusion",
					link: "/demos/fusion",
				},
			],
		},
		{
			text: "SDK Reference",
			collapsed: true,
			link: "/sdk-reference",
			items: [
				{
					text: "MEE Client",
					link: "/sdk-reference/mee-client",
					collapsed: false,
					items: [
						{
							text: "Multichain Account",
							link: "/sdk-reference/mee-client/account",
							collapsed: false,
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
									text: "more*",
									collapsed: true,
									items: [
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
								}
							],
						},
						{
							text: "Methods",
							link: "/sdk-reference/mee-client/methods",
							collapsed: false,
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
									text: "more*",
									collapsed: true,
									items: [
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
							],
						},
						{
							text: "Helpers",
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
									text: "more*",
									collapsed: true,
									items: [
										{
											text: "mcUSDC",
											link: "/sdk-reference/mee-client/helpers/more/mcUSDC",
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
										{
											text: "mcAaveV3Pool	",
											link: "/sdk-reference/mee-client/helpers/more/mcAaveV3Pool",
										},
										{
											text: "mcUniswapSwapRouter",
											link: "/sdk-reference/mee-client/helpers/more/mcUniswapSwapRouter",
										},
									],
								},
							],
						},
					],
				},
				{
					text: "Bundler Client",
					collapsed: true,
					link: "/sdk-reference/bundler-client",
					items: [
						{
							text: "Account",
							link: "/sdk-reference/bundler-client/account",
						},
						{
							text: "Methods",
							link: "/sdk-reference/bundler-client/methods",
							collapsed: false,
							items: [
								{
									text: "sendUserOperation",
									link: "/sdk-reference/bundler-client/methods/sendUserOperation",
								},
								{
									text: "waitForUserOperationReceipt",
									link: "/sdk-reference/bundler-client/methods/waitForUserOperationReceipt",
								},
								{
									text: "debugUserOperation",
									link: "/sdk-reference/bundler-client/methods/debugUserOperation",
								},
								{
									text: "prepareTokenPaymasterUserOp",
									link: "/sdk-reference/bundler-client/methods/prepareTokenPaymasterUserOp",
								},
								{
									text: "sendTokenPaymasterUserOp",
									link: "/sdk-reference/bundler-client/methods/sendTokenPaymasterUserOp",
								},
								{
									text: "upgradeSmartAccount",
									link: "/sdk-reference/bundler-client/methods/upgradeSmartAccount",
								},
								{
									text: "more*",
									collapsed: true,
									items: [
										{
											text: "estimateUserOperationGas",
											link: "/sdk-reference/bundler-client/methods/more/estimateUserOperationGas",
										},
										{
											text: "getUserOperation",
											link: "/sdk-reference/bundler-client/methods/more/getUserOperation",
										},
										{
											text: "getUserOperationReceipt",
											link: "/sdk-reference/bundler-client/methods/more/getUserOperationReceipt",
										},
										{
											text: "getSupportedEntryPoints",
											link: "/sdk-reference/bundler-client/methods/more/getSupportedEntryPoints",
										},
										{
											text: "getChainId",
											link: "/sdk-reference/bundler-client/methods/more/getChainId",
										},
										{
											text: "sendTransaction",
											link: "/sdk-reference/bundler-client/methods/more/sendTransaction",
										},
										{
											text: "writeContract",
											link: "/sdk-reference/bundler-client/methods/more/writeContract",
										},
										{
											text: "signMessage",
											link: "/sdk-reference/bundler-client/methods/more/signMessage",
										},
										{
											text: "prepareUserOperationWithoutSignature",
											link: "/sdk-reference/bundler-client/methods/more/prepareUserOperationWithoutSignature",
										},
										{
											text: "prepareUserOperation",
											link: "/sdk-reference/bundler-client/methods/more/prepareUserOperation",
										},
										{
											text: "getGasFeeValues",
											link: "/sdk-reference/bundler-client/methods/more/getGasFeeValues",
										},
										{
											text: "getUserOperationStatus",
											link: "/sdk-reference/bundler-client/methods/more/getUserOperationStatus",
										},
										{
											text: "waitForConfirmedUserOperationReceipt",
											link: "/sdk-reference/bundler-client/methods/more/waitForConfirmedUserOperationReceipt",
										},
										{
											text: "accountId",
											link: "/sdk-reference/bundler-client/methods/more/accountId",
										},
										{
											text: "getActiveHook",
											link: "/sdk-reference/bundler-client/methods/more/getActiveHook",
										},
										{
											text: "getFallbackBySelector",
											link: "/sdk-reference/bundler-client/methods/more/getFallbackBySelector",
										},
										{
											text: "getInstalledExecutors",
											link: "/sdk-reference/bundler-client/methods/more/getInstalledExecutors",
										},
										{
											text: "getInstalledValidators",
											link: "/sdk-reference/bundler-client/methods/more/getInstalledValidators",
										},
										{
											text: "installModule",
											link: "/sdk-reference/bundler-client/methods/more/installModule",
										},
										{
											text: "isModuleInstalled",
											link: "/sdk-reference/bundler-client/methods/more/isModuleInstalled",
										},
										{
											text: "supportsExecutionMode",
											link: "/sdk-reference/bundler-client/methods/more/supportsExecutionMode",
										},
										{
											text: "supportsModule",
											link: "/sdk-reference/bundler-client/methods/more/supportsModule",
										},
										{
											text: "uninstallModule",
											link: "/sdk-reference/bundler-client/methods/more/uninstallModule",
										}
									]
								}
							],
						},
					],
				},

			],
		},
		{
			text: "Account Migrations",
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
		},
		{
			text: "Legacy Account Abstraction Docs",
			collapsed: true,
			items: [
				{
					collapsed: true,
					text: "V2 Accounts & EPv6 Infra",
					items: smartAccountsV2Sidebar,
				},
				{ text: "V1 Docs", link: "https://legacy-docs.biconomy.io/" },
			],
		}
	],
});
