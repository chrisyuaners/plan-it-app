import React from 'react'
import { connect } from 'react-redux'

function TripList(props){
  function renderTrips(){
    return null
  }

  return (
    <div>
      {renderTrips()}
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    trips: state.trips
  }
}

export default connect(mapStateToProps)(TripList)
