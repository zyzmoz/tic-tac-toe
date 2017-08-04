import React, { Component } from 'react';
import logo from './logo.svg';
import {Game} from './components/game';
import './App.css';

class App extends Component {
  renderGame(){
    return <Game />;
  }
  render() {
    return (
      <div className="App">        
        {this.renderGame()}        
      </div>
    );
  }
}

export default App;
