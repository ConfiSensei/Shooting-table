import React from "react";
import "./timeBoard.css"

const TimeBoard = (props) => {

  const scoredShots = props.checkScoreTable.filter(value => value.score > 0)
  const formattedScoreShots = [];
  for (let i = 0; i < scoredShots.length; i++) {
    if (i === 0) {
      formattedScoreShots.push(0);
    } else {
      const currentShot = scoredShots[i].time - scoredShots[i - 1].time;
      const currentShotInSeconds = Math.floor((currentShot / 1000) % 60);
      formattedScoreShots.push(currentShotInSeconds);
    }
  }

  const durationTime = formattedScoreShots.length > 0 ? formattedScoreShots.reduce(
      (previousValue, currentValue) => {
        return previousValue + currentValue;
      }): []
  const averageTimePerShot = durationTime / formattedScoreShots.length;
  const roundedAverageTimePerShot = Math.floor(averageTimePerShot * 100) / 100;

  const onClose = () => {
    props.setShow(false);
  }

  return (props.show) ? (
      <div className="time-board">
        <div className="time-board-inner">
          <h1>Time board</h1>
          {formattedScoreShots.map((value, key) => {
            return (
                <div key={`${key}`}>{key + 1} shot: {value} seconds</div>
            )
          })}
          <h3>Average time per shot: {roundedAverageTimePerShot}s</h3>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
  ) : "";
}

export default TimeBoard;