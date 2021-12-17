import React, { useState } from "react";

export const OrdenarResultado = {
    ordenaNumeros(valor1, valor2, valor3){
        const arrayValues = [];
        arrayValues.push(valor1);
        arrayValues.push(valor2);
        arrayValues.push(valor3);

        arrayValues.sort();
        console.log(arrayValues.toString());
        return arrayValues.toString();
    }

    
}

export default function Ordenacao() {
    const [primeiroNumero, setPrimeiroNumero ] = useState(0);
    const [segundoNumero, setSegundoNumero ] = useState(0);
    const [terceiroNumero, setTerceiroNumero ] = useState(0);
    
    const [resultado, setResultado ] = useState('');

    const inputRef = React.createRef();
    const inputRef2 = React.createRef();   
    const inputRef3 = React.createRef();   

    return (
        <div className="flex-9">
            <span>
                Primeiro numero:
                <input name="primeiroNumero" type="text" ref={inputRef} onChange={() => {setPrimeiroNumero(inputRef.current.value); setResultado('')}}/>
            </span>
            <br/>
            <span>
                Segundo numero:
                <input name="segundoNumero" type="text" ref={inputRef2} onChange={() => {setSegundoNumero(inputRef2.current.value); setResultado('')}} />
            </span>
            <br/>
            <span>
                Terceiro numero:
                <input name="segundoNumero" type="text" ref={inputRef3} onChange={() => {setTerceiroNumero(inputRef3.current.value); setResultado('')}} />
            </span>
            <br/>
            <button onClick={() => setResultado(OrdenarResultado.ordenaNumeros(primeiroNumero, segundoNumero, terceiroNumero))}>Ordenar</button>
            <p>
                { resultado != '' ?
                     resultado
                     : null}
            </p>
        </div>
    )
}