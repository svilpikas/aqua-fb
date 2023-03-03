---
to: src/models/index.ts
inject: true
prepend: true
eof_last: false
skip_if: ./<%=h.changeCase.camelCase(name)%>
---
export * from './<%=h.changeCase.camelCase(name)%>'