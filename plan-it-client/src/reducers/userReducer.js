const defaultState = null

function userReducer(state=defaultState, action) {
  switch(action.type) {
    case 'FETCH_USER':
      return action.currentUser
    default:
      return state
  }
}

export default userReducer
