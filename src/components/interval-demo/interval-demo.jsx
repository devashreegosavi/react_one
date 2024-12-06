import { useRef, useState } from "react";
export function IntervalDemo(){
    
    let [msg,setMsg] = useState('');
    let thread = useRef(null);

    function serverResponse(){
        setMsg(msg += 'Reply from server 127.0.0.1');
        console.log('Test Initiated');
    }

    function handleClick(){
        //serverResponse();
        thread.current = setInterval(serverResponse,2000)
    }

    function handleStopClick(){
        clearInterval(thread.current);
    }

    return(
        <div className="container-fluid">
            <button className="btn btn-primary mt-3" onClick={handleClick}>Test Server</button>
            <button className="mt-3 btn btn-danger" onClick={handleStopClick}>Stop</button>
            <p>{msg}</p>
        </div>
    )
}