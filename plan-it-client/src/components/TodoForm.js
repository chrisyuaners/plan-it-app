import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button } from 'antd'
import { addTodo } from '../actions/todoActions'

class TodoForm extends React.Component {
  state = {
    newTodo: ''
  }

  handleChange = (event) => {
    this.setState({
      newTodo: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch('http://localhost:3000/api/v1/todos', {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        "Accepts": 'application/json'
      },
      body: JSON.stringify({
        content: this.state.newTodo,
        trip_id: this.props.tripId
      })
    })
    .then(res => res.json())
    .then(todo => {
      this.props.addTodo(this.props.tripId, todo)

      this.setState({
        newTodo: ''
      })
    })
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            <Input name="newTodo" onChange={this.handleChange} value={this.state.newTodo}/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Enter
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default connect(null, { addTodo: addTodo })(TodoForm)
