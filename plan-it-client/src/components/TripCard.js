import React from 'react'
import { Card, Icon, Avatar } from 'antd'

class TripCard extends React.Component {
  render() {
    const { Meta } = Card

    return (
      <div>
        <Card
          style={{ minWidth: '100vh'}}
          cover={
            <img
              alt="example"
              src="https://s26561.pcdn.co/wp-content/uploads/2019/03/Weekend-Getaways-in-Colorado-1200x800.jpg"
              style={{ maxHeight: '700px' }}
            />
          }
          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
        >
          <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      </div>
    )
  }
}

export default TripCard
