import PropTypes from "prop-types"
import React, { Component } from "react"
import products from "../models/MainModel"
import ListView from "./ListView"
import CardsView from "./CardsView"
import IconSwitch from "./IconSwitch"

export class Store extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      isCard: true,
    };
  }

  render() {
    const icon = this.state.isCard ? 'view_list' : 'view_module';
    console.log(products);
    return (
      <div>
      <IconSwitch icon={icon} onSwitch={(e) => this.setState({isCard: !this.state.isCard})}/>
      <div>
        {this.state.isCard ? <CardsView cards={products} isActive={true} /> : <ListView items={products} isActive={true}/>}
      </div></div>
    );
  }
}

export default Store;
