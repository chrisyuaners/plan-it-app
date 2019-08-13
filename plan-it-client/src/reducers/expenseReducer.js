const defaultState = []

function expenseReducer(state=defaultState, action) {
  switch(action.type) {
    case 'FETCH_EXPENSES':
      return action.expenses
    case 'ADD_EXPENSE':
      const addToTripExpenses = [...state].filter(tripExpense => tripExpense.tripId === action.tripId)[0]

      addToTripExpenses.expenses.push(action.newExpense)

      const updatedTripExpenses = [...state].map(tripExpense => {
        if (tripExpense.tripId !== action.tripId) {
          return tripExpense
        }

        return {
          ...tripExpense,
          ...addToTripExpenses
        }
      })

      return updatedTripExpenses
    case 'REMOVE_EXPENSE':
      const removeFromTripExpenses = [...state].filter(tripExpense => tripExpense.tripId === action.tripId)[0]
      console.log(action.tripId)
      removeFromTripExpenses.expenses = removeFromTripExpenses.expenses.filter(expense => expense.id !== action.expenseId)

      const updatedTripExpensesWithRemove = [...state].map(tripExpense => {
        if (tripExpense.tripId !== action.tripId) {
          return tripExpense
        }

        return {
          ...tripExpense,
          ...removeFromTripExpenses
        }
      })

      return updatedTripExpensesWithRemove
    default:
      return state
  }
}

export default expenseReducer
