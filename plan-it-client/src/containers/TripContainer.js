import React from 'react'
import TripList from './TripList'
import TripCard from '../components/TripCard'
import { Layout } from 'antd'

class TripContainer extends React.Component {

  render() {
    const { Sider, Content } = Layout

    return (
      <div>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider width={300} style={{ background: '#fff' }}>
            <TripList />
          </Sider>
          <Content height={1000}>
            <TripCard />
          </Content>
        </Layout>
      </div>
    )
  }
}

export default TripContainer
