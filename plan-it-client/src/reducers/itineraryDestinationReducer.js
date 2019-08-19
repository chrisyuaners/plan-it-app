const defaultState = {}

function itineraryDestinationReducer(state=defaultState, action) {
  switch(action.type) {
    case 'FETCH_TRIPS':
      return action.normalizedData.entities.itinerary_destinations
    default:
      return state
  }
}

export default itineraryDestinationReducer
