const defaultState = []

function itineraryReducer(state=defaultState, action){
  switch(action.type) {
    case 'SET_ITINERARIES':
      return action.itineraries
    default:
      return state
  }
}

export default itineraryReducer
