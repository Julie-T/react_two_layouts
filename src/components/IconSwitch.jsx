import PropTypes from "prop-types";
import React, { Component } from "react";


export class IconSwitch extends Component {
  static propTypes = {
    icon: PropTypes.element,
    onSwitch: PropTypes.func.isRequired
  };

  render() {
    return (
      <>
        <button
          type="button"
          className={this.props.icon}
          key={this.props.icon}
          onClick={() => this.props.onSwitch()}
        >{this.props.icon}</button>
      </>
    );
  }
}

export default IconSwitch;
