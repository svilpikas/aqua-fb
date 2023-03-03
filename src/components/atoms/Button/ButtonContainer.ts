import { connect } from 'react-redux'
import { AppState } from 'store/reducers'
import { getMessage } from 'store/example/selectors'
import { exampleAction } from 'store/example/actions'
import { Button } from './Button'

const mapStateToProps = (state: AppState) => ({
  message: getMessage(state),
})

const mapDispatchToProps = {
  exampleAction,
}

export const ButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)
