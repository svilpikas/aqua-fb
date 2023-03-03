// API action types

import { createActionTypes } from 'services'

export const fetchFactsActionTypes = createActionTypes('FETCH_FACTS')
export const fetchFactByIdActionTypes = createActionTypes('FETCH_FACT_BY_ID')
export const updateFactByIdActionTypes = createActionTypes('UPDATE_FACT_BY_ID')
export const createFactActionTypes = createActionTypes('CREATE_FACT')
export const deleteFactByIdActionTypes = createActionTypes('DELETE_FACT_BY_ID')

// Action types

export const SET_FACT = 'SET_FACT'
export const SET_FACTS = 'SET_FACTS'
export const REMOVE_FACT_BY_ID = 'REMOVE_FACT_BY_ID'

// Reducer

export const FACT_STATE_KEY = 'fact'

// Lists

export const FACT_MAIN_LIST = 'fact_main_list'
