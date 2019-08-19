import React from 'react'
import { List } from 'antd'
import { connect } from 'react-redux'

function CommentListItem(props) {
  const author = props.users[props.comment.author_id]

  return (
    <List.Item>
      <List.Item.Meta
        title={author.full_name}
        description={props.comment.content}
      />
    </List.Item>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(CommentListItem)
