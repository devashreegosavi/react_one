import { useEffect, useState } from "react";

export function DataMath(){

    const[stock, setStock] = useState(true);


    useEffect(() => {
        setStock(false);
    },[])
    return(
        <div className="container-fluid">
            <h3>User Login</h3>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text"></input></dd>
                <dt>Password</dt>
                <dd><input type="password" /></dd>
                <dt>Verify Code</dt>
                <dd>{Math.round(Math.random()*10)} {Math.round(Math.random()*10)} {Math.round(Math.random()*10)} {Math.round(Math.random()*10)} {Math.round(Math.random()*10)} {Math.round(Math.random()*10)}</dd>
            </dl>
            <dl>
                <dt>{(stock === true)? "available" : "Out of stock"}</dt>
            </dl>
            <button>Login</button>

        </div>
    );
}