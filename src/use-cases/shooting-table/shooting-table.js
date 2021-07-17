import React, {useState} from "react";
import './shooting-table.css';
import ShootingBoard from "./board/shooting-board";
import Popup from "./popup/popup"
import Timer from "./timer/timer";

function ShootingTable() {

    const SIZE = 12;

    const [showScore, setShowScore] = useState(false);
    const [showMissed, setShowMissed] = useState(false);
    const [buttonName, setButtonName] = useState('PLAY');
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
    const [randomRow, setRandomRow] = useState(0);
    const [randomCol, setRandomCol] = useState(0);
    const [score, setScore] = useState(0);
    const [missed, setMissed] = useState(0);


    const onButtonPlayClick = () => {
        if (timerOn) {
            setButtonName('PLAY');
            setTimerOn(false);
            setTime(0);
            setShowScore(true);
            setShowMissed(true);
        } else {
            setButtonName('STOP');
            setTimerOn(true);
        }
    }

    const increaseScore = () => {
        setScore(score + 1);
    }

    const increaseMissed = () => {
        setMissed(missed + 1);
    }

    const resetScore = () => {
        setScore(0);
    }

    const resetMissed = () => {
        setMissed(0);
    }


    return (
        <div className="shooting-table">
            <div className="container">
                <h1>Welcome To The Game</h1>
                <ShootingBoard timerOn={timerOn}
                               increaseScore={increaseScore}
                               increaseMissed={increaseMissed}
                               size={SIZE}
                               randomRow={randomRow}
                               randomCol={randomCol}
                />
                <Timer time={time}
                       setTime={setTime}
                       timerOn={timerOn}
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
                   score={score}
                   missed={missed}
                   resetScore={resetScore}
                   resetMissed={resetMissed}
            />
        </div>
    );
}

export default ShootingTable;

