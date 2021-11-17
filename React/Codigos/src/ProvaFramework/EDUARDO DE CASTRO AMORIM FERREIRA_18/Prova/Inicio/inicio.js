// import dos valores com um link para redirecionamento da página
import React from 'react';
import { Link } from 'react-router-dom';

// export default feito em classe
export default class Inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            init: ''
        };
    }

    render() {

        return (
            // div com link para redirecionamento das páginas + select com os destinos pensados
            <div>
                <Link to="/">Início</Link> <p/>
                <Link to="/destinos">Destinos</Link> <p/>
                <Link to="/combustivel">Combustível</Link> 
                <h1>Início</h1>
                <p>Escolha seu destino:</p>
                <select>
                    <option>
                        Bariloche
                    </option>
                    <option>
                        Bogotá
                        </option>
                    <option>
                        Punta Del Este
                    </option>
                </select>
            </div>
        )
    }
}