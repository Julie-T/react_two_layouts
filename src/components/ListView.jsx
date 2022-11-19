import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ShopItem from './ShopItem'
import '../css/listView.css'

export class ListView extends Component {
  static propTypes = {
    cards: PropTypes.PropTypes.arrayOf(PropTypes.shape({name: PropTypes.string, price: PropTypes.number, color: PropTypes.string, img: PropTypes.string})).isRequired,
    isActive: PropTypes.bool.isRequired,
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