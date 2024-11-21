import { useEffect, useState } from "react";
import './mouse-animation-two.css';

export function MouseAnimationTwo(){
    
    const [styleObj, setStyleObj] = useState({color:'black'})
    useEffect(()=>{

    },[])

    function handleMouseOver(colorName){
        setStyleObj({color :colorName })
    }

    function handleMouseOut(){
        setStyleObj({color:'black'})
    }
    return(
        <div className="container-fluid">
            <div>
                <div className="d-flex" style={{height : '100px'}}>
                    <div style={{backgroundColor : 'red',width : '100px'}} onMouseOver={()=>handleMouseOver('red')} onMouseOut={handleMouseOut}>Red</div>
                    <div style={{backgroundColor : 'green',width : '100px'}} onMouseOver={()=>handleMouseOver('green')} onMouseOut={handleMouseOut}>Green</div>
                    <div style={{backgroundColor : 'blue',width : '100px'}} onMouseOver={()=>handleMouseOver('blue')} onMouseOut={handleMouseOut}>Blue</div>
                </div>
                <h1 style={styleObj}>Sample Text</h1>
            </div>
        </div>
    )
}