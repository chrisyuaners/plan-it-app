function fetchTrips(userId) {
  return function(dispatch) {
    fetch(`http://localhost:3000/api/v1/users/${userId}`)
    .then(res => res.json())
    .then(user => {
      dispatch({type: 'FETCH_TRIPS', trips: user.trips})
    })
  }
}

function addTrip(newTrip) {
  return {
    type: 'ADD_TRIP',
    newTrip: newTrip
  }
}

function removeTrip(tripId) {
  return {
    type: 'REMOVE_TRIP',
    tripId: tripId
  }
}

function editTrip(updatedTrip) {
  return {
    type: 'EDIT_TRIP',
    updatedTrip: updatedTrip
  }
}

export {
  fetchTrips,
  addTrip,
  removeTrip,
  editTrip
}
