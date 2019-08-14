const defaultState = []

function tripReducer(state = defaultState, action) {
  switch(action.type) {
    case 'FETCH_TRIPS':
      return action.trips
    case 'ADD_TRIP':
      return [...state, action.newTrip]
    case 'REMOVE_TRIP':
      return [...state].filter(trip => trip.id !== action.tripId)
    case 'EDIT_TRIP':
      const updatedTrips = [...state].map(trip => {
        if (trip.id === action.updatedTrip.id) {
          return action.updatedTrip
        } else {
          return trip
        }
      })
      
      return updatedTrips
    default:
      return state
  }
}

export default tripReducer
