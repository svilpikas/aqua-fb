import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'
import { combineReducers } from 'redux'
import { exampleReducer, ExampleState } from './example/reducer'
import { factReducer, FactState, FACT_STATE_KEY } from './fact'
import { listReducer, ListState, LIST_STATE_KEY } from './list'
import { loadingReducer, LoadingState, LOADING_STATE_KEY } from './loading'

export type AppState = {
  [FACT_STATE_KEY]: FactState
  [LIST_STATE_KEY]: ListState
  [LOADING_STATE_KEY]: LoadingState
  router: RouterState
  example: ExampleState
}

export default (history: History<History.PoorMansUnknown>) =>
  combineReducers({
    [FACT_STATE_KEY]: factReducer,
    [LIST_STATE_KEY]: listReducer,
    [LOADING_STATE_KEY]: loadingReducer,
    router: connectRouter(history),
    example: exampleReducer,
  })
