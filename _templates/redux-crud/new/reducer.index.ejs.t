---
to: src/store/reducers.ts
inject: true
eof_last: false
skip_if: <%=h.changeCase.camelCase(name)%>Reducer
after: combineReducers\({
---
  [<%=h.changeCase.constantCase(name)%>_STATE_KEY]: <%=h.changeCase.camelCase(name)%>Reducer,