import React, { Component } from 'react';
import { connect } from "react-redux";
import {Row, Col} from 'antd';
import Title from '../../components/Title';
import ThemeButton from '../../components/ThemeButton';
import BogInput from '../../components/BogInput';
import BogAvatar from '../../components/BogAvatar';
import { Link } from "react-router-dom";
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
            <div className="padding-div form-div">
              <BogInput
                placeholder='Email'
                />
            </div>
            <div className="padding-div form-div">
              <BogInput
                placeholder='Password'
              />
            </div>
            <div className="padding-div form-div">
              <Link
                to={{ pathname: '/'}}
              >
                <ThemeButton
                  type = 'btn full-width full-height'
                  text = 'Login'
                  onClickFunc={this.loginFunc}
                />
              </Link>
            </div>
          </Col>
          <Col span={12}>
            <div className="pic-div">
              <Col span={4}>
              </Col>
              <Col span={4}>
                <div className="logo-icon-div logo-icon1">
                  <BogAvatar
                    src={require('./photos/user1.jpg')}
                    size='large'
                  />
                </div>
                <div className="logo-icon-div logo-icon2">
                  <BogAvatar
                    src={require('./photos/user2.jpg')}
                    size='large'
                  />
                </div>
                <div className="logo-icon-div logo-icon3">
                  <BogAvatar
                    src={require('./photos/user3.jpg')}
                    size='large'
                  />
                </div>
              </Col>
            </div>
            <div className="pic-div">
              <Col>
                <font className="pic-font">836 users are connected via Be Our Guest</font>
                <div className="img-div">
                  <img className="img" src={require('./photos/login.jpg')}/>
                </div>
              </Col>
            </div>
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
