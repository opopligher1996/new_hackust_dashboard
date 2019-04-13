import React, { Component } from 'react';
import LocationSearch from '../LocationSearch';
import BogDropdown from '../BogDropdown';
import BogDatePicker from '../BogDatePicker';
import './styles.scss';

class ActionBox extends Component {

  render() {
    const { dateInput, locationInput, slotInput, valueOnChange, title } = this.props;
    return (
        <div className='action-card'>
          <div className='title'>{title}</div>
          <LocationSearch
            placeholder='Location'
            prefixIconName='environment'
            iconTheme='outlined'
            onLocationChange={val => valueOnChange('location', val)}
          />
          <BogDatePicker
            placeholder='Date'
            prefixIconName='calendar'
            iconTheme='outlined'
            value={dateInput || ''}
            onChangeFunc={val => valueOnChange('date', val)}
          />
          <BogDropdown
            items={['1', '2', '3']}
            placeholder='How many of you'
            prefixIconName='team'
            iconTheme='outlined'
            onChangeFunc={val => valueOnChange('slot', val)}
          />
        </div>
    )
  }
}

export default ActionBox;
