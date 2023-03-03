import * as actions from './actions'
import * as constants from './constants'

export interface ListState {
  [listKey: string]: string[]
}

type State = ListState

const initialState: State = {}

const setList = (state: State, action: actions.SetListAction) => ({
  ...state,
  [action.key]: action.data,
})

const clearList = (state: State, action: actions.ClearListAction) => {
  const { [action.key]: ToClear, ...newState } = state
  return newState
}

const strategies = {
  [constants.SET_LIST]: setList,
  [constants.CLEAR_LIST]: clearList,
  __default__: (state: State) => state,
}

export const listReducer = (
  state = initialState,
  action: actions.ListActions
): State => {
  const transformer = strategies[action.type] ?? strategies.__default__
  return transformer(state, action as any)
}
