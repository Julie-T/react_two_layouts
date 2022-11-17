import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ShopItem from './ShopItem'
import productModel from "../models/productModel"
import '../css/listView.css'

export class ListView extends Component {
  static propTypes = {
    cards: PropTypes.instanceOf(productModel).isRequired,
    isActive: PropTypes.bool,
  };

  render() {
    return (
     <div className='listView'>
        {this.props.items.map((item) => <ShopItem key={item.name} name={item.name} price={item.price} color={item.color} img={item.img}/>)}
     </div>
    )
  }
}

export default ListView