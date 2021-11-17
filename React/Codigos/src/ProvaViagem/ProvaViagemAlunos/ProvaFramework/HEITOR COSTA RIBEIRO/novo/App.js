import React, {Component, useState} from "react";
import Destino from "./component/class/Destino";
import DescDestiny from './component/class/DescDestiny';



const tempo =(t,setT) =>{
  return(
      <div>
           <label>Tempo: </label>
           <input type="text" value= {t} onChange = {(e)=>{setT(e.target.value)}}/>(em horas)
      </div>
  )
}

const velocidadeM =(vm,setVm) =>{
  return(
      <div>
           <label>Velocidade Média: </label>
           <input type="text" value= {vm} onChange = {(e)=>{setVm(e.target.value)}}/>(em km/h)
      </div>
  )
}

const rendimento =(r,setR) =>{
  return(
      <div>
           <label>Rendimento Médio: </label>
           <input type="text" value= {r} onChange = {(e)=>{setR(e.target.value)}}/>(em km/l)
      </div>
  )
}

const combustivel =(c,setC) =>{
  return(
      <div>
           <label>Combustível: </label>
           <input type="text" value= {c} onChange = {(e)=>{setC(e.target.value)}}/>(em reais R$)
      </div>
  )
}

const calcular = (t,vm,setResultado) =>{
      const calc= () =>{
        setResultado (vm * t)
      }
      return(
        <div>
          <button onClick = {calc} >Calcular</button>
        </div>
      )

}

const resultado = (r) =>{
  return(
    <div>
      <p>Distancia: {r}</p>
      <p>Velocidade Média:</p>
    </div>
  )
}

export default function  App(){

  const [time, setT] = useState()
  const [velocidadem, setVm] = useState()
  const [rendi, setR] = useState()
  const [combu, setC] = useState()
 
  const [resultadoDistancia, setResultado] = useState(0)

  return(
    <div>
        <header>
          <a href="#">Página Inicial</a> |
          <a href="#">Destino</a> |
          <a href="#">Combustível</a>
        </header>

        <hr></hr>

        <main>
        <Destino/>
        </main>
        <hr></hr>

        <main>
          <DescDestiny/>
        </main>
        <hr></hr>
       <main>
          {tempo(time,setT)}
          {velocidadeM(velocidadem,setVm)}
          {rendimento(rendi,setR)}
          {combustivel(combu,setC)}

          {resultado(resultadoDistancia)}
          {calcular(tempo,velocidadeM,setResultado)}


       </main>
    </div>
    );
  
}






















/*
import React from 'react';
import Header from './component/header';
import Body from './component/body'

export default function App(){

componentDidMount(){
  console.log('Tela carregada')
}

componentDidUpdate(){
  console.log('Body foi alterado')
}

componentWillUnmount(){
  console.log
}

  return(
    <>
    <Header/>
    <div>
      <Body/>
    </div>
  </>
  )
}

*/