import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import MainContainer from './containers/MainContainer'
import { fetchTrips } from './actions/tripActions'
import { fetchUser } from './actions/userActions'
import { fetchItineraries } from './actions/itineraryActions'
import { fetchTodos } from './actions/todoActions'
import { fetchComments } from './actions/commentActions'
import { fetchExpenses } from './actions/expenseActions'
import { fetchDestinations } from './actions/destinationActions'

class App extends React.Component {
  state = {
    userId: 1
  }

  componentDidMount(){
    this.props.fetchUser(this.state.userId)
    this.props.fetchDestinations()
    this.props.fetchTrips(this.state.userId)
    this.props.fetchItineraries(this.state.userId)
    this.props.fetchTodos(this.state.userId)
    this.props.fetchComments(this.state.userId)
    this.props.fetchExpenses(this.state.userId)
  }

  render() {
    return (
      <div className="App">
        <MainContainer trips={this.props.trips}/>
      </div>
    )
  }
}

export default connect(null, {fetchTrips: fetchTrips, fetchItineraries: fetchItineraries, fetchUser: fetchUser, fetchTodos: fetchTodos, fetchComments: fetchComments, fetchExpenses: fetchExpenses, fetchDestinations: fetchDestinations})(App)
