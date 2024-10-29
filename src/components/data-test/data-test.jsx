import { useEffect, useState } from "react"

export function DataTest(){

    const [price,setPrice] = useState(0);
    useEffect(() => {
        setPrice(6000.00);
    },[]) 
    return(
        <div className="container-fluid">
            <h3>Demo</h3>
            <p>{price.toFixed(2)}</p>
            <p>{price.toLocaleString()}</p>
            <p>{price.toLocaleString('en-in', {style:"currency", currency:"INR"})}</p>
            <p>{price.toLocaleString('en-in', {style:"currency", currency:"USD"})}</p>
        </div>
    );
}