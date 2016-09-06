import React, {Component} from 'react';
import './App.css';
import Search from './Search';
import Battle from './Battle';

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
          <img id="home-image" src={`http://vignette2.wikia.nocookie.net/logopedia/images/a/a8/Marvel-logo.png/revision/latest?cb=20140701230531`}/>
          <h1 id="app-name">Civil War</h1>
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
