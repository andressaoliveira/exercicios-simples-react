import React, { useState } from "react";

export default () => {
    const [dividendo, setDividendo] = useState(0);
    const [divisor, setDivisor] = useState(0); 
    const [resultado, setResultado] = useState("");
    
    const calcular = () => {
        if(dividendo % divisor === 0){
            setResultado(dividendo + " é divisível por " + divisor);
        }
        else{
            setResultado(dividendo + " não é divisível por " + divisor);
        }
    }
    return <div>
            <label>Dividendo:</label><input onChange={(e) => setDividendo(parseFloat(e.target.value))}></input>
            <label>Divisor:</label><input onChange={(e) => setDivisor(parseFloat(e.target.value))}></input>
            <button onClick={() => calcular()}>CALCULAR</button>
            <div>{resultado}</div>
    </div>
}

