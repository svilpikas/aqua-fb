import { config } from 'config'
import { combineEpics } from 'redux-observable'
import { buildApiService } from 'services'
import { exampleEpic } from './example/epics'
import { factEpics } from './fact/epics'
import { loadingEpics } from './loading/epics'

const apiServiceEpic = buildApiService({
  API_URL: config.API_URL,
  retryStrategyOptions: {
    excludedStatusCodes: [500],
    maxRetryAttempts: 4,
    scalingDuration: 1000,
  },
})

export default combineEpics(
  factEpics,
  /*generated code*/
  exampleEpic,
  loadingEpics,
  apiServiceEpic
)
