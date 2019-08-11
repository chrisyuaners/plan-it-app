import React from 'react'
import TripList from './TripList'
import TripCard from '../components/TripCard'
import UserList from './UserList'
import ExpenseList from './ExpenseList'
import TodoList from './TodoList'
import CommentList from './CommentList'
import { Layout, Empty, Button } from 'antd'

class TripContainer extends React.Component {
  state = {
    selectedTrip: null
  }

  selectTrip = (tripId) => {
    this.setState({
      selectedTrip: tripId
    })
  }

  renderTrip = () => {
    return (
      <div>
        <div>
          <TripCard selectedTrip={this.state.selectedTrip} />
        </div>
        <div>
          <UserList selectedTrip={this.state.selectedTrip} />
        </div>
        <div>
          <ExpenseList selectedTrip={this.state.selectedTrip} />
        </div>
        <div>
          <TodoList selectedTrip={this.state.selectedTrip} />
        </div>
        <div>
          <CommentList selectedTrip={this.state.selectedTrip} />
        </div>
      </div>
    )
  }

  renderEmpty = () => {
    return (
      <Empty
        image={Empty.PRESENTED_IMAGE_DEFAULT}
        imageStyle={{
          height: 100,
        }}
        style={{ padding: '20%' }}
        description={
          <span>
            Select a Trip
          </span>
        }
      >
         <p>or</p>
         <Button type="primary">Create One</Button>
      </Empty>
    )
  }

  render() {
    const { Sider, Content } = Layout
    const { selectedTrip } = this.state

    return (
      <div>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider width={250} style={{ background: '#fff' }}>
            <TripList selectTrip={this.selectTrip} />
          </Sider>
          <Content height={1000}>
            {selectedTrip ? this.renderTrip() : this.renderEmpty()}
          </Content>
        </Layout>
      </div>
    )
  }
}

export default TripContainer
