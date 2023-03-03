import { createActionTypes, HttpActionTypes } from './helpers'

export const BASE_HTTP_ACTION_TYPES = createActionTypes('HTTTP')

export type RequestMethod = 'POST' | 'GET' | 'DELETE' | 'PUT'

export interface HeaderIndex {
  [name: string]: string
}

export interface QueryParamIndex {
  [name: string]: string
}

export interface ServiceConfig {
  API_URL: string
  headers?: HeaderIndex
  query?: QueryParamIndex
  retryStrategyOptions?: RetryStrategyOptions
}

export interface Params {
  [key: string]: any
}

export interface ServerActionMetadata {
  actionTypes: HttpActionTypes
  url: string
  flow: string
  method: RequestMethod
  query: QueryParamIndex
  params: Params
  body?: any
  error?: any
  data?: any
}

export interface ServerAction {
  type: string
  metadata: ServerActionMetadata
}

export interface ServerSuccessAction<T = any> extends ServerAction {
  data?: T
}

export interface ApiMidlewareError {
  status: number
  message: string
}

export interface RetryStrategyOptions {
  maxRetryAttempts?: number
  scalingDuration?: number
  excludedStatusCodes?: number[]
}

export interface ServerErrorAction<T = ApiMidlewareError> extends ServerAction {
  error?: T
}
