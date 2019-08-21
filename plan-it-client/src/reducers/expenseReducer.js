const defaultState = {}

function expenseReducer(state=defaultState, action) {
  switch(action.type) {
    case 'FETCH_TRIPS':
      let expenseData = action.normalizedData.entities.expenses
      if (!expenseData) {
        expenseData = {}
      }
      return expenseData
    case 'REMOVE_TRIP':
      const expensesToDelete = action.tripObject.trip.expenses
      const expensesForRemoval = {...state}

      expensesToDelete.map(expense => delete expensesForRemoval[expense])

      return expensesForRemoval
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
