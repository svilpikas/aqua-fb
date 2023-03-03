import { FactModel } from 'models'
import { api, Params, QueryParamIndex } from 'services'
import {
  createFactActionTypes,
  deleteFactByIdActionTypes,
  fetchFactByIdActionTypes,
  fetchFactsActionTypes,
  REMOVE_FACT_BY_ID,
  SET_FACT,
  SET_FACTS,
  updateFactByIdActionTypes,
} from './constants'

const ENDPOINT = 'facts'

export const fetchFacts = (
  query?: QueryParamIndex,
  params?: Params,
  flow?: string
) => api.get(fetchFactsActionTypes, ENDPOINT, query, params, flow)

export const fetchFactById = (
  id: string,
  query?: QueryParamIndex,
  params?: Params,
  flow?: string
) => api.get(fetchFactByIdActionTypes, `${ENDPOINT}/${id}`, query, params, flow)

export const createFact = (
  data: Partial<FactModel>,
  query?: QueryParamIndex,
  params?: Params,
  flow?: string
) => api.post(createFactActionTypes, ENDPOINT, data, query, params, flow)

export const updateFactById = (
  id: string,
  data: Partial<FactModel>,
  query?: QueryParamIndex,
  params?: Params,
  flow?: string
) =>
  api.put(
    updateFactByIdActionTypes,
    `${ENDPOINT}/${id}`,
    data,
    query,
    {
      id,
      ...params,
    },
    flow
  )

export const deleteFactById = (
  id: string,
  query?: QueryParamIndex,
  params?: Params,
  flow?: string
) =>
  api.delete(
    deleteFactByIdActionTypes,
    `${ENDPOINT}/${id}`,
    query,
    {
      id,
      ...params,
    },
    flow
  )

export const setFact = (item: FactModel) => ({
  type: SET_FACT,
  payload: item,
})

export const setFacts = (items: FactModel[]) => ({
  type: SET_FACTS,
  payload: items,
})

export const removeFactById = (id: string) => ({
  type: REMOVE_FACT_BY_ID,
  id,
})
