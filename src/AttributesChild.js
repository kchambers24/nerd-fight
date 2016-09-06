import React, { Component } from 'react';
import characters from './data/CharacterStats';

class AttributesChild extends Component {
  render () {
    return (
      <p>Durability: {this.props.durability}</p>
      <p>Energy: {this.props.energy}</p>
    )
  }
}
export default AttributesChild
