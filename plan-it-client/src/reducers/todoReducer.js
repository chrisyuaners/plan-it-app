const defaultState = []

function todoReducer(state=defaultState, action) {
  switch(action.type) {
    case 'FETCH_TODOS':
      return action.todos
    default:
      return state
  }
}

export default todoReducer
