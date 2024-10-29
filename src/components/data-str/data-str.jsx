import { useEffect, useState } from "react";

export function DataStr(){

    const [theme, setTheme] = useState('bg-light')
    const [path,setPath] = useState('E:\\hm.jpg')
    useEffect(() => {
        setTheme('bg-warning')
    },[]);

    return(
        <div className="container-fluid">
            <p>{path}</p>
            <h3>Data Binding</h3>
           
            <form className={`border border-2 p-2 border-primary w-25 ${theme}`}>
                <dl>
                    <dt>Username</dt>
                    <dd><input type="text" /></dd>
                </dl>
                <button>Login</button>
            </form>
        </div>
    )
}

