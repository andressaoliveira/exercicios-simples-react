import React from "react";

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="col-10">
                <div className="container d-flex align-items-center flex-column ">
                    <i className="h1">Inicio</i>
                    <span>Selecione seu destino</span>

                    <select name="places" id="places" className="form-select">
                        <option value="">Belo Horizonte</option>
                        <option value="">Sabara</option>
                        <option value="">Brumadinho</option>
                        <option value="">Uberaba</option>
                        <option value="">Uberlandia</option>
                    </select>
                </div>
            </div>
        )
    }
}