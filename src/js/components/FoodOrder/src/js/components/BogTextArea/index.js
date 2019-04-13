import React from 'react';
import { Input } from 'antd';
const { TextArea } = Input;
import './styles.scss';

const BogTextArea = props => <TextArea className='bog-textarea' {...props} />;

export default BogTextArea;
