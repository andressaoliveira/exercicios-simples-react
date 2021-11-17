import React from 'react'
import { Route, BrowserRouter } from "react-router-dom";

import canada from '../Prova/Imagem/Canada.png';
import paris from '../Prova/Imagem/Paris.png';
import japao from '../Prova/Imagem/Japao.png'

import Menu from "./Menu/Menu";


export default class Rotas extends React.Component{

    render(){

        return(
            <div>
            
            <div>
            
            <h1>Canada</h1>
            <img src={canada} alt="Paisagem"/>
            <p>E um pais do norte da america</p>

            </div>

            <div>
            
            <h1>Paris</h1>
            <img src={paris} alt="Paisagem"/>
            <p>E um pais da Europa</p>

            </div>

            <div>
            
            <h1>Japão</h1>
            <img src={japao} alt="Paisagem"/>
            <p>E um pais da Asia</p>

            </div>

            </div>
        )
    }

}