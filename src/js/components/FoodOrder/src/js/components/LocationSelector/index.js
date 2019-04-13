import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
// import Marker from '../../../public/images/marker.svg';
import LocationSearch from '../LocationSearch';
import './styles.scss'

class LocationSelector extends Component {

  constructor(props) {
    super(props);
    this.state = {
      address: '',
      location: {
        lat: 22.283882,
        lng: 114.163336
      }
    };
  }

  onLocationChange = (address, location) => {
    this.setState({
      address,
      location
    });
  }

  render() {
    const { location } = this.state;
    return (
      <div className='location-selector-container'>
        <LocationSearch
          placeholder='Where will the event be hosted?'
          onLocationChange={this.onLocationChange}
        />
        <div className='location-selector'>
          <Map
             google={this.props.google}
             style={{
               width: '100%',
               height: 300,
               borderRadius: '0 0 5px 5px',
               border: '1px solid #dedede'
             }}
             center={location}
             zoom={15}
           >
            <Marker
              title={'The marker`s title will appear as a tooltip.'}
              name={'SOMA'}
              position={location} />
          </Map>
        </div>
      </div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBiDUE058aq-qCoiL8O0jbvDT9ktSnlnuc'
})(LocationSelector);
