import { useState } from "react"

export const Calcular = {
    dividir(valor1, valor2) {
        if(valor2 == 0){
            return 'Divisão inválida'
        }else if(valor1 % valor2 == 0){
            return `${valor1} é divisível por ${valor2}`
        }else{
            return `${valor1} não é divisível por ${valor2}`
        }
    }
}

export default () => {
    const [texto, setTexto] = useState('')
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)

    const handleClick = () => {
        setTexto(Calcular.dividir(num1, num2))
    }

    return <div className="page">
        <input type="number" onChange={(e) => setNum1(e.target.value)}></input>
        <input type="number" onChange={(e) => setNum2(e.target.value)}></input>
        <button onClick={handleClick}>calcular</button>
        <span>{texto}</span>
    </div>
}