import PropTypes from 'prop-types'
import React, { Component } from 'react'
import '../css/shopItem.css'

export class ShopItem extends Component {
  static propTypes = {
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="shopItem">
      <img className='shopImg' src={this.props.img} alt='#'></img>
        <div className='itemName'>{this.props.name}</div>
        <div className='itemColor'>{this.props.color}</div>
        <div className='itemPrice'>${this.props.price}</div>
        <button className='itemButton'>add to cart</button>
      </div>
    )
  }
}

export default ShopItem