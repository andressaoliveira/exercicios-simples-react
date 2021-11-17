import React from 'react';
import { Link } from 'react-router-dom';

export default class Inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teste: ''
        };
    }

    testando = (valor) => {
        const { teste } = this.state;
        this.setState({ teste: valor });
        this.setState({ teste: valor });
        console.log(teste);
    };

    render() {

        const { teste } = this.state;
        return (
            <div>
                <Link to="/">Inicio</Link> <br/>
                <Link to={{ pathname: "/destinos", teste }}>Destinos</Link> <br/>
                <Link to={{ pathname: "/combustivel", teste }}>combustivel</Link> 
                <h1>Inicio</h1>
                <p>Escolha seu destino:</p>
                <select onChange={(e) => this.testando(e.target.value)}>
                    <option value="1167">
                        Rio de Janeiro
                    </option>
                    <option value="1007.5">
                        São Paulo
                    </option>
                    <option value="739.7">
                        Belo Horizonte
                    </option>
                </select>
            </div>
        )
    }
}