---
to: src/store/<%=h.changeCase.camelCase(name)%>/selectors.ts
---

import { AppState } from '../reducers'
import { 
    <%=h.changeCase.constantCase(name)%>_STATE_KEY,
} from './constants'

const getState = (state: AppState) => state[<%=h.changeCase.constantCase(name)%>_STATE_KEY]

export const get<%=h.changeCase.pascalCase(name)%>State = getState

export const get<%=h.changeCase.pascalCase(name)%>ById = (state: AppState, id: string) => getState(state).byId[id]
