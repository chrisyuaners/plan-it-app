const defaultState = []

function expenseReducer(state=defaultState, action) {
  switch(action.type) {
    case 'FETCH_EXPENSES':
      return action.expenses
    default:
      return state
  }
}

export default expenseReducer
