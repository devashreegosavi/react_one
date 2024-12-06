import { useRef, useState } from "react";

export function TimeoutEvent(){

    const [msg, setMsg] = useState('');
    let thread2 = useRef(null);

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
         thread2.current = setTimeout(Msg2, 6000);
         setTimeout(Msg3, 10000);
    }
    function handleCancelClick(){
        clearTimeout(thread2.current);
    }
    return(
        <div className="container-fluid">
            <button onClick={handleButtonClick} className="btn btn-primary mt2">Show Messages</button>
            <button className="btn btn-warning mt-2" onClick={handleCancelClick}>Cancel Msg2</button>
            <p className="text-center">{msg}</p>
        </div>
    )
}