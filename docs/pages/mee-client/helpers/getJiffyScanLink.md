# getExplorerTxLink

The SDK provides several utility functions to help you generate links to various block explorers for tracking your transactions and user operations.

## getJiffyScanLink

Gets the JiffyScan transaction link for viewing user operations. JiffyScan provides detailed information about user operation execution and bundling.

```typescript
import { getJiffyScanLink } from "@biconomy/abstractjs"

const url = getJiffyScanLink("0x123...")
console.log(url) // https://v2.jiffyscan.xyz/tx/0x123...
```