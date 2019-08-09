import React from 'react'
import TodoListItem from '../components/TodoListItem'
import { connect } from 'react-redux'
import { List, Card } from 'antd'

function TodoList(props) {
  const trip = props.trips.filter(trip => trip.id === props.selectedTrip)[0]

  function renderTodos() {
    return (
      <Card title="Todos" style={{ width: 350 }}>
        <List
          itemLayout="horizontal"
          dataSource={trip.todos}
          renderItem={todo => (
            <TodoListItem key={todo.id} todo={todo} />
          )}
        />
      </Card>
    )
  }

  return (
    <div>
      {renderTodos()}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    trips: state.trips
  }
}

export default connect(mapStateToProps)(TodoList)
