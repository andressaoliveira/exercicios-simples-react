import React, { useState, useContext, useEffect } from 'react';


export default function Home({ navigation }) {

    const[n1, setN1] = useState(null)
    const[n2, setN2] = useState(null)
    const[resultado, setResultado] = useState(false)
    const[texto, setTexto] = useState(false)

    useEffect(() => {
        setResultado(false)
    }, [n1, n2])

    function devisivel(){
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
        <div style={{marginLeft: '50px'}}>
            <h1>Início</h1>
            <p>Primeiro número:</p>
            <input type="text" name="first" onChange={(e) => setN1(e.target.value)}/>
            <p>Segundo número:</p>
            <input type="text" name="second" onChange={(e) => setN2(e.target.value)}/>
            <br></br>
            <button style={{marginTop: '15px'}} onClick={() => setResultado(true)}>Calcular</button>
            {resultado === true && devisivel()}
        </div>
    )
}
