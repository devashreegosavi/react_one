import { useState } from "react";

export function KeyDemo(){

    const [password,setPassword] = useState('');
    const [msg,setMsg] = useState('');
    const [styleObj, setStyleObj] = useState({width:''});

    function handlePasswordChange(e){
        setPassword(e.target.value);
        
    }

    function handleKeyUp(){
        if(password.match((/(?=.*[A-Z])\w{4,15}/))){
            setMsg('Strong Password');
            setStyleObj({width : '100%'});
        }else{
            if(password.length < 4){
                setMsg('Poor password');
                setStyleObj({width : '30%'})
            }else{
                setMsg('Weak Password');
                setStyleObj({width : '70%'})
            }
        }
    }

    return(
        <div className="container-fluid">
            <dt>Password</dt>
            <dd><input type="password" className="form-control" onChange={handlePasswordChange} onKeyUp={handleKeyUp}/></dd>
            <dd>
                <div className="progress">
                    <div style={{styleObj}} className="progress-bar progress-bar-animated progress-bar-striped">

                    </div>
                </div>
            </dd>
            <dd>{msg}</dd>
        </div>
    )
}