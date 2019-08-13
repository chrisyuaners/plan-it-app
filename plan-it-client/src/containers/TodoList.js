import React from 'react'
import TodoListItem from '../components/TodoListItem'
import TodoForm from '../components/TodoForm'
import { connect } from 'react-redux'
import { List, Card } from 'antd'

function TodoList(props) {
  const tripTodos = props.todos.filter(todo => todo.tripId === props.selectedTrip)[0]

  function renderTodos() {
    return (
      <Card title="Todos" style={{ width: 350 }}>
        <List
          itemLayout="horizontal"
          dataSource={tripTodos.todos}
          renderItem={todo => (
            <TodoListItem key={todo.id} todo={todo} tripId={props.selectedTrip} />
          )}
        />
        <TodoForm tripId={props.selectedTrip} />
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
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoList)
