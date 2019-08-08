import React from 'react'
import TripContainer from './TripContainer'


class MainContainer extends React.Component {
  render() {
    return (
      <div>
        <TripContainer trips={this.props.trips} />
      </div>
    )
  }
}

export default MainContainer
