import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ShopItem from './ShopItem'
import '../css/shopCard.css'

export class ListView extends Component {
  static propTypes = {}

  render() {
    return (
     <>
        <h1>list view component</h1>
        {this.props.items.map((item) => <ShopItem className={'item'} key={item.name} name={item.name} price={item.price} color={item.color} img={item.img}/>)}
     </>
    )
  }
}

export default ListView