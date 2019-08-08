const defaultState = {
  userId: null
}

function userReducer(state=defaultState, action) {
  switch(action.type) {
    case 'SET_USER':
      return {userId: action.payload}
    default:
      return state
  }
}

export default userReducer
