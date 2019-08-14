import React from 'react'
import { connect } from 'react-redux'
import { Button, Modal, Form, Input, DatePicker, Select } from 'antd'

class ItineraryForm extends React.Component {
  state = {
    showModal: false,
    destination: null,
    departure: '',
    arrival: '',
    address: '',
    cities: this.props.destinations.citiesByCountry[this.props.destinations.countries[0]],
    secondCity: this.props.destinations.citiesByCountry[this.props.destinations.countries[0]][0]
  }

  handleCountryChange = value => {
    this.setState({
      cities: this.props.destinations.citiesByCountry[value],
      secondCity: this.props.destinations.citiesByCountry[value][0],
    })
  }

  onSecondCityChange = value => {
    this.setState({
      secondCity: value,
    })
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
  handleDestinationChange = () => {
    this.setState({
      destination: {}
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

  handleSubmit = (event) => {
    event.preventDefault()

    fetch('http://localhost:3000/api/v1/itineraries', {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        "Accepts": 'application/json'
      },
      body: JSON.stringify({
        departure: this.state.departure,
        arrival: this.state.arrival,
        address: this.state.address,
        user_trip_id: this.props.user_trips.filter(userTrip => userTrip.trip_id === this.props.tripId)[0].id
      })
    })
  }

  render() {
    const { Option } = Select

    console.log(this.state.cities, this.state.secondCity)

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
            <Form.Item label="Destination">
              <Select
                defaultValue={this.props.destinations.countries[0]}
                style={{ width: 150 }}
                onChange={this.handleCountryChange}
              >
                {this.props.destinations.countries.map(country => (
                  <Option key={country}>{country}</Option>
                ))}
              </Select>
              <Select
                style={{ width: 150 }}
                value={this.state.secondCity}
                onChange={this.onSecondCityChange}
              >
                {this.state.cities.map(city => (
                  <Option key={city}>{city}</Option>
                ))}
              </Select>
            </Form.Item>
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

const mapStateToProps = (state) => {
  return {
    user_trips: state.currentUser.user_trips,
    destinations: state.destinations
  }
}

export default connect(mapStateToProps)(ItineraryForm)
