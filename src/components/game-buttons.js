import React, { useState } from "react";

const GameButtons = ({ click, randomArea }) => {

    const [show, setShow] = useState(false);

    const showAreaHideBtn = () => {
        click();
        setShow(true);
    }

    const resetGame = () => {
        randomArea();
    }

    const startBtn = <button onClick={showAreaHideBtn} className="game-button">Start game</button>
    const resetBtn = <button onClick={resetGame} className="game-button">Reset game</button>
    return (
        <div className="buttons-container">
            {show ? resetBtn : startBtn}
        </div>
    )
}

export default GameButtons;