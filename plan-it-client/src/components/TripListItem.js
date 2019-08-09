import React from 'react'
import { List } from 'antd'
import moment from 'moment'

class TripListItem extends React.Component {
  render() {
    const { start_date, end_date, title, id } = this.props.trip

    return (
      <List.Item onClick={() => this.props.selectTrip(id)}>
        <List.Item.Meta
          title={title}
          description={`${moment(start_date).format('LL')} - ${moment(end_date).format('LL')}`}
        />
      </List.Item>
    )
  }
}

export default TripListItem
