import { useEffect, useState } from "react";

export function DataDemo(){
    const [userName, setUserName] = useState('john');
    //setUserName('David');

    useEffect(() => {
        setUserName('David');
    },[])
    return(
        <div className="container-fluid">
            <h3>Data Demo</h3>
            <p>{userName}</p>
        </div>
    );
}