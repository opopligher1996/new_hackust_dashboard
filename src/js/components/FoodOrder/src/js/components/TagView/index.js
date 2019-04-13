import React, { Component } from 'react';
import { Tag } from 'antd';
import './styles.scss';

class TagView extends Component {
  render() {
     const { name, type } = this.props;

    return (
      <Tag className={type}>{name}</Tag>
    )
  }
}


export default TagView;
