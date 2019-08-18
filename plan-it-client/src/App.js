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
    currentUserId: null,
    loginPage: {
      style: { paddingTop: '16%', paddingLeft: '30%', paddingRight: '30%' },
      showText: true,
      layout: ''
    },
    loginHome: {
      style: { float: 'right', padding: '1%' },
      showText: false,
      layout: 'inline'
    }
  }

  autoLoginUser = (user_id) => {
    this.setState({
      currentUserId: user_id
    }, () => {
      this.props.fetchUser(this.state.currentUserId)
      this.props.fetchTrips(this.state.currentUserId)
      this.props.fetchDestinations()
      this.props.fetchTodos(this.state.currentUserId)
      this.props.fetchExpenses(this.state.currentUserId)
      this.props.fetchComments(this.state.currentUserId)
      this.props.fetchItineraries(this.state.currentUserId)
    })
  }

  setUser = (user) => {
    this.setState({
      currentUserId: user.id
    }, () => {
      localStorage.user_id = user.id
      this.props.history.push("/app/home")
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
          <Route exact path="/" render={(routerProps) => <LandingPage {...routerProps} setUser={this.setUser} loginProps={this.state.loginHome} />} />
          <Route path="/login" render={(routerProps) => <LoginForm {...routerProps} setUser={this.setUser} loginProps={this.state.loginPage} />} />
          <Route path="/signup" render={(routerProps) => <SignupForm {...routerProps} setUser={this.setUser} />} />
          <Route path="/home" render={(routerProps) => <MainContainer {...routerProps} autoLoginUser={this.autoLoginUser} logout={this.logout} />} />
        </Switch>
      </div>
    )
  }
}

export default connect(null, {fetchTrips: fetchTrips, fetchItineraries: fetchItineraries, fetchUser: fetchUser, fetchTodos: fetchTodos, fetchComments: fetchComments, fetchExpenses: fetchExpenses, fetchDestinations: fetchDestinations})(App)
