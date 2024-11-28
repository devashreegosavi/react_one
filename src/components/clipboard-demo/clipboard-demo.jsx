import { useState } from "react";

export function ClipboardDemo(){

    const [msg,setMsg] = useState('')

    function handleOnCopy(){
        setMsg('Number copied')
    }

    function handlePaste(){
        document.onpaste= function(){
            return false;
        }
    }
    return(
        <div className="container-fluid">
            <dl>
                <dt>Account Number</dt>
                <dd><input type="text" onCopy={handleOnCopy}/></dd>
                <dd>{msg}</dd>
                <dt>Verify Account Number</dt>
                <dd><input type="text" onPaste={handlePaste}/></dd>
            </dl>
        </div>
    )
}