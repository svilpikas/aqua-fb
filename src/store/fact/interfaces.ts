import { FactModel, IndexModel } from 'models'
import * as conststants from './constants'

// TODO: add response interfaces for all, one, add, update

export interface FactState {
  byId: IndexModel<FactModel>
}

export interface setFactAction {
  type: typeof conststants.SET_FACT
  payload: FactModel
}

export interface setFactsAction {
  type: typeof conststants.SET_FACTS
  payload: FactModel[]
}

export interface removeFactByIdAction {
  type: typeof conststants.REMOVE_FACT_BY_ID
  id: string
}

export type FactActions = setFactAction | setFactsAction | removeFactByIdAction
