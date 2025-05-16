# Biconomy SmartAccountV2 to Nexus Migration Guide

This guide explains how to migrate your BiconomySmartAcccountV2 smart accounts to the newer Nexus smart accounts. The migration process preserves your account's address, balance, and history while upgrading to Nexus's enhanced architecture.

## Why Migrate?

Migrating from V2 to Nexus smart accounts provides several benefits:

1. **Enhanced Security**: Improved security model with modular validators
2. **Better Performance**: More gas-efficient transaction processing
3. **Expanded Features**: Access to the newest account abstraction capabilities 
4. **Future Compatibility**: Ensure your smart account remains compatible with the latest AbstractJS SDK

## Migration Process Overview

The migration follows these steps:

1. **Connect to V2 Account**: Connect to your existing V2 smart account
2. **Deploy V2 Account** (if not already deployed): Ensure the account is deployed on-chain
3. **Migrate to Nexus**: Update implementation and initialize the Nexus account
4. **Verify Migration**: Test the migrated account with a transaction
5. **Update Your Application**: Use the Nexus SDK to interact with the migrated account

## Prerequisites

Before starting the migration:

1. Update to the latest version of the AbstractJS SDK:

```bash
npm install @biconomy/abstractjs
```

2. Make sure you have your EOA's private key and the V2 account address

## Step 1: Connect to Your V2 Account

First, set up the necessary connections to your V2 smart account:

```typescript
import { createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { base } from "viem/chains";
import { 
  createSmartAccountClient as createV2Client,
  BiconomySmartAccountV2,
  PaymasterMode
} from "@biconomy/account";

// Define configuration variables
const config = {
  // Chain and network information
  chain: base,
  
  // EOA credentials
  eoaPrivateKey: "YOUR_PRIVATE_KEY", // Replace with your private key
  eoaAddress: "YOUR_EOA_ADDRESS", // Replace with your EOA address
  
  // Biconomy infrastructure URLs
  v2BundlerUrl: "YOUR_V2_BUNDLER_URL", // Replace with your V2 bundler URL
  nexusBundlerUrl: "YOUR_NEXUS_BUNDLER_URL", // Replace with your Nexus bundler URL
  
  // API keys
  paymasterApiKey: "YOUR_PAYMASTER_API_KEY", // Replace with your Paymaster API key
  
  // Nexus contract addresses
  nexusImplementationAddress: "0x000000008761E87F023f65c49DC9cb1C7EdFEaaf",
  nexusBootstrapAddress: "0x000000F5b753Fdd20C5CA2D7c1210b3Ab1EA5903",
  emptyHookAddress: "0x0000000000000000000000000000000000000001"
};

// Connect to your EOA
const eoaAccount = privateKeyToAccount("0x" + config.eoaPrivateKey);
const client = createWalletClient({
  account: eoaAccount,
  chain: config.chain,
  transport: http(),
});

// Connect to your V2 smart account
const V2Account = await createV2Client({
  signer: client,
  biconomyPaymasterApiKey: config.paymasterApiKey,
  bundlerUrl: config.v2BundlerUrl,
});

// Get V2 account address
const V2AccountAddress = await V2Account.getAccountAddress();
console.log("V2 Account Address:", V2AccountAddress);
```

## Step 2: Check Deployment Status

Check if your V2 account is already deployed, and deploy it if necessary:

```typescript
// Check if account is deployed
const isDeployed = await V2Account.isAccountDeployed();

if (!isDeployed) {
  console.log("Account not deployed, deploying now...");
  
  // Deploy the V2 account
  const deploymentResponse = await V2Account.sendTransaction([
    {
      to: V2AccountAddress,
      value: 0n,
      data: "0x",
    },
  ]);

  const { transactionHash } = await deploymentResponse.waitForTxHash();
  console.log("V2 account deployment transaction hash:", transactionHash);
} else {
  console.log("Account already deployed, proceeding with migration");
}
```

## Step 3: Migrate to Nexus

Now perform the migration by updating the implementation to Nexus and initializing the Nexus account:

```typescript
import { 
  encodeFunctionData,
  encodeAbiParameters
} from "viem";

async function migrateToNexus(V2Account) {
  const V2AccountAddress = await V2Account.getAccountAddress();
  
  // Step 1: Update implementation to Nexus
  console.log("Preparing update implementation to Nexus...");
  const updateImplementationCalldata = encodeFunctionData({
    abi: [
      {
        name: "updateImplementation",
        type: "function",
        stateMutability: "nonpayable",
        inputs: [{ type: "address", name: "newImplementation" }],
        outputs: []
      }
    ],
    functionName: "updateImplementation",
    args: [config.nexusImplementationAddress],
  });
  
  const updateImplementationTransaction = {
    to: V2AccountAddress,
    data: updateImplementationCalldata,
  };
  
  // Step 2: Initialize Nexus Account
  console.log("Preparing initialize Nexus account...");
  const ownerAddress = config.eoaAddress;
  
  // Prepare initialization data for the validator
  const initData = encodeFunctionData({
    abi: [
      {
        name: "initNexusWithDefaultValidatorAndOtherModulesNoRegistry",
        type: "function",
        stateMutability: "nonpayable",
        inputs: [
          { type: "bytes", name: "defaultValidatorData" },
          { type: "tuple[]", name: "validators", components: [
            { type: "address", name: "module" },
            { type: "bytes", name: "data" }
          ]},
          { type: "tuple[]", name: "executors", components: [
            { type: "address", name: "module" },
            { type: "bytes", name: "data" }
          ]},
          { type: "tuple", name: "hook", components: [
            { type: "address", name: "module" },
            { type: "bytes", name: "data" }
          ]},
          { type: "tuple[]", name: "fallbacks", components: [
            { type: "address", name: "module" },
            { type: "bytes", name: "data" }
          ]},
          { type: "tuple[]", name: "prevalidationHooks", components: [
            { type: "address", name: "module" },
            { type: "bytes", name: "data" },
            { type: "uint256", name: "hookType" }
          ]}
        ],
        outputs: []
      }
    ],
    functionName: "initNexusWithDefaultValidatorAndOtherModulesNoRegistry",
    args: [
      encodeFunctionData({
        abi: [
          {
            name: "initialize",
            type: "function",
            stateMutability: "nonpayable",
            inputs: [{ type: "address", name: "owner" }],
            outputs: []
          }
        ],
        functionName: "initialize",
        args: [ownerAddress]
      }),
      [], // validators
      [], // executors
      { module: config.emptyHookAddress, data: "0x" }, // hook
      [], // fallbacks
      [] // prevalidationHooks
    ]
  });
  
  // Encode bootstrap data
  const initDataWithBootstrap = encodeAbiParameters(
    [
      { name: "bootstrap", type: "address" },
      { name: "initData", type: "bytes" },
    ],
    [config.nexusBootstrapAddress, initData]
  );
  
  // Create initializeAccount calldata
  const initializeNexusCalldata = encodeFunctionData({
    abi: [
      {
        name: "initializeAccount",
        type: "function",
        stateMutability: "nonpayable",
        inputs: [{ type: "bytes", name: "data" }],
        outputs: []
      }
    ],
    functionName: "initializeAccount",
    args: [initDataWithBootstrap],
  });
  
  const initializeNexusTransaction = {
    to: V2AccountAddress,
    data: initializeNexusCalldata,
  };
  
  // Send both transactions in a batch
  console.log("Sending migration transaction...");
  const migrateToNexusResponse = await V2Account.sendTransaction(
    [updateImplementationTransaction, initializeNexusTransaction],
    {
      paymasterServiceData: { mode: PaymasterMode.SPONSORED },
    }
  );
  
  const { transactionHash } = await migrateToNexusResponse.waitForTxHash();
  console.log("Migration transaction hash:", transactionHash);
  console.log("Migration completed successfully");
  
  return V2AccountAddress; // Return the address for the next step
}
```

## Step 4: Test Your Migrated Account

After migration, verify that your account works correctly by creating a test transaction:

```typescript
import { createBicoBundlerClient, toNexusAccount } from "@biconomy/abstractjs";
import { parseEther } from "viem";

async function testMigratedAccount(accountAddress) {
  // Connect to the migrated account using Nexus SDK
  const eoaAccount = privateKeyToAccount("0x" + config.eoaPrivateKey);
  
  const nexusAccount = createBicoBundlerClient({
    account: await toNexusAccount({
      signer: eoaAccount,
      chain: config.chain,
      transport: http(),
      // IMPORTANT: Use the same address as your V2 account
      accountAddress: accountAddress,
    }),
    transport: http(config.nexusBundlerUrl),
  });
  
  console.log("Testing migrated account...");
  
  // Send a test transaction
  const testHash = await nexusAccount.sendUserOperation({
    calls: [{
      to: config.eoaAddress,
      value: parseEther("0.000001"),
    }],
  });
  
  console.log("Test transaction hash:", testHash);
  
  // Wait for receipt (optional)
  const receipt = await nexusAccount.waitForUserOperationReceipt({ hash: testHash });
  console.log("Test transaction successful:", receipt.success);
}
```

## Step 5: Update Your Application

Update your application to use the Nexus SDK for all future interactions:

```typescript
// IMPORTANT: Always use the same address as your V2 account
const migratedAccountAddress = "YOUR_V2_ACCOUNT_ADDRESS";

// Use this pattern for all future SDK interactions
const nexusAccount = await toNexusAccount({
  signer: eoaAccount,
  chain: base,
  transport: http(),
  accountAddress: migratedAccountAddress
});

const bundlerClient = createBicoBundlerClient({
  account: nexusAccount,
  transport: http(bundlerUrl)
});
```

## Complete Migration Script

Here's a complete migration script that puts everything together:

```typescript
import { createWalletClient, http, encodeFunctionData, encodeAbiParameters, parseEther } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { base } from "viem/chains";
import { 
  createSmartAccountClient as createV2Client,
  BiconomySmartAccountV2,
  PaymasterMode
} from "@biconomy/account";
import { createBicoBundlerClient, toNexusAccount } from "@biconomy/abstractjs";

// Define configuration variables
const config = {
  // Chain and network information
  chain: base,
  
  // EOA credentials
  eoaPrivateKey: "YOUR_PRIVATE_KEY", // Replace with your private key
  eoaAddress: "YOUR_EOA_ADDRESS", // Replace with your EOA address
  
  // Biconomy infrastructure URLs
  v2BundlerUrl: "YOUR_V2_BUNDLER_URL", // Replace with your V2 bundler URL
  nexusBundlerUrl: "YOUR_NEXUS_BUNDLER_URL", // Replace with your Nexus bundler URL
  
  // API keys
  paymasterApiKey: "YOUR_PAYMASTER_API_KEY", // Replace with your Paymaster API key
  
  // Nexus contract addresses
  nexusImplementationAddress: "0x000000008761E87F023f65c49DC9cb1C7EdFEaaf",
  nexusBootstrapAddress: "0x000000F5b753Fdd20C5CA2D7c1210b3Ab1EA5903",
  emptyHookAddress: "0x0000000000000000000000000000000000000001"
};

async function main() {
  try {
    // Step 1: Get V2 Account
    console.log("\nStep 1: Getting V2 account address...");
    
    const eoaAccount = privateKeyToAccount("0x" + config.eoaPrivateKey);
    const client = createWalletClient({
      account: eoaAccount,
      chain: config.chain,
      transport: http(),
    });
    
    const V2Account = await createV2Client({
      signer: client,
      biconomyPaymasterApiKey: config.paymasterApiKey,
      bundlerUrl: config.v2BundlerUrl,
    });
    
    const V2AccountAddress = await V2Account.getAccountAddress();
    console.log("V2 account address:", V2AccountAddress);
    
    // Step 2: Deploy V2 Account if needed
    const isDeployed = await V2Account.isAccountDeployed();
    
    if (!isDeployed) {
      console.log("Account not deployed, deploying now...");
      
      const deploymentResponse = await V2Account.sendTransaction([
        {
          to: V2AccountAddress,
          value: 0n,
          data: "0x",
        },
      ]);
      
      const { transactionHash } = await deploymentResponse.waitForTxHash();
      console.log("V2 account deployment transaction hash:", transactionHash);
    } else {
      console.log("Account already deployed, proceeding with migration");
    }
    
    // Step 3: Migrate to Nexus
    console.log("\nStep 3: Migrating to Nexus");
    
    // Update implementation to Nexus
    const updateImplementationCalldata = encodeFunctionData({
      abi: [
        {
          name: "updateImplementation",
          type: "function",
          stateMutability: "nonpayable",
          inputs: [{ type: "address", name: "newImplementation" }],
          outputs: []
        }
      ],
      functionName: "updateImplementation",
      args: [config.nexusImplementationAddress],
    });
    
    const updateImplementationTransaction = {
      to: V2AccountAddress,
      data: updateImplementationCalldata,
    };
    
    // Initialize Nexus Account
    const ownerAddress = config.eoaAddress;
    
    // Prepare initialization data for the validator
    const initData = encodeFunctionData({
      abi: [
        { 
          name: "initNexusWithDefaultValidator", type: "function",
           stateMutability: "nonpayable", 
           inputs: [
            { type: "bytes", name: "data" }
          ], 
          outputs: [] 
        }
      ],
      functionName: "initNexusWithDefaultValidator",
      args: [ownerAddress as `0x${string}`]
    });
    
    // Encode bootstrap data
    const initDataWithBootstrap = encodeAbiParameters(
      [
        { name: "bootstrap", type: "address" },
        { name: "initData", type: "bytes" },
      ],
      [config.nexusBootstrapAddress, initData]
    );
    
    // Create initializeAccount calldata
    const initializeNexusCalldata = encodeFunctionData({
      abi: [
        {
          name: "initializeAccount",
          type: "function",
          stateMutability: "nonpayable",
          inputs: [{ type: "bytes", name: "data" }],
          outputs: []
        }
      ],
      functionName: "initializeAccount",
      args: [initDataWithBootstrap],
    });
    
    const initializeNexusTransaction = {
      to: V2AccountAddress,
      data: initializeNexusCalldata,
    };
    
    // Send both transactions in a batch
    console.log("Sending migration transaction...");
    const migrateToNexusResponse = await V2Account.sendTransaction(
      [updateImplementationTransaction, initializeNexusTransaction],
      {
        paymasterServiceData: { mode: PaymasterMode.SPONSORED },
      }
    );
    
    const { transactionHash } = await migrateToNexusResponse.waitForTxHash();
    console.log("Migration transaction hash:", transactionHash);
    
    // Step 4: Test Nexus Account
    console.log("\nStep 4: Testing migrated Nexus account");
    
    // Connect to the migrated account using Nexus SDK
    const nexusAccount = createBicoBundlerClient({
      account: await toNexusAccount({
        signer: eoaAccount,
        chain: config.chain,
        transport: http(),
        // IMPORTANT: Use the same address as the V2 account
        accountAddress: V2AccountAddress,
      }),
      transport: http(config.nexusBundlerUrl),
    });
    
    // Send a test transaction
    const testHash = await nexusAccount.sendUserOperation({
      calls: [{
        to: config.eoaAddress,
        value: parseEther("0.000001"),
      }],
    });
    
    console.log("Test transaction hash:", testHash);
    
    console.log("\nMigration completed successfully");
    console.log("\nIMPORTANT: Store your account address for future use:", V2AccountAddress);
    
  } catch (error) {
    console.error("Migration failed:", error);
  }
}

main().catch(console.error);
```

## Required Configuration

For the migration script to work, you'll need to set up the following configuration variables:

```javascript
const config = {
  // Chain and network information
  chain: base, // or your preferred chain
  
  // EOA credentials
  eoaPrivateKey: "YOUR_PRIVATE_KEY", // Replace with your private key
  eoaAddress: "YOUR_EOA_ADDRESS", // Replace with your EOA address
  
  // Biconomy infrastructure URLs
  v2BundlerUrl: "YOUR_V2_BUNDLER_URL", // Replace with your V2 bundler URL
  nexusBundlerUrl: "YOUR_NEXUS_BUNDLER_URL", // Replace with your Nexus bundler URL
  
  // API keys
  paymasterApiKey: "YOUR_PAYMASTER_API_KEY", // Replace with your Paymaster API key
  
  // Nexus contract addresses - These are standard addresses that shouldn't need to change
  nexusImplementationAddress: "0x000000004F43C49e93C970E84001853a70923B03",
  nexusBootstrapAddress: "0x00000000D3254452a909E4eeD47455Af7E27C289",
  emptyHookAddress: "0x0000000000000000000000000000000000000000"
};
```

## Troubleshooting

If you encounter issues during migration:

### Migration Transaction Fails

- Ensure your EOA has sufficient funds for gas
- Verify the V2 account is properly deployed
- Check that all environment variables are set correctly

### Cannot Access Account After Migration

- Make sure you're using the exact same address as your V2 account in the `accountAddress` parameter
- Verify the migration transaction completed successfully

## Next Steps

After successfully migrating your V2 account to Nexus:

1. **STORE YOUR ACCOUNT ADDRESS** in your application's persistent storage
2. **Update your application code** to use the `accountAddress` parameter in all future interactions
3. **Test thoroughly** with real transactions to ensure everything works as expected

By following this migration guide and properly storing your account address, you've successfully upgraded your V2 account to a Nexus account while preserving its address, balance, and history.
