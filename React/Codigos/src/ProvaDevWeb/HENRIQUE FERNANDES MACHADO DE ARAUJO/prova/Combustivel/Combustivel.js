import React from "react";
import { FormControl, FormLabel, Button } from "react-bootstrap";

class Combustivel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tempo: 0,
            vel: 0,
            rendimento: 0,
            preco: 0,
            show: false,
            total: 0,
            combustivel: 0,
            distancia: 0
        };
    }

    calcular = () => {
        var distancia = this.state.tempo * this.state.vel;
        var combustivel = distancia / this.state.rendimento;
        var total = combustivel * this.state.preco;
        this.setState({distancia: distancia, combustivel: combustivel.toFixed(2), total: total.toFixed(2), show: true});
    }

    render(){
        return (
            <div className="body">
                <h1>Combustivel</h1>

                <div className="col-md-3">
                    <div className="row">
                        <div className="col-md-12">
                            <FormLabel>Tempo (em horas)</FormLabel>
                            <FormControl onChange={(e) => this.setState({tempo: e.target.value})} />
                        </div>
                        <div className="col-md-12">
                            <FormLabel>Velocidade Média (em km/h)</FormLabel>
                            <FormControl onChange={(e) => this.setState({vel: e.target.value})} />
                        </div>
                        <div className="col-md-12">
                            <FormLabel>Rendimento médio (em km/litros)</FormLabel>
                            <FormControl onChange={(e) => this.setState({rendimento: e.target.value})} />
                        </div>
                        <div className="col-md-12">
                            <FormLabel>Preço Gasolina (em reais R$)</FormLabel>
                            <FormControl onChange={(e) => this.setState({preco: e.target.value})} />
                        </div>
                        <div className="col-md-12">
                            <Button onClick={this.calcular} style={{marginTop: 15}}>Calcular</Button>
                        </div>
                        {this.state.show && (
                            <div className="row" style={{marginTop: 10}}>
                                <div className="col-md-12">
                                    <label>Velocidade Média: {this.state.vel} km/h</label>
                                </div>
                                <div className="col-md-12">
                                    <label>Tempo gasto: {this.state.tempo} horas</label>
                                </div>
                                <div className="col-md-12">
                                    <label>Rendimento: {this.state.rendimento} km/litros</label>
                                </div>
                                <div className="col-md-12">
                                    <label>Distancia: {this.state.distancia} km</label>
                                </div>
                                <div className="col-md-12">
                                    <label>Combustivel: {this.state.combustivel} litros</label>
                                </div>
                                <div className="col-md-12">
                                    <label>Valor total: R$ {this.state.total}</label>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Combustivel