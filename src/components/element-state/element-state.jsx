import { useState } from "react";

export function ElementState(){

    const [msg,SetMsg] = useState('');
    const [userName, setUserName]=useState('');

    function handleFocus(){
        SetMsg('Name in Block Letter')
    }
    function handleblur(e){
        SetMsg('')
        setUserName(e.target.value.toUpperCase())
    }
    function handleChange(e){
        setUserName(e.target.value)
    }
    return(
        <div className="container-fluid">
            <dl className="w-25">
                <dt>Username</dt>
                <dd>
                    <input type="text" className="form-control" placeholder="Name in Block Letter" onFocus={handleFocus} onBlur={handleblur} onChange={handleChange} value={userName}/>
                </dd>
                <dd>{msg}</dd>
            </dl>
        </div>
    )
}