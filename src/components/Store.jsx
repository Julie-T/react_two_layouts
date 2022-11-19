import React, { Component } from "react"
import products from "../models/MainModel"
import ListView from "./ListView"
import CardsView from "./CardsView"
import IconSwitch from "./IconSwitch"
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import "../css/main.css";

export class Store extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isCard: true,
    };
  }

  render() {
    const icon = this.state.isCard ? <ViewListIcon className='view_list'/> : <ViewModuleIcon className='view_module'/>;
    console.log(products);
    return (
      <div className='container'><div className='iconSwitch'>
      <IconSwitch icon={icon} onSwitch={(e) => this.setState({isCard: !this.state.isCard})}/>
      </div><div className='mainBlock'>
        {this.state.isCard ? <CardsView cards={products} isActive={true} /> : <ListView items={products} isActive={true}/>}
      </div></div>
    );
  }
}

export default Store;
