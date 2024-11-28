import { useState } from "react";
 
export function ButtonDemo(){

    function handleDoubleClick(){
        window.open('phone.png','Iphone','width=400 height=500')
    }
    function handleContextMenu(){
        document.oncontextmenu = function() {
            alert('Right Click is disabled')
            return false;
        }
    }
    return(
        <div className="container-fluid">
            <img onDoubleClick={handleDoubleClick} onContextMenu={handleContextMenu} src="phone.png" width="100" height="100" />
            <p>Double click to view large</p>
        </div>
    )
}