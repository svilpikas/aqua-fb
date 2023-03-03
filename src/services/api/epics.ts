import queryString from 'query-string'
import { combineEpics, Epic, ofType } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, map, mergeMap, retryWhen, switchMap } from 'rxjs/operators'
import {
  serverErrorActionCreator,
  serverFinallyActionCreator,
  serverSuccessActionCreator,
} from './api'
import { ApiError, genericRetryStrategy } from './helpers'
import {
  BASE_HTTP_ACTION_TYPES,
  ServerAction,
  ServiceConfig,
} from './interfaces'

export const buildApiService = ({
  API_URL,
  headers,
  query,
  retryStrategyOptions,
}: ServiceConfig) => {
  const httpRequestEpic: Epic<any, any> = action$ =>
    action$.pipe(
      ofType(BASE_HTTP_ACTION_TYPES.REQUEST),
      mergeMap(({ metadata }: ServerAction) => {
        const queryParams = queryString.stringify({
          ...metadata.query,
          ...query,
        })

        const combinedHeaders = { ...headers }

        return from(
          fetch(
            `${API_URL}${metadata.url}${queryParams ? `?${queryParams}` : ''}`,
            {
              method: metadata.method,
              headers: {
                'Content-Type': 'application/json',
                ...combinedHeaders,
              },
              body: metadata.body ? JSON.stringify(metadata.body) : undefined,
            }
          )
        ).pipe(
          switchMap(response => {
            if (response.ok && response.status < 400) {
              return from(response.json()).pipe(
                map(data => {
                  if (response.status === 204) {
                    return serverSuccessActionCreator({
                      ...metadata,
                      data: null,
                    })
                  }
                  return serverSuccessActionCreator({
                    ...metadata,
                    data,
                  })
                })
              )
            }

            if (response.status === 404) {
              throw ApiError(response.status, response.statusText, metadata)
            }

            if (response.status < 500) {
              return from(response.json()).pipe(
                map(data => {
                  throw ApiError(
                    response.status,
                    data.message || response.statusText,
                    metadata
                  )
                })
              )
            }

            throw ApiError(response.status, response.statusText, metadata)
          }),
          retryWhen(genericRetryStrategy(retryStrategyOptions)),
          catchError(error => {
            return of(
              serverErrorActionCreator({
                ...metadata,
                error: {
                  status: error.status,
                  message: error.title || error.message,
                },
              })
            )
          })
        )
      })
    )

  const httpSuccessEpic: Epic<any, any> = action$ =>
    action$.pipe(
      ofType(BASE_HTTP_ACTION_TYPES.SUCCESS),
      mergeMap((action: ServerAction) => {
        const { data, actionTypes, ...restMetadata } = action.metadata
        return [
          {
            type: actionTypes.SUCCESS,
            data: data,
            metadata: {
              ...restMetadata,
              actionTypes,
            },
          },
          serverFinallyActionCreator({
            ...action.metadata,
          }),
        ]
      })
    )

  const httpErrorEpic: Epic<any, any> = action$ =>
    action$.pipe(
      ofType(BASE_HTTP_ACTION_TYPES.ERROR),
      mergeMap((action: ServerAction) => {
        let nextActions = [
          {
            type: action.metadata.actionTypes.ERROR,
            error: action.metadata.error,
            metadata: action.metadata,
          },
          serverFinallyActionCreator({
            ...action.metadata,
          }),
        ]
        if (action.metadata?.params?.hideServerError) {
          nextActions = [nextActions[0], nextActions[1]]
        }
        return nextActions
      })
    )

  return combineEpics(httpRequestEpic, httpSuccessEpic, httpErrorEpic)
}
