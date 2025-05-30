/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

/**
 * Type of matcher. One of \"equals\", \"startsWith\", or \"endsWith\".
 */
export const CreateCustomEnvironmentType = {
  Equals: "equals",
  StartsWith: "startsWith",
  EndsWith: "endsWith",
} as const;
/**
 * Type of matcher. One of \"equals\", \"startsWith\", or \"endsWith\".
 */
export type CreateCustomEnvironmentType = ClosedEnum<
  typeof CreateCustomEnvironmentType
>;

/**
 * How we want to determine a matching branch. This is optional.
 */
export type BranchMatcher = {
  /**
   * Type of matcher. One of \"equals\", \"startsWith\", or \"endsWith\".
   */
  type: CreateCustomEnvironmentType;
  /**
   * Git branch name or portion thereof.
   */
  pattern: string;
};

export type CreateCustomEnvironmentRequestBody = {
  /**
   * The slug of the custom environment to create.
   */
  slug?: string | undefined;
  /**
   * Description of the custom environment. This is optional.
   */
  description?: string | undefined;
  /**
   * How we want to determine a matching branch. This is optional.
   */
  branchMatcher?: BranchMatcher | undefined;
  /**
   * Where to copy environment variables from. This is optional.
   */
  copyEnvVarsFrom?: string | undefined;
};

export type CreateCustomEnvironmentRequest = {
  /**
   * The unique project identifier or the project name
   */
  idOrName: string;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
  requestBody?: CreateCustomEnvironmentRequestBody | undefined;
};

/**
 * The type of environment (production, preview, or development)
 */
export const CreateCustomEnvironmentEnvironmentType = {
  Production: "production",
  Preview: "preview",
  Development: "development",
} as const;
/**
 * The type of environment (production, preview, or development)
 */
export type CreateCustomEnvironmentEnvironmentType = ClosedEnum<
  typeof CreateCustomEnvironmentEnvironmentType
>;

/**
 * The type of matching to perform
 */
export const CreateCustomEnvironmentEnvironmentResponseType = {
  EndsWith: "endsWith",
  StartsWith: "startsWith",
  Equals: "equals",
} as const;
/**
 * The type of matching to perform
 */
export type CreateCustomEnvironmentEnvironmentResponseType = ClosedEnum<
  typeof CreateCustomEnvironmentEnvironmentResponseType
>;

/**
 * Configuration for matching git branches to this environment
 */
export type CreateCustomEnvironmentBranchMatcher = {
  /**
   * The type of matching to perform
   */
  type: CreateCustomEnvironmentEnvironmentResponseType;
  /**
   * The pattern to match against branch names
   */
  pattern: string;
};

/**
 * A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.
 */
export type CreateCustomEnvironmentVerification = {
  type: string;
  domain: string;
  value: string;
  reason: string;
};

/**
 * List of domains associated with this environment
 */
export type CreateCustomEnvironmentDomains = {
  name: string;
  apexName: string;
  projectId: string;
  redirect?: string | null | undefined;
  redirectStatusCode?: number | null | undefined;
  gitBranch?: string | null | undefined;
  customEnvironmentId?: string | null | undefined;
  updatedAt?: number | undefined;
  createdAt?: number | undefined;
  /**
   * `true` if the domain is verified for use with the project. If `false` it will not be used as an alias on this project until the challenge in `verification` is completed.
   */
  verified: boolean;
  /**
   * A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.
   */
  verification?: Array<CreateCustomEnvironmentVerification> | undefined;
};

/**
 * Internal representation of a custom environment with all required properties
 */
export type CreateCustomEnvironmentResponseBody = {
  /**
   * Unique identifier for the custom environment (format: env_*)
   */
  id: string;
  /**
   * URL-friendly name of the environment
   */
  slug: string;
  /**
   * The type of environment (production, preview, or development)
   */
  type: CreateCustomEnvironmentEnvironmentType;
  /**
   * Optional description of the environment's purpose
   */
  description?: string | undefined;
  /**
   * Configuration for matching git branches to this environment
   */
  branchMatcher?: CreateCustomEnvironmentBranchMatcher | undefined;
  /**
   * List of domains associated with this environment
   */
  domains?: Array<CreateCustomEnvironmentDomains> | undefined;
  /**
   * List of aliases for the current deployment
   */
  currentDeploymentAliases?: Array<string> | undefined;
  /**
   * Timestamp when the environment was created
   */
  createdAt: number;
  /**
   * Timestamp when the environment was last updated
   */
  updatedAt: number;
};

/** @internal */
export const CreateCustomEnvironmentType$inboundSchema: z.ZodNativeEnum<
  typeof CreateCustomEnvironmentType
> = z.nativeEnum(CreateCustomEnvironmentType);

/** @internal */
export const CreateCustomEnvironmentType$outboundSchema: z.ZodNativeEnum<
  typeof CreateCustomEnvironmentType
> = CreateCustomEnvironmentType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCustomEnvironmentType$ {
  /** @deprecated use `CreateCustomEnvironmentType$inboundSchema` instead. */
  export const inboundSchema = CreateCustomEnvironmentType$inboundSchema;
  /** @deprecated use `CreateCustomEnvironmentType$outboundSchema` instead. */
  export const outboundSchema = CreateCustomEnvironmentType$outboundSchema;
}

/** @internal */
export const BranchMatcher$inboundSchema: z.ZodType<
  BranchMatcher,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: CreateCustomEnvironmentType$inboundSchema,
  pattern: z.string(),
});

/** @internal */
export type BranchMatcher$Outbound = {
  type: string;
  pattern: string;
};

/** @internal */
export const BranchMatcher$outboundSchema: z.ZodType<
  BranchMatcher$Outbound,
  z.ZodTypeDef,
  BranchMatcher
> = z.object({
  type: CreateCustomEnvironmentType$outboundSchema,
  pattern: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BranchMatcher$ {
  /** @deprecated use `BranchMatcher$inboundSchema` instead. */
  export const inboundSchema = BranchMatcher$inboundSchema;
  /** @deprecated use `BranchMatcher$outboundSchema` instead. */
  export const outboundSchema = BranchMatcher$outboundSchema;
  /** @deprecated use `BranchMatcher$Outbound` instead. */
  export type Outbound = BranchMatcher$Outbound;
}

export function branchMatcherToJSON(branchMatcher: BranchMatcher): string {
  return JSON.stringify(BranchMatcher$outboundSchema.parse(branchMatcher));
}

export function branchMatcherFromJSON(
  jsonString: string,
): SafeParseResult<BranchMatcher, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BranchMatcher$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BranchMatcher' from JSON`,
  );
}

/** @internal */
export const CreateCustomEnvironmentRequestBody$inboundSchema: z.ZodType<
  CreateCustomEnvironmentRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  slug: z.string().optional(),
  description: z.string().optional(),
  branchMatcher: z.lazy(() => BranchMatcher$inboundSchema).optional(),
  copyEnvVarsFrom: z.string().optional(),
});

/** @internal */
export type CreateCustomEnvironmentRequestBody$Outbound = {
  slug?: string | undefined;
  description?: string | undefined;
  branchMatcher?: BranchMatcher$Outbound | undefined;
  copyEnvVarsFrom?: string | undefined;
};

/** @internal */
export const CreateCustomEnvironmentRequestBody$outboundSchema: z.ZodType<
  CreateCustomEnvironmentRequestBody$Outbound,
  z.ZodTypeDef,
  CreateCustomEnvironmentRequestBody
> = z.object({
  slug: z.string().optional(),
  description: z.string().optional(),
  branchMatcher: z.lazy(() => BranchMatcher$outboundSchema).optional(),
  copyEnvVarsFrom: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCustomEnvironmentRequestBody$ {
  /** @deprecated use `CreateCustomEnvironmentRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateCustomEnvironmentRequestBody$inboundSchema;
  /** @deprecated use `CreateCustomEnvironmentRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    CreateCustomEnvironmentRequestBody$outboundSchema;
  /** @deprecated use `CreateCustomEnvironmentRequestBody$Outbound` instead. */
  export type Outbound = CreateCustomEnvironmentRequestBody$Outbound;
}

export function createCustomEnvironmentRequestBodyToJSON(
  createCustomEnvironmentRequestBody: CreateCustomEnvironmentRequestBody,
): string {
  return JSON.stringify(
    CreateCustomEnvironmentRequestBody$outboundSchema.parse(
      createCustomEnvironmentRequestBody,
    ),
  );
}

export function createCustomEnvironmentRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateCustomEnvironmentRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateCustomEnvironmentRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCustomEnvironmentRequestBody' from JSON`,
  );
}

/** @internal */
export const CreateCustomEnvironmentRequest$inboundSchema: z.ZodType<
  CreateCustomEnvironmentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  idOrName: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
  RequestBody: z.lazy(() => CreateCustomEnvironmentRequestBody$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type CreateCustomEnvironmentRequest$Outbound = {
  idOrName: string;
  teamId?: string | undefined;
  slug?: string | undefined;
  RequestBody?: CreateCustomEnvironmentRequestBody$Outbound | undefined;
};

/** @internal */
export const CreateCustomEnvironmentRequest$outboundSchema: z.ZodType<
  CreateCustomEnvironmentRequest$Outbound,
  z.ZodTypeDef,
  CreateCustomEnvironmentRequest
> = z.object({
  idOrName: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
  requestBody: z.lazy(() => CreateCustomEnvironmentRequestBody$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCustomEnvironmentRequest$ {
  /** @deprecated use `CreateCustomEnvironmentRequest$inboundSchema` instead. */
  export const inboundSchema = CreateCustomEnvironmentRequest$inboundSchema;
  /** @deprecated use `CreateCustomEnvironmentRequest$outboundSchema` instead. */
  export const outboundSchema = CreateCustomEnvironmentRequest$outboundSchema;
  /** @deprecated use `CreateCustomEnvironmentRequest$Outbound` instead. */
  export type Outbound = CreateCustomEnvironmentRequest$Outbound;
}

export function createCustomEnvironmentRequestToJSON(
  createCustomEnvironmentRequest: CreateCustomEnvironmentRequest,
): string {
  return JSON.stringify(
    CreateCustomEnvironmentRequest$outboundSchema.parse(
      createCustomEnvironmentRequest,
    ),
  );
}

export function createCustomEnvironmentRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateCustomEnvironmentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateCustomEnvironmentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCustomEnvironmentRequest' from JSON`,
  );
}

/** @internal */
export const CreateCustomEnvironmentEnvironmentType$inboundSchema:
  z.ZodNativeEnum<typeof CreateCustomEnvironmentEnvironmentType> = z.nativeEnum(
    CreateCustomEnvironmentEnvironmentType,
  );

/** @internal */
export const CreateCustomEnvironmentEnvironmentType$outboundSchema:
  z.ZodNativeEnum<typeof CreateCustomEnvironmentEnvironmentType> =
    CreateCustomEnvironmentEnvironmentType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCustomEnvironmentEnvironmentType$ {
  /** @deprecated use `CreateCustomEnvironmentEnvironmentType$inboundSchema` instead. */
  export const inboundSchema =
    CreateCustomEnvironmentEnvironmentType$inboundSchema;
  /** @deprecated use `CreateCustomEnvironmentEnvironmentType$outboundSchema` instead. */
  export const outboundSchema =
    CreateCustomEnvironmentEnvironmentType$outboundSchema;
}

/** @internal */
export const CreateCustomEnvironmentEnvironmentResponseType$inboundSchema:
  z.ZodNativeEnum<typeof CreateCustomEnvironmentEnvironmentResponseType> = z
    .nativeEnum(CreateCustomEnvironmentEnvironmentResponseType);

/** @internal */
export const CreateCustomEnvironmentEnvironmentResponseType$outboundSchema:
  z.ZodNativeEnum<typeof CreateCustomEnvironmentEnvironmentResponseType> =
    CreateCustomEnvironmentEnvironmentResponseType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCustomEnvironmentEnvironmentResponseType$ {
  /** @deprecated use `CreateCustomEnvironmentEnvironmentResponseType$inboundSchema` instead. */
  export const inboundSchema =
    CreateCustomEnvironmentEnvironmentResponseType$inboundSchema;
  /** @deprecated use `CreateCustomEnvironmentEnvironmentResponseType$outboundSchema` instead. */
  export const outboundSchema =
    CreateCustomEnvironmentEnvironmentResponseType$outboundSchema;
}

/** @internal */
export const CreateCustomEnvironmentBranchMatcher$inboundSchema: z.ZodType<
  CreateCustomEnvironmentBranchMatcher,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: CreateCustomEnvironmentEnvironmentResponseType$inboundSchema,
  pattern: z.string(),
});

/** @internal */
export type CreateCustomEnvironmentBranchMatcher$Outbound = {
  type: string;
  pattern: string;
};

/** @internal */
export const CreateCustomEnvironmentBranchMatcher$outboundSchema: z.ZodType<
  CreateCustomEnvironmentBranchMatcher$Outbound,
  z.ZodTypeDef,
  CreateCustomEnvironmentBranchMatcher
> = z.object({
  type: CreateCustomEnvironmentEnvironmentResponseType$outboundSchema,
  pattern: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCustomEnvironmentBranchMatcher$ {
  /** @deprecated use `CreateCustomEnvironmentBranchMatcher$inboundSchema` instead. */
  export const inboundSchema =
    CreateCustomEnvironmentBranchMatcher$inboundSchema;
  /** @deprecated use `CreateCustomEnvironmentBranchMatcher$outboundSchema` instead. */
  export const outboundSchema =
    CreateCustomEnvironmentBranchMatcher$outboundSchema;
  /** @deprecated use `CreateCustomEnvironmentBranchMatcher$Outbound` instead. */
  export type Outbound = CreateCustomEnvironmentBranchMatcher$Outbound;
}

export function createCustomEnvironmentBranchMatcherToJSON(
  createCustomEnvironmentBranchMatcher: CreateCustomEnvironmentBranchMatcher,
): string {
  return JSON.stringify(
    CreateCustomEnvironmentBranchMatcher$outboundSchema.parse(
      createCustomEnvironmentBranchMatcher,
    ),
  );
}

export function createCustomEnvironmentBranchMatcherFromJSON(
  jsonString: string,
): SafeParseResult<CreateCustomEnvironmentBranchMatcher, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateCustomEnvironmentBranchMatcher$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCustomEnvironmentBranchMatcher' from JSON`,
  );
}

/** @internal */
export const CreateCustomEnvironmentVerification$inboundSchema: z.ZodType<
  CreateCustomEnvironmentVerification,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.string(),
  domain: z.string(),
  value: z.string(),
  reason: z.string(),
});

/** @internal */
export type CreateCustomEnvironmentVerification$Outbound = {
  type: string;
  domain: string;
  value: string;
  reason: string;
};

/** @internal */
export const CreateCustomEnvironmentVerification$outboundSchema: z.ZodType<
  CreateCustomEnvironmentVerification$Outbound,
  z.ZodTypeDef,
  CreateCustomEnvironmentVerification
> = z.object({
  type: z.string(),
  domain: z.string(),
  value: z.string(),
  reason: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCustomEnvironmentVerification$ {
  /** @deprecated use `CreateCustomEnvironmentVerification$inboundSchema` instead. */
  export const inboundSchema =
    CreateCustomEnvironmentVerification$inboundSchema;
  /** @deprecated use `CreateCustomEnvironmentVerification$outboundSchema` instead. */
  export const outboundSchema =
    CreateCustomEnvironmentVerification$outboundSchema;
  /** @deprecated use `CreateCustomEnvironmentVerification$Outbound` instead. */
  export type Outbound = CreateCustomEnvironmentVerification$Outbound;
}

export function createCustomEnvironmentVerificationToJSON(
  createCustomEnvironmentVerification: CreateCustomEnvironmentVerification,
): string {
  return JSON.stringify(
    CreateCustomEnvironmentVerification$outboundSchema.parse(
      createCustomEnvironmentVerification,
    ),
  );
}

export function createCustomEnvironmentVerificationFromJSON(
  jsonString: string,
): SafeParseResult<CreateCustomEnvironmentVerification, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateCustomEnvironmentVerification$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCustomEnvironmentVerification' from JSON`,
  );
}

/** @internal */
export const CreateCustomEnvironmentDomains$inboundSchema: z.ZodType<
  CreateCustomEnvironmentDomains,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  apexName: z.string(),
  projectId: z.string(),
  redirect: z.nullable(z.string()).optional(),
  redirectStatusCode: z.nullable(z.number()).optional(),
  gitBranch: z.nullable(z.string()).optional(),
  customEnvironmentId: z.nullable(z.string()).optional(),
  updatedAt: z.number().optional(),
  createdAt: z.number().optional(),
  verified: z.boolean(),
  verification: z.array(
    z.lazy(() => CreateCustomEnvironmentVerification$inboundSchema),
  ).optional(),
});

/** @internal */
export type CreateCustomEnvironmentDomains$Outbound = {
  name: string;
  apexName: string;
  projectId: string;
  redirect?: string | null | undefined;
  redirectStatusCode?: number | null | undefined;
  gitBranch?: string | null | undefined;
  customEnvironmentId?: string | null | undefined;
  updatedAt?: number | undefined;
  createdAt?: number | undefined;
  verified: boolean;
  verification?:
    | Array<CreateCustomEnvironmentVerification$Outbound>
    | undefined;
};

/** @internal */
export const CreateCustomEnvironmentDomains$outboundSchema: z.ZodType<
  CreateCustomEnvironmentDomains$Outbound,
  z.ZodTypeDef,
  CreateCustomEnvironmentDomains
> = z.object({
  name: z.string(),
  apexName: z.string(),
  projectId: z.string(),
  redirect: z.nullable(z.string()).optional(),
  redirectStatusCode: z.nullable(z.number()).optional(),
  gitBranch: z.nullable(z.string()).optional(),
  customEnvironmentId: z.nullable(z.string()).optional(),
  updatedAt: z.number().optional(),
  createdAt: z.number().optional(),
  verified: z.boolean(),
  verification: z.array(
    z.lazy(() => CreateCustomEnvironmentVerification$outboundSchema),
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCustomEnvironmentDomains$ {
  /** @deprecated use `CreateCustomEnvironmentDomains$inboundSchema` instead. */
  export const inboundSchema = CreateCustomEnvironmentDomains$inboundSchema;
  /** @deprecated use `CreateCustomEnvironmentDomains$outboundSchema` instead. */
  export const outboundSchema = CreateCustomEnvironmentDomains$outboundSchema;
  /** @deprecated use `CreateCustomEnvironmentDomains$Outbound` instead. */
  export type Outbound = CreateCustomEnvironmentDomains$Outbound;
}

export function createCustomEnvironmentDomainsToJSON(
  createCustomEnvironmentDomains: CreateCustomEnvironmentDomains,
): string {
  return JSON.stringify(
    CreateCustomEnvironmentDomains$outboundSchema.parse(
      createCustomEnvironmentDomains,
    ),
  );
}

export function createCustomEnvironmentDomainsFromJSON(
  jsonString: string,
): SafeParseResult<CreateCustomEnvironmentDomains, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateCustomEnvironmentDomains$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCustomEnvironmentDomains' from JSON`,
  );
}

/** @internal */
export const CreateCustomEnvironmentResponseBody$inboundSchema: z.ZodType<
  CreateCustomEnvironmentResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  slug: z.string(),
  type: CreateCustomEnvironmentEnvironmentType$inboundSchema,
  description: z.string().optional(),
  branchMatcher: z.lazy(() =>
    CreateCustomEnvironmentBranchMatcher$inboundSchema
  ).optional(),
  domains: z.array(z.lazy(() => CreateCustomEnvironmentDomains$inboundSchema))
    .optional(),
  currentDeploymentAliases: z.array(z.string()).optional(),
  createdAt: z.number(),
  updatedAt: z.number(),
});

/** @internal */
export type CreateCustomEnvironmentResponseBody$Outbound = {
  id: string;
  slug: string;
  type: string;
  description?: string | undefined;
  branchMatcher?: CreateCustomEnvironmentBranchMatcher$Outbound | undefined;
  domains?: Array<CreateCustomEnvironmentDomains$Outbound> | undefined;
  currentDeploymentAliases?: Array<string> | undefined;
  createdAt: number;
  updatedAt: number;
};

/** @internal */
export const CreateCustomEnvironmentResponseBody$outboundSchema: z.ZodType<
  CreateCustomEnvironmentResponseBody$Outbound,
  z.ZodTypeDef,
  CreateCustomEnvironmentResponseBody
> = z.object({
  id: z.string(),
  slug: z.string(),
  type: CreateCustomEnvironmentEnvironmentType$outboundSchema,
  description: z.string().optional(),
  branchMatcher: z.lazy(() =>
    CreateCustomEnvironmentBranchMatcher$outboundSchema
  ).optional(),
  domains: z.array(z.lazy(() => CreateCustomEnvironmentDomains$outboundSchema))
    .optional(),
  currentDeploymentAliases: z.array(z.string()).optional(),
  createdAt: z.number(),
  updatedAt: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCustomEnvironmentResponseBody$ {
  /** @deprecated use `CreateCustomEnvironmentResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    CreateCustomEnvironmentResponseBody$inboundSchema;
  /** @deprecated use `CreateCustomEnvironmentResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    CreateCustomEnvironmentResponseBody$outboundSchema;
  /** @deprecated use `CreateCustomEnvironmentResponseBody$Outbound` instead. */
  export type Outbound = CreateCustomEnvironmentResponseBody$Outbound;
}

export function createCustomEnvironmentResponseBodyToJSON(
  createCustomEnvironmentResponseBody: CreateCustomEnvironmentResponseBody,
): string {
  return JSON.stringify(
    CreateCustomEnvironmentResponseBody$outboundSchema.parse(
      createCustomEnvironmentResponseBody,
    ),
  );
}

export function createCustomEnvironmentResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateCustomEnvironmentResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateCustomEnvironmentResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCustomEnvironmentResponseBody' from JSON`,
  );
}
