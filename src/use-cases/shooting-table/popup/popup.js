import React, {useState} from "react";
import "./popup.css"
import TimeBoard from "./timeBoard/timeBoard";

const Popup = (props) => {

  const [showTimeBoard, setShowTimeBoard] = useState(false);

  const score = props.checkScoreTable.filter(value => value.score > 0).length;
  const missed = props.checkScoreTable.filter(
      value => value.score === 0).length;

  const onClose = () => {
    props.setShow(false);
    props.clearCheckScore();
    props.setTime(300);
  }

  const onButtonShowTimeBoardClick = () => {
    setShowTimeBoard(true);
  }

  const getLongestSpree = () => {
    let currentScore = 0;
    let highestScore = 0;

    props.checkScoreTable.forEach(function (element) {
      if (element.score === 1) {
        currentScore++;
      }

      if (currentScore > highestScore) {
        highestScore = currentScore;
      }

      if (element.score === 0) {
        currentScore = 0;
      }
    });
    return highestScore;
  }

  const longestSpree = getLongestSpree();

  return (props.show) ? (
      <div className="popup">
        <div className="popup-inner">
          <button className="close-button" onClick={onClose}>
            Close
          </button>
          <h1>Score: {score}</h1>
          <h3>Misses: {missed}</h3>
          <h3>Longest Spree: {longestSpree}</h3>
          <button className="show-time-board-button"
                  onClick={onButtonShowTimeBoardClick}>
            Show time board
          </button>
          <TimeBoard show={showTimeBoard}
                     setShow={setShowTimeBoard}
                     checkScoreTable={props.checkScoreTable} />
        </div>
      </div>
  ) : "";
}
export default Popup;