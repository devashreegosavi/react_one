import { useEffect, useState } from "react";

export function DataBinding(){

    const [userName, setUserName] = useState('');

    useEffect(()=>{
        setUserName('John')
    },[])

    return(
        <div className="container-fluid">
            <h3>Register</h3>
            <dt>Username</dt>
            <dd><input type="text" value={userName} /></dd>
            <h5>Hello! {userName}</h5>
        </div>
    )
}