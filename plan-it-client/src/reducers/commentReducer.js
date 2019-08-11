const defaultState = []

function commentReducer(state=defaultState, action) {
  switch(action.type) {
    case 'FETCH_COMMENTS':
      return action.comments
    case 'ADD_COMMENT':
      return [...state, action.newComment]
    default:
      return state
  }
}

export default commentReducer
