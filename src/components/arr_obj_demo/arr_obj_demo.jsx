import { useEffect, useState } from "react";

export function ArrObjDemo(){
    const [product,setProduct] = useState([{Name :"TV", Price : 22000},{Name: "Mobile", Price : 12000}])

    const [data,setData] = useState([{Category : "Electronics", Product : ["TV","Mobile"]},{Category: "Footwear", Product:["casuals","boots"]}])
    useEffect(() => {

    },[])
    return(
        <div className="container-fluid">
            <table className="table table-hover mt-3 caption-top">
                <caption>Product Table</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map(product => <tr key={product}><td>{product.Name}</td><td>{product.Price}</td> </tr>)
                    }
                </tbody>
            </table>

            <ol>
                {
                    data.map(item=>
                        <li key={item}> {item.Category}
                            <ul>
                                {
                                    item.Product.map(product => <li key={product}>{product}</li>)
                                }
                            </ul>
                        </li>
                    )
                }
            </ol>
            <select>
                {
                    data.map(item=>
                        <optgroup label={item.Category} key={item.Category}>
                            {
                                item.Product.map(product=><option key={product} >{product}</option>)
                            }
                        </optgroup>
                    )
                }
            </select>
        </div>
    )
}