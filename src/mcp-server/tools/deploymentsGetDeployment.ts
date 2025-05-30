/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { deploymentsGetDeployment } from "../../funcs/deploymentsGetDeployment.js";
import { GetDeploymentRequest$inboundSchema } from "../../models/getdeploymentop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: GetDeploymentRequest$inboundSchema,
};

export const tool$deploymentsGetDeployment: ToolDefinition<typeof args> = {
  name: "deployments-get-deployment",
  description: `Get a deployment by ID or URL

Retrieves information for a deployment either by supplying its ID (\`id\` property) or Hostname (\`url\` property). Additional details will be included when the authenticated user or team is an owner of the deployment.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await deploymentsGetDeployment(
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

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
