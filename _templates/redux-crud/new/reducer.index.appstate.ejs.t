---
to: src/store/reducers.ts
inject: true
eof_last: false
skip_if: <%=h.changeCase.constantCase(name)%>_STATE_KEY
after: export type AppState = {
---
    [<%=h.changeCase.constantCase(name)%>_STATE_KEY]: <%=h.changeCase.pascalCase(name)%>State,