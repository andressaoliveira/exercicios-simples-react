import React, { useState } from 'react'

function Inicio(props) {
    // setando os estados
    const [sValue, setSValue] = useState("")
    // lista para criar o select
    const lista = [
        { id: 9, name: 'Mercado Central' },
        { id: 8, name: 'Praça do Papa' },
        { id: 25, name: 'Mineirão' }
    ];
    console.log(sValue)

    return (
        // select com as 3 opções de cidades
        <div className="inicio">
            <select value={sValue} onChange={e => setSValue(e.target.value)}>
                {lista.map((item) => (
                    <option value={item.id}>{item.name}</option>
                ))}
            </select>
        </div>
    )

}

export default Inicio;
