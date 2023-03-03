---
to: src/store/<%=h.changeCase.camelCase(name)%>/actions.ts
---
import { <%=h.changeCase.pascalCase(name)%>Model } from 'models'
import { api, QueryParamIndex, Params } from 'services'
import {
  create<%=h.changeCase.pascalCase(name)%>ActionTypes,
  delete<%=h.changeCase.pascalCase(name)%>ByIdActionTypes,
  fetch<%=h.changeCase.pascalCase(name)%>ByIdActionTypes,
  fetch<%=h.changeCase.pascalCase(name)%>sActionTypes,
  REMOVE_<%=h.changeCase.constantCase(name)%>_BY_ID,
  SET_<%=h.changeCase.constantCase(name)%>,
  SET_<%=h.changeCase.constantCase(name)%>S,
  update<%=h.changeCase.pascalCase(name)%>ByIdActionTypes,
} from './constants'

const ENDPOINT = '<%=name%>'

export const fetch<%=h.changeCase.pascalCase(name)%>s = (query?: QueryParamIndex, params?: Params, flow?: string) =>
  api.get(fetch<%=h.changeCase.pascalCase(name)%>sActionTypes, ENDPOINT, query, params, flow)
  
export const fetch<%=h.changeCase.pascalCase(name)%>ById = (id: string, query?: QueryParamIndex, params?: Params, flow?: string) =>
  api.get(fetch<%=h.changeCase.pascalCase(name)%>ByIdActionTypes, `${ENDPOINT}/${id}`, query, params, flow)

export const create<%=h.changeCase.pascalCase(name)%> = (data: Partial<<%=h.changeCase.pascalCase(name)%>Model>, query?: QueryParamIndex, params?: Params, flow?: string) =>
  api.post(create<%=h.changeCase.pascalCase(name)%>ActionTypes, ENDPOINT, data, query, params, flow)

export const update<%=h.changeCase.pascalCase(name)%>ById = (id: string, data: Partial<<%=h.changeCase.pascalCase(name)%>Model>, query?: QueryParamIndex, params?: Params, flow?: string) =>
  api.put(update<%=h.changeCase.pascalCase(name)%>ByIdActionTypes, `${ENDPOINT}/${id}`, data, query, {
    id,
    ...params,
  }, flow)

export const delete<%=h.changeCase.pascalCase(name)%>ById = (id: string, query?: QueryParamIndex, params?: Params, flow?: string) =>
  api.delete(delete<%=h.changeCase.pascalCase(name)%>ByIdActionTypes, `${ENDPOINT}/${id}`, query, { id, ...params }, flow)

export const set<%=h.changeCase.pascalCase(name)%> = (item: <%=h.changeCase.pascalCase(name)%>Model) => ({
  type: SET_<%=h.changeCase.constantCase(name)%>,
  payload: item,
})

export const set<%=h.changeCase.pascalCase(name)%>s = (items: <%=h.changeCase.pascalCase(name)%>Model[]) => ({
  type: SET_<%=h.changeCase.constantCase(name)%>S,
  payload: items,
})

export const remove<%=h.changeCase.pascalCase(name)%>ById = (id: string) => ({
  type: REMOVE_<%=h.changeCase.constantCase(name)%>_BY_ID,
  id,
})
