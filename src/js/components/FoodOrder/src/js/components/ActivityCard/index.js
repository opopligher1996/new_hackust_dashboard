import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Row, Col, Tag, Button } from 'antd';
import BogAvatar from '../../components/BogAvatar';
import BogDatePicker from '../../components/BogDatePicker';
import BogTimePicker from '../../components/BogTimePicker';
import BogInput from '../../components/BogInput';
import ThemeButton from '../../components/ThemeButton';
import './styles.scss';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ActivityCard extends Component {

  render() {
    let avatar_items = []
    const { dateInput,events, div_height, div_width, usr_lat, usr_lng, show_price } = this.props;
    avatar_items.push(<div><BogAvatar
                  src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                  size='large'
                  lat={usr_lat+10}
                  lng={usr_lng}
                />
              </div>)
    return (
      // Important set the map key into .env later
      <div style={{ height: div_height, width: div_width }} className="activity-card-div">
        <div style={{ height: div_height*0.4}}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyBiDUE058aq-qCoiL8O0jbvDT9ktSnlnuc" }}
            defaultCenter={{
              lat: usr_lat,
              lng: usr_lng
            }}
            defaultZoom={17}
          >
          </GoogleMapReact>
        </div>
        <div className="activity-card-lower-div" >
          <div className="information-div">
            <img className="meal-icon" src={require('../../../public/images/location-pin.svg')}/>
            <font className="info_font">Near to Central MTR Station</font>
          </div>
          <div className="information-div">
            <img className="meal-icon" src={require('../../../public/images/clock.svg')}/>
            <font className="info_font">Host will pick up the guest(s)</font>
          </div>
          <div className="information-div">
            <BogInput
              placeholder='Placeholder'
              prefixText='Date'
              suffixIconName='calendar'
              value="10-10-2019"
            />
          </div>
          <div className="information-div">
            <BogInput
              placeholder='Placeholder'
              prefixText='Time'
              suffixIconName='clock-circle'
              value="18:00 - 19:00"
            />
          </div>
          <div className="information-div">
            <font className="price_info">$230 HKD</font>
          </div>
          <Row className="information-div">
            <ThemeButton
              type = 'btn primary full-width'
              text = 'Continue'
            />
          </Row>
          <div className="information-div">
            <ThemeButton
              type = 'btn secondary full-width'
              text = 'Go back'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ActivityCard;
