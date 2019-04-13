import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Row, Col } from 'antd';
import Button from '../../../components/ThemeButton';
import FlowLayout from '../../FlowLayout';
import BogDropdown from '../../../components/BogDropdown';
import BogTextArea from '../../../components/BogTextArea';
import Title from '../../../components/Title';
import PhotoGrid from '../../../components/PhotoGrid';
import './styles.scss';

class Experience extends Component {

  valueOnChange = (key, val) => {
    this.setState({
      [key]: val
    });
  }

  render() {
    return (
      <FlowLayout
        title='Time to be a host'
        description='Let others to be your guests. Proudly introduce your culture to them. Connection established.'
        step='Step 2: Let’s talk about the food'
        percent={40}
      >
        <Col span={16} className='listing-experience-container'>
          <Row>
            <BogDropdown
              items={['Chinese Food', 'Indian Food', 'Japanese Food']}
              placeholder='Food Type'
              prefixIconName='star'
              iconTheme='outlined'
              onChangeFunc={val => this.valueOnChange('foodType', val)}
            />
          </Row>
          <Row>
            <BogDropdown
              items={['No preference', 'For Vegetarian Only', 'Meat only']}
              placeholder='Ingredients Preference'
              prefixIconName='star'
              iconTheme='outlined'
              onChangeFunc={val => this.valueOnChange('preference', val)}
            />
          </Row>
          <Row>
            <BogDropdown
              items={['Included', 'Not included']}
              placeholder='Drink'
              prefixIconName='star'
              iconTheme='outlined'
              onChangeFunc={val => this.valueOnChange('drink', val)}
            />
          </Row>
          <Row>
            <BogTextArea
              rows={4}
              placeholder='Description of the meal (e.g. What does it contain, how it tastes, how do you prepare it)'
            />
          </Row>
          <Row>
            <Title
              text={'Photos'}
              size={24}
            />
            <p>{'Upload some photos of the food can surely attract the guest(s)'}</p>
            <PhotoGrid
              items={[
                { url: 'https://loremflickr.com/640/360?random=1' },
                { url: 'https://loremflickr.com/360/640?random=2' },
                { url: 'https://loremflickr.com/120/320?random=3' },
                { url: 'https://loremflickr.com/320/160?random=4' },
                { url: 'https://loremflickr.com/320/320?random=5' },
              ]}
              showUpload={true}
              onClickUpload={() => console.log('upload clicked')}
            />
          </Row>
          <Link className='back-btn' key={'listing-basics-link'} to={'/listing/basics'}>
            <Button
              type='btn secondary'
              text='Go Back'
            />
          </Link>
          <Link key={'listing-intro-link'} to={'/listing/intro'}>
            <Button
              type='btn primary'
              text='Continue'
            />
          </Link>
        </Col>
      </FlowLayout>
    )
  }
}

export default Experience;
