import React from "react";
import "./timeBoard.css"

const TimeBoard = (props) => {
const shots = [];
const start = new Date();
const clickTime = start.getSeconds();


return 


<div>
  <spna>"Shot Time"</spna>
  <ul>
      {
    shots.state.items.forEach((value, key) => (
        <li>`${value}${key}`</li>
    ))
}
</ul>
</div>
}


// // wykorzystując obiekty Date
// var start = new Date();
// // zdarzenie, dla którego chciałbyś zmierzyć czas trwania:
// zrobCosPrzezDlugiCzas();
//     // var stop = new Date();
//     // var roznica_czasow = stop.getTime() - start.getTime(); // czas w milisekundach

//     const czasStrzałów = () => {
//         start.getTime() - stop.getTime();
//         return roznicaCzasu;
//     }
    
//     const czasStrzałów = [];
//     czasStrzałów.push(props.onClick.getTime(map.floor.seconds))


//     const averageTime = () => {
//        const sumaCzasuStrzału = czasStrzałów.map(function(a,b) {
//             return a + b;
//         })
//         const sredniCasz = sumaCzasuStrzału / czasStrzałów.length
//     }

  export default TimeBoard;