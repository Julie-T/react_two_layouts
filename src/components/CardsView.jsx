import PropTypes from "prop-types"
import React, { Component } from "react"
import ShopCard from "./ShopCard"
import '../css/listView.css'

export class CardsView extends Component {
  static propTypes = {};

  render() {
    console.log(this.props.cards)
    return (
      <div className='listView'>
        {this.props.cards.map((card) => <ShopCard key={card.img} name={card.name} price={card.price} color={card.color} img={card.img}/>)}
      </div>
    );
  }
}

export default CardsView;
