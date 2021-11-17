import React from 'react';
import { Link } from 'react-router-dom';

export default class Inicio extends React.Componet{
    Constructor(props) {
        Super(props);
        this.state = {
            teste: ''
        };
}
teste = (valor) =>{
    const {teste} = this.state;
    this.setState({ teste: valor});
    console.log(teste);
};

render(){
    const { teste } = this.state;
return(
    <div>
        <Link to="/">Menu Inicio</Link></br>
        <Link to={{ pathname: "/Destino", teste }}>Destino<Link/> <br/>
        <Link to={{ pathname: "/Combustivel", teste }}>Combustivel</Link> 
   
             <h1>Tela Inicial</h1>
             <p>Selecione o Destino:</p>
             <select onChange={(e) => this.teste(e.target.value)}>
             <option value="2900">
                 Jeju 
             </option>
             <option value="4700">
                 Butão
             </option>
             <option value="7988">
                 Jakarta
             </option>
             </select>
        </div>
)
}