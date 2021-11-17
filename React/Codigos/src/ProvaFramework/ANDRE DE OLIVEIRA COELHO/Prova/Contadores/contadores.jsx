import React, { useState, useEffect } from 'react';

export default class Contadores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tempo: '',
            velocimetro: '',
            km: '',
            gasosa: '',
            dindin: '',
            total:  '',
            rendimento: '',
        };
    } 
    calculo(tempo, velocimetro, rendimento, dindin){
        const distancia=parseFloat(tempo)*parseFloat(velocimetro);
        const gasosa=distancia/parseFloat(rendimento);
        const total=parseFloat(dindin)*gasosa;
        this.setState({km:distancia});
        this.setState({gasosa:gasosa});
        this.setState({total:total});
        

    }
    velocimetro = (valor) => {
        this.setState({ velocimetro: valor });
    }
    Litrosporkm = (valor) => {
        this.setState({ rendimento: valor });
    }
    precodagasosa = (valor) => {
        this.setState({ dindin: valor });
    }
    tempo = (valor) => {
        this.setState({ tempo: valor });
    }
    render () {
        const {
            tempo, velocimetro, km, gasosa, dindin, total, rendimento
        }=this.state;
        return (
            <div className="contadores">
                <h1>Gasolina</h1>
                <label>Tempo</label><input type="numero" id="tempo" required onChange={(e) => this.tempo(e.target.value)} /> (Horas)
                <label>Velocimetro</label><input type="numero" required onChange={(e) => this.velocimetro(e.target.value)} /> (KM/H)
                <label>Litrosporkm</label><input type="numero" required  onChange={(e) => this.Litrosporkm(e.target.value)} /> (KM/Litros)
                <label>precodagasosa</label><input type="numero" required onChange={(e) => this.precodagasosa(e.target.value)} /> (R$)
                <button onClick={() => this.calculo(tempo, velocimetro, rendimento, dindin)}>calculo</button>
                <p>velocimetro:{velocimetro}</p>
                <p>tempo:{tempo}</p>
                <p>Rendimento:{rendimento}</p>
                <p>Distância:{km}</p>
                <p>Combustivel:{gasosa}</p>
                <p>Valor total:{total}</p>
                
    
    
            </div>
        )
    }
}

