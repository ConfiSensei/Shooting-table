import React from "react";

const ShootingBoardCol = ({
                              timerOn,
                              row,
                              col,
                              randomRow,
                              randomCol,
                              increaseScore,
                              increaseMissed
                          }) => {

    const backgroundColor = timerOn && row === randomRow && col === randomCol
        ? 'red' : 'white';

    return (
        <div className="columns"
             style={{backgroundColor: backgroundColor}}
             onClick={() => {
                 if (backgroundColor === 'red') {
                     increaseScore()
                 }
                 else  {
                     increaseMissed()
                 }
             }}
        >
        </div>
    )
}

export default ShootingBoardCol;
