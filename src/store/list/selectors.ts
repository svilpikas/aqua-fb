import { AppState } from '../reducers'

export const LIST_STATE_KEY = 'list'

export const getListState = (state: AppState) => state[LIST_STATE_KEY]
export const getList = (state: AppState, listKey: string) =>
  getListState(state)[listKey] || []
