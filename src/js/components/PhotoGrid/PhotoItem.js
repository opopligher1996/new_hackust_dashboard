import React from 'react';
import { Col, Icon } from 'antd';
import './styles.scss';

export const PhotoItem = props =>
<Col sm={24} md={12} lg={8} xl={4}>
  <div className='photo-grid-item photo-container' style={{
    backgroundImage: `url(${props.url})`
  }} />
</Col>;

export const PhotoUploadItem = props =>
<Col sm={24} md={12} lg={8} xl={4}>
  <div className='photo-grid-item photo-upload-container' onClick={props.onClick}>
    <span>Add Photo(s)</span>
    <Icon type="plus" />
  </div>
</Col>;

export default PhotoItem;
