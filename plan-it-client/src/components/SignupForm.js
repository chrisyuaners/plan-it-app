import React from 'react'
import { Link } from 'react-router-dom'
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
      <div style={{ paddingTop: '7%', paddingLeft: '30%', paddingRight: '30%' }}>
        <h1>Sign Up</h1>
        <h3>Get hyped planning your next trip!</h3>
        <h2><span role="img" aria-label="Close">🤠🎉</span></h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            <Input name="fullName" onChange={this.handleChange} value={this.state.fullName} placeholder="Full Name" />
          </Form.Item>
          <Form.Item>
            <Input name="email" onChange={this.handleChange} value={this.state.email} placeholder="Email" />
          </Form.Item>
          <Form.Item>
            <Input name="username" onChange={this.handleChange} value={this.state.username} placeholder="Username" />
          </Form.Item>
          <Form.Item>
            <Input.Password name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Input.Password name="passwordConfirmation" onChange={this.handleChange} value={this.state.passwordConfirmation} placeholder="Confirm Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Start Planning
            </Button>
          </Form.Item>
        </Form>
        <Link to={"/login"}>
          <a href="/">or login if you already know what it is</a>
        </Link>
      </div>
    )
  }
}

export default SignupForm
