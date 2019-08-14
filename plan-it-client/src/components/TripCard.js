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
    fetch(`http://localhost:3000/api/v1/trips/${this.props.selectedTrip}`, {
      method: "DELETE",
      headers: {
        "Content-Type": 'application/json',
        "Accepts": 'application/json'
      },
      body: JSON.stringify({
        id: this.props.selectedTrip
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

  handleSubmit = (event) => {
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
            <Popconfirm title="Delete this trip?" onConfirm={this.removeTrip} cancelText="No">
              <Icon type="delete" key="delete"/>
            </Popconfirm>,
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
            <Form onSubmit={this.handleSubmit}>
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
  return {
    trips: state.trips
  }
}

export default connect(mapStateToProps, { removeTrip: removeTrip, editTrip: editTrip })(TripCard)
