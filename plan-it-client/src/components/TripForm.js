import React from 'react'
import { connect } from 'react-redux'
import { addTrip } from '../actions/tripActions'
import { Form, Button, Input, DatePicker, Alert } from 'antd'
import { fetchTodos } from '../actions/todoActions'
import { addUserTrip } from '../actions/userActions'
import { fetchComments } from '../actions/commentActions'
import { fetchExpenses } from '../actions/expenseActions'


class TripForm extends React.Component {
  state = {
    title: '',
    description: '',
    start_date: '',
    end_date: '',
    showError: false
}

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleDateChange = (date, dateString) => {
    this.setState({
      start_date: dateString[0],
      end_date: dateString[1]
    })
  }

  showError = () => {
    this.setState({
      showError: true
    })
  }

  hideError = () => {
    this.setState({
      showError: false
    })
  }

  renderValidateStatus = () => {
    return (
      <div>
        <Alert message="Please fill in all fields" type="error" showIcon/>
        <Button onClick={this.hideError}>
          Okay boss
        </Button>
      </div>
    )
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (!this.state.title || !this.state.description || !this.state.start_date || !this.state.end_date) {
      this.showError()
    } else {
      fetch('http://localhost:3000/api/v1/trips', {
        method: "POST",
        headers: {
          "Content-Type": 'application/json',
          "Accepts": 'application/json'
        },
        body: JSON.stringify({
          title: this.state.title,
          description: this.state.description,
          start_date: this.state.start_date,
          end_date: this.state.end_date,
          creator_id: this.props.currentUser.id
        })
      })
      .then(res => res.json())
      .then(newTrip => {
        this.props.addTrip(newTrip.trip)
        this.props.addUserTrip(newTrip.userTrip)
        this.props.fetchTodos(this.props.currentUser.id)
        this.props.fetchComments(this.props.currentUser.id)
        this.props.fetchExpenses(this.props.currentUser.id)

        this.setState({
          title: '',
          description: '',
          start_date: '',
          end_date: ''
        })

        this.props.hideForm()
      })
    }
  }

  render() {
    const { RangePicker } = DatePicker
    const { TextArea } = Input

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          {this.state.showError ? this.renderValidateStatus() : null}
          <Form.Item label="Title">
            <Input name="title" onChange={this.handleChange} value={this.state.title} />
          </Form.Item>
          <Form.Item label="Description">
            <TextArea name="description" onChange={this.handleChange} value={this.state.description} />
          </Form.Item>
          <Form.Item label="Dates">
            <RangePicker name="dates" onChange={this.handleDateChange}/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Plan It
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { addTrip: addTrip, fetchTodos: fetchTodos, fetchComments: fetchComments, fetchExpenses: fetchExpenses, addUserTrip: addUserTrip })(TripForm)
