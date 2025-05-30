/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { projectsUpdateProjectDomain } from "../../funcs/projectsUpdateProjectDomain.js";
import { UpdateProjectDomainRequest$inboundSchema } from "../../models/updateprojectdomainop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: UpdateProjectDomainRequest$inboundSchema,
};

export const tool$projectsUpdateProjectDomain: ToolDefinition<typeof args> = {
  name: "projects-update-project-domain",
  description: `Update a project domain

Update a project domain's configuration, including the name, git branch and redirect of the domain.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await projectsUpdateProjectDomain(
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
