import React from 'react'
import { List, Avatar } from 'antd'
import moment from 'moment'

class TripListItem extends React.Component {
  render() {
    const { start_date, end_date, title } = this.props.trip

    return (
      <React.Fragment style={{ padding: '1%' }}>
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="./icons/002-dinosaur.svg" />}
            title={title}
            description={`${moment(start_date).format('LL')} - ${moment(end_date).format('LL')}`}
          />
        </List.Item>
      </React.Fragment>
    )
  }
}

export default TripListItem
