import React from 'react'
import { connect } from 'react-redux'
import { List, Button } from 'antd'
import { removeItinerary } from '../actions/itineraryActions'
import moment from 'moment'

function ItineraryListItem(props) {
  const flyingFromId = props.itinerary.itinerary_destinations.filter(itin => itin.from === true)[0].destination_id
  const flyingFrom = props.itinerary.destinations.filter(destination => destination.id === flyingFromId)[0]
  const flyingToId = props.itinerary.itinerary_destinations.filter(itin => itin.from === false)[0].destination_id
  const flyingTo = props.itinerary.destinations.filter(destination => destination.id === flyingToId)[0]

  function handleClick() {
    fetch(`http://localhost:3000/api/v1/itineraries/${props.itinerary.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": 'application/json',
        "Accepts": 'application/json'
      },
      body: JSON.stringify({
        id: props.itinerary.id
      })
    })
    .then(res => res.json())
    .then(itinerary => {
      props.removeItinerary(itinerary.id)
    })
  }

  return (
    <List.Item>
      <List.Item.Meta
        title={`${flyingFrom.city} to ${flyingTo.city}`}
        description={`Departure: ${moment(props.itinerary.departure).format('LLL')} - Arrival: ${moment(props.itinerary.arrival).format('LLL')}`}
      />
      <Button onClick={handleClick} type="danger" icon="close" />
    </List.Item>
  )
}

export default connect(null, { removeItinerary: removeItinerary })(ItineraryListItem)
