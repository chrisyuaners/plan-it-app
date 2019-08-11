function fetchTodos(userId) {
  return function(dispatch) {
    fetch(`http://localhost:3000/api/v1/users/${userId}`)
    .then(res => res.json())
    .then(user => {
      dispatch({type: 'FETCH_TODOS', todos: user.trips.map(trip => {
        const todoObject = {
          tripId: trip.id,
          todos: trip.todos
        }
        return todoObject
      })})
    })
  }
}

function addTodo(todo) {
  return {
    type: 'ADD_TODO',
    todo: todo
  }
}

export {
  fetchTodos,
  addTodo
}
