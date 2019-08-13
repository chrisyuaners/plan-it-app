import React from 'react'
import TripList from './TripList'
import TripCard from '../components/TripCard'
import UserList from './UserList'
import ExpenseList from './ExpenseList'
import TodoList from './TodoList'
import CommentList from './CommentList'
import ItineraryList from './ItineraryList'
import TripForm from '../components/TripForm'
import { Layout, Empty, Button } from 'antd'

class TripContainer extends React.Component {
  state = {
    selectedTrip: null,
    showTripForm: false
  }

  selectTrip = (tripId) => {
    this.setState({
      selectedTrip: tripId
    })
  }

  showForm = () => {
    this.setState({
      showTripForm: true
    })
  }

  hideForm = () => {
    this.setState({
      showTripForm: false
    })
  }

  setSelectedTripToNull = () => {
    this.setState({
      selectedTrip: null
    })
  }

  renderTrip = () => {
    return (
      <div>
        <div>
          <TripCard selectedTrip={this.state.selectedTrip} setSelectedTripToNull={this.setSelectedTripToNull} />
        </div>
        <div>
          <UserList selectedTrip={this.state.selectedTrip} />
        </div>
        <div>
          <ItineraryList selectedTrip={this.state.selectedTrip} />
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
    const { selectedTrip,showTripForm } = this.state

    return (
      <div>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider width={250} style={{ background: '#fff' }}>
            <TripList selectTrip={this.selectTrip} />
            <Button onClick={this.showForm}>Add Trip</Button>
          </Sider>
          <Content height={1000}>
            {selectedTrip ? this.renderTrip() : this.renderEmpty()}
            {showTripForm ? <TripForm hideForm={this.hideForm} /> : null}
          </Content>
        </Layout>
      </div>
    )
  }
}

export default TripContainer
