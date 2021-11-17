import React from 'react';

export class Combustivel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            tempo: 0,
            velocidade: 0,
            rendimento: 0,
            preco: 0.00,
            distancia: 0,
            combustivel: 0
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleInputChange(event) {
        this.setState({showComponent: false});
        
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        let dist = this.state.tempo * this.state.velocidade;
        let comb = dist / this.state.rendimento;

        this.setState({
            showComponent: true,
            distancia: dist,
            combustivel: comb.toString().split(".").map((el,i)=>i?el.split("").slice(0,2).join(""):el).join(".")
        });
        event.preventDefault();
    }
  
    render() {
      return (
        <div className="Prova">
            <h1>Combustivel</h1>
            <form onSubmit={this.handleSubmit}>
                <span>
                    Tempo:
                    <input name="tempo" type="text" value={this.state.tempo} onChange={this.handleInputChange} />
                    (em horas)
                </span>
                <br/>
                <span>
                    Velocidade média:
                    <input name="velocidade" type="text" value={this.state.velocidade} onChange={this.handleInputChange} />
                    (em km/h)
                </span>
                <br/>
                <span>
                    Rendimento médio:
                    <input name="rendimento" type="text" value={this.state.rendimento} onChange={this.handleInputChange} />
                    (em km/litros)
                </span>
                <br/>
                <span>
                    Preço Gasolina:
                    <input name="preco" type="text" value={this.state.preco} onChange={this.handleInputChange} />
                    (em reais)
                </span>
                <br/>
                <input type="submit" value="Calcular" />
            </form>
            <div>
                {this.state.showComponent ?
                    <div>
                        <span>Velocidade média: {this.state.velocidade} km/h</span><br/>
                        <span>Tempo Gasto: {this.state.tempo} horas</span><br/>
                        <span>Rendimento: {this.state.rendimento} km/litros</span><br/>
                        <span>Distância: {this.state.distancia} km</span><br/>
                        <span>Combustivel: {this.state.combustivel} litros </span><br/>
                        <span>Valor Total: R${ (this.state.combustivel * this.state.preco).toString().split(".").map((el,i)=>i?el.split("").slice(0,2).join(""):el).join(".") }</span>
                    </div> 
                    :
                    null
                }
            </div>
        </div>
      );
    }
}