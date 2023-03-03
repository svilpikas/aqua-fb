---
to: src/store/<%=h.changeCase.camelCase(name)%>/constants.ts
---
// API action types

import { createActionTypes } from 'services'

export const fetch<%=h.changeCase.pascalCase(name)%>sActionTypes = createActionTypes('FETCH_<%=h.changeCase.constantCase(name)%>S')
export const fetch<%=h.changeCase.pascalCase(name)%>ByIdActionTypes = createActionTypes(
  'FETCH_<%=h.changeCase.constantCase(name)%>_BY_ID'
)
export const update<%=h.changeCase.pascalCase(name)%>ByIdActionTypes = createActionTypes(
  'UPDATE_<%=h.changeCase.constantCase(name)%>_BY_ID'
)
export const create<%=h.changeCase.pascalCase(name)%>ActionTypes = createActionTypes('CREATE_<%=h.changeCase.constantCase(name)%>')
export const delete<%=h.changeCase.pascalCase(name)%>ByIdActionTypes = createActionTypes(
  'DELETE_<%=h.changeCase.constantCase(name)%>_BY_ID'
)

// Action types

export const SET_<%=h.changeCase.constantCase(name)%> = 'SET_<%=h.changeCase.constantCase(name)%>'
export const SET_<%=h.changeCase.constantCase(name)%>S = 'SET_<%=h.changeCase.constantCase(name)%>S'
export const REMOVE_<%=h.changeCase.constantCase(name)%>_BY_ID = 'REMOVE_<%=h.changeCase.constantCase(name)%>_BY_ID'

// Reducer

export const <%=h.changeCase.constantCase(name)%>_STATE_KEY = '<%=h.changeCase.camelCase(name)%>'
