const defaultState = {}

function tripReducer(state = defaultState, action) {
  switch(action.type) {
    case 'FETCH_TRIPS':
      let tripData = action.normalizedData.entities.trips
      if (!tripData) {
        tripData = {}
      }
      return tripData
    case 'ADD_TRIP':
      const tripCreatorId = action.newTrip.users[0].id
      const normalizedTrip = {...action.newTrip, users: [tripCreatorId]}
      return {...state, [action.newTrip.id]: normalizedTrip}
    case 'REMOVE_TRIP':
      const removeTrips = {...state}

      delete removeTrips[action.tripObject.trip.id]
      console.log(removeTrips)
      // const newTrips = {}
      // for (let key in removeTrips){
      //   if ([key]){
      //     newTrips[key] = state[key]
      //   }
      // }
      // console.log(newTrips)
      return removeTrips
    case 'EDIT_TRIP':
      const updatedTrips = [...state].map(trip => {
        if (trip.id === action.updatedTrip.id) {
          return action.updatedTrip
        } else {
          return trip
        }
      })

      return updatedTrips
    default:
      return state
  }
}

export default tripReducer
