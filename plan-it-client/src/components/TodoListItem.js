import React from 'react'
import { List } from 'antd'

function TodoListItem(props) {
  return (
    <List.Item>
      <List.Item.Meta
        description={props.todo.content}
      />
    </List.Item>
  )
}

export default TodoListItem
