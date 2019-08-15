import React from 'react'
import UserListItem from '../components/UserListItem'
import { connect } from 'react-redux'
import { List, Card } from 'antd'

function UserList(props) {
  const trip = props.trips.filter(trip => trip.id === props.selectedTrip)[0]

  function renderUsers() {
    return (
      <Card title="People" style={{ width: '100%' }}>
        <List
          itemLayout="horizontal"
          dataSource={trip.users}
          renderItem={user => (
            <UserListItem key={user.id} user={user} />
          )}
        />
      </Card>
    )
  }

  return (
    <div>
      {renderUsers()}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    trips: state.trips
  }
}

export default connect(mapStateToProps)(UserList)
