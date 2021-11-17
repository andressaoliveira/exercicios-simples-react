import React from "react";
import dubai from "../Assets/dubai.jpg";
import viladafolha from "../Assets/viladafolha.gif";
import namekusei from "../Assets/namekusei.png";
import reactDom from "react-dom";
export default class Viagem extends React.Component
{ render(){
    return(
        <div className="viagem" >
            <h1>DUBAI</h1><br/>
            <p>
            Dubai é uma cidade e um emirado dos 
            Emirados Árabes Unidos 
            conhecida pelos shoppings de luxo, 
            pela arquitetura ultramoderna e 
            pela animada vida noturna. Burj Khalifa, 
            uma torre de 830 metros de altura, 
            domina a linha do horizonte repleta de arranha-céus.
            </p>
            <img width="400px" height="400px" alt=""src={dubai}/><br/>
            <h1>VILA DA FOLHA</h1><br/>
            <p>
            Onde fica a Vila da Folha?
            Konohagakure ou Konoha (também conhecida como Vila Oculta da Folha) 
            é uma das cinco grandes aldeias ninjas e que possuem um Kage como seu líder. 
            O líder de Konoha é conhecido como Hokage. A aldeia está localizada no País do Fogo.
            </p>
            <img width="400px" height="400px" alt="viladafolha"src={viladafolha}/>
            <h1>NAMEKUSEI</h1><br/>
            <p>
            Namekusei (ナメック星, Namekkusei) é um planeta 
            em um sistema solar triplo 
            localizado nas coordenadas 9045XY. 
            É o planeta natal de Kami-Sama, 
            Piccolo Daimaoh, e Dende, e de todos os Namekuseijins.  
            </p>
            <img width="400px" height="400px"alt="namekusei" src={namekusei}/><br/>
        </div>
        )
}

    
    
}