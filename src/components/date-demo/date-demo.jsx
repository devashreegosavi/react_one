import { useEffect, useState } from "react";
 export function DateDemo(){

    const [today, setToday] = useState(Date())

    useEffect(() => {
        //setToday(Date("2024-12-06")); -- not allowed
    },[])
    return(
        <div className="container-fluid">
            <p>{today}</p>
        </div>
    )
 }