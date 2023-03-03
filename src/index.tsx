import App from 'App'
import { PageLoading } from 'components/organisms'
import { ConnectedRouter } from 'connected-react-router'
import { ThemeProvider } from 'emotion-theming'
import React, { Suspense } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { theme } from 'theme'
import * as serviceWorker from './serviceWorker'
import configureStore, { history } from './store/configureStore'

const store = configureStore({})

const Root: React.FC<{ theme: any; history: any; store: any }> = ({
  theme,
  history,
}) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Suspense fallback={<PageLoading />}>
          <Switch>
            <Route path="/">
              <App />
            </Route>
          </Switch>
        </Suspense>
      </ConnectedRouter>
    </Provider>
  </ThemeProvider>
)

render(
  <Root theme={theme} history={history} store={store} />,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./App', () => {
    render(
      <Root theme={theme} history={history} store={store} />,
      document.getElementById('root')
    )
  })

  module.hot.accept('./theme', () => {
    const theme = require('./theme').theme
    render(
      <Root theme={theme} history={history} store={store} />,
      document.getElementById('root')
    )
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
