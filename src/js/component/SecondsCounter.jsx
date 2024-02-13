import React from 'react';


const SecondsCounter = (props) => {

    return (
        <div className="counterClock text-center" >
            <div className="containerCounter">
                <div className="digits">
                    <div className="icon"> <i className="fa fa-clock"></i> </div>
                    <div className="digits5">{props.digitFive %10}</div>
                    <div className="digits4">{props.digitFour %10}</div>
                    <div className="digits3">{props.digitThree %10}</div>
                    <div className="digits2">{props.digitTwo %10}</div>
                    <div className="digits1">{props.digitOne %10}</div>
                </div>
            
            </div>
            
        </div>
        );
};

export default SecondsCounter