import React from 'react'
import { connect } from 'react-redux'
import { removeTrip, editTrip } from '../actions/tripActions'
import { Card, Typography, Icon, Popconfirm, Modal, Button, Form, Input } from 'antd'

class TripCard extends React.Component {
  state = {
    showModal: false,
    title: this.props.trips.filter(trip => trip.id === this.props.selectedTrip)[0].title,
    description: this.props.trips.filter(trip => trip.id === this.props.selectedTrip)[0].description
  }

  removeTrip = () => {
    const userTripId = this.props.userTrips.filter(userTrip => userTrip.trip_id === this.props.selectedTrip)[0].id
    console.log(userTripId)

    fetch(`http://localhost:3000/api/v1/trips/${this.props.selectedTrip}`, {
      method: "DELETE",
      headers: {
        "Content-Type": 'application/json',
        "Accepts": 'application/json'
      },
      body: JSON.stringify({
        id: this.props.selectedTrip,
        userTripId: userTripId
      })
    })
    .then(res => res.json())
    .then(trip => {
      this.props.showDeleteMessage()
      this.props.setSelectedTripToNull()
      this.props.removeTrip(trip.id)
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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  editTrip = (event) => {
    event.preventDefault()

    fetch(`http://localhost:3000/api/v1/trips/${this.props.selectedTrip}`, {
      method: "PATCH",
      headers: {
        "Content-Type": 'application/json',
        "Accepts": 'application/json'
      },
      body: JSON.stringify({
        id: this.props.selectedTrip,
        title: this.state.title,
        description: this.state.description
      })
    })
    .then(res => res.json())
    .then(updatedTrip => {
      this.props.editTrip(updatedTrip)

      this.hideModal()
    })
  }

  render() {
    const { Title, Text } = Typography
    const { TextArea } = Input
    const trip = this.props.trips.filter(trip => trip.id === this.props.selectedTrip)[0]

    return (
      <div>
        <Card
          actions={[
            <Icon type="edit" key="edit" onClick={this.showModal} />,
            <div>
              {trip.creator_id === parseInt(this.props.currentUserId) ? <Popconfirm title="Delete this trip?" onConfirm={this.removeTrip} cancelText="No">
                <Icon type="delete" key="delete"/>
              </Popconfirm> : <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />}
            </div>
          ]}
        >
          <Title>{trip.title}</Title>
          <Text>{trip.description}</Text>
          <Modal
            title="Edit Trip"
            visible={this.state.showModal}
            onOk={null}
            onCancel={this.hideModal}
            footer={[
              <Button key="back" onClick={this.hideModal} type="danger">
                Cancel
              </Button>
            ]}
          >
            <Form onSubmit={this.editTrip}>
              <Form.Item label="Title">
                <Input name="title" onChange={this.handleChange} value={this.state.title} />
              </Form.Item>
              <Form.Item label="Description">
                <TextArea name="description" onChange={this.handleChange} value={this.state.description} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const trips = state.result.map(result => state.trips[result])
  const userTrips = state.users[state.currentUserId].user_trips.map(userTrip => state.userTrips[userTrip])
  return {
    currentUserId: state.currentUserId,
    trips: trips,
    userTrips: userTrips
  }
}

export default connect(mapStateToProps, { removeTrip: removeTrip, editTrip: editTrip })(TripCard)
