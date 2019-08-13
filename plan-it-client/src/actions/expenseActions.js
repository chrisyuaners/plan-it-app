function fetchExpenses(userId) {
  return function(dispatch) {
    fetch(`http://localhost:3000/api/v1/users/${userId}`)
    .then(res => res.json())
    .then(user => {
      dispatch({type: 'FETCH_EXPENSES', expenses: user.trips.map(trip => {
        const commentObject = {
          tripId: trip.id,
          expenses: trip.expenses
        }
        return commentObject
      })})
    })
  }
}

function addExpense(tripId, newExpense) {
  return {
    type: 'ADD_EXPENSE',
    tripId: tripId,
    newExpense: newExpense
  }
}

function removeExpense(tripId, expenseId) {
  return {
    type: 'REMOVE_EXPENSE',
    tripId: tripId,
    expenseId: expenseId
  }
}

export {
  fetchExpenses,
  addExpense,
  removeExpense
}
