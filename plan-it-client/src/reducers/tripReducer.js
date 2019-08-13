const defaultState = []

function tripReducer(state = defaultState, action) {
  switch(action.type) {
    case 'FETCH_TRIPS':
      return action.trips
    case 'ADD_TRIP':
      return [...state, action.newTrip]
    case 'REMOVE_TRIP':
      return [...state].filter(trip => trip.id !== action.tripId)
    default:
      return state
  }
}

export default tripReducer
