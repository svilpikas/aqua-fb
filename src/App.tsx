import styled from '@emotion/styled'
import { Button } from 'components/atoms'
import { css, injectGlobal, keyframes } from 'emotion'
import { withTheme } from 'emotion-theming'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from 'resources/images/logo.svg'
import {
  FACT_MAIN_LIST,
  fetchFacts,
  fetchFactsActionTypes,
  getFactsList,
} from 'store/fact'
import { isActionLoading } from 'store/loading'
import { color, font } from 'theme'

injectGlobal`
  @font-face {
    font-family: 'SourceSansPro';
    src: url(${require('./resources/fonts/SourceSansPro-Regular.ttf')});
  }

  body {
    margin: 0;
  }
`

const HeaderText = styled.p`
  color: lightgray;
`

const AppHeader = styled.header`
  background-color: ${color('primary')};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  font-family: sans-serif;
  font-family: ${font('primary')};
  ${HeaderText} {
    text-decoration: underline;
  }
`

const Table = styled.table`
  font-size: 14px;
  width: 500px;
  margin: 0 auto;
  border-collapse: collapse;
  td,
  th {
    border: 1px solid white;
  }
`

const AppComponent: React.FC = props => {
  const dispatch = useDispatch()
  const listData = useSelector(getFactsList)
  const isLoading = useSelector(isActionLoading(fetchFactsActionTypes.REQUEST))
  return (
    <div className={classes().app}>
      <AppHeader>
        <img src={logo} className={classes().appLogo} alt="logo" />
        <HeaderText>
          Edit <code>src/App.tsx</code> and save to reload.
        </HeaderText>
        <a
          className={classes().appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <br />
        <Button message="test" exampleAction={(message: any) => alert(message)}>
          Push me!
        </Button>
        <br />
        <button
          onClick={() => {
            dispatch(
              fetchFacts({ animal_type: 'cat' }, { list: FACT_MAIN_LIST })
            )
          }}>
          Get List
        </button>
        <h2>Cat's fact list</h2>
        <Table>
          <tbody>
            {isLoading ? (
              <tr>
                <td>Loading....</td>
              </tr>
            ) : (
              listData.map(item => (
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.text}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </AppHeader>
    </div>
  )
}

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const classes = () => ({
  app: css`
    text-align: center;
  `,
  appLogo: css`
    animation: ${logoSpin} infinite 20s linear;
    height: 40vmin;
    pointer-events: none;
  `,
  appLink: css`
    color: #61dafb;
  `,
})

export default withTheme(AppComponent)
