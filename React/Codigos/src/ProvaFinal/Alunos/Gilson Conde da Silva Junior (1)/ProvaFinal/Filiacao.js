import React, { useState } from 'react';
import api from './api';

export default function Filiacao() {
    const [filiacao, setFiliacao] = useState([]);
    api.get("/filiacoes")
        .then((response => {
            setFiliacao(response.data.FiliacaoParlamentar.Parlamentar);}))
        .catch((err) => {
            console.log("Erro! Tente novamente.", err);})
    return (
    <div style={{ textAlign: 'center' }, { marginLeft: '50px' }}>
        <h1>Filiação</h1>
        <ul>
        <li>
            <p>Nome: {filiacao.Nome}</p>
            <p>Código: {filiacao.Codigo}</p>
        </li>
        </ul>
        </div>
    )
}