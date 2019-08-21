const defaultState = {}

function itineraryDestinationReducer(state=defaultState, action) {
  switch(action.type) {
    case 'FETCH_TRIPS':
    let itineraryDestinationData = action.normalizedData.entities.itinerary_destinations
    if (!itineraryDestinationData) {
      itineraryDestinationData = {}
    }
    return itineraryDestinationData
    case 'REMOVE_TRIP':
      const itinDesToDelete = action.tripObject.itinerary_destinations
      const itinDesForRemoval = {...state}

      itinDesToDelete.map(itinDes => delete itinDesForRemoval[itinDes])

      return itinDesForRemoval
    default:
      return state
  }
}

export default itineraryDestinationReducer
