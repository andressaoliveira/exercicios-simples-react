import React, { useState } from "react";

export const CalcularResultado = {
    calculaResultado(valor1, valor2){
        console.log(valor1 + ' - ' + valor2);
        console.log(valor1 % valor2);
        if(this.ValorZerado(valor1, valor2))
            return -1;
        
        return (valor1 % valor2);
    },
    ValorZerado(valor1, valor2){
        if((valor1 === 0 || valor1 == 0) || (valor2 === 0 || valor2 == 0))
            return true;

        return false;
    }
}

export default function Calculo() {
    const [primeiroNumero, setPrimeiroNumero ] = useState(0);
    const [segundoNumero, setSegundoNumero ] = useState(0);
    
    const [resultado, setResultado ] = useState('');

    const inputRef = React.createRef();
    const inputRef2 = React.createRef();    

    return (
        <div className="flex-9">
            <span>
                Primeiro numero:
                <input name="primeiroNumero" type="text" ref={inputRef} onChange={() => setPrimeiroNumero(inputRef.current.value)}/>
            </span>
            <br/>
            <span>
                Segundo numero:
                <input name="segundoNumero" type="text" ref={inputRef2} onChange={() => {setSegundoNumero(inputRef2.current.value); setResultado('')}} />
            </span>
            <br/>
            <button onClick={() => setResultado(CalcularResultado.calculaResultado(primeiroNumero, segundoNumero))}>Calcular</button>
            <p>
                { resultado === 0 ? (primeiroNumero + ' é divisível por ' + segundoNumero) : null }
                { resultado >= 1 ? (primeiroNumero + ' não é divisível por ' + segundoNumero) : null }
                { resultado === -1 ? 'Divisão por 0' : null }
            </p>
        </div>
    )
}