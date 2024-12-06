import { useRef, useState } from "react";

export function IntervalEvent(){

    const [progressdisplay, setProgressDisplay] = useState('d-none');
    const [imagedisplay, setImageDisplay] = useState('d-none');
    const [btndisplay, setBtnDisplay] = useState('d-block');
    const [progressvalue, setProgressvalue] = useState(1);
    const [status, setStatus] = useState('Completed');
    let count = useRef(1);
    let thread = useRef(null);

    function loadingProgress(){
        count.current = count.current + 1;
        //console.log(count.current);
        if(count.current == 100){
            clearInterval(thread.current);
            setProgressDisplay('d-none');
            setImageDisplay('d-block');
        }
        setProgressvalue(count.current);
    }
    function handleLoadClick(){
        setProgressDisplay('d-block');
        setBtnDisplay('d-none');
        thread.current = setInterval(loadingProgress,100);
    }
    function handlePlayClick(){
        thread.current = setInterval(loadingProgress,100);
        setStatus('Completed');
    }
    function handlePauseClick(){
        clearInterval(thread.current);
        setStatus('Pause');
    }
    return(
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{height : '100vh'}}>
            <div className="text-center">
                <div className={btndisplay}>
                    <button className="btn btn-primary" onClick={handleLoadClick}>
                        Load Image
                    </button>
                </div>
                <div className={progressdisplay}>
                    <progress min={1} max={100} value={progressvalue} style={{width : '300px', height : '30px'}}></progress>
                    <div>
                        <button className="btn btn-primary bi bi-play me-2" onClick={handlePlayClick}></button>
                        <button className="btn btn-danger bi bi-pause" onClick={handlePauseClick}></button>
                    </div>
                    <p>{progressvalue} % {status}</p>
                </div>
                <div className={imagedisplay}>
                    <img src="m1.png" width="300" height="400"/>
                </div>
            </div>
        </div>
    )
}