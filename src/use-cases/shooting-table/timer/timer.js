import React from 'react';

const Timer = (props) => {

    const tenMilliseconds = 10;
    const millisecondsInMinute = 1000;

    React.useEffect(() => {
        let interval = null;

        if (props.timerOn) {
            interval = setInterval(() => {
                props.setRandomRow(Math.floor(Math.random() * props.size));
                props.setRandomCol(Math.floor(Math.random() * props.size));
                props.setTime((prevTime) => prevTime + tenMilliseconds);
            }, 1000);
        } else if (!props.timerOn) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [props, props.timerOn]);

    return (
        <div>
            <b>
                {"Your Time: "}
                <span>{("0" + Math.floor((props.time / millisecondsInMinute) % 60)).slice(-2)}:</span>
                <span>{("0" + ((props.time / tenMilliseconds) % 100)).slice(-2)}</span>
            </b>
        </div>
    );
};
export default Timer;
