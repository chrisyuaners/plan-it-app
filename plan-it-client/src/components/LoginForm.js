import React from 'react'
import { Form, Input, Button } from 'antd'

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch('http://localhost:3000/api/v1/login', {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        "Accepts": 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then(res => res.json())
    .then(response => {
      if (response.errors) {
        alert(response.errors)
      } else {
        this.props.setUser(response)
      }
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item label="Username">
          <Input name="username" onChange={this.handleChange} value={this.state.username} />
        </Form.Item>
        <Form.Item label="Password">
          <Input.Password name="password" onChange={this.handleChange} value={this.state.password} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

export default LoginForm
