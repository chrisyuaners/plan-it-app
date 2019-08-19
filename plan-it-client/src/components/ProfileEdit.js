import React from 'react'
import { Form, Input, Button } from 'antd'

class ProfileEdit extends React.Component {
  state = {
    name: '',
    email: '',
    avatar: ''
  }

  render() {
    return (
      <Form>
        <Form.Item>
          <Input />
        </Form.Item>
        <Form.Item>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

export default ProfileEdit
