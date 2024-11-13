import { useEffect, useState } from "react";

export function LocalDataFetch(){

    const [product,setProduct] = useState({title:'', price:0, image :'', offers : [], rating :{rate:0, ratings:0,reviews:0}})
    function LoadData(){
        fetch("product.json")
        .then(response => response.json())
        .then(data => {
            setProduct(data)
        })
        .catch(error => {
            console.log(error)
        })

    }
    useEffect(() => {
        LoadData();
    },[])

    return(
        <div className="container-fluid">
            <div className="mt-4 row">
                <div className="col-2">
                    <img width="100%" src={product.image} />
                </div>
                <div className="col-9">
                    <div className="h4">{product.title}</div>
                    <div>
                        <span className="badge bg-success rounded">
                            {product.rating.rate}<span className="bi bi-star-fill"></span>
                        </span>
                        <span className="ms-3 fw-bold text-secondary">
                            {product.rating.ratings.toLocaleString()} ratings & {product.rating.reviews.toLocaleString()} Reviews
                        </span>
                    </div>
                    <div className="mt-4 h3">
                        {product.price.toLocaleString('en-in',{style:'currency',currency:'INR'})}
                    </div>
                    <div>
                        <ul className="list-unstyled">
                            {
                                product.offers.map(offer=>
                                    <li className="bi bi-tag-fill text-success my-3" key={offer}><span className="text-secondary">{offer}</span></li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}