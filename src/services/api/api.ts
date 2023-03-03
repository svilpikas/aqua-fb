import { HttpActionTypes } from './helpers'
import {
  BASE_HTTP_ACTION_TYPES,
  Params,
  QueryParamIndex,
  RequestMethod,
  ServerAction,
  ServerActionMetadata,
  ServerErrorAction,
  ServerSuccessAction,
} from './interfaces'

interface ServerActionCreatorOptions {
  type: string
  actionTypes: HttpActionTypes
  url: string
  method: RequestMethod
  flow?: string
  query?: QueryParamIndex
  params?: Params
  body?: any
  error?: any
  data?: any
}

export const serverActionCreator = ({
  type,
  actionTypes,
  url,
  method,
  flow = 'default',
  query,
  params,
  body,
  error,
  data,
}: ServerActionCreatorOptions): ServerAction => {
  return {
    type,
    metadata: {
      flow,
      actionTypes,
      url,
      method,
      query: query ? query : {},
      params: params ? { ...params } : {},
      body,
      error,
      data,
    },
  }
}

export const serverSuccessActionCreator = ({
  actionTypes,
  url,
  method,
  query,
  params,
  data,
  flow,
}: ServerActionMetadata): ServerSuccessAction =>
  serverActionCreator({
    type: BASE_HTTP_ACTION_TYPES.SUCCESS,
    actionTypes,
    url,
    method,
    query,
    params,
    data,
    flow,
  })

export const serverErrorActionCreator = ({
  actionTypes,
  url,
  method,
  query,
  params,
  error,
  flow,
}: ServerActionMetadata): ServerErrorAction =>
  serverActionCreator({
    type: BASE_HTTP_ACTION_TYPES.ERROR,
    actionTypes,
    url,
    method,
    query,
    params,
    error,
    flow,
  })

export const serverFinallyActionCreator = ({
  actionTypes,
  url,
  method,
  query,
  params,
  flow,
}: ServerActionMetadata): ServerAction =>
  serverActionCreator({
    type: BASE_HTTP_ACTION_TYPES.FINALLY,
    actionTypes,
    url,
    method,
    query,
    params,
    flow,
  })

export const api = {
  get: (
    actionTypes: HttpActionTypes,
    url: string,
    query?: QueryParamIndex,
    params?: Params,
    flow?: string
  ) => {
    return serverActionCreator({
      type: BASE_HTTP_ACTION_TYPES.REQUEST,
      actionTypes,
      url,
      method: 'GET',
      query,
      params,
      flow,
    })
  },
  delete: (
    actionTypes: HttpActionTypes,
    url: string,
    query?: QueryParamIndex,
    params?: Params,
    flow?: string
  ) => {
    return serverActionCreator({
      type: BASE_HTTP_ACTION_TYPES.REQUEST,
      actionTypes,
      url,
      method: 'DELETE',
      query,
      params,
      flow,
    })
  },
  post: (
    actionTypes: HttpActionTypes,
    url: string,
    body?: any,
    query?: QueryParamIndex,
    params?: Params,
    flow?: string
  ) => {
    return serverActionCreator({
      type: BASE_HTTP_ACTION_TYPES.REQUEST,
      actionTypes,
      url,
      method: 'POST',
      query,
      params,
      body,
      flow,
    })
  },
  put: (
    actionTypes: HttpActionTypes,
    url: string,
    body?: any,
    query?: QueryParamIndex,
    params?: Params,
    flow?: string
  ) => {
    return serverActionCreator({
      type: BASE_HTTP_ACTION_TYPES.REQUEST,
      actionTypes,
      url,
      method: 'PUT',
      query,
      params,
      body,
      flow,
    })
  },
}
