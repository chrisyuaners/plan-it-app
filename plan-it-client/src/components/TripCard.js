import React from 'react'
import { connect } from 'react-redux'
import { removeTrip } from '../actions/tripActions'
import { Card, Typography, Icon } from 'antd'

class TripCard extends React.Component {
  removeTrip = () => {
    fetch(`http://localhost:3000/api/v1/trips/${this.props.selectedTrip}`, {
      method: "DELETE",
      headers: {
        "Content-Type": 'application/json',
        "Accepts": 'application/json'
      },
      body: JSON.stringify({
        id: this.props.selectedTrip
      })
    })
    .then(res => res.json())
    .then(trip => {
      this.props.setSelectedTripToNull()
      this.props.removeTrip(trip.id)
    })
  }

  render() {
    const { Title, Text } = Typography
    const trip = this.props.trips.filter(trip => trip.id === this.props.selectedTrip)[0]

    return (
      <div>
        <Card
        actions={[
          <Icon type="edit" key="edit" />,
          <Icon type="delete" key="delete" onClick={this.removeTrip} />,
        ]}
        >
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

export default connect(mapStateToProps, { removeTrip: removeTrip })(TripCard)
