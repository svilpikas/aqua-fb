import { Observable, throwError, timer } from 'rxjs'
import { finalize, mergeMap } from 'rxjs/operators'
import { RetryStrategyOptions } from './interfaces'

export interface HttpActionTypes {
  REQUEST: string
  SUCCESS: string
  ERROR: string
  FINALLY: string
}

export const createActionTypes = (actionType: string): HttpActionTypes => ({
  REQUEST: `${actionType}_REQUEST`,
  SUCCESS: `${actionType}_SUCCESS`,
  ERROR: `${actionType}_ERROR`,
  FINALLY: `${actionType}_FINALLY`,
})

export const ApiError = (status: number, message: string, metadata: any) => ({
  status,
  message,
  metadata,
})

export const genericRetryStrategy = ({
  maxRetryAttempts = 3,
  scalingDuration = 1000,
  excludedStatusCodes = [],
}: RetryStrategyOptions = {}) => (attempts: Observable<any>) => {
  return attempts.pipe(
    mergeMap((error, i) => {
      const retryAttempt = i + 1

      // if maximum number of retries have been met
      // or response is a status code we don't wish to retry, throw error
      if (
        retryAttempt > maxRetryAttempts ||
        excludedStatusCodes.find(e => e === error.status)
      ) {
        return throwError(error)
      }
      console.log(
        `Attempt ${retryAttempt}: retrying in ${
          retryAttempt * scalingDuration
        }ms`
      )
      // retry after 1s, 2s, etc...
      return timer(retryAttempt * scalingDuration)
    }),
    finalize(() => {})
  )
}
