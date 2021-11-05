import React from 'react';
import Button from '../Base/Button';
import Input from '../Base/Input';

export default class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            palavra: null,
            quantidade: null
        };
    }

    palavra = (escrito) => {
        this.setState({ palavra: escrito });
    };

    contar = () => {

        var palavras = this.state.palavra
        var quantidade1 = palavras.split(" ");
        this.setState({ quantidade: `Quantidade de palavras: ${quantidade1.length}` });

    };


    render() {

        const { quantidade } = this.state;

        return (
            <div>
                <h2>Contador</h2>
                Digite uma frase:
                <Input onChange={(e) => this.palavra(e.target.value)} />
                <Button onClick={() => this.contar(quantidade)}>Numero de palavras</Button>
                <h3>{quantidade}</h3>
            </div>
        )
    }
}