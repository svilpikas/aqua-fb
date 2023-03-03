---
to: src/models/<%=h.changeCase.camelCase(name)%>/index.ts
---
export interface <%=h.changeCase.pascalCase(name)%>ResponseModel {
    id: string
}
export type <%=h.changeCase.pascalCase(name)%>Model = <%=h.changeCase.pascalCase(name)%>ResponseModel
