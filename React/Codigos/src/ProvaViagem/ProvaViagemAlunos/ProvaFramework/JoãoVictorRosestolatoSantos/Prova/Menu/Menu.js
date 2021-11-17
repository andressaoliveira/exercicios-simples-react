import React from 'react';
import { Link } from 'react-router-dom';

export default class Rotas extends React.Component{

    render(){

        return(

            <div>
            <h1>Opções</h1>     
            <Link to="/">Acessar Pagina Inicial</Link><br></br>
            <Link to="/Destino">Acessar Destino</Link><br></br>
            <Link to="/Combustivel">Acessar Combustivel</Link>
            </div> 
        );
    }

}


