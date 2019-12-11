import React, { useState } from "react";

const GameStartButton = ({ click, randomArea }) => {

    const [show, setShow] = useState(false);

    const showAreaHideBtn = () => {
        click();
        setShow(true);
    }

    const resetGame = () => {
        randomArea();
    }

    const gameBtn = show ? <button onClick={resetGame} className="game-button">Reset game</button> : <button onClick={showAreaHideBtn} className="game-button">Start game</button>

    return (
        <div className="buttons-container">
            {
                gameBtn
            }
        </div>
    )
}

export default GameStartButton;