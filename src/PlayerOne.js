import React, { Component } from 'react';
import Search from './Search';
import Character from './Character';

class PlayerOne extends Component{
  render(){
    return (
  <div>
    <Search/>
    <Character/>
  </div>
  )
 }
}
export default PlayerOne;
