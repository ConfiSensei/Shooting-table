import React from "react";


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
               addToCheckScore({
                 score: 1,
                 time: new Date().valueOf()
               });
             } else {
               addToCheckScore({
                 score: 0,
                 time: new Date().valueOf()
               });
             }
           }}
      >
      </div>
  )
}

export default ShootingBoardCol;
