import React, { useState } from "react";
import "./style.css"
import { Link } from "react-router-dom";
import Nav from "./prova";

const ftempo = (t, st) => {
    return(
        <div>
            <label>Tempo (em horas): 
            <input type="text" value={t} onChange={(e)=>{st(e.target.value)}}></input>
            </label>
        </div>
    )
}

const fveloc = (v, sv) => {
    return(
        <div>
            <label>Velocidade média (em KM/H): 
            <input type="text" value={v} onChange={(e)=>{sv(e.target.value)}}></input>
            </label>
        </div>
    )
}

const frend = (r, sr) => {
    return(
        <div>
            <label>Rendimento médio (em KM/LITROS): 
            <input type="text" value={r} onChange={(e)=>{sr(e.target.value)}}></input>
            </label>
        </div>
    )
}

const fpreco = (p, sp) => {
    return(
        <div>
            <label>Preço gasolina (em REAIS - R$): 
            <input type="text" value={p} onChange={(e)=>{sp(e.target.value)}}></input>
            </label>
        </div>
    )
}

const fresultado = (t, v, r, p) =>{
    return(
        <div>
            <p>Velocidade média: {v} km/h</p>
            <p>Tempo gasto: {t} horas</p>
            <p>Rendimento: {r} km/litros</p>
            <p>Distancia: {t * v} km</p>
            <p>Combustivel: {(t * v) / r} litros</p>
            <p>Valor total: R$ {(t * v) * p}</p>
        </div>
    )
}

function Combustivel(){

    const [tempo, setTempo] = useState(0)
    const [velocidade, setVelocidade] = useState(0)
    const [rendimento, setRendimento] = useState(0)
    const [preco, setPreco] = useState(0)

    return (
    <div className="row container">
        
        <div className=" corpo">
            <center>
                <h1>Combustível</h1>
                <div>
                    {ftempo(tempo, setTempo)}
                    {fveloc(velocidade, setVelocidade)}
                    {frend(rendimento, setRendimento)}
                    {fpreco(preco, setPreco)}

                    {fresultado(tempo, velocidade, rendimento, preco)}
                </div>
            </center>
        </div>
    </div>
    )
}


export default Combustivel;