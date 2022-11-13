import React, { Component } from "react";
import '../css/shopCard.css'

export class ShopCard extends Component {

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
