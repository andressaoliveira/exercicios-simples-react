import React from "react";
import './PaginaInicial.scss';

export default class PaginaInicial extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="paginainicial">
                <h2>Início</h2>
                <h5>Escolha o seu Destino:</h5>
                <select name="select">
                    <option value="Londres">Londres</option>
                    <option value="Nova Delhi" selected>Nova Delhi</option>
                    <option value="San Francisco">San Francisco</option>
                </select>
            </div>
        )
    }
}