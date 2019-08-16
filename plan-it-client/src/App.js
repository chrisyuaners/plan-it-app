import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
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
    currentUserId: null
  }

  autoLoginUser = (user_id) => {
    this.setState({
      currentUserId: user_id
    }, () => {
      this.props.fetchUser(this.state.currentUserId)
      this.props.fetchDestinations()
      this.props.fetchTrips(this.state.currentUserId)
      this.props.fetchItineraries(this.state.currentUserId)
      this.props.fetchComments(this.state.currentUserId)
      this.props.fetchTodos(this.state.currentUserId)
      this.props.fetchExpenses(this.state.currentUserId)
    })
  }

  setUser = (user) => {
    this.setState({
      currentUserId: user.id
    }, () => {
      localStorage.user_id = user.id
      this.props.history.push("/home")
    })
  }

  logout = () => [
    this.setState({
      currentUserId: null
    }, () => {
      localStorage.removeItem("user_id")
      this.props.history.push("/login")
    })
  ]

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={(routerProps) => <LandingPage {...routerProps} setUser={this.setUser} />} />
          <Route path="/login" render={(routerProps) => <LoginForm {...routerProps} setUser={this.setUser} />} />
          <Route path="/signup" render={(routerProps) => <SignupForm {...routerProps} setUser={this.setUser} />} />
          <Route path="/home" render={(routerProps) => <MainContainer {...routerProps} currentUserId={this.state.currentUserId} autoLoginUser={this.autoLoginUser} />} />
        </Switch>
      </div>
    )
  }
}

export default connect(null, {fetchTrips: fetchTrips, fetchItineraries: fetchItineraries, fetchUser: fetchUser, fetchTodos: fetchTodos, fetchComments: fetchComments, fetchExpenses: fetchExpenses, fetchDestinations: fetchDestinations})(App)
