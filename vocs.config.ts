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
	},
	socials: [
		{
			icon: "x",
			link: "https://x.com/biconomy",
		},
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
			link: "https://biconomy.notion.site/Biconomy-Product-Pricing-6f4537a645af4b8985f4d43f2b045865",
		},
		{
			text: "AbstractJS SDK",
			items: [
				{ text: "Overview", link: "/abstractjs" },
				{
					text: "Integrated Signers",
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
			],
		},
		{
			text: "Quickstart Guides",
			collapsed: true,
			items: [
				{
					text: "Modular Execution Environment",
					collapsed: false,
					items: [
						{
							text: "Execute a Simple Supertransaction",
							link: "/mee/tutorials/execute-simple-supertx",
						},
						{
							text: "Build a Chain Abstracted App ✨",
							link: "/mee/tutorials/build-chainabstracted-app",
						},
						{
							text: "Build and Execute Intents",
							link: "/mee/tutorials/execute-intent",
						},
						{
							text: "Cross-Chain Gas Abstraction",
							link: "/mee/tutorials/pay-gas-across-chains",
						},
					],
				},
				{
					text: "Account Abstraction",
					collapsed: true,
					items: [
						{ text: "Execute a Simple UserOp", link: "/quickstart" },
						{
							text: "Sponsor Gas With Paymasters",
							link: "/tutorials/gasless",
						},
						{
							text: "Paying Gas with ERC20 Tokens",
							link: "/tutorials/tokenPaymaster",
						},
						{
							text: "Executing Batch Transactions",
							link: "/tutorials/batch",
						},
					],
				},
				{
					text: "Account Modules",
					collapsed: true,
					items: [
						{
							text: "Sign Transactions with Passkeys",
							link: "/tutorials/passKey",
						},
						{
							text: "Create Multi-Sig Wallets",
							link: "/modules/validators/ownableValidator",
						},
						{
							text: "Add Automation with Session Keys",
							link: "/tutorials/smart-sessions",
						},
					],
				},
			],
		},
		{
			text: "Smart Accounts",
			items: [
				{ text: "Overview", link: "/account-providers/overview" },
				{ text: "Nexus", link: "/overview", collapsed: true },
			],
		},

		{
			text: "Execution Environments",
			items: [
				{ text: "Overview", link: "/explained/exec-environments" },
				{ text: "Modular Execution Environment", link: "/explained/mee" },
				{
					text: "Bundler and Paymaster",
					collapsed: true,
					link: "/explained/bundlers-paymasters",
					items: [
						{
							text: "Bundler Details",
							link: "/infra/bundler/integration",
						},
						{
							text: "Paymaster Details",
							link: "/infra/paymaster/integration",
							items: [
								{
									text: "Supported Tokens",
									link: "/infra/paymaster/supportedTokens",
								},
							],
						},
					],
				},
			],
		},
		{
			text: "Smart EOA Stack",
			items: [
				{
					text: "Give EOAs Smart Account Features",
					link: "/mee/fusion",
				},
				{
					text: "EIP7702 Guide for Wallets",
					link: "/eip7702/wallet-guide",
				},
			],
		},
		{
			text: "Account Modules",
			items: [
				{
					text: "Overview",
					link: "/modules",
				},
				// {
				//   link: "/modules/validators/k1Validator",
				//   text: "K1 Validator",
				//   collapsed: false,
				//   items: [
				//     {
				//       link: "/modules/validators/k1Validator/tutorial",
				//       text: "Tutorial",
				//     },
				//   ],
				// },
				{
					link: "/modules/validators/smartSessions",
					text: "Smart Sessions Module",
					collapsed: true,
					items: [
						{
							link: "/modules/validators/smartSessions/grantingSmartSessions",
							text: "Granting Smart Sessions",
						},
						{
							link: "/modules/validators/smartSessions/usingSmartSessions",
							text: "Using Smart Sessions",
						},
						{
							link: "/modules/validators/smartSessions/policies",
							text: "Policies",
							collapsed: false,
							items: [
								{
									link: "/modules/validators/smartSessions/policies/universalActionPolicy",
									text: "Universal Action Policy",
								},
								{
									link: "/modules/validators/smartSessions/policies/sudoPolicy",
									text: "Sudo Policy",
								},
								{
									link: "/modules/validators/smartSessions/policies/spendingLimitPolicy",
									text: "Spending Limit Policy",
								},
								{
									link: "/modules/validators/smartSessions/policies/timeRangePolicy",
									text: "Time Range Policy",
								},
								{
									link: "/modules/validators/smartSessions/policies/valueLimitPolicy",
									text: "Value Limit Policy",
								},
								{
									link: "/modules/validators/smartSessions/policies/usageLimitPolicy",
									text: "Usage Limit Policy",
								},
							],
						},
					],
				},
				{
					text: "Composability Module",
					collapsed: true,
					items: [
						{
							text: "Why?",
							link: "/composability",
						},
						{
							text: "How Composability Stack Works",
							link: "/composability/using-fallback-handlers",
						},
					],
				},
				{
					link: "/modules/validators/passkeyValidator",
					text: "Passkey Module",
				},
				{
					link: "/modules/validators/ownableValidator",
					text: "Ownables (Multisig) Module",
				},
			],
		},
		// {
		//   text: "Smart EOAs",
		//   items: [
		//     { text: "Wallet Integration Guide", link: "/eip7702/wallet-guide" },
		//   ],
		// },
		{
			link: "/dashboard",
			text: "Dashboard",
			items: [
				{ link: "/dashboard/paymaster", text: "Paymaster & Gas Tank Setup" },
				{
					link: "/dashboard/paymasterRules",
					text: "Configuring Paymaster Rules",
				},
				{
					link: "/dashboard/spendingLimits",
					text: "Spending Limits & Notifications",
				},
				{ link: "/dashboard/organization", text: "Organization Management" },
				{ link: "/dashboard/apis", text: "API Endpoints & Webhooks" },
			],
		},
		{
			text: "SDK Reference",
			items: [
				{
					text: "Mee Client",
					link: "/mee-client",
					collapsed: false,
					items: [
						{
							text: "Multichain Account",
							link: "/mee-client/account",
							collapsed: false,
							items: [
								{
									text: "build",
									link: "/mee-client/account/methods/build",
								},
								{
									text: "deploymentOn",
									link: "/mee-client/account/methods/deploymentOn",
								},
								{
									text: "addressOn",
									link: "/mee-client/account/methods/addressOn",
								},
							],
						},
						{
							text: "Methods",
							link: "/mee-client/methods",
							collapsed: false,
							items: [
								{
									text: "getQuote",
									link: "/mee-client/methods/getQuote",
								},
								{
									text: "executeQuote",
									link: "/mee-client/methods/executeQuote",
								},
								{
									text: "waitForSuperTransactionReceipt",
									link: "/mee-client/methods/waitForSuperTransactionReceipt",
								},
								{
									text: "signFusionQuote",
									link: "/mee-client/methods/signFusionQuote",
								},
								{
									text: "executeSignedFusionQuote",
									link: "/mee-client/methods/executeSignedFusionQuote",
								},
							],
						},
					],
				},
				{
					text: "Nexus Client",
					collapsed: true,
					link: "/nexus-client",
					items: [
						{
							text: "Methods",
							link: "/nexus-client/methods",
							collapsed: false,
							items: [
								{
									text: "sendUserOperation",
									link: "/nexus-client/methods/sendUserOperation",
								},
								{
									text: "waitForUserOperationReceipt",
									link: "/nexus-client/methods/waitForUserOperationReceipt",
								},
								{
									text: "debugUserOperation",
									link: "/nexus-client/methods/debugUserOperation",
								},
								{
									text: "prepareUserOperation",
									link: "/nexus-client/methods/prepareUserOperation",
								},
								{
									text: "prepareTokenPaymasterUserOp",
									link: "/nexus-client/methods/prepareTokenPaymasterUserOp",
								},
								{
									text: "sendTokenPaymasterUserOp",
									link: "/nexus-client/methods/sendTokenPaymasterUserOp",
								},
								{
									text: "sendTransaction",
									link: "/nexus-client/methods/sendTransaction",
								},
								{
									text: "estimateUserOperationGas",
									link: "/nexus-client/methods/estimateUserOperationGas",
								},
								{
									text: "getUserOperation",
									link: "/nexus-client/methods/getUserOperation",
								},
								{
									text: "getUserOperationReceipt",
									link: "/nexus-client/methods/getUserOperationReceipt",
								},
								{
									text: "getSupportedEntryPoints",
									link: "/nexus-client/methods/getSupportedEntryPoints",
								},
								{
									text: "getChainId",
									link: "/nexus-client/methods/getChainId",
								},
							],
						},
					],
				},
			],
		},
		{
			text: "Resources",
			items: [
				{ text: "Contracts & Audits", link: "/contractsAndAudits" },
				{ text: "Supported Networks", link: "/supportedNetworks" },
			],
		},
		{
			text: "Legacy Account Docs",
			collapsed: true,
			items: [
				{
					collapsed: true,
					text: "V2 Docs & Infrastructure",
					items: smartAccountsV2Sidebar,
				},
				{ text: "V1 Docs", link: "https://legacy-docs.biconomy.io/" },
			],
		},
		{
			text: "The Biconomy Network",
			items: [{ text: "Overview", link: "/network" }],
		},
	],
});
