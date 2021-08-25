import React, {useState} from "react";
import './shooting-table.css';
import ShootingBoard from "./board/shooting-board";
import Popup from "./popup/popup"
import Timer from "./timer/timer";

function ShootingTable() {

  const SIZE = 10;

  const [showScore, setShowScore] = useState(false);
  const [showMissed, setShowMissed] = useState(false);
  const [buttonName, setButtonName] = useState('PLAY');
  const [time, setTime] = useState(300);
  const [timerOn, setTimerOn] = useState(false);
  const [randomRow, setRandomRow] = useState(0);
  const [randomCol, setRandomCol] = useState(0);
  const [checkScoreTable, setCheckScoreTable] = useState([]);

  const score = checkScoreTable.filter(value => value > 0).length;

  const addToCheckScore = (element) => {
    setCheckScoreTable([...checkScoreTable, element])
  }

  const clearCheckScore = () => {
    setCheckScoreTable([]);
  }

  const onButtonPlayClick = () => {
    if (timerOn) {
      setButtonName('PLAY');
      setTimerOn(false);
      setShowScore(true);
      setShowMissed(true);
    } else {
      setButtonName('STOP');
      setTimerOn(true);
    }
  }

  return (
      <div className="shooting-table">
        <div className="container">
          <h1>Welcome To The Game</h1>
          <h2>Score: {score}</h2>
          <ShootingBoard timerOn={timerOn}
                         size={SIZE}
                         randomRow={randomRow}
                         randomCol={randomCol}
                         addToCheckScore={addToCheckScore}
          />
          <Timer time={time}
                 setTime={setTime}
                 timerOn={timerOn}
                 setTimerOn={setTimerOn}
                 setButtonName={setButtonName}
                 setRandomRow={setRandomRow}
                 setRandomCol={setRandomCol}
                 size={SIZE}
          />
          <button className="play-button"
                  onClick={onButtonPlayClick}>
            {buttonName}
          </button>
        </div>
        <Popup show={showScore}
               showMissed={showMissed}
               setShow={setShowScore}
               setMissed={setShowMissed}
               checkScoreTable={checkScoreTable}
               clearCheckScore={clearCheckScore}
               setTime={setTime}
        />
      </div>
  );
}

export default ShootingTable;

