import React, { useState, memo, useEffect } from 'react';

const GameCell = memo(({ cellBomb, gameOver, stopGame }) => {
    const [open, setOpen] = useState(false);
    const openCell = () => {
        setOpen(true);
        if (gameOver) {
            return;
        }
        if (cellBomb) {
            stopGame();
            setOpen(false);
        }
    }

    useEffect(() => {
        setOpen(false);
    }, [gameOver]);

    return (
        <td onClick={openCell} className={open ? "game-area-cell active" : "game-area-cell"}>
            {(gameOver && cellBomb) && <img src={process.env.PUBLIC_URL + '/images/bomb.png'} alt="bomb" />}
        </td>
    )
})

export default GameCell;