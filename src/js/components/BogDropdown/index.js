import React, { Component } from 'react';
import { find, filter, map } from 'lodash';
import BogInput from '../BogInput';
import { Dropdown, Menu, Icon } from 'antd';

class BogDropdown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: [],
    }
  }

  handleClick = keyPath => {
    const { selectedKeys } = this.state;
    const { onChangeFunc } = this.props;
    const key = keyPath[0];
    if(!this.props.multiple) {
      this.setState({ selectedKeys: [key] }, () => onChangeFunc(this.getIndex()));
    } else {
      if(!find(selectedKeys, item => item === key)) {
        console.log('not found! adding key');
        this.setState({ selectedKeys: selectedKeys.concat(key) }, () => onChangeFunc(this.getIndex()));
      } else {
        console.log('found! removing key',);
        this.setState({ selectedKeys: filter(selectedKeys, item => item !== key)}, () => onChangeFunc(this.getIndex()));
      }

    }
  }

  renderMenu = () => {
    const { items } = this.props;
    return <Menu
            onClick={({ key }) => this.handleClick(key)}
            selectedKeys={this.state.selectedKeys}
           >
            {items.map((item, index) => <Menu.Item key={index}>{item}</Menu.Item>)}
           </Menu>;
  }

  getIndex = () => {
    const { selectedKeys } = this.state;
    return map(selectedKeys, item => parseInt(item));
  }

  getValue = () => {
    const { selectedKeys } = this.state;
    const { items, multiple } = this.props;
    const inputVal = multiple ? map(selectedKeys, key => items[parseInt(key)]).toString() : items[parseInt(selectedKeys[0])]
    return inputVal;
  }

  render() {
    return (
      <Dropdown overlay={this.renderMenu()} placement="bottomCenter">
        <div>
          <BogInput
            {... this.props}
            readOnly={true}
            suffixIconName='caret-down'
            suffixFunc={() => this.setState({ selectedKeys: [] })}
            value={this.getValue()}
          />
        </div>
      </Dropdown>
    )
  }
}

export default BogDropdown
