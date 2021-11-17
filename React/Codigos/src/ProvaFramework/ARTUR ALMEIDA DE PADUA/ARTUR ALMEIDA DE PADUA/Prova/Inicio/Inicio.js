import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Style.css';

export default class Inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teste: ''
        };
    }

    testando = (valor) => {
        this.setState({ teste: valor });
    };

    render() {
        return (
            <div>
                <nav id="menu">
                    <Link to="/">Inicio</Link>
                    <Link to="/destinos">Destinos</Link>
                    <Link to="/combustivel">combustivel</Link> 
                </nav>
                <h1>Inicio</h1>
                <p>Escolha seu destino:</p>
                <select onChange={(e) => this.testando(e.target.value)}>
                    <option>
                        Rio de Janeiro
                    </option>
                    <option>
                        São Paulo
                    </option>
                    <option>
                        Belo Horizonte
                    </option>
                </select>
            </div>
        )
    }
}