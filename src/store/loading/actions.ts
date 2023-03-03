import { SET_LOADING } from './constants'

export interface SetLoadingAction {
  type: typeof SET_LOADING
  request: string
  loading: boolean
}

export type LoadingActions = SetLoadingAction

export const setLoading = (
  request: string,
  loading: boolean = true
): SetLoadingAction => ({
  type: SET_LOADING,
  request,
  loading,
})
