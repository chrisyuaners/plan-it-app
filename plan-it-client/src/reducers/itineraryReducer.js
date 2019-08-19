const defaultState = {}

function itineraryReducer(state=defaultState, action){
  switch(action.type) {
    case 'FETCH_TRIPS':
      return action.normalizedData.entities.itineraries
    case 'ADD_ITINERARY':
      const addToItineraries = [...state]

      addToItineraries.push(action.newItinerary)

      return addToItineraries
    case 'REMOVE_ITINERARY':
      const removeFromItineraries = [...state].filter(itinerary => itinerary.id !== action.itineraryId)

      return removeFromItineraries
    default:
      return state
  }
}

export default itineraryReducer
