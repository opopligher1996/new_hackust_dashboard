import React, { Component } from 'react';
import { connect } from "react-redux";
import Title from '../../components/Title';
import {Row, Col} from 'antd';
import BogInput from '../../components/BogInput';
import './styles.scss';

class Login extends Component {

  loginFunc = () => {
    console.log('login pressed');
  }

  render() {
    return (
      <div className='flow-layout'>
        <Row className='padding-bottom'>
          <Title
            text={'Login'}
            size={48}
          />
        </Row>
        <Row>
          <Col span={12}>
            <div className='description'>
              Time to connect with the people all around the world
            </div>
            <BogInput
              placeholder='Email'
            />
            <BogInput
              placeholder='Password'
            />
          </Col>
          <Col span={12}>
          </Col>
        </Row>
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
export default Login;
