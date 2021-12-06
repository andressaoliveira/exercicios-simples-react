import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default () => {

    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(1)

const divisao = () => {
    setResult(num1/num2)
}

    const resultado = () => {
       
       console.log(result % 2 == 0 ? `${num1} é divisível por ${num2}` : `${num1} não é divisível por ${num2}`)
    }

    const valor = (event) => { setNum1(parseFloat(event.target.value)) }
    const valor1 = (event) => { setNum2(parseFloat(event.target.value)) }


    return <div>1
        <h2>Divisível</h2>
        Digite um valor:
        <Input onChange={valor}></Input>
        Digite um valor:
        <Input onChange={valor1}></Input>
        <Button onClick={resultado}>Resultado</Button>

    </div>

}