const defaultState = {}

function userTripReducer(state=defaultState, action) {
  switch(action.type) {
    case 'FETCH_TRIPS':
      return action.normalizedData.entities.user_trips
    default:
      return state
  }
}

export default userTripReducer
