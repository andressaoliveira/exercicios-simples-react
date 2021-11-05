import React from 'react';
import Button from '../Base/Button';
import Input from '../Base/Input';

export default class Notas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            palavra: null,
            nome: null,
            nota1: null,
            nota2: null,
            aluno: [],
            resultado: [],
            media: null,
            mensagem: null,
            medias: [],
            mediageral: null,
            notas: [],
            mostrar: false
        };
    }

    palavra = (valor) => {
        this.setState({ palavra: valor });
    };

    calculo = (aluno, resultado, medias, mediageral, notas) => {

        const palavra = this.state.palavra
        const palavras = palavra.split(" ");

        var i = 0
        var a = 1;
        var b = 2;

        var nome = palavras[i];
        var nota1 = parseFloat(palavras[a]);
        var nota2 = parseFloat(palavras[b]);

        for (i = 0; i < palavras.length; i = i + 3) {

            nome = palavras[i];
            nota1 = parseFloat(palavras[a]);
            nota2 = parseFloat(palavras[b]);

            a = a + 3;
            b = b + 3;

            var aluno1 = [];

            aluno1 = aluno;

            this.setState({ aluno: aluno1 });

            aluno1.push(`nome: ${nome}`, `nota1: ${nota1}`, `nota2: ${nota2}`);


        }

        var notas1 = [];

        notas1 = notas;

        this.setState({ notas: notas1 });

        const soma = nota1 + nota2;

        notas1.push(soma);

        const media = (nota1 + nota2) / 2;

        var mensagem = null;
        var aprovado = 0;
        var exame = 0;
        var reprovado = 0;

        console.log(aluno);

        var medias1 = [{ media: media }];

        medias1 = medias;

        medias1.push(media);

        mediageral = 0;

        var div = 2;

        for (i = 0; i < medias.length; i++) {
            if (medias[i] >= 7) {
                mensagem = "Aprovado";
                aprovado = aprovado + 1;
            } else if (medias[i] < 3) {
                mensagem = "Reprovado";
                reprovado = reprovado + 1;
            } else {
                mensagem = "Exame";
                exame = exame + 1;
            }
            mediageral = mediageral + notas1[i];
            var mediatotal = mediageral / div;
            div = div + 2;
        }

        var resultado1 = [];

        resultado1 = resultado;

        this.setState({ resultado: resultado1 });

        resultado1.push(`Nome do aluno: ${nome}`,  `a) Media do aluno: ${media}`, `b) Mensagem do aluno: ${mensagem}`);

        this.setState({ aprovado: `c) Total de alunos aprovados: ${aprovado}` });
        this.setState({ exame: `d) Total de alunos exame: ${exame}` });
        this.setState({ reprovado: `e) Total de alunos reprovado: ${reprovado}` });
        this.setState({ mediageral: `f) Media da classe: ${mediatotal}` });
    };

    mostrar = (mostrar) => {
        this.setState({
            mostrar: true
        });
    };


    render() {

        const { aluno, resultado, medias, mediageral, notas, mostrar, aprovado, reprovado, exame} = this.state;

        return (
            <div>
                <h2>Notas</h2>
                <Input onChange={(e) => this.palavra(e.target.value)} />
                <Button onClick={() => this.calculo(aluno, resultado, medias, mediageral, notas)}>Resultados de cada aluno</Button>
                <Button onClick={() => this.mostrar(mostrar)}>Resultados de todos os alunos</Button>
                <ul>
                    {
                    resultado.map((item) =>
                        <li>{item}</li>)
                    }
                </ul>
                {mostrar ? <div>
                    <h4>{aprovado}</h4>
                    <h4>{exame}</h4>
                    <h4>{reprovado}</h4>
                    <h4>{mediageral}</h4>
                </div> : null}
            </div>
        )
    }
}