import { useState } from "react"
import './mouse-animation.css'

export function MouseAnimation(){

    function handleMouseOver(e){
        //e.target.stop()
        //console.log(e)
        e.target.stop();
    }

    function handleMouseOut(e){
        e.target.start()
        //console.log(e)
    }

    return(
        <div className="container-fluid container-height bg-dark d-flex justify-content-center align-items-center">
            <div>
                <marquee onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <img src="m1.png" style={{borderRadius:'50%'}} width="200" height="200"/>
                    <img src="m2.png" className="mx-3" width="200" height="200"/>
                    <img src="m3.png" width="200" height="200"/>
                    <img src="m4.png" className="mx-3" width="200" height="200"/>
                    <img src="m5.png" width="200" height="200"/>
                </marquee>
            </div>
        </div>
    )
}