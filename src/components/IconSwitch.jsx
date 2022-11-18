import PropTypes from "prop-types";
import React, { Component } from "react";


export class IconSwitch extends Component {
  static propTypes = {
    icon: PropTypes.element,
    onSwitch: PropTypes.func.isRequired
  };

  render() {
    return (
        <div
          type="button"
          className='button'
          key={this.props.icon}
          onClick={() => this.props.onSwitch()}
        >{this.props.icon}</div>
    );
  }
}

export default IconSwitch;
