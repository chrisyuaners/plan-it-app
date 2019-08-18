import React from 'react'
import NavBar from '../components/NavBar'
import Profile from '../components/Profile'
import TripContainer from './TripContainer'
import { Route, Switch } from 'react-router-dom'

class MainContainer extends React.Component {
  componentDidMount() {
    const user_id = localStorage.user_id

    if (user_id) {
      this.props.autoLoginUser(user_id)
    }
  }

  render() {
    return (
      <div>
        <NavBar logout={this.props.logout} />
        <Switch>
          <Route exact path="/home" render={(routerProps) => <TripContainer />} />
          <Route path="/home/profile" render={(routerProps) => <Profile {...routerProps}/>} />
        </Switch>
      </div>
    )
  }
}

export default MainContainer
