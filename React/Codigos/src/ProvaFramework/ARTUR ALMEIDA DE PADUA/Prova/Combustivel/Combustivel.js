import React from 'react';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import { Link } from 'react-router-dom';

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

    calcular(tempo, velocidade, rendimento, preco, distancia){
        const { teste } = this.props.location;
        distancia = parseFloat(teste);
        const d = parseFloat(tempo) * parseFloat(velocidade);
        const c = distancia/parseFloat(rendimento);
        const p = parseFloat(preco) * parseFloat(c);
        this.setState({ distancia: d });
        this.setState({ combustivel: c });
        this.setState({ total: p });
    }

    render() {

        const { velocidade, tempo, rendimento, preco, distancia, combustivel, total } = this.state;
        const { teste } = this.props;
        return (
            <div>
                <Link to="/">Inicio</Link> <br/>
                <Link to={{ pathname: "/destinos", teste }}>Destinos</Link> <br/>
                <Link to={{ pathname: "/combustivel", teste }}>combustivel</Link> 
                <h1>Combustivel</h1>
                <p>Tempo:<Input onChange={(e) => this.tempo1(e.target.value)}/>(em horas)</p>
                <p>Velocidade média:<Input onChange={(e) => this.velocidade1(e.target.value)}/>(em Km/h)</p>
                <p>Rendimento média:<Input onChange={(e) => this.rendimento1(e.target.value)}/>(em Km/litros)</p>
                <p>Preço gasolina:<Input onChange={(e) => this.preco1(e.target.value)}/>(em reais R$)</p>
                <Button onClick={() => this.calcular(tempo, velocidade, rendimento, preco, distancia)}>Calcular</Button>
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