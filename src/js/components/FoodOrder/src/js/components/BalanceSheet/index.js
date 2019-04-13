import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import T from 'prop-types';
import './styles.scss';

class BalanceSheet extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      total: 0
    }
  }

  componentDidMount() {
    this.calculateTotal();
  }

  componentDidUpdate(prevProps) {
    if( prevProps.items !== this.props.items || prevProps.currency !== this.props.currency) {
      this.calculateTotal();
    }
  }

  calculateTotal = () => {
    const { items = [], currency } = this.props;
    let total = 0;
    items.map(item => {
      total += item.net;
    });
    this.setState({ total: total || 0 });
  }

  renderBalanceItems = () => {
    const { items = [], currency } = this.props;
    return items.map((item, index) =>
      <div className='balance-item' key={'balance-item-'+index}>
        <Row className={`${item.bold && 'highlight-item'}`}>
          <Col sm={24} md={12}>
            {item.name}:
          </Col>
          <Col sm={24} md={12} className='amount'>
            ${item.display || item.net || 0} {currency}
          </Col>
        </Row>
      </div>
    );
  }

  render() {
    const { sumName, currency } = this.props;
    const { total } = this.state;
    return (
      <div className='balance-sheet-container'>
        {this.renderBalanceItems()}
        <hr />
        <div className='balance-sum'>
          <Row>
            <Col sm={24} md={12}>
              {sumName}:
            </Col>
            <Col sm={24} md={12} className='amount'>
              ${total} {currency}
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

BalanceSheet.defaultProps = {
  items: [],
  currency: 'HKD',
};

BalanceSheet.propTypes = {
  items: T.array,
  currency: T.string.isRequired,
};

export default BalanceSheet;
