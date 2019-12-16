import React, { useState, useEffect } from 'react';
import GameAreaLayout from './components/game-area-layout';
import './App.css';

const App = () => {
  const [area, setArea] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    randomArea();
  }, [])

  const stopGame = () => {
    setGameOver(true)
  }

  const randomArea = () => {
    const area = [];
    for (let i = 0; i < 10; i++) {
      area.push([]);
      for (let j = 0; j < 10; j++) {
        const random = Math.floor((Math.random() * 2));
        const isBomb = random ? true : false;
        area[i].push(isBomb);
      }
    }
    setGameOver(false);
    setArea(area);
  }

  return (
    <div className="page-container">
      <GameAreaLayout
        area={area}
        gameOver={gameOver}
        stopGame={stopGame}
        randomArea={randomArea}
      />
    </div>
  )

}

export default App;
