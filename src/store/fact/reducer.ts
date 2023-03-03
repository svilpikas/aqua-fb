import * as constants from './constants'
import * as interfaces from './interfaces'
import { FactState } from './interfaces'

export const initialState: FactState = {
  byId: {},
}

const setItem = (state: FactState, { payload }: interfaces.setFactAction) => ({
  ...state,
  byId: {
    ...state.byId,
    [payload._id]: payload,
  },
})

const setItems = (
  state: FactState,
  { payload }: interfaces.setFactsAction
) => ({
  ...state,
  byId: {
    ...state.byId,
    ...payload.reduce((acc, curr) => ({ ...acc, [curr._id]: curr }), {}),
  },
})

const removeItem = (
  state: FactState,
  { id }: interfaces.removeFactByIdAction
) => {
  const { [id]: deletedItem, ...byId } = state.byId
  return {
    ...state,
    byId: {
      ...byId,
    },
  }
}

const strategies = {
  [constants.SET_FACT]: setItem,
  [constants.SET_FACTS]: setItems,
  [constants.REMOVE_FACT_BY_ID]: removeItem,

  __default__: (state: FactState) => state,
}

export const factReducer = (
  state = initialState,
  action: interfaces.FactActions
): FactState => {
  const transformer = strategies[action.type] ?? strategies.__default__
  return transformer(state, action as any)
}
