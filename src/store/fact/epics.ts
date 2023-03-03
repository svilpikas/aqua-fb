import { FactModel } from 'models'
import { combineEpics, ofType } from 'redux-observable'
import { Observable } from 'rxjs'
import { filter, map } from 'rxjs/operators'
import { ServerErrorAction, ServerSuccessAction } from 'services'
import { setList } from 'store/list'
import { removeFactById, setFact, setFacts } from './actions'
import {
  createFactActionTypes,
  deleteFactByIdActionTypes,
  fetchFactByIdActionTypes,
  fetchFactsActionTypes,
  updateFactByIdActionTypes,
} from './constants'

const fetchFactsSuccess = (
  action$: Observable<ServerSuccessAction>
): Observable<any> =>
  action$.pipe(
    ofType(fetchFactsActionTypes.SUCCESS),
    map(action => {
      return setFacts(action.data)
    })
  )

const fetchFactsMainListSuccess = (
  action$: Observable<ServerSuccessAction>
): Observable<any> =>
  action$.pipe(
    ofType(fetchFactsActionTypes.SUCCESS),
    filter(
      action =>
        action.metadata.params.list && action.metadata.params.list !== ''
    ),
    map(action => {
      return setList(
        action.metadata.params.list,
        action.data.map((item: FactModel) => item._id)
      )
    })
  )

const fetchFactsError = (
  action$: Observable<ServerErrorAction>
): Observable<any> =>
  action$.pipe(
    ofType(fetchFactsActionTypes.ERROR),
    map(action => {
      return { type: 'noop' }
    })
  )

const fetchFactByIdSuccess = (
  action$: Observable<ServerSuccessAction>
): Observable<any> =>
  action$.pipe(
    ofType(fetchFactByIdActionTypes.SUCCESS),
    map(action => {
      return setFact(action.data)
    })
  )

const fetchFactByIdError = (
  action$: Observable<ServerErrorAction>
): Observable<any> =>
  action$.pipe(
    ofType(fetchFactByIdActionTypes.ERROR),
    map(action => {
      return { type: 'noop' }
    })
  )

const createFactSuccess = (
  action$: Observable<ServerSuccessAction>
): Observable<any> =>
  action$.pipe(
    ofType(createFactActionTypes.SUCCESS),
    map(action => {
      return setFact(action.data)
    })
  )

const createFactError = (
  action$: Observable<ServerErrorAction>
): Observable<any> =>
  action$.pipe(
    ofType(createFactActionTypes.ERROR),
    map(action => {
      return { type: 'noop' }
    })
  )

const updateFactByIdSuccess = (
  action$: Observable<ServerSuccessAction>
): Observable<any> =>
  action$.pipe(
    ofType(updateFactByIdActionTypes.SUCCESS),
    map(action => {
      return setFact(action.data)
    })
  )

const updateFactByIdError = (
  action$: Observable<ServerErrorAction>
): Observable<any> =>
  action$.pipe(
    ofType(updateFactByIdActionTypes.ERROR),
    map(action => {
      return { type: 'noop' }
    })
  )

const deleteFactByIdSuccess = (
  action$: Observable<ServerSuccessAction>
): Observable<any> =>
  action$.pipe(
    ofType(deleteFactByIdActionTypes.SUCCESS),
    map(action => {
      return removeFactById(action.metadata.params.id)
    })
  )

const deleteFactByIdError = (
  action$: Observable<ServerErrorAction>
): Observable<any> =>
  action$.pipe(
    ofType(deleteFactByIdActionTypes.ERROR),
    map(action => {
      return { type: 'noop' }
    })
  )

export const factEpics = combineEpics(
  fetchFactsSuccess,
  fetchFactsError,
  fetchFactsMainListSuccess,
  fetchFactByIdSuccess,
  fetchFactByIdError,
  createFactSuccess,
  createFactError,
  updateFactByIdSuccess,
  updateFactByIdError,
  deleteFactByIdSuccess,
  deleteFactByIdError
)
