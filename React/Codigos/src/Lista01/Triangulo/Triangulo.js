import React from 'react';
import Button from '../../Base/Button';
import Input from '../../Base/Input';

export default class Triangulo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lado1: null,
            lado2: null,
            lado3: null,
            tipo: ''
        };
    }

    valor1 = (valor) => {
        this.setState({ lado1: valor });
    };

    valor2 = (valor) => {
        this.setState({ lado2: valor });
    };

    valor3 = (valor) => {
        this.setState({ lado3: valor });
    };

    verificarTriangulo = () => {
        const lado1 = parseFloat(this.state.lado1);
        const lado2 = parseFloat(this.state.lado2);
        const lado3 = parseFloat(this.state.lado3);
        if (lado1 + lado2 >= lado3 && lado3 + lado2 >= lado1 && lado1 + lado3 >= lado2) {
            if (lado1 === lado2 && lado2 === lado3) {
                this.setState({ tipo: "É um triangulo equilátero" });
            } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
                this.setState({ tipo: "É um triangulo isósceles" });
            } else {
                this.setState({ tipo: "É um triangulo escaleno" });
            }
        } else {
            this.setState({ tipo: "Não é um triangulo" });
        }
    };

    render() {
        const { tipo } = this.state;

        return (
            <div>
                <h2>Triangulo</h2>
                Lado 1: <Input onChange={(e) => this.valor1(e.target.value)} />
                Lado 2: <Input onChange={(e) => this.valor2(e.target.value)} />
                Lado 3: <Input onChange={(e) => this.valor3(e.target.value)} />
                <Button onClick={() => this.verificarTriangulo()}>Verificar</Button>
                <h3>{tipo}</h3>
            </div>
        )
    }
}