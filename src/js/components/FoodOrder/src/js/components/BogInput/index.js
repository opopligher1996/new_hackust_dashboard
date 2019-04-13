import React, { Component } from 'react';
import { Icon, Input } from 'antd';
import './styles.scss';

class BogInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ''
    }
  }

  componentDidUpdate() {
    if(this.state.value !== this.props.value && !!this.props.value) {
      this.setState({ value: this.props.value });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.value !== this.props.value || nextState.value !== this.state.value;
  }

  render() {
    const { readOnly = false, prefixIconName, prefixText, suffixIconName, suffixText, suffixFunc, iconTheme = 'filled', value, onChangeFunc, placeholder, search = false } = this.props;
    const prefixIcon = prefixIconName ? <Icon
                                  className='prefix-icon'
                                  type={prefixIconName}
                                  theme={iconTheme}
                                  /> : null;
    const suffixIcon = suffixIconName ? <Icon
                                  className='suffix-icon'
                                  type={suffixIconName}
                                  onClick={!!suffixFunc ? suffixFunc : () => {}}
                                  theme={iconTheme}
                                  /> : null;
    // const prefixText = !!prefixText ? prefixText : '';
    // const suffixText = !!suffixText ? suffixText : '';
    //
    //

    return (
      <Input
        className={`bog-input
          ${!!prefixText && ' input-no-left-border'}
          ${!!suffixText && ' input-no-right-border'}
          ${!!readOnly && ' disable-point-event'}
          ${!!search && ' search'}
          `}
        ref={node => { this.inputField = node; }}
        readOnly={readOnly}
        placeholder={placeholder}
        prefix={prefixIcon}
        suffix={suffixIcon}
        addonBefore={prefixText}
        addonAfter={suffixText}
        value={this.state.value}
        onChange={e => {
          console.log('onchange Input!', e.target.value);
          this.setState({ value: e.target.value }, () => {
            if(onChangeFunc)
              onChangeFunc(this.state.value);
          });
        }}
        // ref={node => this.userNameInput = node}
      />
    )
  }
}

export default BogInput
