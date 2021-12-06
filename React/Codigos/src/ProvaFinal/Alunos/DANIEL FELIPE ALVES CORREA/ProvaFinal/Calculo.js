import React, { useState } from 'react';
import { Botao } from "./Button/Button"
import { Input } from "./Input/Input"

export const Calcular = {
    divisivel(num1, num2){
        return num1 % num2
    }
}


export default function Calculo() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [msg, setMsg] = useState("");
    const [mostrar, setMostrar] = useState(false);

    return(
        <div> 
            <h5>Divisível</h5>
            <span>Primeiro número:</span>
            <Input type="text" placeholder="Primeiro Número" onChange={(e) => setNum1(parseFloat(e.target.value))}/>
            <span>Segundo número:</span>
            <Input type="text" placeholder="Segundo Número" onChange={(e) => setNum2(parseFloat(e.target.value))}/>
            <Botao variant="dark" onClick={() => {setMsg(Calcular.divisivel(num1, num2) === 0? `${num1} é divisível por ${num2}` : `${num1} não é divisível por ${num2}`); setMostrar(true)}}>Calcular</Botao><br /><br />
            {mostrar && <div>
                <p>{msg}</p>
            </div>}
        </div>
    )
}