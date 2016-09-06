import React, { Component } from 'react';
import BattleManager from './js/battlemanager.js';
import messages from './data/messages.js';

class Battle extends Component {
  constructor(){
    super();
    this.state = {
      winner: "",
      loser: "",
      fightMessages: []
    }
  }
  handleClick(e){
    e.preventDefault();
    console.log('character array in battle.js', this.props.heroesArray);
    BattleManager.addMessages(messages);
    let battleData = BattleManager.statBattle(this.props.heroesArray[0], this.props.heroesArray[1], 1);
    console.log('battledata', battleData);
    if (battleData.data[0].winner === "draw") {
      this.setState({
        draw: "draw",
        completed: true
      })
    } else {
      this.setState({
        winner: battleData.data[0].winner.name,
        loser: battleData.data[0].loser.name,
        completed: true
      })
    };
    let fightMessages = battleData.data[0].fightData.map((message) => message.message);
    console.log(fightMessages);
    this.setState({
      fightMessages: battleData.data[0].fightData.map((message) => <li className="textLine">{message.message}</li>)
    });
  }
  resetCharacters(){
   location.reload();
  }
  render() {
    return(
      <div className="results">
            <button className="fightBtn" onClick={this.handleClick.bind(this)}>Let's Battle!</button>

            <ul className="messages">
              {this.state.fightMessages}
            </ul>

            {/* hiding this until there is a winner */}
            {this.state.winner &&
              <div>
                <p className="wldText">The Winner Is {this.state.winner}</p>
                <p className="wldText">Loser is: {this.state.loser}</p>
              </div>
            }
            {/* only show if there is a draw */}
            {this.state.draw &&
              <p className="wldText">The match ended in a draw</p>
            }
            {this.state.completed &&
            <button className="reset" onClick={this.resetCharacters}>Reset Characters</button>
            }
          </div>
    );
  }
}


export default Battle
