function addTrip(newTrip){
  return {
    type: 'ADD_TRIP',
    newTrip: newTrip
  }
}

function setTrips(trips){
  return {
    type: 'SET_TRIPS',
    trips: trips
  }
}


export {
  addTrip,
  setTrips
}
