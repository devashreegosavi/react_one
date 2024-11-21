import { useState } from "react";
import './mouse-dynamic-animation.css';

export function MouseDynamicAnimation(){

    const [styleObj, setStyleObj] = useState({animationName : 'Rotate',animationDuration :'5s',animationIterationCount : 'infinite',animationTimingFunction : 'linear'})

    function handleMouseOver(){
        setStyleObj({animationName : 'Rotate',animationDuration :'1s',animationIterationCount : 'infinite',animationTimingFunction : 'linear'})
    }

    function handleMouseOut(){
        setStyleObj({animationName : 'Rotate',animationDuration :'5s',animationIterationCount : 'infinite',animationTimingFunction : 'linear'})
    }

    return(
        <div className="container-fluid bg-dark d-flex justify-content-center align-items-center" style={{height : '100vh'}}>
             <img src="logo192.png" style={styleObj} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
        </div>
    )
}
