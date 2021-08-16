import React, {useState} from "react";

const ShootingBoardCol = ({
  timerOn,
  row,
  col,
  randomRow,
  randomCol,
  addToCheckScore
}) => {

  let backgroundColor = timerOn && row === randomRow && col === randomCol
      ? 'red' : 'white';
  let cursor = backgroundColor === 'red' ? 'pointer' : '';

  return (
      <div className="columns"
           style={{
             backgroundColor: backgroundColor,
             cursor: cursor
           }}
           onClick={() => {
             if (backgroundColor === 'red') {
               addToCheckScore(1);
             } else {
               addToCheckScore(0);
             }
           }}
      >
      </div>
  )
}

export default ShootingBoardCol;
