import React, {Component} from 'react';
import './App.css'
import Search from './Search'
import Battle from './Battle'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      heroesArray: []
    };
  }
  render() {
    return (
      <div>
        <div className="Header">
          <h1 id="app-name">Marvel Civil War</h1>
          <img id="home-image" src={`http://i65.tinypic.com/f53q10.png`}/>
          <p id="description">United We Stand. Divided We Fall.</p>
        <div className="fighterBox">
          <div className="fighterOne">
            <Search heroesArray={this.state.heroesArray}/>
          </div>
          <div className="fighterOne">
            <Search heroesArray={this.state.heroesArray}/>
          </div>
        </div>
        </div>
        <Battle heroesArray={this.state.heroesArray}/>
      </div>
    )
  }
}
export default Home;
