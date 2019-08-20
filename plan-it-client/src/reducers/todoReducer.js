const defaultState = {}

function todoReducer(state=defaultState, action) {
  switch(action.type) {
    case 'FETCH_TRIPS':
    let todoData = action.normalizedData.entities.todos
    if (!todoData) {
      todoData = {}
    }
    return todoData
    case 'ADD_TODO':
      const addToTripTodos = [...state].filter(tripTodo => tripTodo.tripId === action.tripId)[0]

      addToTripTodos.todos.push(action.newTodo)

      const updatedTripTodosWithAdd = [...state].map(tripTodo => {
        if (tripTodo.tripId !== action.tripId) {
          return tripTodo
        }

        return {
          ...tripTodo,
          ...addToTripTodos
        }
      })

      return updatedTripTodosWithAdd
    case 'REMOVE_TODO':
      const removeFromTripTodos = [...state].filter(tripTodo => tripTodo.tripId === action.tripId)[0]

      removeFromTripTodos.todos = removeFromTripTodos.todos.filter(todo => todo.id !== action.todoId)

      const updatedTripTodosWithRemove = [...state].map(tripTodo => {
        if (tripTodo.tripId !== action.tripId) {
          return tripTodo
        }

        return {
          ...tripTodo,
          ...removeFromTripTodos
        }
      })

      return updatedTripTodosWithRemove
    default:
      return state
  }
}

export default todoReducer
