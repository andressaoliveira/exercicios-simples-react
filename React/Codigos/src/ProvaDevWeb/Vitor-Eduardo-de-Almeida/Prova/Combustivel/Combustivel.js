import React from "react";

class Combustivel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tempo: 0,vel: 0,rendimento: 0,preco: 0,show: false,total: 0,combustivel: 0,distancia: 0
        };
    }

    calculo = () => {
        var distancia = this.state.tempo * this.state.vel;
        var combustivel = distancia / this.state.rendimento;
        var total = combustivel * this.state.preco;

        this.setState({distancia: distancia, combustivel: combustivel.toFixed(2), total: total.toFixed(2), show: true});
    }

    render(){
        return (
            <div>
                <h1>Combustivel</h1>
                <div>
                    <div>
                        <div>
                            <label>Tempo: </label>
                            <input onChange={(e) => this.setState({tempo: e.target.value})}/>
                            <label>(Em horas)</label>
                        </div>
                        <div>
                            <label>Velocidade media: </label>
                            <input onChange={(e) => this.setState({vel: e.target.value})}/>
                            <label>(Em km/h)</label>
                        </div>
                        <div>
                            <label>Rendimento médio: </label>
                            <input onChange={(e) => this.setState({rendimento: e.target.value})}/>
                            <label>(Em km/litros)</label>
                        </div>
                        <div>
                            <label>Preço Gasolina:: </label>
                            <input onChange={(e) => this.setState({preco: e.target.value})}/>
                            <label>(Em reais R$)</label>
                        </div>
                        <div>
                        <button onClick={this.calculo} style={{marginTop: 15}}>Calcular</button>
                        </div>
                        <div style={{marginTop: 10}}>
                            <div>
                                <label>Tempo: {this.state.tempo} horas</label>
                            </div>
                            <div>
                                <label>Velocidade Média: {this.state.vel} km/h</label>
                            </div>
                            <div>
                                <label>Rendimento medio: {this.state.rendimento} km/litros</label>
                            </div>
                            <div>
                                <label>Distancia: {this.state.distancia} km</label>
                            </div>
                            <div>
                                <label>Combustivel: {this.state.combustivel} litros</label>
                            </div>
                            <div>
                                <label>Valor total: R$ {this.state.total}</label>
                            </div>
                        </div>
                    </div>
                </div>     
            </div>
        )
    }
}

export default Combustivel