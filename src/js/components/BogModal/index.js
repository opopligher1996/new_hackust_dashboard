import React, { Component } from 'react';
import { Modal } from 'antd';
import './styles.scss';

const BogModal = props => {
  return (
    <Modal
      {...props}
      >
        {props.chilren}
      </Modal>
  )
}

export default BogModal;
