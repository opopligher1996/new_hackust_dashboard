import React, { Component } from 'react';
import { Rate } from 'antd';
import './styles.scss';

class Rating extends Component {
  render() {
    const { rating, onChangeRating } = this.props;
    const config = {
      disabled: !onChangeRating,
      onChange: !!onChangeRating ? onChangeRating : null
    }
      return (
        <Rate
          className={'rating'}
          allowHalf
          allowClear={false}
          defaultValue={rating}
          {...config} />
      );
  }
}

export default Rating;
