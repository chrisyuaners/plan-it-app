import React from 'react'
import { connect } from 'react-redux'
import { Avatar } from 'antd'

function Profile(props) {
  return (
    <div>
      <div>
        <Avatar size={86} src={`/icons/${props.currentUser.avatar}`} />
        <h1>{props.currentUser.name}</h1>
        <h2>{props.currentUser.email}</h2>
      </div>
      <div>
        
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Profile)
