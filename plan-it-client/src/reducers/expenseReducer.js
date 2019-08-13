const defaultState = []

function expenseReducer(state=defaultState, action) {
  switch(action.type) {
    case 'FETCH_EXPENSES':
      return action.expenses
    case 'ADD_EXPENSE':
    const tripExpenses = [...state].filter(tripExpense => tripExpense.tripId === action.tripId)[0]

    tripExpenses.expenses.push(action.newExpense)

    const updatedTripExpenses = [...state].map(tripExpense => {
      if (tripExpense.tripId !== action.tripId) {
        return tripExpense
      }

      return {
        ...tripExpense,
        ...tripExpenses
      }
    })

    return updatedTripExpenses
    default:
      return state
  }
}

export default expenseReducer
