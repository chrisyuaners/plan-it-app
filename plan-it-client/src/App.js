import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import MainContainer from './containers/MainContainer'
import { setTrips } from './actions/tripActions'
import { setItineraries } from './actions/itineraryActions'

class App extends React.Component {
  state = {
    userId: 1
  }

  componentDidMount(){
    this.fetchUser()
  }

  fetchUser() {
    fetch(`http://localhost:3000/api/v1/users/${this.state.userId}`)
    .then(res => res.json())
    .then(user => {
      this.props.setTrips(user.trips)
      this.props.setItineraries(user.itineraries)
    })
  }

  render() {
    return (
      <div className="App">
        <MainContainer trips={this.props.trips}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    trips: state.trips,
    itineraries: state.itineraries
  }
}

export default connect(mapStateToProps, {setTrips: setTrips, setItineraries: setItineraries})(App)
