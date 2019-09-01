import React from 'react'
import { connect } from 'react-redux'
import { Form, Button, Modal } from 'antd'

class UserForm extends React.Component {
  state = {
    usersToAdd: [],
    userSelection: []
  }

  componentDidMount() {
    const trip = this.props.trips[this.props.selectedTrip]
    const tripUsers = trip.users.map(user => this.props.users[user])
    const allUsers = Object.keys(this.props.users).map(user => this.props.users[user])
    const userSelection = allUsers.filter(user => !tripUsers.includes(user))

    this.setState({
      userSelection: userSelection
    })
  }

  showModal = () => {
    this.setState({
      showModal: true,
    })
  }

  hideModal = () => {
    this.setState({
      showModal: false,
    })
  }

  renderUsers = () => {
    return this.state.userSelection.map(user => {
      return (
        <div key={user.id} onClick={(event) => this.addUser(event, user)}>
          <h4>{user.full_name}</h4>
        </div>
      )
    })
  }

  addUser = (event, user) => {
    console.log(event.target)
    this.setState({
      usersToAdd: [...this.state.usersToAdd, user]
    })
  }

  render() {
    console.log(this.state.usersToAdd)
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Add
        </Button>
        <Modal
          title="Add People"
          visible={this.state.showModal}
          onOk={null}
          onCancel={this.hideModal}
          footer={[
            <Button key="back" onClick={this.hideModal} type="danger">
              Cancel
            </Button>
          ]}
        >
        <Form onSubmit={this.handleSubmit}>
          {this.state.showError ? this.renderValidateStatus() : null}
          {this.renderUsers()}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    trips: state.trips
  }
}

export default connect(mapStateToProps)(UserForm)
