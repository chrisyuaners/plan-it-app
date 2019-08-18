const defaultState = null

function destinationReducer(state=defaultState, action) {
  switch(action.type) {
    case 'FETCH_DESTINATIONS':
      return action.destinations
    default:
      return state
  }
}

export default destinationReducer
