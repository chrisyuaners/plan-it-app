const defaultState = []

function tripReducer(state=defaultState, action) {
  switch(action.type) {
    case 'SET_TRIPS':
      return action.trips
    case 'ADD_TRIP':
      return [...state, action.newTrip]
    default:
      return state
  }
}

export default tripReducer
