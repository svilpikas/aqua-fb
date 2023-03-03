import { AppState } from '../reducers'
import { LOADING_STATE_KEY } from './constants'

export const getLoadingState = (state: AppState) => state[LOADING_STATE_KEY]
export const isActionLoading = (requestName: string) => (state: AppState) =>
  !!getLoadingState(state).requests[requestName]
