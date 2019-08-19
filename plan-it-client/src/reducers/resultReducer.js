const defaultState = []

function resultReducer(state=defaultState, action) {
  switch(action.type) {
    case 'FETCH_TRIPS':
      return action.normalizedData.result
    default:
      return state
  }
}

export default resultReducer
