import React, { Component } from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import './styles.scss';

const BgElement = Element.BgElement;

class Banner extends Component {
  
  renderImages = () => {
    const { images, height } = this.props;
    return images.map((image, index) => {
      return (
        <Element
          prefixCls="banner-user-elem"
          key={'Element-' + index}
        >
          <BgElement
            key={'BgElement-'+index}
            style={{
              background: '#364D79',
            }}
          />
          <TweenOne
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
          <div className='image-container' 
          style={{ 
            backgroundImage: `url(${image})`,
            height
          }} />
          </TweenOne>
        </Element>
      )
    })
  }
  
  render(){
    const { height } = this.props;
    return (
      <BannerAnim prefixCls="banner-user" autoPlay style={{ height }}>
        {this.renderImages()}
      </BannerAnim>);
  }
}

export default Banner;
