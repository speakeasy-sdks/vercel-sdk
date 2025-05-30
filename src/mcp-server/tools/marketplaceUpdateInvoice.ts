/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { marketplaceUpdateInvoice } from "../../funcs/marketplaceUpdateInvoice.js";
import { UpdateInvoiceRequest$inboundSchema } from "../../models/updateinvoiceop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: UpdateInvoiceRequest$inboundSchema,
};

export const tool$marketplaceUpdateInvoice: ToolDefinition<typeof args> = {
  name: "marketplace-update-invoice",
  description: `Invoice Actions

This endpoint allows the partner to request a refund for an invoice to Vercel. The invoice is created using the [Submit Invoice API](#submit-invoice-api).`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await marketplaceUpdateInvoice(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    return formatResult(void 0, apiCall);
  },
};
