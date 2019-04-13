import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Tag } from 'antd';
import BogAvatar from '../../components/BogAvatar';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapView extends Component {

  render() {
    let avatar_items = []
    const { events, map_height, map_width, usr_lat, usr_lng, show_price } = this.props;
    avatar_items.push(<div><BogAvatar
                  src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                  size='large'
                  lat={usr_lat+10}
                  lng={usr_lng}
                />
              </div>)
    return (
      // Important set the map key into .env later
      <div style={{ height: map_height, width: map_width }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBiDUE058aq-qCoiL8O0jbvDT9ktSnlnuc" }}
          defaultCenter={{
            lat: usr_lat,
            lng: usr_lng
          }}
          defaultZoom={17}
        >
        {
          events ? (
            events.map((event,index)=>
            (
            <BogAvatar
              src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
              size='large'
              price={event.price}
              lat={event.location_x}
              lng={event.location_y}
            />))
          ):null
        }
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapView;
