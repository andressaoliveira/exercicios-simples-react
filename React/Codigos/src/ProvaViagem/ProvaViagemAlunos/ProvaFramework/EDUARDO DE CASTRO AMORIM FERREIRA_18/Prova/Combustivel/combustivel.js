// import dos valores com link para redirecionamento para a página
import React from 'react';
import { Link } from 'react-router-dom';

// export default feito em classe
export default class Combustivel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vel: null,
            temp: null,
            rend: null,
            prec: null,
            dest: null,
            gasolina: null,
            resultado: null,
        };
    }

// realização de mudança de valores de acordo com o valor do input
    temp1 = (val) => {
        this.setState({ temp: val });
    }

    vel1 = (val) =>{
        this.setState({ vel: val });
    }

    rend1 = (val) => {
        this.setState({ rend: val });
    }

    prec1 = (val) => {
        this.setState({ prec: val });
    }

    // cálculo com a fórmula pedida na descrição da avaliação
    calcular(temp, vel, rend, prec){
        const d = parseFloat(temp) * parseFloat(vel);
        const g = d/parseFloat(rend);
        const r = parseFloat(prec) *g;
        this.setState({ dest: d });
        this.setState({ gasolina: g });
        this.setState({ resultado: r });
    }

    render() {
// constante que acata os valores que serão apresentados na div
        const { vel, temp, rend, prec, dest, gasolina, resultado } = this.state;
        return (
            <div>
                <Link to="/">Inicio</Link> <br/>
                <Link to="/destinos">Destinos</Link> <p/>
                <Link to="/combustivel">Combustível</Link> 
                <h1>Cálculo de Combustível:</h1>
                <p>Tempo<input onChange={(e) => this.temp1(e.target.value)}/>(em horas)</p>
                <p>Velocidade média:<input onChange={(e) => this.vel1(e.target.value)}/>(em Km/h)</p>
                <p>Rendimento média:<input onChange={(e) => this.rend1(e.target.value)}/>(em Km/l)</p>
                <p>Preço gasolina:<input onChange={(e) => this.prec1(e.target.value)}/>(em R$)</p>
                <button onClick={() => this.calcular(temp, vel, rend, prec)}>Calcular</button>
                <p>Velocidade média:{vel}</p>
                <p>Tempo gasto:{temp}</p>
                <p>Rendimento:{rend}</p>
                <p>Distância:{dest}</p>
                <p>Combustivel:{gasolina}</p>
                <p>Valor total:{resultado}</p>
            </div>
        )
    }
}