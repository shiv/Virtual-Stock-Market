import React, { Component } from 'react'
import { Row, Col, Button } from 'antd'

export default class Share extends Component {
  render(){
    const {symbol, quantity, openPrice, latestPrice} = this.props
    return(
      <Row className="share">
        <Col span={16}>
          <div>
            {symbol} - {quantity} Shares
          </div>
        </Col>
        <Col span={8}>
          <div className="price">
            {latestPrice ? `$${latestPrice}` : 'loading...'}
          </div>
        </Col>
      </Row>
    )
  }
}