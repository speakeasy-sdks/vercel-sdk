# GetProjectsInternalContentHint

Similar to `contentHints`, but should not be exposed to the user.

## Example Usage

```typescript
import { GetProjectsInternalContentHint } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsInternalContentHint = {
  type: "flags-secret",
  encryptedValue: "<value>",
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                             | [models.GetProjectsProjectsResponse200ApplicationJSONResponseBodyType](../models/getprojectsprojectsresponse200applicationjsonresponsebodytype.md) | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `encryptedValue`                                                                                                                                   | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda.                       |