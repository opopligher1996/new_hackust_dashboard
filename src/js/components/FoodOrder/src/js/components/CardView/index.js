import React, { Component } from 'react';
import { Card } from 'antd';
import { Avatar } from 'antd';
import { Icon } from 'antd';
import { Tag } from 'antd';
import Rating from '../../components/Rating';
import TagView from '../../components/TagView';
import './styles.scss';

class CardView extends Component {
  render(){
    const { Meta } = Card;
    const { name,subjects,languages,rating,year,address,width } = this.props;
    return (
      <Card
        className={`card-view`}
        hoverable
        style={{ width: width ,height:390}}
        cover={<img className={`card-image`} alt="example" src="https://danjcm2668ozn.cloudfront.net/productive-sales-meeting.jpg" />}
      >
        <Meta
          avatar={<Avatar size={48} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={name}
          description={<div><TagView className={`icon-tag`} name="Gold Host" type="gold"/><Rating className={`star-div`} rating={rating} /></div>}
        />
        <div className={`icon-div`}>
          <Icon className={`icon-icon`} type="read" style={{fontSize: '18px', color: 'var(--brown-grey)'}}/>
          <font className={`icon-font`}>{year}</font>
        </div>
        <div className={`icon-div`}>
          <Icon className={`icon-icon`} type="environment" style={{fontSize: '18px', color: 'var(--brown-grey)'}}/>
          <font className={`icon-font`}>{address}</font>
        </div>
        <div className={`icon-div`}>
          <Icon className={`icon-icon`} type="heart" style={{fontSize: '18px', color: 'var(--brown-grey)'}}/>
          {subjects.map((subject, index) => <Tag className={`icon-tag`} color="#f8c81c">{subject}</Tag>)}
        </div>
        <div className={`icon-div`}>
          <Icon className={`icon-icon`} type="global" style={{fontSize: '18px', color: 'var(--brown-grey)'}}/>
          {languages.map((language, index) => <Tag className={`icon-tag`} color="#417505">{language}</Tag>)}
        </div>
      </Card>
    );
  }
}

export default CardView;
