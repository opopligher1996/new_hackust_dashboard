import React, { Component } from 'react';
import Row from 'antd/lib/Row';
import Col from 'antd/lib/Col';
import 'antd/lib/row/style';
import 'antd/lib/col/style';
import ThemeButton from '../../components/ThemeButton';
import BogAvatar from '../../components/BogAvatar';
import ProgressBar from '../../components/ProgressBar';
import Rating from '../../components/Rating';
import BogInput from '../../components/BogInput';
import HostLabel from '../../components/HostLabel';
import BogDropdown from '../../components/BogDropdown';
import BogModal from '../../components/BogModal';
import ThemeDatePicker from '../../components/ThemeDatePicker';
import SelectNoPeopleBar from '../../components/SelectNoPeopleBar';
import MapView from '../../components/MapView';
import Banner from '../../components/Banner';
import CardView from '../../components/CardView';
import { increment, decrement } from './actions';
import { connect } from "react-redux";
import 'isomorphic-fetch';
import './styles.scss';

class Demo extends Component {

  getDataFromClientSide = async () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
    const res = await fetch(apiUrl);
    const data = await res.json();
    return { data }
  }

  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      showModal: false
    }
  }

  incrementFunc = () => {
    console.log('increment!');
    this.props.increment(5);
  }

  decrementFunc = () => {
    console.log('decrement!');
    this.props.decrement(5);
  }

  loginFunc = () => {
    console.log('login pressed');
  }

  componentDidMount() {
    this.getDataFromClientSide().then(data => console.log('data', data));
  }


  render() {
    const images = [
      "https://www.area47.at/website/var/tmp/image-thumbnails/0/139/thumb__bigimg/area47_otztal_partyarea_riverhaus_1.jpeg",
      "https://www.hollandevenementengroep.nl/foto/11902/858/500/!crop!/files/Accent%20Fotos/party2.jpg"
    ];
    return (
        <div>
          <Banner
            images={images}
            width = "100vw"
            height = "60vh"
          />
          <div>Here: {this.props.total}</div>
          <h3><a href="/booking">Booking Flow</a></h3>
          <h3><a href="/listing">Listing Flow</a></h3>
          <CardView
            name={'Simon'}
            user={3}
            activity={3}
            subjects={['KPOP', 'Music', 'Art']}
            languages={['Cantonese', 'English']}
            rating={4.5}
            address={'0.2 km away from Shopping mall'}
            year={'CHEM Year 2, HKUST'}
            rank={'bronze'}
            width={'25vw'}
          />
          <div style={{width: '108px'}}>
            <ThemeButton
              type = 'btn primary'
              text = 'Search'
              onClickFunc={this.decrementFunc}
            />
          </div>
          <HostLabel
            type = 'host-btn gold-hold'
            text = 'Gold Host'
            onClickFunc={this.decrementFunc}
          />
          <HostLabel
            type = 'host-btn silver-hold'
            text = 'Silver Host'
            onClickFunc={this.decrementFunc}
          />
          <HostLabel
            type = 'host-btn bronze-host'
            text = 'Bronze Host'
            onClickFunc={this.decrementFunc}
          />
          <div style={{width: '108px'}}>
            <ThemeButton
              type = 'btn rounded'
              text = 'Book Now'
              onClickFunc={this.decrementFunc}
            />
          </div>
          <div style={{width: '78px'}}>
            <ThemeButton
              type = 'btn small'
              text = 'Login'
              onClickFunc={this.decrementFunc}
            />
          </div>
          <div style={{width: '126px'}}>
            <ThemeButton
              type = 'btn secondary'
              text = 'Go back'
              onClickFunc={this.decrementFunc}
            />
          </div>
          <div style={{width: '324px'}}>
            <ThemeButton
              type = 'btn primary'
              text = 'Continue'
              onClickFunc={this.decrementFunc}
            />
          </div>
          <BogAvatar
            src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
            size='large'
          />
          <BogAvatar
            text='Simon'
            size='small'
          />
          <ProgressBar
            percent={80}
            showInfo={true}
          />
          <ProgressBar
            percent={20}
          />
          <Rating rating={3.5} />
          <Rating rating={3.5} onChangeRating={(rating) => console.log(`rating changed to ${rating}`)} />
          <ThemeDatePicker />
          <SelectNoPeopleBar/>
          <Row>
            <Col span={6}>
              <BogInput
                placeholder='Placeholder'
                prefixIconName='calendar'
                suffixIconName='close-circle'
                suffixFunc={() => this.setState({ inputVal: '' })}
                value={this.state.inputVal}
                onChangeFunc={(e) => {
                  this.setState({ inputVal: e.target.value });
                }}
              />
              <BogInput
                placeholder='Placeholder'
                prefixIconName='calendar'
                suffixFunc={() => this.setState({ inputVal: '' })}
                value={this.state.inputVal}
                onChangeFunc={(e) => {
                  this.setState({ inputVal: e.target.value });
                }}
              />
              <BogInput
                placeholder='Placeholder'
                prefixText='Date'
                suffixIconName='close-circle'
                suffixFunc={() => this.setState({ inputVal: '' })}
                value={this.state.inputVal}
                onChangeFunc={(e) => {
                  this.setState({ inputVal: e.target.value });
                }}
              />
              <BogInput
                placeholder='Placeholder'
                prefixIconName='calendar'
                suffixText='.com'
                value={this.state.inputVal}
                onChangeFunc={(e) => {
                  this.setState({ inputVal: e.target.value });
                }}
              />
              <BogInput
                placeholder='Placeholder'
                prefixText='https://'
                suffixText='.com'
                value={this.state.inputVal}
                onChangeFunc={(e) => {
                  this.setState({ inputVal: e.target.value });
                }}
              />
              <BogInput
                placeholder='Placeholder'
                prefixText='https://'
                value={this.state.inputVal}
                onChangeFunc={(e) => {
                  this.setState({ inputVal: e.target.value });
                }}
              />
              <BogInput
                placeholder='Placeholder'
                suffixText='.com'
                value={this.state.inputVal}
                onChangeFunc={(e) => {
                  this.setState({ inputVal: e.target.value });
                }}
              />
              <BogInput
                placeholder='Placeholder'
                suffixIconName='close-circle'
                suffixFunc={() => this.setState({ inputVal: '' })}
                value={this.state.inputVal}
                onChangeFunc={(e) => {
                  this.setState({ inputVal: e.target.value });
                }}
              />
              <BogInput
                placeholder='Placeholder'
                value={this.state.inputVal}
                onChangeFunc={(e) => {
                  this.setState({ inputVal: e.target.value });
                }}
              />
            </Col>
            <Col span={6}>
            </Col>
          </Row>
          Single selection:
          <BogDropdown
            items={['1 Guest', '2 Guests', '3 Guests']}
            placeholder='Placeholder'
            prefixText='Guest(s)'
            onChangeFunc={val => console.log('dropdown val', val)}
          />
          Multiple selection:
          <BogDropdown
            items={['1st item', '2nd item', '3rd item']}
            multiple={true}
            placeholder='Placeholder'
            prefixText='Items'
            onChangeFunc={val => console.log('dropdown val', val)}
          />
          <div style={{ width: 300 }}>
            <ThemeButton
              type='btn primary'
              text='Modal'
              onClickFunc={() => {
                this.setState({showModal: true});
              }}
            />
          </div>
          <BogModal
            title="Basic Modal"
            visible={this.state.showModal}
            onOk={() => {
              console.log('Ok!');
              this.setState({showModal: false});
            }}
            onCancel={() => {
              this.setState({showModal: false});
            }}
          >
            test
          </BogModal>
          <MapView
            defaultZoom = {17}
            usr_lat={22.351082}
            usr_lng={114.199871}
            map_height="600px"
            map_width="20vw"
          />
        </div>
    )
  }
}

const mapStateToProps = ({ demo }) => {
  console.log('demo', demo);
  return {
    total: demo.total,
  };
};

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
