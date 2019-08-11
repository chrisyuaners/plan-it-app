import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button } from 'antd'

class CommentForm extends React.Component {
  state = {
    newComment: ''
  }

  handleChange = (event) => {
    this.setState({
      newComment: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch('http://localhost:3000/api/v1/comments', {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        "Accepts": 'application/json'
      },
      body: JSON.stringify({
        content: this.state.newComment,
        trip_id: this.props.tripId,
        author: this.props.currentUser.full_name
      })
    })
    .then(res => res.json())
    .then(comment => {
      const trip = this.props.trips.filter(trip => trip.id === this.props.tripId)[0]

      trip.comments.push(comment)

      this.setState({
        newComment: ''
      })
    })
  }

  render() {
    const { TextArea } = Input

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            <TextArea rows={2} name="newComment" onChange={this.handleChange} value={this.state.newComment}/>
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

const mapStateToProps = (state) => {
  return {
    trips: state.trips
  }
}

export default connect(mapStateToProps)(CommentForm)
