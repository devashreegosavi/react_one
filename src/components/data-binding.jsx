import { useState } from "react"
export function Databinding(){

    const [userName, setUserName] = useState('David')
    return(
        <div className="container-fluid">
            <h2>Data Binding</h2>
            <p>Hello! {userName}</p>
            <input type="text" value={userName} />
        </div>
    )
}

