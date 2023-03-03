import { config } from 'config'
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { BehaviorSubject } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import rootEpic from './epics'
import createRootReducer from './reducers'

export const history = createBrowserHistory({ basename: config.BASE_URL })

const epicMiddleware = createEpicMiddleware()

const epic$ = new BehaviorSubject(rootEpic)

const hotReloadingEpic = (...args: any[]): any =>
  epic$.pipe(switchMap(epic => epic(...args)))

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = (initialStore: any) => {
  const store = createStore(
    createRootReducer(history),
    initialStore,
    composeEnhancers(applyMiddleware(epicMiddleware))
  )

  epicMiddleware.run(hotReloadingEpic)

  if (module.hot) {
    module.hot.accept('./epics', () => {
      const nextRootEpic = require('./epics').default
      epic$.next(nextRootEpic)
    })

    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default(history)
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

export default configureStore
