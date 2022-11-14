import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ShopItem from './ShopItem'
import '../css/listView.css'

export class ListView extends Component {
  static propTypes = {}

  render() {
    return (
     <div className='listView'>
        {this.props.items.map((item) => <ShopItem key={item.name} name={item.name} price={item.price} color={item.color} img={item.img}/>)}
     </div>
    )
  }
}

export default ListView