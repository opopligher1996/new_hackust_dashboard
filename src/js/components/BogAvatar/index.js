import React, { PureComponent } from 'react';
import { Avatar } from 'antd';
import { Tag } from 'antd';
import './styles.scss';

const AvatarWithImg = props => {
  return (
    <Avatar
      src={props.src}
      size={props.size}
    />
  )
}

const AvatarWithText = props => {
  return (
    <Avatar className='avatar-bg' size={props.size}>
      {props.text}
    </Avatar>
  )
}

class BogAvatar extends PureComponent {

  render() {
    const { src, size = 'large', text, price } = this.props;
    var avatarSize = size === 'large' ? 64 : 32;
    avatarSize = size === 'medium' ? 48 : avatarSize;

    if(price)
      return <div><Tag color="#f5a623"><font className='price-font'>${price}HKD</font></Tag><AvatarWithImg size={avatarSize} src={src}/></div>

    if(src)
      return <AvatarWithImg size={avatarSize} src={src} />

    if(text)
      return <AvatarWithText size={avatarSize} text={text} />

  }
}

export default BogAvatar;
