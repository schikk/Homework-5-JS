import React, { Component } from 'react';
import GameAreaLayout from './components/game-area-layout';
import './App.css';

class App extends React.Component {

  state = {
    area: [
      [0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    ],
    gameOver: false
  }

  stopGame = () => {
    this.setState({ gameOver: true })
  }

  randomArea = () => {
    const area = [];
    for (let i = 0; i < 10; i++) {
      area.push([]);
      for (let j = 0; j < 10; j++) {
        area[i].push(Math.floor((Math.random() * 2)));
      }
    }
    this.setState({ area, gameOver: false });
  }

  render() {
    const { area, gameOver } = this.state;
    return (
      <div className="page-container">
        <GameAreaLayout
          area={area}
          gameOver={gameOver}
          stopGame={this.stopGame}
          randomArea={this.randomArea}
        />
      </div>
    )
  }
}

export default App;
