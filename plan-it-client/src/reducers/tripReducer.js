const defaultState = []

function tripReducer(state = defaultState, action) {
  switch(action.type) {
    case 'FETCH_TRIPS':
      return action.trips
    case 'ADD_TRIP':
      console.log(action.newTrip)

      return [...state, action.newTrip]
    default:
      return state
  }
}

export default tripReducer
