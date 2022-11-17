import PropTypes from "prop-types"
import React, { Component } from "react"
import ShopCard from "./ShopCard"
import productModel from "../models/productModel"
import '../css/cardsView.css'

export class CardsView extends Component {
  static propTypes = {
    cards: PropTypes.instanceOf(productModel).isRequired,
    isActive: PropTypes.bool,
  };

  render() {
    console.log(this.props.cards)
    return (
      <div className=''>
      <div className='cardsView'>
        {this.props.cards.map((card) => <ShopCard key={card.img} name={card.name} price={card.price} color={card.color} img={card.img}/>)}
      </div></div>
    );
  }
}

export default CardsView;
