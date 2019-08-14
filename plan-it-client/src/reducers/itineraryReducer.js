const defaultState = []

function itineraryReducer(state=defaultState, action){
  switch(action.type) {
    case 'FETCH_ITINERARIES':
      return action.itineraries
    case 'ADD_ITINERARY':
      const addToTripItineraries = [...state]
      
      addToTripItineraries.push(action.newItinerary)

      return addToTripItineraries
    default:
      return state
  }
}

export default itineraryReducer
