import { AnyAction } from 'redux'
import { ofType } from 'redux-observable'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { exampleActionDone, EXAMPLE_ACTION_TYPE } from './actions'

export const exampleEpic = (action$: Observable<AnyAction>): Observable<any> =>
  action$.pipe(
    ofType(EXAMPLE_ACTION_TYPE),
    map(action => {
      return exampleActionDone(`${action.payload}_DONE`)
    })
  )
