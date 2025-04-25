# getExplorerTxLink

The SDK provides several utility functions to help you generate links to various block explorers for tracking your transactions and user operations.

## getMeeScanLink

Gets the MeeScan transaction link for viewing transactions and user operations on Biconomy's explorer.

```typescript
import { getMeeScanLink } from "@biconomy/abstractjs"

const url = getMeeScanLink("0x123...")
console.log(url) // https://meescan.biconomy.io/details/0x123...
```
