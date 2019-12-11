import React, { Component } from 'react';
import GameAreaLayout from './components/game-area-layout';
import './App.css';

class App extends React.Component {

  state = {
    area: [],
    gameOver: false
  }

  componentDidMount() {
    this.randomArea();
  }

  stopGame = () => {
    this.setState({ gameOver: true })
  }

  randomArea = () => {
    const area = [];
    for (let i = 0; i < 10; i++) {
      area.push([]);
      for (let j = 0; j < 10; j++) {
        const random = Math.floor((Math.random() * 2));
        const isBomb = random ? true : false;
        area[i].push(isBomb);
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
