# PutFirewallConfigLfi

Local File Inclusion Attack - Prevent unauthorized access to local files through web applications.

## Example Usage

```typescript
import { PutFirewallConfigLfi } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigLfi = {
  active: false,
  action: "log",
};
```

## Fields

| Field                                                                                                                                                                                      | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `active`                                                                                                                                                                                   | *boolean*                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                         | N/A                                                                                                                                                                                        |
| `action`                                                                                                                                                                                   | [models.PutFirewallConfigSecurityResponse200ApplicationJSONResponseBodyActiveCrsLfiAction](../models/putfirewallconfigsecurityresponse200applicationjsonresponsebodyactivecrslfiaction.md) | :heavy_check_mark:                                                                                                                                                                         | N/A                                                                                                                                                                                        |