---
to: src/store/<%=h.changeCase.camelCase(name)%>/reducer.ts
---
import * as constants from './constants'
import * as interfaces from './interfaces'
import {
  <%=h.changeCase.pascalCase(name)%>State,
} from './interfaces'

export const initialState: <%=h.changeCase.pascalCase(name)%>State = {
  byId: {}
}

const setItem = (state: <%=h.changeCase.pascalCase(name)%>State, { payload }: interfaces.set<%=h.changeCase.pascalCase(name)%>Action) => ({
  ...state,
  byId: {
    ...state.byId,
    [payload.id]: payload
  }
})

const setItems = (state: <%=h.changeCase.pascalCase(name)%>State, { payload }: interfaces.set<%=h.changeCase.pascalCase(name)%>sAction) => ({
  ...state,
  byId: {
    ...state.byId,
    ...(payload.reduce((acc, curr) => ({ ...acc, [curr.id]: curr}),{}))
  }
})

const removeItem = (state: <%=h.changeCase.pascalCase(name)%>State, { id }: interfaces.remove<%=h.changeCase.pascalCase(name)%>ByIdAction) => {
  const { [id]: deletedItem, ...byId } = state.byId
  return {
    ...state,
    byId: {
      ...byId
    }
  }
}

const strategies = {
  [constants.SET_<%=h.changeCase.constantCase(name)%>]: setItem,
  [constants.SET_<%=h.changeCase.constantCase(name)%>S]: setItems,
  [constants.REMOVE_<%=h.changeCase.constantCase(name)%>_BY_ID]: removeItem,

  __default__: (state: <%=h.changeCase.pascalCase(name)%>State) => state,
}

export const <%=h.changeCase.camelCase(name)%>Reducer = (
  state = initialState,
  action: interfaces.<%=h.changeCase.pascalCase(name)%>Actions
): <%=h.changeCase.pascalCase(name)%>State=> {
  const transformer = strategies[action.type] ?? strategies.__default__
  return transformer(state, action as any)
}

