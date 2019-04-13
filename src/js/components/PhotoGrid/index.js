import React, { Component } from 'react';
import { Row } from 'antd';
import { PhotoItem, PhotoUploadItem } from './PhotoItem';
import './styles.scss';

class PhotoGrid extends Component {

  renderPhotoItems = () => {
    const { items = [], showUpload = true } = this.props;
    return items.map((item, index) => <PhotoItem key={'photo-grid-item-'+index} url={item.url}/>);
  }

  render() {
    const { showUpload = false, onClickUpload } = this.props;
    return (
      <Row gutter={16}>
        {this.renderPhotoItems()}
        { !!showUpload &&
          <PhotoUploadItem onClick={onClickUpload} />
        }
      </Row>
    )
  }
}

export default PhotoGrid;
