import { useState } from "react";
 
export function EmiCalculator(){

    const [amount,setAmount] = useState(0);
    const [year,setYear] = useState(1);
    const [rate,setRate] = useState(10.45);
    const [emi,setEmi] = useState(0);

    function amountChange(e){
        setAmount(e.target.value);
    }
    function yearChange(e){
        setYear(e.target.value);
    }
    function rateChange(e){
        setRate(e.target.value);
    }
    function handleCalculate(){
        var P = amount;
        var R = rate/12/100;
        var N = year * 12;
        var emi = P * R * (Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
       setEmi(emi);
    }

    return(
        <div className="container-fluid bg-secondary" style={{height : '100vh'}}>
            <div className="h4 text-center text-white">Personal Loan EMI Calculator</div>
            <div className="bg-light p-3 mt-3">
                <div className="row">
                    <div className="col">
                        Amount you need <input type="text" value={amount} />
                    </div>
                    <div className="col">
                        for <input type="text" size="3" value={year} /> Years
                    </div>
                    <div className="col">
                        Interest Rate <input type="text" size="2" value={rate} /> %
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col">
                        <input type="range" min="100000" max="1000000" onChange={amountChange} value={amount} className="form-range"/>
                        <span>&#8377; 1,00,000</span>
                        <span className="float-end">&#8377; 10,00,000</span>
                    </div>
                    <div className="col">
                        <input type="range" min="1" max="5" value={year} onChange={yearChange} className="form-range"/>
                        <span>1</span>
                        <span className="float-end">5</span>
                    </div>
                    <div className="col">
                        <input type="range" min="10.45" max="18.45" step="0.01" onChange={rateChange} value={rate} className="form-range"/>
                        <span>10.45 %</span>
                        <span className="float-end">18.45 %</span>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col text-end">
                        <button className="btn btn-primary" onClick={handleCalculate}>Calculate</button>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">
                        Your monthly installement amount is <span className="fs-4 text-primary fw-bold">{emi.toLocaleString('en-in', {style : 'currency', currency : 'INR'})} </span> for next {year} years
                    </div>
                </div>
            </div>
        </div>
    )
}