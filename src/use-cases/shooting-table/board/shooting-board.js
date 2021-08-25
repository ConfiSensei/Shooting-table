import './shooting-board.css';
import React from "react";
import ShootingBoardCol from "./shooting-board-col/shooting-board-col";

const ShootingBoard = ({
  timerOn,
  size,
  randomRow,
  randomCol,
  addToCheckScore,
  addToShootTime
}) => {
  const mockArray = Array.from(Array(size).keys());

  return (
      <div className="shooting-board">
        {mockArray.map(row => {
          return (
              <div className="rows" key={row}>
                {mockArray.map(col => {
                  return (
                      <ShootingBoardCol
                          key={`${row}:${col}`}
                          randomRow={randomRow}
                          randomCol={randomCol}
                          row={row}
                          col={col}
                          timerOn={timerOn}
                          addToCheckScore={addToCheckScore}
                          addToShootTime={addToShootTime}
                      />
                  )
                })}
              </div>
          )
        })}
      </div>
  )
}
export default ShootingBoard;
