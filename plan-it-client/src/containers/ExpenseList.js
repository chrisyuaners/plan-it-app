import React from 'react'
import ExpenseListItem from '../components/ExpenseListItem'
import { connect } from 'react-redux'
import { List, Card } from 'antd'

function ExpenseList(props) {
  const trip = props.trips.filter(trip => trip.id === props.selectedTrip)[0]

  function renderExpenses() {
    return (
      <Card title="Expenses" style={{ width: 350 }}>
        <List
          itemLayout="horizontal"
          dataSource={trip.expenses}
          renderItem={expense => (
            <ExpenseListItem key={expense.id} expense={expense} />
          )}
        />
      </Card>
    )
  }

  return (
    <div>
      {renderExpenses()}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    trips: state.trips
  }
}

export default connect(mapStateToProps)(ExpenseList)
