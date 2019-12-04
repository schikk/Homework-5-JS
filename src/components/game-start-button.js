import React, { useState } from "react";

const GameStartButton = ({ click, randomArea, resetArea }) => {

    const [show, setShow] = useState(false);

    const showAreaHideBtn = () => {
        click();
        setShow(true);
    }

    const resetGame = () => {
        randomArea();
        resetArea();
    }

    return (
        <div className="buttons-container">
            {
                show ? <button onClick={resetGame} className="game-button">Reset game</button> : <button onClick={showAreaHideBtn} className="game-button">Start game</button>
            }
        </div>
    )
}

export default GameStartButton;