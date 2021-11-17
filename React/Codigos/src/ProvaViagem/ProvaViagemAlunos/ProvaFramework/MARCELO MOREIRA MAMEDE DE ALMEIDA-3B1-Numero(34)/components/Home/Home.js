import React from 'react'
import Home2 from '../Home/Home2.css'

export default function Home() {
    return (
        <div className="Home">
            <h1>Escolha seu destino</h1>
            <div className="conteudo">
            <select name="Cidades">
                <option value="Ouro Preto">Ouro Preto</option>
                <option value="São João del Rei">São João del Rei</option>
                <option value="diamantina">diamantina</option>
            </select>
            </div>
        </div>
    )
}