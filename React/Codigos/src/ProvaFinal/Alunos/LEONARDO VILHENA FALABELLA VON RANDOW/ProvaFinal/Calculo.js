import React from "react";


export default class Calculo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            numero1: null,
            numero2: null,
            mensagem: null,
            exibir: false
        }
    }
    InserirPrimeiro(num1) {
        this.setState({
            numero1: num1
        })
    }
    InserirSegundo(num2) {
        this.setState({
            numero2: num2
        })
    }

    testDiv(num1, num2){
        return num1 / num2
    }

    calculaDivisivel() {
        const { numero1, numero2 } = this.state;


        if(!numero1 || !numero2){
            alert("insira os dois números por favor!")
        }
        else if(numero1 % numero2 === 0) {
            this.setState({
                mensagem: `${numero1} é divisível por ${numero2}`,
                exibir: true
            })
           
        }
        else {
            this.setState({
                mensagem: `${numero1} não é divisível por ${numero2}`,
                exibir: true
            })
        }
        



    }

    render() {
        return (
            <div className="paginainicial">
                <h2>Divisível</h2><br />
                <div className="campo">
                    <label>Primeiro número: </label>
                    <input type="number" onChange={(e) => this.InserirPrimeiro(e.target.value)} />
                </div><br />
                <div  className="campo">
                    <label>Segundo número: </label>
                    <input type="number" onChange={(e) => this.InserirSegundo(e.target.value)} />
                </div><br />
                <button onClick={() => this.calculaDivisivel()}>Calcular</button>
                <br/>
                {this.state.exibir ? <div>
                    <p>{this.state.mensagem}</p>
                </div> : null}


            </div>
        )
    }
}