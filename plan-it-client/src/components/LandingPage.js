import React from 'react'
import { Form, Input, Button } from 'antd'
import { Link } from 'react-router-dom'
import LoginNav from './LoginNav'

function LandingPage(props) {
  return (
    <div style={{ backgroundColor: '#5d9cec', minHeight: '100vh'  }}>
      <LoginNav setUser={props.setUser} />
      <img src="./plan-it.jpg" alt=""/>
      <div>
        <Link to={"/signup"}>
          <Button>
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage
