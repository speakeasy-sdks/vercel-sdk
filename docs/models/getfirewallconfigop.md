# GetFirewallConfigOp

[Operator](https://vercel.com/docs/security/vercel-waf/rule-configuration#operators) used to compare the parameter with a value

## Example Usage

```typescript
import { GetFirewallConfigOp } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigOp = "pre";
```

## Values

```typescript
"re" | "eq" | "ex" | "inc" | "pre" | "suf" | "sub" | "gt" | "gte" | "lt" | "lte" | "nex" | "ninc" | "neq"
```