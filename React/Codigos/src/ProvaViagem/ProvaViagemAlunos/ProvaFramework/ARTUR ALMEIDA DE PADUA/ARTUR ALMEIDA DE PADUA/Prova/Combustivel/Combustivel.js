import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Style.css';

export default class Combustivel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            velocidade: "",
            tempo: "'",
            rendimento: "",
            preco: "",
            distancia: 0,
            combustivel: 0,
            total: 0
        };
    }

    tempo1 = (valor) => {
        this.setState({ tempo: valor });
    }

    velocidade1 = (valor) =>{
        this.setState({ velocidade: valor });
    }

    rendimento1 = (valor) => {
        this.setState({ rendimento: valor });
    }

    preco1 = (valor) => {
        this.setState({ preco: valor });
    }

    calcular(tempo, velocidade, rendimento, preco){
        const d = parseFloat(tempo) * parseFloat(velocidade);
        const c = d/parseFloat(rendimento);
        const p = parseFloat(preco) * parseFloat(c);
        this.setState({ distancia: d });
        this.setState({ combustivel: c });
        this.setState({ total: p });
    }

    render() {

        const { velocidade, tempo, rendimento, preco, distancia, combustivel, total } = this.state;
        return (
            <div>
                <nav id="menu">
                    <Link to="/">Inicio</Link>
                    <Link to="/destinos">Destinos</Link>
                    <Link to="/combustivel">combustivel</Link> 
                </nav>
                <h1>Combustivel</h1>
                <p>Tempo:<input onChange={(e) => this.tempo1(e.target.value)}/>(em horas)</p>
                <p>Velocidade média:<input onChange={(e) => this.velocidade1(e.target.value)}/>(em Km/h)</p>
                <p>Rendimento média:<input onChange={(e) => this.rendimento1(e.target.value)}/>(em Km/litros)</p>
                <p>Preço gasolina:<input onChange={(e) => this.preco1(e.target.value)}/>(em reais R$)</p>
                <button onClick={() => this.calcular(tempo, velocidade, rendimento, preco)}>Calcular</button>
                <p>Velocidade média:{velocidade}</p>
                <p>Tempo gasto:{tempo}</p>
                <p>Rendimento:{rendimento}</p>
                <p>Distância:{distancia}</p>
                <p>Combustivel:{combustivel}</p>
                <p>Valor total:{total}</p>
            </div>
        )
    }
}