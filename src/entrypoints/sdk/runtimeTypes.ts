/**
 * Stub: SDK runtime types (non-serializable types like callbacks, interfaces).
 * Missing from the leaked source — generated stubs for the types referenced
 * in agentSdkTypes.ts.
 */

export type AnyZodRawShape = Record<string, unknown>
export type InferShape<T> = T extends Record<string, unknown> ? { [K in keyof T]: unknown } : never

export type Options = Record<string, unknown>
export type InternalOptions = Options & { _internal?: boolean }

export interface Query {
  [Symbol.asyncIterator](): AsyncIterator<unknown>
}
export type InternalQuery = Query

export type SDKSession = {
  sendMessage(message: string): Promise<unknown>
  close(): Promise<void>
}
export type SDKSessionOptions = Record<string, unknown>

export type SessionMessage = {
  role: string
  content: unknown
  uuid?: string
  parentUuid?: string
}

export type SdkMcpToolDefinition<_Schema = unknown> = {
  name: string
  description: string
}

export type McpSdkServerConfigWithInstance = {
  name: string
  version?: string
}

export type ForkSessionOptions = {
  dir?: string
  upToMessageId?: string
  title?: string
}
export type ForkSessionResult = {
  sessionId: string
}

export type GetSessionInfoOptions = {
  dir?: string
}
export type GetSessionMessagesOptions = {
  dir?: string
  limit?: number
  offset?: number
  includeSystemMessages?: boolean
}
export type ListSessionsOptions = {
  dir?: string
  limit?: number
  offset?: number
}
export type SessionMutationOptions = {
  dir?: string
}
