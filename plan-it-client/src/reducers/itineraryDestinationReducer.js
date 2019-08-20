const defaultState = {}

function itineraryDestinationReducer(state=defaultState, action) {
  switch(action.type) {
    case 'FETCH_TRIPS':
    let itineraryDestinationData = action.normalizedData.entities.itinerary_destinations
    if (!itineraryDestinationData) {
      itineraryDestinationData = {}
    }
    return itineraryDestinationData
    default:
      return state
  }
}

export default itineraryDestinationReducer
