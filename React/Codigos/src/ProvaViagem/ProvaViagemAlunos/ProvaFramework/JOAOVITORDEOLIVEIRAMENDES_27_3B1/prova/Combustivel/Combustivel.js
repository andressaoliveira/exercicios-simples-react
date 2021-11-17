import React from "react";

export default class Combustivel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tempo: '',
            velocidade: '',
            rendimento: '',
            preco: '',
            resultado: null
        }
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }

    calcular() {
        const distancia = this.state.tempo * this.state.velocidade
        const resultado = distancia / this.state.rendimento
        this.setState({ resultado: resultado })
    }

    /**
     * calculo da quantidade de combustivel gasta
     */

    

    changeTempo(value) {
        this.setState({ tempo: value })
    }
    changeVelocidade(value) {
        this.setState({ velocidade: value })
    }
    changeRendimento(value) {
        this.setState({ rendimento: value })
    }
    changePreco(value) {
        this.setState({ preco: value })
    }

    /**
     * Setando cada state para o valor do input digitado (onChange)
     */



    render() {
        return (
            <div className="col-10">
                <div className="container d-flex align-items-center flex-column ">
                    <i className="h1">Combustivel</i>
                    <div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Tempo</label>
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                onChange={(e) => this.changeTempo(e.target.value)}
                            />
                            <div className="form-text">em horas</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Velocidade media</label>
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                onChange={(e) => this.changeVelocidade(e.target.value)}
                            />
                            <div className="form-text">em Km/h</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Rendimento Medio</label>
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                onChange={(e) => this.changeRendimento(e.target.value)}
                            />
                            <div className="form-text">em Km por litro</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Preco da gasolina</label>
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                onChange={(e) => this.changePreco(e.target.value)}
                            />
                            <div className="form-text">em reais</div>
                        </div>
                        <button className="btn btn-primary" onClick={() => this.calcular()}>Calcular</button>
                    </div>
                    <br />
                    <br />
                    <i className="h1">Combustivel: {this.state.resultado}</i>
                    <i className="h1">Preco: R$ {this.state.resultado * this.state.preco}</i>
                </div>
            </div>
        )
    }
}