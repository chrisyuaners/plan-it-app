const defaultState = null

function userReducer(state=defaultState, action) {
  switch(action.type) {
    case 'FETCH_TRIPS':
      let userData = action.normalizedData.entities.users
      if (!userData) {
        userData = {}
      }
      return userData
    case 'REMOVE_TRIP':
      const usersForModify = {...state}
      const modifyUsers = action.tripObject.trip.users.map(user => usersForModify[user])

      const modifiedUsers = modifyUsers.map(user => {
        let updateUser = {...user}
        updateUser.trips = user.trips.filter(trip => trip !== action.tripObject.trip.id)
        updateUser.user_trips = user.user_trips.filter(ut => !action.tripObject.trip.user_trips.includes(ut))
        updateUser.itineraries = user.itineraries.filter(itin => !action.tripObject.itineraries.includes(itin))
        updateUser.itinerary_destinations = user.itinerary_destinations.filter(itinDes => !action.tripObject.itinerary_destinations.includes(itinDes))
        return updateUser
      })

      const newUsers = {}
      modifiedUsers.forEach(user => {
  	      newUsers[user.id] = user
      })

      return {...state, ...newUsers}
    case 'ADD_TRIP_AND_USERTRIP_IDS':
      let users = {...state}
      users[action.userId].trips.push(action.tripId)
      users[action.userId].user_trips.push(action.userTripId)
      return {...state, [action.userId]: users[action.userId]}
    default:
      return state
  }
}

export default userReducer
