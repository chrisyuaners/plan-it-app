import React from 'react'
import { List } from 'antd'

function CommentListItem(props) {
  return (
    <List.Item>
      <List.Item.Meta
        title={props.comment.author}
        description={props.comment.content}
      />
    </List.Item>
  )
}

export default CommentListItem
