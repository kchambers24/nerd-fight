import React, { Component } from 'react';
import $ from 'jquery';
import SuperHeroInfo from './Character.js';
import characters from './data/CharacterStats.js';
import FilterCharacter from './FilterCharacter.js'
import _ from 'lodash'

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      id:"",
      image: "",
      description: ""
    }
  }
  handleSubmit(event) {
    let heroName = event.target.value
    // using lodash find, to find the character whos name was selected and setting the state with the characters stats
    let selectedCharacter = _.find(characters, {'name': heroName});
    this.setState({
      name: heroName,
      durability: selectedCharacter.durability,
      fighting: selectedCharacter.fighting,
      intelligence: selectedCharacter.intelligence,
      speed: selectedCharacter.speed,
      strength: selectedCharacter.strength,
    });
    event.preventDefault();
    $.ajax({
      // heading marvel API to look up character by name
        url: `http://gateway.marvel.com:80/v1/public/characters?name=${heroName}&apikey=2e264257579ec772309983d87144e044`,
        type: 'GET',
        success: function(response) {
          this.setState({
           id: response.data.results[0].id,
           image: response.data.results[0].thumbnail.path,
           description: response.data.results[0].description
         });
        }.bind(this)
    })
  }

  render() {
    return (
      <div className="players">
        <form onSubmit={this.handleSubmit.bind(this)}>
        <label className="label">Choose Your Hero</label>
        <br/>
        <br/>
        <select className="selectList" ref="selectBox" onChange={this.handleSubmit.bind(this)}>
          <option value="">Select a Character</option>

            {/* shorthand for mapping over characters to create an option for each one I did this because I was tired of typing the characters name the wrong way. This way I get back all the correct names
            */}
          {
            characters.map(character => <option key={character.id} value={character.name}
            id={character.id}>{character.name}</option>)
          }
        </select>
        </form>

        <SuperHeroInfo name={this.state.name} id={this.state.id} image={this.state.image} description={this.state.description}/>
        {/* hiding this component until character is selected */}
     {this.state.name &&
         <FilterCharacter stats={this.state} name={this.state.name} heroesArray={this.props.heroesArray}/>
       }
      </div>
    )
  }
}

export default Search
