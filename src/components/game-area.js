import React from 'react';
import GameCell from './game-cell';

const GameArea = ({ stopGame, gameOver, area }) => {
    return (
        <tr className="game-area-row">
            {area.map((cell, index) => {
                return (
                    <GameCell
                        key={index}
                        cellBomb={cell === 1}
                        stopGame={stopGame}
                        gameOver={gameOver}
                    />
                )
            })}
        </tr>
    )
}

export default GameArea;