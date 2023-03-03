export const EXAMPLE_ACTION_TYPE = 'EXAMPLE_ACTION_TYPE'
export const EXAMPLE_ACTION_TYPE_DONE = 'EXAMPLE_ACTION_TYPE_DONE'

export const exampleAction = (message: string) => ({
  type: EXAMPLE_ACTION_TYPE,
  payload: message,
})

export const exampleActionDone = (message: string) => ({
  type: EXAMPLE_ACTION_TYPE_DONE,
  payload: message,
})
