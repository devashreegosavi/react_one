import { useEffect, useState } from "react"

export function ObjDemo(){

    const [product,setProduct] = useState({Name:"",Price:0, Rating : 4.2})
    useEffect(()=>{
        setProduct({Name :"Samsung TV",Price : 34000, Rating : 4.6})
    },[])
    return(
        <div className="container-fluid">
            <h3>Product Details</h3>
            <dl>
                <dt>Name</dt>
                <dd>{product.Name}</dd>
                <dt>Price</dt>
                <dd>{product.Price}</dd>
                <dt>Rating</dt>
                <dd>{("Rating" in product)? product.Rating : "Rating not found"}</dd>
            </dl>
            <h3>Keys</h3>
            {Object.keys(product).map(item => <div key = {item}>{item} : {product[item]}</div>)}
        </div>
    )
}