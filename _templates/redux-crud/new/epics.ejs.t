---
to: src/store/<%=h.changeCase.camelCase(name)%>/epics.ts
---
import { combineEpics, ofType } from 'redux-observable'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { ServerErrorAction, ServerSuccessAction } from 'services'
import { remove<%=h.changeCase.pascalCase(name)%>ById, set<%=h.changeCase.pascalCase(name)%>, set<%=h.changeCase.pascalCase(name)%>s } from './actions'
import {
  create<%=h.changeCase.pascalCase(name)%>ActionTypes,
  delete<%=h.changeCase.pascalCase(name)%>ByIdActionTypes,
  fetch<%=h.changeCase.pascalCase(name)%>ByIdActionTypes,
  fetch<%=h.changeCase.pascalCase(name)%>sActionTypes,
  update<%=h.changeCase.pascalCase(name)%>ByIdActionTypes,
} from './constants'

const fetch<%=h.changeCase.pascalCase(name)%>sSuccess = (
  action$: Observable<ServerSuccessAction>
): Observable<any> =>
  action$.pipe(
    ofType(fetch<%=h.changeCase.pascalCase(name)%>sActionTypes.SUCCESS),
    map(action => {
      return set<%=h.changeCase.pascalCase(name)%>s(action.data)
    })
  )

const fetch<%=h.changeCase.pascalCase(name)%>sError = (
  action$: Observable<ServerErrorAction>
): Observable<any> =>
  action$.pipe(
    ofType(fetch<%=h.changeCase.pascalCase(name)%>sActionTypes.ERROR),
    map(action => {
      return { type: 'noop' }
    })
  )

const fetch<%=h.changeCase.pascalCase(name)%>ByIdSuccess = (
  action$: Observable<ServerSuccessAction>
): Observable<any> =>
  action$.pipe(
    ofType(fetch<%=h.changeCase.pascalCase(name)%>ByIdActionTypes.SUCCESS),
    map(action => {
      return set<%=h.changeCase.pascalCase(name)%>(action.data)
    })
  )

const fetch<%=h.changeCase.pascalCase(name)%>ByIdError = (
  action$: Observable<ServerErrorAction>
): Observable<any> =>
  action$.pipe(
    ofType(fetch<%=h.changeCase.pascalCase(name)%>ByIdActionTypes.ERROR),
    map(action => {
      return { type: 'noop' }
    })
  )

const create<%=h.changeCase.pascalCase(name)%>Success = (
  action$: Observable<ServerSuccessAction>
): Observable<any> =>
  action$.pipe(
    ofType(create<%=h.changeCase.pascalCase(name)%>ActionTypes.SUCCESS),
    map(action => {
      return set<%=h.changeCase.pascalCase(name)%>(action.data)
    })
  )

const create<%=h.changeCase.pascalCase(name)%>Error = (
  action$: Observable<ServerErrorAction>
): Observable<any> =>
  action$.pipe(
    ofType(create<%=h.changeCase.pascalCase(name)%>ActionTypes.ERROR),
    map(action => {
      return { type: 'noop' }
    })
  )

const update<%=h.changeCase.pascalCase(name)%>ByIdSuccess = (
  action$: Observable<ServerSuccessAction>
): Observable<any> =>
  action$.pipe(
    ofType(update<%=h.changeCase.pascalCase(name)%>ByIdActionTypes.SUCCESS),
    map(action => {
      return set<%=h.changeCase.pascalCase(name)%>(action.data)
    })
  )

const update<%=h.changeCase.pascalCase(name)%>ByIdError = (
  action$: Observable<ServerErrorAction>
): Observable<any> =>
  action$.pipe(
    ofType(update<%=h.changeCase.pascalCase(name)%>ByIdActionTypes.ERROR),
    map(action => {
      return { type: 'noop' }
    })
  )

const delete<%=h.changeCase.pascalCase(name)%>ByIdSuccess = (
  action$: Observable<ServerSuccessAction>
): Observable<any> =>
  action$.pipe(
    ofType(delete<%=h.changeCase.pascalCase(name)%>ByIdActionTypes.SUCCESS),
    map(action => {
      return remove<%=h.changeCase.pascalCase(name)%>ById(action.metadata.params.id)
    })
  )

const delete<%=h.changeCase.pascalCase(name)%>ByIdError = (
  action$: Observable<ServerErrorAction>
): Observable<any> =>
  action$.pipe(
    ofType(delete<%=h.changeCase.pascalCase(name)%>ByIdActionTypes.ERROR),
    map(action => {
      return { type: 'noop' }
    })
  )

export const <%=name%>Epics = combineEpics(
  fetch<%=h.changeCase.pascalCase(name)%>sSuccess,
  fetch<%=h.changeCase.pascalCase(name)%>sError,
  fetch<%=h.changeCase.pascalCase(name)%>ByIdSuccess,
  fetch<%=h.changeCase.pascalCase(name)%>ByIdError,
  create<%=h.changeCase.pascalCase(name)%>Success,
  create<%=h.changeCase.pascalCase(name)%>Error,
  update<%=h.changeCase.pascalCase(name)%>ByIdSuccess,
  update<%=h.changeCase.pascalCase(name)%>ByIdError,
  delete<%=h.changeCase.pascalCase(name)%>ByIdSuccess,
  delete<%=h.changeCase.pascalCase(name)%>ByIdError
)
