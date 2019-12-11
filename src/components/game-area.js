import React from 'react';
import GameCell from './game-cell';

const GameArea = ({ stopGame, gameOver, area }) => {
    const gameAreaRow = area.map((cell, index) => (
        <GameCell
            key={index}
            cellBomb={cell}
            stopGame={stopGame}
            gameOver={gameOver}
        />
    ));
    return (
        <tr className="game-area-row">
            {gameAreaRow}
        </tr>
    )
}

export default GameArea;