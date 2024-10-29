import { useEffect, useState } from "react";

export function StrFormat(){
    
    const [msg, setMsg] = useState('Welcome to React')
    const [pwd, setPwd] = useState("")
    useEffect(() => {
        setPwd("Admin123")
        if(pwd.match(/(?=.*[A-Z])\w{4,15}/)){
            setMsg("Strong pwd")
        }else{
            if((pwd.length) < 4){
                setMsg("Strong pwd")
            }else{
                setMsg("Weak pwd");
            }
        }
    },[])
    return(
        <div className="container-fluid">
            <h1>{msg.toUpperCase()}</h1>
            <p>{ (pwd.match(/(?=.*[A-Z])\w{4,15}/))?"Strong Password":"Weak Password" }</p>
        </div>
    )
}