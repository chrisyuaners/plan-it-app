import React from 'react'
import { connect } from 'react-redux'
import CommentListItem from '../components/CommentListItem'
import CommentForm from '../components/CommentForm'
import { List, Card } from 'antd'

function CommentList(props) {
  const trip = props.trips.filter(trip => trip.id === props.selectedTrip)[0]
  const currentUser = trip.users.filter(user => user.id === props.userId)[0]

  return (
    <Card title="Comments" style={{ width: 350 }}>
      <List
        itemLayout="horizontal"
        dataSource={trip.comments}
        renderItem={comment => (
          <CommentListItem key={comment.id} comment={comment} />
        )}
      />
      <CommentForm tripId={trip.id} currentUser={currentUser} />
    </Card>
  )
}

const mapStateToProps = (state) => {
  return {
    trips: state.trips,
    userId: state.currentUser
  }
}

export default connect(mapStateToProps)(CommentList)
