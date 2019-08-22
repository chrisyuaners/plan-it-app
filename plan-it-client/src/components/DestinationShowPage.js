import React from 'react'
import Map from './Map'

function DestinationShowPage(props) {
  return (
    <div>
      <div>
        <h1>{props.destination.city}</h1>
        <h2>{props.destination.country}</h2>
      </div>
      <div>
        <p>{props.destination.description}</p>
      </div>
      <Map destination={`${props.destination.city} ${props.destination.country}`}/>
    </div>
  )
}

export default DestinationShowPage
