//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import protoTypes from "prop-types"
import SecondsCounter from "./component/SecondsCounter";




// include your styles into the webpack bundle
import "../styles/index.css";


SecondsCounter.prototype = {
    digitFive: protoTypes.number,
    digitFour: protoTypes.number,
    digitThree: protoTypes.number,
    digitTwo: protoTypes.number,
    digitOne: protoTypes.number,
}

let counter = 0;


setInterval (function(){
    const digits5=Math.floor(counter/10000);
    const digits4=Math.floor(counter/1000);
    const digits3=Math.floor(counter/100);
    const digits2=Math.floor(counter/10);
    const digits1=Math.floor(counter/1);
    console.log(digits5, digits4, digits3, digits2, digits1)
    counter++;



    ReactDOM.render(<SecondsCounter digitOne={digits1} digitTwo={digits2} digitThree={digits3} digitFour={digits4} digitFive={digits5} />, document.querySelector("#app"));
}, 1000);
