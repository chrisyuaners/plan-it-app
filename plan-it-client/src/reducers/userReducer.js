const defaultState = null

function userReducer(state=defaultState, action) {
  switch(action.type) {
    case 'SET_USER':
      return action.currentUserId
    case 'FETCH_TRIPS':
      return action.normalizedData.entities.users
    case 'ADD_USER_TRIP':
      const updatedUserTrips = {...state}.user_trips

      updatedUserTrips.push(action.userTrip)

      return {...state, user_trips: updatedUserTrips}
    default:
      return state
  }
}

export default userReducer
