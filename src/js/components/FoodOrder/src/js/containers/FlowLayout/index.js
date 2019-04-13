import React, { Component } from 'react';
import Title from '../../components/Title';
import ProgressBar from '../../components/ProgressBar';
import './styles.scss';

class FlowLayout extends Component {
  render() {
    const { title, description, step, percent } = this.props;
    return (
      <div className='flow-layout'>
        <Title
          text={title}
          size={48}
        />
        <div className='description'>
          {description}
        </div>
        <div className='step'>
          {step}
        </div>
        <ProgressBar
          percent={percent}
        />
        <div className='content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default FlowLayout;
