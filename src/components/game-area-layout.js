import React, { useState } from "react";
import GameStartButton from './game-start-button';
import GameArea from './game-area';

const GameAreaLayout = props => {

    const [show, setShow] = useState(false);
    const [reset, setReset] = useState(false);

    const showArea = () => {
        setShow(true);
    }

    const resetArea = () => {
        setReset(true);
    }

    return (
        <>
            <h1>Saper Homework 5-JS</h1>
            <GameStartButton click={showArea} randomArea={props.randomArea} resetArea={resetArea} />
            {
                show && <table className="game-area">
                    <tbody>
                        {props.area.map((item, index) => {
                            return (
                                <GameArea
                                    key={index}
                                    area={item}
                                    gameOver={props.gameOver}
                                    stopGame={props.stopGame}
                                />
                            );
                        })}
                    </tbody>
                </table>
            }

        </>
    )
}

export default GameAreaLayout;