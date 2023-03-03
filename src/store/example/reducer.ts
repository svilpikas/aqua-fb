import * as actions from './actions'

export interface ExampleState {
  message: string
}

export const initialState: ExampleState = {
  message: 'test',
}

export const exampleReducer = (
  state = initialState,
  { type, payload }: { type: string; payload: string }
) => {
  switch (type) {
    case actions.EXAMPLE_ACTION_TYPE_DONE:
      return {
        ...state,
        message: payload,
      }
    default: {
      return {
        ...state,
      }
    }
  }
}
