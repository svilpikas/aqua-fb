import { CLEAR_LIST, SET_LIST } from './constants'

export interface SetListAction {
  type: typeof SET_LIST
  key: string
  data: string[]
}

export interface ClearListAction {
  type: typeof CLEAR_LIST
  key: string
}

export type ListActions = SetListAction | ClearListAction

export const setList = (key: string, data: string[]): SetListAction => ({
  type: SET_LIST,
  key,
  data,
})

export const clearList = (key: string): ClearListAction => ({
  type: CLEAR_LIST,
  key,
})
