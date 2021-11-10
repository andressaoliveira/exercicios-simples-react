import React from 'react';
import Button from '../Base/Button';
import Input from '../Base/Input';

export default class Notas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nota1: null,
            nota2: null,
            aprovados: [],
            reprovados: [],
            exames: [],
            mediaGeral: null,
            notas: [],
            mostrar: false
        };
    }

    nota = (valor, id) => {
        if (id === 1)
            this.setState({ nota1: parseFloat(valor) });
        else if (id === 2)
            this.setState({ nota2: parseFloat(valor) });
    };

    inserir = () => {
        const { nota1, nota2, notas } = this.state;
        let notasInsert = notas;
        const media = (nota1 + nota2) / 2;
        notasInsert.push({
            nota1,
            nota2,
            media,
            mensagem: this.obtemMensagem(media)
        });
        this.setState({
            notas: notasInsert,
            mostrar: false
        });
        console.log(this.state.notas)
    };

    obtemMensagem(nota) {
        if (nota <= 3)
            return 'Reprovado';
        if (nota > 7)
            return 'Aprovado';

        return 'Exame';
    }


    calculo = () => {
        const { notas } = this.state;
        let soma = 0;
        notas.forEach(nota => {
            soma += nota.media;
        });
        this.setState({
            aprovados: notas.filter(nota => nota.mensagem === 'Aprovado'),
            exames: notas.filter(nota => nota.mensagem === 'Exame'),
            reprovados: notas.filter(nota => nota.mensagem === 'Reprovado'),
            mediaGeral: soma / notas.length,
            mostrar: true
        })
    };


    render() {

        const { notas, aprovados, reprovados, exames, mediaGeral, mostrar } = this.state;

        return (
            <div>
                <h2>Notas</h2>
                <p>Digite as notas do aluno e clique em inserir:</p>
                Nota 1: <Input onChange={(e) => this.nota(e.target.value, 1)} />
                Nota 2: <Input onChange={(e) => this.nota(e.target.value, 2)} />
                <Button onClick={() => this.inserir()}>Inserir</Button>
                <Button onClick={() => this.calculo()}>Calcular</Button>

                <div id="individual">
                    {mostrar &&
                        notas.map((nota, key) =>
                            <p key={key}>Aluno {key+1}: {nota.media} - {nota.mensagem}</p>)
                    }
                </div>
                {mostrar && <div>
                    <p>Aprovados: {aprovados.length}</p>
                    <p>Reprovados: {reprovados.length}</p>
                    <p>Exames: {exames.length}</p>
                    <p>Média: {mediaGeral}</p>
                </div>}
            </div>
        )
    }
}