import React, { useState, useEffect } from 'react';


export default function Calculo({ navigation }) {

    const[n1, setN1] = useState(null)
    const[n2, setN2] = useState(null)
    const[resultado, setResultado] = useState(false)
    

    useEffect(() => {
        setResultado(false)
    }, [n1, n2])

    function calculo(){
        var string = ""
        if((n1%n2) === 0){
            string = n1 + " é divisivel, por " + n2
        }
        else{
            string = n1 + " não é divisivel, por " + n2
        }

        return(
            <p>{string}</p>
        )
    }
    
    return(
        <div style={{marginLeft: '30px'}}>
            <h1>Pagina do Calculo</h1>
            <p>Primeiro número:</p>
            <input type="text" name="first" onChange={(e) => setN1(e.target.value)}/>
            <p>Segundo número:</p>
            <input type="text" name="second" onChange={(e) => setN2(e.target.value)}/>
            <br></br>
            <button style={{marginTop: '10px'}} onClick={() => setResultado(true)}>Calcular</button>
            {resultado === true && calculo()}
        </div>
    )
}
