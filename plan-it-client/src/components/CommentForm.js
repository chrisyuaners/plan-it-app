import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button } from 'antd'
import { addComment } from '../actions/commentActions'

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
        author: this.props.currentUser.name
      })
    })
    .then(res => res.json())
    .then(comment => {
      this.props.addComment(this.props.tripId, comment)

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

export default connect(null, {addComment: addComment})(CommentForm)
