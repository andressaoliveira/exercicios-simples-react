import React from "react";
import "./Combustivel.scss"

export default class Combustivel extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            tempo: null,
            velmedia: null,
            rendmedio: null,
            gasolinapreco: null,
            distancia: null,
            litros: null,
            valortotal: null,
            exibir: false
        }
    }

    changeTempo(t){
        this.setState({
            tempo:t,
            exibir: false
        })
    }
    changeVel(vel){
        this.setState({
            velmedia: vel,
            exibir: false
        })
    }
    changeRendimento(rend){
        this.setState({
            rendmedio: rend,
            exibir: false
        })
    }
    changeGasolina(preco){
        this.setState({
            gasolinapreco: preco,
            exibir: false
        })
    }

    calcularTudo(){
        const {tempo, velmedia, rendmedio, gasolinapreco} = this.state
        if(!tempo || !velmedia || !rendmedio || !gasolinapreco){
            alert("Insira todo os dados no formulário por favor!")
        }
        else{
            let dist = tempo * velmedia
            let litros = dist / rendmedio
            let total = gasolinapreco * litros

            this.setState({
                distancia: dist,
                litros: litros.toFixed(2),
                valortotal: total.toFixed(2),
                exibir: true
            })

        }
    }



    render(){
        return(
            <div className="combustivel">
                <h2>Combustível</h2><br />

                <label>Tempo:</label>
                <input type="number" onChange={(e) => this.changeTempo(e.target.value)}/>
                <span>(em horas)</span><br />

                <label>Velociade média:</label>
                <input type="number" onChange={(e) => this.changeVel(e.target.value)}/>
                <span>(em km/h)</span><br />

                <label>Rendimento médio:</label>
                <input type="number" onChange={(e) => this.changeRendimento(e.target.value)}/>
                <span>(em km/litros)</span><br />

                <label>Preço gasolina:</label>
                <input type="number" onChange={(e) => this.changeGasolina(e.target.value)}/>
                <span>(em reais R$)</span><br />
                <button onClick={() => this.calcularTudo()}>Calcular</button><br />


                {this.state.exibir ? <div className="form">
                    <span>Velocidade média: </span>{this.state.velmedia}<span> km/h</span><br />
                   <span>Tempo gasto: </span> {this.state.tempo}<span> horas</span><br />
                    <span>Rendimento: </span>{this.state.rendmedio}<span> km/litros</span><br />
                   <span>Distância: </span> {this.state.distancia}<span> km</span><br />
                   <span>Combustível: </span>{this.state.litros}<span> litros</span><br />
                   <span>Valor total: R$</span> {this.state.valortotal}<br />
                </div>: null}

            </div>
        )
    }
}