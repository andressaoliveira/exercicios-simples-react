import { useState, FormEvent } from "react";
import { Nav } from "../components/Nav.js";
import '../styles/combustivel.css';
export function Combustivel(){

  const [tempo,setTempo] = useState();
  const [velocidadeM,setvelocidadeM] = useState();
  const [rendimentoM,setrendimentoM] = useState();
  const [precoG,setprecoG] = useState();
  
  var distancia = tempo * velocidadeM;
  var combustivelG = distancia/rendimentoM;
  var valor = combustivelG*precoG
  return (
    <div id="inicial">
      <Nav/>
      
      <div className="content">
      <h1>Combustível</h1>
      
        <form  className="formdiv">
        <label> Tempo:<input type="number" value={tempo} onChange={(e)=>setTempo(e.target.value)} />(em horas) </label>
        <label> Velocidade média:<input type="number" value={velocidadeM} onChange={(e)=>setvelocidadeM(e.target.value)}/>(em km/h) </label>
        <label> Rendimento médio:<input type="number" value={rendimentoM} onChange={(e)=>setrendimentoM(e.target.value)}/>(em km/l) </label>
        <label> Preço gasolina:<input type="number" value={precoG} onChange={(e)=>setprecoG(e.target.value)}/>(em reais R$) </label>
        
        </form>
        
        <p>Velocidade média: {velocidadeM} km/h</p>
        <p>Tempo gasto: {tempo} horas</p>
        <p>Rendimento: {rendimentoM} km/l</p>
        <p>Distância: {distancia} km</p>
        <p>Valor total: R$  {valor} </p>
       
      </div>
    </div>
  );
}