import React, { Component } from 'react';
import $ from 'jquery';
import characters from './data/CharacterStats';


class Attributes extends Component {
  render () {
    var heroAttributes = [];
    for(var hero in characters){
      heroAttributes[heroAttributes.length] = <Stat hero= {hero} attributeNumber={characters[hero].length}/>
    }

    return (
      <div>
        {heroAttributes}
      </div>
    )
  }
}

export default Attributes

class CharacterStats extends Component {
  render () {
    return (
      <p>{this.props.hero}: {this.props.attributeNumber[3]}</p>
    )
  }
}
