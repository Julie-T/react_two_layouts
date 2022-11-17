import PropTypes from 'prop-types'
import React, { Component } from "react";
import '../css/shopCard.css'

export class ShopCard extends Component {
  
  static propTypes = {
    key: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    color: PropTypes.string,
    img: PropTypes.string,
  }

  render() {
    return (
      <div className='shopCard' style={{backgroundImage: `url(${this.props.img})` }}>
        <div><div className='cardName'>{this.props.name}</div>
        <div className='cardColor'>{this.props.color}</div>
        </div>
        <div className='priceButton'>
        <div className='cardPrice'>${this.props.price}</div>
        <button className='cardButton'>add to cart</button>
      </div></div>
    );
  }
}

export default ShopCard;
