import { useState } from "react";

export function EventBindingN(){

    function insertClick(e){
        console.log(`${e.clientX} \n ${e.target.id} \n ${e.target.value}`)
    }
    return(
        <div className="container-fluid">
            <h2>Event Demo</h2>
            <button onClick={insertClick} id="btninsert" value="btninsval">Insert</button>
        </div>
    )
}