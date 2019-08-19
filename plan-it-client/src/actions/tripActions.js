import { normalize, schema } from 'normalizr'

function fetchTrips(userId) {
  return function(dispatch) {
    fetch(`http://localhost:3000/api/v1/trips`)
    .then(res => res.json())
    .then(trips => {
      const tripData = trips
      const itinerary_destination = new schema.Entity('itinerary_destinations')
      const itinerary = new schema.Entity('itineraries')
      const user_trip = new schema.Entity('user_trips')
      const todo = new schema.Entity('todos')
      const expense = new schema.Entity('expenses')
      const comment = new schema.Entity('comments')
      const trip = new schema.Entity('trips')
      const user = new schema.Entity('users', {
        trips: [trip],
        itineraries: [itinerary],
        itinerary_destinations: [itinerary_destination],
        user_trips: [user_trip]
      })
      trip.define({
        users: [user],
        todos: [todo],
        expenses: [expense],
        comments: [comment]
      })
      const tripList = [trip]
      const normalizedData = normalize(tripData, tripList)
      dispatch({type: 'FETCH_TRIPS', trips: trips, normalizedData: normalizedData})
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
