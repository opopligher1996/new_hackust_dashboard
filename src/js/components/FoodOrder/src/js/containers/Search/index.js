import React, { Component } from 'react';
import './styles.scss';
import Title from '../../components/Title';
import FlowLayout from '../FlowLayout';
import BogDatePicker from '../../components/BogDatePicker';
import BogTimePicker from '../../components/BogTimePicker';
import MapView from '../../components/MapView';
import Card from '../../components/CardView';
import BogDropdown from '../../components/BogDropdown';
import {Row, Col} from 'antd';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          'eventid':1,
          'userid':1,
          'name':'Gash',
          'duration':180,
          'intro':'hi',
          'date':'2018/11/11',
          'subjects':['Economics', 'Politics'],
          'languages':['Japanes', 'Chinese'],
          'rating':3,
          'price':120,
          'address':'Tin Shui Wai',
          'year': 'Year 3',
          'location_x': 22.351082,
          'location_y': 114.198971
        },
        {
          'eventid':2,
          'userid':2,
          'name':'Gash',
          'duration':180,
          'intro':'hi',
          'date':'2018/11/11',
          'subjects':['Cs', 'Chinese'],
          'languages':['English'],
          'rating':5,
          'price':900,
          'address':'Tin Shui Wai',
          'year': 'Year 4',
          'location_x': 22.351082,
          'location_y': 114.199871
        },
        {
          'eventid':1,
          'userid':1,
          'name':'Gash',
          'duration':180,
          'intro':'hi',
          'date':'2018/11/11',
          'subjects':['Economics', 'Politics'],
          'languages':['Japanes', 'Chinese'],
          'rating':3,
          'price':120,
          'address':'Tin Shui Wai',
          'year': 'Year 3',
          'location_x': 22.351082,
          'location_y': 114.198971
        }
      ],
      users: [
        {
          'name':'Gash',
        }
      ]
    }
  }

  render() {
    const { events , users } = this.state;
    return (
      <div className='flow-layout'>
        <Row className='padding-bottom'>
          <Title
            text={'Hosts in Hong Kong'}
            size={48}
          />
        </Row>
        <Row className='padding-bottom'>
          <Col span={6}>
            <BogDatePicker
              placeholder='Date'
              prefixIconName='calendar'
              iconTheme='outlined'
            />
          </Col>
          <Col span={6} className='padding-left'>
            <BogTimePicker/>
          </Col>
          <Col span={6} className='padding-left'>
            <BogDropdown
              items={['<= $100', '$200 - $300', '$300 - $400', '$400 - $500']}
              placeholder='Placeholder'
              prefixText='Price'
              onChangeFunc={val => console.log('dropdown val', val)}
            />
          </Col>
          <Col span={6} className='padding-left'>
            <BogDatePicker
              placeholder='Date'
              prefixIconName='calendar'
              iconTheme='outlined'
            />
          </Col>
        </Row>


        <Col span={16}>
            {events.map((event, index) =>
              index%2?
              <div style={{display: 'inline-block'}} className='padding-left padding-bottom'>
                <Card
                  name={event.name}
                  subjects={event.subjects}
                  languages={event.languages}
                  rating={event.rating}
                  address={event.address}
                  year={event.year}
                  width='28vw'
                />
              </div>
              :
              <div style={{display: 'inline-block'}} className='padding-bottom'>
                <Card
                  name={event.name}
                  subjects={event.subjects}
                  languages={event.languages}
                  rating={event.rating}
                  address={event.address}
                  year={event.year}
                  width='28vw'
                />
              </div>
            )}
        </Col>
        <Col span={8}>
          <div className='sort-div padding-bottom padding-left'>
            <BogDropdown
              items={['Price', 'Place', 'Date', 'Number of People']}
              placeholder='Placeholder'
              prefixText='Sort By'
              onChangeFunc={val => console.log('dropdown val', val)}
            />
          </div>
          <div className='padding-left'>
            <MapView
              usr_lat={22.351082}
              usr_lng={114.199871}
              map_height="800px"
              map_width="100%"
              show_price= {true}
              events={events}
            />
          </div>
        </Col>
      </div>
    )
  }
}

// const mapStateToProps = ({  }) => {
//
// };
//
// const mapDispatchToProps = {
//
// };

// export default connect(mapStateToProps, mapDispatchToProps)(About);
export default Search;
