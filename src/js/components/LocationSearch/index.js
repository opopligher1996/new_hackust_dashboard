import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import ReactDOM from 'react-dom';
import BogInput from '../BogInput';

class LocationSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.autocomplete = null;
  }

  componentDidMount() {
    // console.log('this.locationInput.inputField.getDOMNode()', this.locationInput.inputField);
    const input = ReactDOM.findDOMNode(this.locationInput.inputField).getElementsByClassName('ant-input')[0];
    console.log('input', input);
    this.autocomplete = new google.maps.places.Autocomplete(input);
    //Set country list here
    this.autocomplete.setComponentRestrictions({'country': ['hk']});
    this.autocomplete.addListener('place_changed', this.updateLocation);
  }

  componentWillUnmount() {
    if(this.autocomplete !== null)
      this.autocomplete.unbindAll();
  }

  updateLocation = () => {
    const { onLocationChange } = this.props;
    var place = this.autocomplete.getPlace();
    console.log('place.geometry.location.lat()', place.geometry.location.lat());
    console.log('place.geometry.location.lng()', place.geometry.location.lng());
    console.log('place.name', place.name);
    console.log('place.formatted_address', place.formatted_address);
    const address = `${place.name}, ${place.formatted_address}`;
    const location = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };
    this.setState({
      value: address
    });
    onLocationChange(address, location);
  }

  render() {
    const { value } = this.state;
    return (
      <BogInput
        ref={node => { this.locationInput = node; }}
        {...this.props}
      />
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBiDUE058aq-qCoiL8O0jbvDT9ktSnlnuc'
})(LocationSearch);
