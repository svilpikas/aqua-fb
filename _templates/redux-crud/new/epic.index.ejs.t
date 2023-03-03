---
to: src/store/epics.ts
inject: true
eof_last: false
skip_if: <%=h.changeCase.camelCase(name)%>Epics,
after: export default combineEpics\(
---
  <%=h.changeCase.camelCase(name)%>Epics,