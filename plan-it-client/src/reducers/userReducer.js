const defaultState = null

function userReducer(state=defaultState, action) {
  switch(action.type) {
    case 'FETCH_TRIPS':
    let userData = action.normalizedData.entities.users
    if (!userData) {
      userData = {}
    }
    return userData
    default:
      return state
  }
}

export default userReducer
