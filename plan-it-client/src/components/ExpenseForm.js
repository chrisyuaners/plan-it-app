import React from 'react'
import { connect } from 'react-redux'
import { addExpense } from '../actions/expenseActions'
import { Form, Input, InputNumber, Button } from 'antd'

class ExpenseForm extends React.Component {
  state ={
    item: '',
    cost: null,
    count: null
  }

  handleItemChange = (event) => {
    this.setState({
      item: event.target.value
    })
  }

  handleCostChange = (value) => {
    this.setState({
      cost: value
    })
  }

  handleCountChange = (value) => {
    this.setState({
      count: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch('http://localhost:3000/api/v1/expenses', {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        "Aceepts": 'application/json'
      },
      body: JSON.stringify({
        item: this.state.item,
        cost: this.state.cost,
        count: this.state.count,
        trip_id: this.props.tripId
      })
    })
    .then(res => res.json())
    .then(newExpense => {
      this.props.addExpense(this.props.tripId, newExpense)

      this.setState({
        item: '',
        cost: null,
        count: null
      })
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item label="Item">
          <Input name="item" onChange={this.handleItemChange} value={this.state.item}/>
        </Form.Item>
        <Form.Item label="Cost">
          <InputNumber name="cost" onChange={this.handleCostChange} value={this.state.cost} formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}/>
        </Form.Item>
        <Form.Item label="Count">
          <InputNumber name="count" onChange={this.handleCountChange} value={this.state.count}/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

export default connect(null, { addExpense: addExpense })(ExpenseForm)
