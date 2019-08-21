function setUser(userId) {
  return {
    type: 'SET_USER',
    currentUserId: parseInt(userId)
  }
}

function addTripAndUserTripIds(tripId, userTripId, userId) {
  return {
    type: 'ADD_TRIP_AND_USERTRIP_IDS',
    tripId: tripId,
    userTripId: userTripId,
    userId: userId
  }
}

export {
  setUser,
  addTripAndUserTripIds
}
