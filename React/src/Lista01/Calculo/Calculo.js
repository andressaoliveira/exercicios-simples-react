import React from 'react';
import Button from '../Base/Button';
import Input from '../Base/Input';

export default class Calculo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numero: null,
            numeros: [],
            soma: null,
            produto: null,
            media: null,
        };
    }

    numero = (valor) => {
        this.setState({ numero: valor });
    };

    inserir = () => {
        const { numero, numeros } = this.state;
        let numerosInsert = numeros;
        numerosInsert.push(numero);
        this.setState({ numeros: numerosInsert });
    };

    calculo = () => {
        const { numeros } = this.state;

        var soma1 = 0;
        numeros.forEach(numero => {
            soma1 += parseFloat(numero);
        });

        var produto1 = 1;
        numeros.forEach(numero => {
            produto1 *= parseFloat(numero);
        });

        this.setState({
            soma: soma1,
            media: soma1 / numeros.length,
            produto: produto1
        });

    };

    render() {

        const { numeros, soma, produto, media } = this.state;

        return (
            <div>
                <h2>Calculo</h2>
                <Input onChange={(e) => this.numero(e.target.value)} />
                <Button onClick={() => this.inserir()}>Inserir</Button>
                <Button onClick={() => this.calculo()}>Calcular</Button>

                <div>
                    Numeros: {numeros.map(numero => (
                        (`${numero} `)
                    ))}
                </div>

                <h4>{soma}</h4>
                <h4>{produto}</h4>
                <h4>{media}</h4>
            </div>
        )
    }
}