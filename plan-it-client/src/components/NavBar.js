import React from 'react'
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class NavBar extends React.Component {
  state = {
    current: 'home',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="home">
          <Icon type="home" />
          Home
        </Menu.Item>
        <Menu.Item key="user">
          <Icon type="user" />
          Profile
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="setting" />
              Settings
            </span>
          }
        >
          <Menu.ItemGroup>
            <Menu.Item key="setting:1">Edit Profile</Menu.Item>
            <Menu.Item key="setting:2">Logout</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}

export default NavBar
