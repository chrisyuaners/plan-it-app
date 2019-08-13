import React from 'react'
import { Button, Modal, Form, Input, DatePicker } from 'antd'

class ItineraryForm extends React.Component {
  state = {
    showModal: false,
    departure: '',
    arrival: '',
    address: ''
  }

  handleDepartureChange = (date, dateString) => {
    this.setState({
      departure: dateString
    })
  }

  handleArrivalChange = (date, dateString) => {
    this.setState({
      arrival: dateString
    })
  }

  handleAddressChange = (event) => {
    this.setState({
      address: event.target.value
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

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Add
        </Button>
        <Modal
          title="New Itinerary"
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
            <Form.Item label="Departure">
              <DatePicker showTime name="departure" onChange={this.handleDepartureChange} />
            </Form.Item>
            <Form.Item label="Arrival">
              <DatePicker showTime name="arrival" onChange={this.handleArrivalChange} />
            </Form.Item>
            <Form.Item label="Address">
              <Input name="address" onChange={this.handleAddressChange} value={this.state.address}/>
            </Form.Item>
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

export default ItineraryForm
