function fetchItineraries(userId) {
  return function(dispatch) {
    fetch(`http://localhost:3000/api/v1/users/${userId}`)
    .then(res => res.json())
    .then(user => {
      dispatch({type: 'FETCH_ITINERARIES', itineraries: user.itineraries})
    })
  }
}

function addItinerary(newItinerary) {
  return {
    type: 'ADD_ITINERARY',
    newItinerary: newItinerary
  }
}

function removeItinerary(itineraryId) {
  return {
    type: 'REMOVE_ITINERARY',
    itineraryId: itineraryId
  }
}

export {
  fetchItineraries,
  addItinerary,
  removeItinerary
}
