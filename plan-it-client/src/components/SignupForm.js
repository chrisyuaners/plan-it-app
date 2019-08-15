import React from 'react'
import { Form, Input, Button } from 'antd'

class SignupForm extends React.Component {
  state = {
    fullName: '',
    email: '',
    username: '',
    password: '',
    passwordConfirmation: '',
    avatar: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.password === this.state.passwordConfirmation) {
      fetch('http://localhost:3000/api/v1/signup', {
        method: "POST",
        headers: {
          "Content-Type": 'application/json',
          "Accepts": 'application/json'
        },
        body: JSON.stringify({
          full_name: this.state.fullName,
          email: this.state.email,
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
    } else {
      alert("Passwords don't match")
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item label="Full Name">
          <Input name="fullName" onChange={this.handleChange} value={this.state.fullName} />
        </Form.Item>
        <Form.Item label="Email">
          <Input name="email" onChange={this.handleChange} value={this.state.email} />
        </Form.Item>
        <Form.Item label="Username">
          <Input name="username" onChange={this.handleChange} value={this.state.username} />
        </Form.Item>
        <Form.Item label="Password">
          <Input.Password name="password" onChange={this.handleChange} value={this.state.password} />
        </Form.Item>
        <Form.Item label="Confirm Password">
          <Input.Password name="passwordConfirmation" onChange={this.handleChange} value={this.state.passwordConfirmation} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

export default SignupForm
