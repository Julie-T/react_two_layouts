import PropTypes from "prop-types";
import React, { Component } from "react";
import '../css/iconSwitch.css'

export class IconSwitch extends Component {
  static propTypes = {
    icon: PropTypes.element.isRequired,
    onSwitch: PropTypes.func.isRequired
  };

  render() {
    return (
        <label className='icon'
          type="button"
          className='button'
          key={this.props.icon}
          onClick={() => this.props.onSwitch()}
        >{this.props.icon}</label>
    );
  }
}

export default IconSwitch;
