import React, { Component } from 'react';
import Menu from 'antd/lib/Menu';
import Dropdown from 'antd/lib/Dropdown';
import Button from 'antd/lib/Button';
import message from 'antd/lib/Message';
import Icon from 'antd/lib/Icon';
import 'antd/lib/message/style';
import 'antd/lib/menu/style';
import 'antd/lib/dropdown/style';
import 'antd/lib/button/style';
import './styles.scss';


class SelectNoPeopleBar extends Component {

  handleButtonClick(e) {
    message.info('Click on left button.');
    console.log('click left button', e);
  };

  handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  };

  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1"><Icon type="user" />1</Menu.Item>
        <Menu.Item key="2"><Icon type="user" />2</Menu.Item>
        <Menu.Item key="3"><Icon type="user" />3</Menu.Item>
        <Menu.Item key="4"><Icon type="user" />4</Menu.Item>
        <Menu.Item key="5"><Icon type="user" />5</Menu.Item>
        <Menu.Item key="6"><Icon type="user" />6</Menu.Item>
        <Menu.Item key="7"><Icon type="user" />7</Menu.Item>
        <Menu.Item key="8"><Icon type="user" />8</Menu.Item>
        <Menu.Item key="9"><Icon type="user" />9</Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Dropdown overlay={menu}>
          <Button style={{ width: '321px', height: '51px' }} class='SelectNoPeopleBar'>
            How many of you <Icon type="down" style={{position: 'absolute',right: '10px',top: '20px'}}/>
          </Button>
        </Dropdown>
      </div>
    );
  }
}

export default SelectNoPeopleBar;
