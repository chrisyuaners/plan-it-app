import React from 'react'
import { connect } from 'react-redux'
import { List, Button } from 'antd'
import { removeTodo } from '../actions/todoActions'

function TodoListItem(props) {
  function handleClick() {
    fetch(`http://localhost:3000/api/v1/todos/${props.todo.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": 'application/json',
        "Accepts": 'application/json'
      },
      body: JSON.stringify({
        id: props.todo.id
      })
    })
    .then(res => res.json())
    .then(todo => {
      props.removeTodo(props.tripId, todo.id)
    })
  }

  return (
    <List.Item style={{ display: 'flex' }}>
      <List.Item.Meta
        description={props.todo.content}
      /> <Button onClick={handleClick} type="danger" icon="close" />
    </List.Item>
  )
}

export default connect(null, { removeTodo: removeTodo })(TodoListItem)
