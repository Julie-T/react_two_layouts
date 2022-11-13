import React, { Component } from 'react'

export class ShopItem extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <div className="shopItem" style={{backgroundImage: `url(${this.props.img})` }}>
        <span className='itemName'>{this.props.name}</span>
        <div className='itemColor'>{this.props.color}</div>
        <div className='itemPrice'>{this.props.price}</div>
        {/* <div className='itemImage'><img className='itemImageElem' src={this.props.img} alt='#'/></div> */}
        <button className='itemButton'>add to cart</button>
      </div>
      </div>
    )
  }
}

export default ShopItem