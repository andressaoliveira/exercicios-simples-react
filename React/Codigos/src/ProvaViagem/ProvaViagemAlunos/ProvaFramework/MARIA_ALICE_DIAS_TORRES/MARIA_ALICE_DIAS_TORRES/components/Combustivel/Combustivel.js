import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

import '../Prova.css';

export default class Combustivel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //Estados iniciais dos componentes do formulario
            vm: "",
            tempo: "",
            rend: "",
            preco: "",
            dist: "",
            comb: "",
            total: "",
            exibir: false
        };
    }

    tempo = (resul) => {
        this.setState({ tempo: resul });
    }

    velocidade = (resul) =>{
        this.setState({ velocidade: resul });
    }

    rendimento = (resul) => {
        this.setState({ rendimento: resul });
    }

    preco = (resul) => {
        this.setState({ preco: resul });
    }

    //funcao com passagem de parametro para calculos
    resultado(tempo, velocidade, rendimento, preco, distancia){

        //ao clicar no botao serao exibidos os resultados 
        this.setState({
            exibir: true
        });

        //variaveis para calculo de preço, distancia e combustivel
        const dist = parseFloat(tempo) * parseFloat(velocidade);
        const comb = (dist/rendimento).toFixed(2);
        const total = (preco * comb).toFixed(2);

        this.setState({ distancia: dist });
        this.setState({ combustivel: comb });
        this.setState({ total: total });
    }

    render() {

        const { velocidade, tempo, rendimento, preco, distancia, 
                combustivel, total, exibir } = this.state;

                //construcao do form e a respectiva renderizaçao de resultados caso o botao seja clicado
        return (
            <div>
                
                <h1>Cálculo de combustível</h1>

                <p>Tempo em horas<Input onChange={(e) => this.tempo(e.target.value)}/></p>
                <p>Velocidade média em km/h<Input onChange={(e) => this.velocidade(e.target.value)}/></p>
                <p>Rendimento médio em km/litro<Input onChange={(e) => this.rendimento(e.target.value)}/></p>
                <p>Preço da gasolina em reais<Input onChange={(e) => this.preco(e.target.value)}/></p>
                
                <Button onClick={() => this.resultado(tempo, velocidade, rendimento, preco, distancia)}>
                CALCULAR</Button>

                {exibir ? <div>
                <p>Tempo gasto: {tempo} horas</p>
                <p>Velocidade média: {velocidade} km/h</p>
                <p>Rendimento médio: {rendimento} km/litro</p>
                <p>Distância percorrida: {distancia} km</p>
                <p>Combustível consumido: {combustivel} litros</p>
                <p>Preço total: R$ {total}</p>
                </div> : null}
                
                
            </div>
        )
    }
}
  