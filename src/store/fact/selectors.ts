import { getList } from 'store/list'
import { AppState } from '../reducers'
import { FACT_MAIN_LIST, FACT_STATE_KEY } from './constants'

const getState = (state: AppState) => state[FACT_STATE_KEY]

export const getFactState = getState

export const getFactById = (state: AppState, id: string) =>
  getState(state).byId[id]

export const getFactsList = (
  state: AppState,
  listKey: string = FACT_MAIN_LIST
) => getList(state, listKey).map(id => getFactById(state, id))
