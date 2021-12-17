import React, { useState, useEffect } from 'react';


export default function Home({}) {

    const[numero1, setNumero1] = useState(null)
    const[numero2, setNumero2] = useState(null)
    const[numero3, setNumero3] = useState(null)
    const[resultado, setResultado] = useState(false)

    useEffect(() => {
        setResultado(false)
    }, [numero1, numero2, numero3])

    function comparaNumeros(a,b) { if (a == b) return 0; if (a < b) return -1; if (a > b) return 1; }

    function ordenar(){
        
        let numerosOrdenados = []
        numerosOrdenados.push(numero1,numero2,numero3)

        // para resolver o problema de ordenação com numeros decimais, a função 'comparaNumeros' foi criada
        // porem, ela buga com numeros não decimais. Para funcionar com numeros sem ser decimais, basta usar apenas 
        // o numerosOrdenados.sort()
        numerosOrdenados.sort(comparaNumeros)
        // numerosOrdenados.sort()
        
        return(
            <p>{numerosOrdenados[0] + ',' + numerosOrdenados[1] + ',' + numerosOrdenados[2]}</p>
        )
    }
    
    return(
        <div style={{marginLeft: '50px'}}>
            <h1>Início</h1>
            <p>Primeiro número:</p>
            <input type="text" name="primeiro" onChange={(event) => setNumero1(event.target.value)}/>
            <p>Segundo número:</p>
            <input type="text" name="segundo" onChange={(event) => setNumero2(event.target.value)}/>
            <br></br>
            <p>Terceiro número:</p>
            <input type="text" name="terceiro" onChange={(event) => setNumero3(event.target.value)}/>
            <br></br>
            <button style={{marginTop: '15px'}} onClick={() => setResultado(true)}>Calcular</button>
            {resultado === true && ordenar()}
        </div>
    )
}
