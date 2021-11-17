import React, { useEffect, useState } from 'react';
import api from '../api'
import Grifinoria from './Grifinoria';
import './Casas.css'

export default function Casas() {
    const [casa, setCasa] = useState(1);

    const casas = [
        { nome: 'Grifinória', id: 1 },
        { nome: 'Sonserina', id: 2 },
        { nome: 'Lufa-Lufa', id: 3 },
        { nome: 'Corvinal', id: 4 },
    ]

    function changeAba(aba) {
        setCasa(aba)
    }

    function casaExibida() {
        switch (casa) {
            case 1:
                return <Grifinoria />
            case 2:
                return <Grifinoria />
            case 3:
                return <Grifinoria />
            case 4:
                return <Grifinoria />

            default:
                return null
        }
    }

    return (
        <div className="Casas">
            {casas.map((item, index) => (
                <button id={index} onClick={() => changeAba(item.id)}>
                    {item.nome}
                </button>
            ))
            }
            {casaExibida()}
        </div>
    )
}