import React from "react";
import { Select } from "./components/Select/Select"
import { getLocais } from "./components/ListaLocais/ListaLocais";

export default class Inicio extends React.Component {
    render() {
        let locais = getLocais();
        return (
            <div>
                <h5>Selecione seu destino</h5>
                <Select name="selectLocais">
                    <option defaultValue="escolher">Escolher</option>
                    {locais.map((nomes, key) => {
                        return <option key={key} value={nomes.nome}>
                            {nomes.nome}
                        </option>
                    })
                    }
                </Select>
            </div>
        );
    }
}