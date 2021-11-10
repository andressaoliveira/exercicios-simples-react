import React from 'react';
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
        var quantidade1 = escrito.split(" ");
        this.setState({ quantidade: quantidade1.length});
    };


    render() {

        const { quantidade } = this.state;

        return (
            <div>
                <h2>Contador</h2>
                Digite uma frase:
                <Input onChange={(e) => this.palavra(e.target.value)} />
                <h3>Quantidade: {quantidade}</h3>
            </div>
        )
    }
}