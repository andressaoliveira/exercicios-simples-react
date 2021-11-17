import React from 'react';
import { Link } from "react-router-dom";


export default class Menu extends React.Component{

    render(){
  
  
      return (
  
        <div>

                <h1> Menu </h1>

                <Link to="/"> Inicio </Link> <br/>
                <Link to="/calculo"> calculo </Link><br/>
                <Link to="/detalhes"> Detalhes </Link>
        </div>

      )
    }
  }