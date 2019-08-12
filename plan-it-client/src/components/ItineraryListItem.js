import React from 'react'
import { List } from 'antd'
import moment from 'moment'

function ItineraryListItem(props) {
  const flyingFromId = props.itinerary.itinerary_destinations.filter(itin => itin.from === true)[0].destination_id
  const flyingFrom = props.itinerary.destinations.filter(destination => destination.id === flyingFromId)[0]
  const flyingToId = props.itinerary.itinerary_destinations.filter(itin => itin.from === false)[0].destination_id
  const flyingTo = props.itinerary.destinations.filter(destination => destination.id === flyingToId)[0]

  return (
    <List.Item>
      <List.Item.Meta
        title={`${flyingFrom.city} to ${flyingTo.city}`}
        description={`Departure: ${moment(props.itinerary.departure).format('LLL')} - Arrival: ${moment(props.itinerary.arrival).format('LLL')}`}
      />
    </List.Item>
  )
}

export default ItineraryListItem
