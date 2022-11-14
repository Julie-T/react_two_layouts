import PropTypes from 'prop-types'
import React, { Component } from 'react'
import '../css/iconSwitch.css'

export class IconSwitch extends Component {
  static propTypes = {}

  render() {
    return (
      <><button type='button' className={this.props.icon} key={this.props.icon} 
      onClick={() => this.props.onSwitch()}>
      <img className='imgIcon' alt='#'/>
      </button>
      </>
    )
  }
}

export default IconSwitch