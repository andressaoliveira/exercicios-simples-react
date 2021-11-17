import React from 'react'
import { Route, BrowserRouter } from "react-router-dom";
import Destino from '../Prova/Destino';
import Prova from "../Prova/Prova";
import Combustivel from '../Prova/Combustivel'; 
import Menu from "./Menu/Menu";


export default class Rotas extends React.Component{

    render(){

        return(
            <div>

            <select>
            
                <option>Selecione uma opção</option>
                <option>Canada</option>
                <option>Paris</option>
                <option>Japão</option>

            </select>

            </div>
        )
    }
}
