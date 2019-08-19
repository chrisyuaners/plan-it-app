function setUser(userId) {
  return {
    type: 'SET_USER',
    currentUserId: parseInt(userId)
  }
}

function addUserTrip(userTrip) {
  return {
    type: 'ADD_USER_TRIP',
    userTrip: userTrip
  }
}

export {
  setUser,
  addUserTrip
}
