const defaultState = {}

function userTripReducer(state=defaultState, action) {
  switch(action.type) {
    case 'FETCH_TRIPS':
      let userTripData = action.normalizedData.entities.user_trips
      if (!userTripData) {
        userTripData = {}
      }
      return userTripData
    case 'ADD_USER_TRIP':
      return {...state, [action.userTrip.id]: action.userTrip}
    default:
      return state
  }
}

export default userTripReducer
