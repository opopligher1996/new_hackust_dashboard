import React, { Component } from 'react';
import { Progress } from 'antd';

const ProgressBar = props => {
  const { showInfo = false, percent } = props;
  return (
    <Progress
      strokeWidth={14}
      strokeLinecap="square"
      strokeColor="#c7141f"
      percent={percent}
      showInfo={showInfo}
    />
  )
}

export default ProgressBar;
