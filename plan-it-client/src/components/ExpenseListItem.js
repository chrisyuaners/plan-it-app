import React from 'react'
import { List } from 'antd'

function ExpenseListItem(props) {
  const numberFormat = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'USD'
  }).format(value)

  return (
    <List.Item>
      <List.Item.Meta
        title={props.expense.item}
        description={numberFormat(props.expense.cost)}
      />
    </List.Item>
  )
}

export default ExpenseListItem
