import React from 'react';
import Button from '../Base/Button';
import Input from '../Base/Input';

export default class Idade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            dia: null,
            mes: null,
            ano: null,
            idadeAnos: null,
            idadeMeses: null,
            idadeDias: null,
            idadeSemanas: null
        };
    }

    data = (valor) => {
        this.setState({ data: valor });
    };

    calcularIdade = () => {
        const data = this.state.data
        const Nasc = data.split("/");
        const dia = parseInt(Nasc[0]);
        const mes = parseInt(Nasc[1]);
        const ano = parseInt(Nasc[2]);
        var dataAtual = new Date();
        var anoAtual = dataAtual.getYear();
        var mesAtual = dataAtual.getMonth();
        var diaAtual = dataAtual.getDate();

        var dataFormato = new Date(ano, mes - 1, dia);

        var anoData = dataFormato.getYear();
        var mesData = dataFormato.getMonth();
        var diaData = dataFormato.getDate();
        var idadeAnos = anoAtual - anoData;
        var idadeMeses = 0;
        var idadeSemanas = 0;
        var idadeDias = 0;

        if (mesAtual >= mesData)
            idadeMeses = mesAtual - mesData;
        else {
            idadeAnos--;
            idadeMeses = 12 + mesAtual - mesData;
        }

        if (diaAtual >= diaData)
            idadeDias = diaAtual - diaData;
        else {
            idadeMeses--;
            idadeDias = 30 + diaAtual - diaData;

            if (idadeMeses < 0) {
                idadeMeses = 11;
                idadeAnos--;
            }
        }

        if (idadeAnos > 0) {
            idadeMeses = idadeAnos * 12 + idadeMeses;
        }

        if (idadeMeses > 0) {
            idadeDias = idadeMeses * 30 + idadeDias;

        }

        if (idadeDias >= 7) {
            idadeSemanas = Math.trunc(idadeDias / 7);
        }

        this.setState({ idadeAnos: `a) Idade em anos: ${idadeAnos}` });

        this.setState({ idadeMeses: `b) Idade em meses: ${idadeMeses}` });

        this.setState({ idadeDias: `c) Idade em dias: ${idadeDias}` });

        this.setState({ idadeSemanas: `d) Idade em semanas: ${idadeSemanas}` });
    };

    render() {

        const { idadeAnos, idadeMeses, idadeDias, idadeSemanas } = this.state;
        return (
            <div>
                <h2>Idade</h2>
                Digite sua data de nascimento (dd/mm/aaaa):
                <Input onChange={(e) => this.data(e.target.value)} />
                <Button onClick={() => this.calcularIdade()}>Calcular idade</Button>
                <h4>{idadeAnos}</h4>
                <h4>{idadeMeses}</h4>
                <h4>{idadeDias}</h4>
                <h4>{idadeSemanas}</h4>
            </div>
        )
    }
}