import { combineEpics, Epic, ofType } from 'redux-observable'
import { map } from 'rxjs/operators'
import { BASE_HTTP_ACTION_TYPES, ServerAction } from 'services'
import { setLoading } from './actions'

const requestStartEpic: Epic<any, any> = action$ =>
  action$.pipe(
    ofType(BASE_HTTP_ACTION_TYPES.REQUEST),
    map((action: ServerAction) =>
      setLoading(action.metadata.actionTypes.REQUEST)
    )
  )

const requestEndEpic: Epic<any, any> = action$ =>
  action$.pipe(
    ofType(BASE_HTTP_ACTION_TYPES.FINALLY),
    map((action: ServerAction) =>
      setLoading(action.metadata.actionTypes.REQUEST, false)
    )
  )

export const loadingEpics = combineEpics(requestStartEpic, requestEndEpic)
