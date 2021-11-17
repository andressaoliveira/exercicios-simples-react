import React, { useEffect, useState } from 'react';
import api from '../api'

export default function Grifinoria() {
    const [personagens, setPersonagens] = useState([]);
    const [personagensFull, setPersonagensFull] = useState([]);

    useEffect(() => {
        api.get('/characters/house/Gryffindor')
            //Slytherin
            //Hufflepuff
            //Ravenclaw
            .then((response) => setDados(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro: " + err);
            });
    }, []);

    function setDados(dados) {
        setPersonagens(dados)
        setPersonagensFull(dados)
    }

    function pesquisar(item) {
        const filter = personagensFull
            .filter(p => (p.name.toLowerCase()).includes(item.toLowerCase()));
        setPersonagens(filter);
    }

    return (
        <div className="Grifinoria">
            <h1> Grifinoria</h1>
            <div className="lista-personagens">
                {personagens.map((item, index) => (
                    <div key={index} className="personagem">
                        <h3>{item.name}</h3>
                        <p>Patrono: {item.species}</p>
                        <p>Varinha: {item.wand.wood} | {item.wand.core} | {item.wand.length} </p>
                    </div>
                ))}
            </div>
        </div>
    )
}