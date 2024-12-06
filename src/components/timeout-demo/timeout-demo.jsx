import { useState } from "react";

export function TimeoutDemo(){
    
    const [msg, setMsg] = useState('');

    function Msg1(){
        setMsg('in msg1');  
    }
    function Msg2(){
        setMsg('in msg2');
    }
    function Msg3(){
        setMsg('in msg3')
    }
    function handleButtonClick(){
        //Msg1();
        //Msg2();
        //Msg3();
         setTimeout(Msg1, 3000);
         setTimeout(Msg2, 6000);
         setTimeout(Msg3, 10000);
    }
    return(
        <div className="container-fluid">
            <button onClick={handleButtonClick} className="btn btn-primary mt2">Show Messages</button>
            <p className="text-center">{msg}</p>
        </div>
    )
}