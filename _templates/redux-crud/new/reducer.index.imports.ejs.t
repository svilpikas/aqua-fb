---
to: src/store/reducers.ts
inject: true
prepend: true
eof_last: false
skip_if: ./<%=h.changeCase.camelCase(name)%>
---
import {
  <%=h.changeCase.camelCase(name)%>Reducer,
  <%=h.changeCase.constantCase(name)%>_STATE_KEY,
  <%=h.changeCase.pascalCase(name)%>State
}  from './<%=h.changeCase.camelCase(name)%>'