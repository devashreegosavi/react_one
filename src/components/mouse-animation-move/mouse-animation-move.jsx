import { useState } from "react";
import './mouse-animation-move.jsx';

export function MouseAnimationMove(){

    const [styleObj, setStyleObj] = useState({position:'',left:'',top:''})

    function handleMouseMove(e){
        setStyleObj({position:'fixed',left:e.clientX + 'px',top:e.clientY + 'px'})
    }
    return(
        <div onMouseMove={handleMouseMove} className="container-fluid">
            <div style={{height: '1000px'}} className="fs-3">Move the mouse pointer to test</div>
            <img src="samplegif.gif" width="50" height="50" style={styleObj}/>
        </div>
    )
}