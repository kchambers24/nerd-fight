import React, { Component } from 'react';
import $ from 'jquery';

// && this.props.image has to exist if the other does. nothing should show

class Character extends Component {
  render(){
    return (
      <div className="character_box">
        <h3> {this.props.name}</h3>
        {/* hiding the broken image icon */}
        {this.props.image &&
          <p><img src={`${this.props.image}/portrait_incredible.jpg`} alt=""/></p>
        }
        {/* hiding the description until there is one */}
        {this.props.description &&
          <p>{this.props.description}</p>
        }
      </div>
    );
  }
}

export default Character
