import * as actions from './actions'
import * as constants from './constants'

export interface LoadingState {
  requests: {
    [requestName: string]: boolean
  }
}

type State = LoadingState

const initialState: State = {
  requests: {},
}

const setLoading = (state: State, action: actions.SetLoadingAction) => ({
  ...state,
  requests: {
    ...state.requests,
    [action.request]: action.loading,
  },
})

const strategies = {
  [constants.SET_LOADING]: setLoading,
  __default__: (state: State) => state,
}

export const loadingReducer = (
  state = initialState,
  action: actions.LoadingActions
): State => {
  const transformer = strategies[action.type] ?? strategies.__default__
  return transformer(state, action as any)
}
