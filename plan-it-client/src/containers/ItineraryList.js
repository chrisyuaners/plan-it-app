import React from 'react'
import { List, Card } from 'antd'
import { connect } from 'react-redux'
import ItineraryListItem from '../components/ItineraryListItem'

function ItineraryList(props) {
  const userItinerary = props.itineraries.filter(itinerary => itinerary.user_trip.trip_id === props.selectedTrip)

  function renderItineraries() {
    return (
      <Card title="Itinerary" style={{ width: 350 }}>
        <List
          itemLayout="horizontal"
          dataSource={userItinerary}
          renderItem={itinerary => (
            <ItineraryListItem key={itinerary.id} itinerary={itinerary}/>
          )}
        />
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
