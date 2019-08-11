function fetchItineraries(userId) {
  return function(dispatch) {
    fetch(`http://localhost:3000/api/v1/users/${userId}`)
    .then(res => res.json())
    .then(user => {
      dispatch({type: 'FETCH_ITINERARIES', itineraries: user.itineraries})
    })
  }
}

export {
  fetchItineraries
}
