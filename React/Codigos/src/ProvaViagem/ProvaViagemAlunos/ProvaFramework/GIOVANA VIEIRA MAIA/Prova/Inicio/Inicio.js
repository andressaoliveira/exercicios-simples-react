import React from 'react';
import CSS from '../Css/Style.css';
import Menu from '../Menu/Menu';

export default class Inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inicio: null
        };
    }    
    
    render() {;
        return (
            <div id='inicio' className="telas">
                <Menu/>
                <h1>Home</h1>
                <br/>
                <p>Escolha seu destino</p>
                <select class="form-select" aria-label="Default select example"> 
                    <option value="Campos do Jordão">Campos do Jordão</option>
                    <option value="Bonito">Bonito</option>
                    <option value="Monte Verde">Monte Verde</option>
                </select>
            </div>
        );
    }
}