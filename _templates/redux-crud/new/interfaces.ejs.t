---
to: src/store/<%=h.changeCase.camelCase(name)%>/interfaces.ts
---
import { 
  IndexModel,
  <%=h.changeCase.pascalCase(name)%>Model,
} from 'models'
import * as conststants from './constants'

export interface <%=h.changeCase.pascalCase(name)%>State {
  byId: IndexModel<<%=h.changeCase.pascalCase(name)%>Model>
}

export interface set<%=h.changeCase.pascalCase(name)%>Action {
  type: typeof conststants.SET_<%=h.changeCase.constantCase(name)%>,
  payload: <%=h.changeCase.pascalCase(name)%>Model
}

export interface set<%=h.changeCase.pascalCase(name)%>sAction {
  type: typeof conststants.SET_<%=h.changeCase.constantCase(name)%>S,
  payload: <%=h.changeCase.pascalCase(name)%>Model[]
}

export interface remove<%=h.changeCase.pascalCase(name)%>ByIdAction {
  type: typeof conststants.REMOVE_<%=h.changeCase.constantCase(name)%>_BY_ID,
  id: string
}


export type <%=h.changeCase.pascalCase(name)%>Actions = 
  set<%=h.changeCase.pascalCase(name)%>Action | 
  set<%=h.changeCase.pascalCase(name)%>sAction | 
  remove<%=h.changeCase.pascalCase(name)%>ByIdAction
