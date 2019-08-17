import React from 'react'
import NavBar from '../components/NavBar'
import TripContainer from './TripContainer'

class MainContainer extends React.Component {
  componentDidMount(){
    const user_id = localStorage.user_id

    if (user_id) {
      this.props.autoLoginUser(user_id)
    }
  }

  render() {
    return (
      <div>
        <NavBar logout={this.props.logout} />
        <TripContainer currentUserId={this.props.currentUserId} />
      </div>
    )
  }
}

export default MainContainer
