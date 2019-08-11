const defaultState = []

function todoReducer(state=defaultState, action) {
  switch(action.type) {
    case 'FETCH_TODOS':
      return action.todos
    case 'ADD_TODO':
      const tripTodos = [...state].filter(tripTodo => tripTodo.tripId === action.tripId)[0]

      tripTodos.todos.push(action.newTodo)

      const updatedTripTodos = [...state].map(tripTodo => {
        if (tripTodo.tripId !== action.tripId) {
          return tripTodo
        }

        return {
          ...tripTodo,
          ...tripTodos
        }
      })

      return updatedTripTodos
    default:
      return state
  }
}

export default todoReducer
