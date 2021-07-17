import React from "react";
import "./popup.css"

const Popup = (props) => {


    const onClose = () => {
    props.setShow(false);
    props.resetScore()
    props.resetMissed()
  }

  return (props.show) ? (
      <div className="popup">
        <div className="popup-inner">
          <button className="close-button" onClick={onClose}>
            Close
          </button>
          <h1>Your Score: {props.score}</h1>
          <h2>Your Misses: {props.missed}</h2>
            <br/>
          <h6>Better luck next time!</h6>
        </div>
      </div>
  ) : "";
}
export default Popup;