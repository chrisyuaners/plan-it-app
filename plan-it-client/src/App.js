import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import SignupForm from './components/SignupForm'
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
        <Switch>
          <Route path="/signup" component={SignupForm} />
          <Route path="/home" render={(routerProps) => <MainContainer {...routerProps} trips={this.props.trips}/>} />
        </Switch>
      </div>
    )
  }
}

export default connect(null, {fetchTrips: fetchTrips, fetchItineraries: fetchItineraries, fetchUser: fetchUser, fetchTodos: fetchTodos, fetchComments: fetchComments, fetchExpenses: fetchExpenses, fetchDestinations: fetchDestinations})(App)
