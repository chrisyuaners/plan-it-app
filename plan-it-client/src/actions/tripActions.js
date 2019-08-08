function setTrips(trips){
  return {
    type: 'SET_TRIPS',
    trips: trips
  }
}

function addTrip(newTrip){
  return {
    type: 'ADD_TRIP',
    newTrip: newTrip
  }
}

export {
  setTrips,
  addTrip
}
