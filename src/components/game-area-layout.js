import React, { useState } from "react";
import GameButtons from './game-buttons';
import GameArea from './game-area';

const GameAreaLayout = props => {

    const [show, setShow] = useState(false);

    const showArea = () => {
        setShow(true);
    }

    const gameAreaItems = props.area.map((item, index) => (
        <GameArea
            key={index}
            area={item}
            gameOver={props.gameOver}
            stopGame={props.stopGame}
        />
    ));

    const renderGameArea = () => (
        <table className="game-area">
            <tbody>{gameAreaItems}</tbody>
        </table>
    )

    return (
        <>
            <h1>Saper Homework 5-JS</h1>
            <GameButtons
                click={showArea}
                randomArea={props.randomArea}
            />

            {show && renderGameArea()}

        </>
    )
}

export default GameAreaLayout;