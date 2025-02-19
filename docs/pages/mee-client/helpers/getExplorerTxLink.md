# getExplorerTxLink

The SDK provides several utility functions to help you generate links to various block explorers for tracking your transactions and user operations.

## getExplorerTxLink

Gets the block explorer transaction link for a given chain. Supports chain objects, chain IDs, or chain names.

```typescript
import { getExplorerTxLink } from "@biconomy/abstractjs"
import { optimism } from "viem/chains"

// Using chain object
const url1 = getExplorerTxLink(
  "0x123...",
  optimism
)

// Using chain ID
const url2 = getExplorerTxLink(
  "0x123...",
  10 // Optimism chain ID
)
```
