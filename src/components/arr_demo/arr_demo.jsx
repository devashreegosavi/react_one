import { useEffect, useState } from "react";

export function ArrDemo(){

    const [category] = useState(['All','Electronics','Fashions'])
    useEffect(()=>{

    },[])

    return(
        <div className="container-fluid">
            <ol>
                {
                    category.map((category,index) => <li key={index}>{category}</li>)
                }
            </ol>
            <select>
                {
                    category.map((category,index) => <option key={index}>{category}</option>)
                }
            </select>
        </div>
    )
}