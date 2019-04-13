import React, { Component } from 'react';
import './styles.scss';
import Title from '../../components/Title';
import FlowLayout from '../FlowLayout';
import BogDatePicker from '../../components/BogDatePicker';
import BogTimePicker from '../../components/BogTimePicker';
import MapView from '../../components/MapView';
import Card from '../../components/CardView';
import BogDropdown from '../../components/BogDropdown';
import ThemeButton from '../../components/ThemeButton';
import { Link } from "react-router-dom";
import {Row, Col} from 'antd';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          'eventid':2,
          'activity_name':'Enjoy hotpot with my Chinese family!',
          'userid':2,
          'name':'Susan',
          'rank':'gold',
          'duration':180,
          'intro':'hi',
          'date':'2018/11/11',
          'time':'15:00 - 16:00',
          'subjects':['Economics', 'Politics'],
          'languages':['Japanes', 'Chinese', 'English'],
          'rating':5,
          'price':120,
          'address':'0.3 km away from MTR station',
          'year': 'GBus Year 3, HKUST',
          'location_x': 22.351082,
          'location_y': 114.198971
        },
        {
          'eventid':1,
          'activity_name':'Enjoy hotpot with my Chinese family!',
          'userid':1,
          'name':'Tom',
          'rank':'silver',
          'duration':180,
          'intro':'hi',
          'date':'2018/11/11',
          'time':'19:00 - 20:00',
          'subjects':['Engineering', 'Anime'],
          'languages':['Cantonese', 'English'],
          'rating':4.5,
          'price':900,
          'address':'0.1 km away from Bus Terminal',
          'year': 'CSE Year 4,HKUST',
          'location_x': 22.333981,
          'location_y': 114.170361
        },
        {
          'eventid':3,
          'activity_name':'Enjoy hotpot with my Chinese family!',
          'userid':3,
          'rank':'bronze',
          'name':'Simon',
          'duration':180,
          'intro':'hi',
          'date':'2018/11/11',
          'time':'18:00 - 21:00',
          'subjects':['KPOP', 'Music', 'Art'],
          'languages':['Cantonese', 'English'],
          'rating':4.5,
          'price':500,
          'address':'0.2 km away from Shopping mall',
          'year': 'CHEM Year 2, HKUST',
          'location_x': 22.338551,
          'location_y': 114.153585
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
            <BogDropdown
              items={['03:00 - 06:00', '06:00 - 09:00', '09:00 - 12:00', '12:00 - 15:00', '15:00 - 18:00', '18:00 - 21:00', '21:00 - 24:00']}
              placeholder='00:00 - 03:00'
              prefixText='Time'
              onChangeFunc={val => console.log('dropdown val', val)}
            />
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
            <BogDropdown
              items={['Price', 'Place', 'Date', 'Number of People']}
              placeholder='Most Recent'
              prefixText='Sort By'
              onChangeFunc={val => console.log('dropdown val', val)}
            />
          </Col>
        </Row>


        <Col span={16}>
            {events.map((event, index) =>
              index%2?
              <div style={{display: 'inline-block'}} className='padding-left padding-bottom'>
                <Link key={'listing-basics-link'}
                  to={{ pathname: '/activity', data:{event: event} }}
                >
                  <Card
                    name={event.name}
                    user={event.userid}
                    activity={event.eventid}
                    subjects={event.subjects}
                    languages={event.languages}
                    rating={event.rating}
                    address={event.address}
                    year={event.year}
                    rank={event.rank}
                    width='28vw'
                  />
                </Link>
              </div>
              :
              <div style={{display: 'inline-block'}} className='padding-bottom'>
                <Link key={'listing-basics-link'}
                  to={{ pathname: '/activity', data:{event: event} }}
                >
                  <Card
                    name={event.name}
                    user={event.userid}
                    activity={event.eventid}
                    subjects={event.subjects}
                    languages={event.languages}
                    rating={event.rating}
                    address={event.address}
                    year={event.year}
                    rank={event.rank}
                    width='28vw'
                  />
                </Link>
              </div>
            )}
        </Col>
        <Col span={8}>
          <div className='sort-div padding-bottom padding-left'>
            <Link
              to={{ pathname: '/listing'}}
            >
              <ThemeButton
                type = 'btn primary full-width'
                text = 'Be Our Host'
              />
            </Link>
          </div>
          <div className='padding-left'>
            <MapView
              defaultZoom={12}
              usr_lat={22.322180}
              usr_lng={114.175731}
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
