import { useState } from "react";

export function EventBindingCustom(){

    function insertClick(id,name,cities){
        console.log(`${id} \n ${name} \n ${cities}`)
    }
    return (
        <div className="container-fluid">
            <h2>Event Demo</h2>
            <button onClick={(e)=>insertClick(10,'TV',['Delhi','Pune'])} id="btninsert" value="btninsval">Insert</button>
        </div>
    )
}