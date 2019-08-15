import React from 'react'
import { List, Card } from 'antd'
import { connect } from 'react-redux'
import ItineraryListItem from '../components/ItineraryListItem'
import ItineraryForm from '../components/ItineraryForm'

function ItineraryList(props) {
  const userItinerary = props.itineraries.filter(itinerary => itinerary.user_trip.trip_id === props.selectedTrip)

  function renderItineraries() {
    return (
      <Card title="Itinerary" style={{ width: '100%' }}>
        <List
          itemLayout="horizontal"
          dataSource={userItinerary}
          renderItem={itinerary => (
            <ItineraryListItem key={itinerary.id} itinerary={itinerary} tripId={props.selectedTrip}/>
          )}
        />
        <ItineraryForm tripId={props.selectedTrip} />
      </Card>
    )
  }

  return (
    <div>
      {renderItineraries()}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    itineraries: state.itineraries
  }
}

export default connect(mapStateToProps)(ItineraryList)
