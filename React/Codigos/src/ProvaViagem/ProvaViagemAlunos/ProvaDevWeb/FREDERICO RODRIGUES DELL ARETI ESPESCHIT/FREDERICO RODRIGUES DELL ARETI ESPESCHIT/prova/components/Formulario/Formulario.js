import React from "react";
import { Input, Stack } from "@chakra-ui/react";
import COMB from "../../pages/combustivel/comb";
import "./style.scss";

export default class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tempo: "",
            velocidade: "",
            rendimento: "",
            valor: "",
        };
    }

    changetempo(newtempo) {
        this.setState({ tempo: newtempo });
    }

    changevelocidade(newvelocidade) {
        this.setState({ velocidade: newvelocidade });
    }

    changerendimento(newrendimento) {
        this.setState({ rendimento: newrendimento });
    }

    changevalor(newvalor) {
        this.setState({ valor: newvalor });
    }

    render() {
        const { tempo, velocidade, rendimento, valor } = this.state;
        return (
            <div className="container1">
                <div className="infos">
                    <div className="infos-inputs">
                        <h4>Informe os Dados</h4>

                        <Stack spacing={3}>
                            <Input placeholder="Tempo" onChange={(e) => this.changetempo(e.target.value)} />
                            <Input placeholder="Velocidade" onChange={(e) => this.changevelocidade(e.target.value)} />
                            <Input placeholder="Rendimento" onChange={(e) => this.changerendimento(e.target.value)} />
                            <Input placeholder="Valor" onChange={(e) => this.changevalor(e.target.value)} />
                        </Stack>
                    </div>

                    <div id="resultado-formulario">
                        <h4>Resultado</h4>
                        <div>Tempo: {tempo}Horas</div>
                        <div>Velocidade: {velocidade}Km/h</div>
                        <div>Rendimento: {rendimento}Km/litros</div>
                        <div>Valor: {valor}Reais</div>
                    </div>
                </div>

                <div className="button">
                    <COMB valor={valor} />
                </div>
            </div>
        );
    }
}
