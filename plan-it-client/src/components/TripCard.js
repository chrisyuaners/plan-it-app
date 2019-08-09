import React from 'react'
import { connect } from 'react-redux'
import { Card, Typography } from 'antd'

class TripCard extends React.Component {
  render() {
    const { Title, Text } = Typography
    const trip = this.props.trips.filter(trip => trip.id === this.props.selectedTrip)[0]

    return (
      <div>
        <Card>
          <Title>{trip.title}</Title>
          <Text>{trip.description}</Text>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    trips: state.trips
  }
}

export default connect(mapStateToProps)(TripCard)
