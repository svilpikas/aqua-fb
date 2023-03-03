---
to: src/store/epics.ts
inject: true
prepend: true
eof_last: false
skip_if: ./<%=h.changeCase.camelCase(name)%>
---
import {
  <%=h.changeCase.camelCase(name)%>Epics,
}  from './<%=h.changeCase.camelCase(name)%>/epics'