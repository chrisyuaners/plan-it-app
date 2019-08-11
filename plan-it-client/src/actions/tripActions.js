function addTrip(newTrip) {
  return {
    type: 'ADD_TRIP',
    newTrip: newTrip
  }
}

function fetchTrips(userId) {
  return function(dispatch) {
    fetch(`http://localhost:3000/api/v1/users/${userId}`)
    .then(res => res.json())
    .then(user => {
      dispatch({type: 'FETCH_TRIPS', trips: user.trips})
    })
  }
}

export {
  fetchTrips,
  addTrip
}
