import { useEffect, useState } from "react";

export function DataTestStr(){
    
    const [price,setPrice] = useState(0);
    useEffect(() => {
        setPrice("6000")
    },[])
    return(
        <div className="container-fluid">
            <h3>demo</h3>
            <p>Price : {price} x 2 = {price * 2}</p>
            <p>Price : {price} + 2 = {price + 2}</p>
            <p>Price : {price} + 2 = {parseInt(price) + 2}</p>
            <p>{ (isNaN(price)) ? "Price must be a number" : price }</p> 
        </div>
    );
}