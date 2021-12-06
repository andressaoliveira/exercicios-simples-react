import React from "react";
import "./bootstrap.min.css";

export const Calcular = {
    divisiveis(numero1, numero2) {
        return numero1 / numero2;
    },
    naoDivisiveis(numero1, numero2) {
        return numero1 / numero2;
    },
    valorZero(numero1, numero2) {
        return numero1 / numero2;
    },
};

//Aqui estão os testes, mas como chamo a constante Calcular dentro da class Calculo???

export default class Calculo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: null,
            num2: null,
            result: 0,
        };
        this.handleNum1 = this.handleNum1.bind(this);
        this.handleNum2 = this.handleNum2.bind(this);
    }

    handleNum1(event) {
        this.setState({
            num1: Number(event.target.value),
        });
    }

    handleNum2(event) {
        this.setState({
            num2: Number(event.target.value),
        });
    }

    opera(op) {
        switch (op) {
            case "divide":
                this.setState({
                    result: this.state.num1 / this.state.num2,
                    operador: "dividido por",
                });
                break;
        }
    }

    render() {
        return (
            <div className="container">
                <h1>Questão 01</h1>

                <div>
                    <input value={this.state.num1} onChange={this.handleNum1} />
                    <span>{this.state.operador}</span>

                    <input value={this.state.num2} onChange={this.handleNum2} />
                    <span>{this.state.result}</span>
                </div>

                <p>
                    <button onClick={() => this.opera("divide")}> Calcular </button>
                </p>
            </div>
        );
    }
}
