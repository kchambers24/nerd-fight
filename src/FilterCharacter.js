import React, { Component } from 'react'

class FilterCharacter extends Component {
  handleClick(e){
    if (this.props.heroesArray.length === 2) {
      alert("You already have two fighters")
      return
    } else {
      this.props.heroesArray.push(this.props.stats);
      console.log(this.props.heroesArray);
    }

  }
  render(){

    return (
      <div>
        <button className="sendBattleBtn" onClick={this.handleClick.bind(this)}>Send to Battle</button>
      </div>
    );
  }
}

export default FilterCharacter
