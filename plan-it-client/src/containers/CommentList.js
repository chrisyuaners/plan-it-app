import React from 'react'
import { connect } from 'react-redux'
import CommentListItem from '../components/CommentListItem'
import CommentForm from '../components/CommentForm'
import { List, Card } from 'antd'

function CommentList(props) {
  const tripComments = props.comments.filter(comment => comment.tripId === props.selectedTrip)[0]

  return (
    <Card title="Comments" style={{ width: '100%' }}>
      <List
        itemLayout="horizontal"
        dataSource={tripComments.comments}
        renderItem={comment => (
          <CommentListItem key={comment.id} comment={comment} />
        )}
      />
      <CommentForm tripId={props.selectedTrip} currentUser={props.currentUser} />
    </Card>
  )
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(CommentList)
