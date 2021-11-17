import React from 'react';
import Combustivel2 from '../Combustivel/Combustivel2.css'


//function Calcular() {
    //function adicionarCalculo(){
       // console.log('Calculou');
    //}


//}


export default class visual extends React.Component {
    render() {
        return (
            <div className="Inicio">
                <nav> 
                <h1>Combustivel:</h1>
                <h1>------------------------------------------------------------</h1>
                <h1>Tempo(em horas):</h1><textarea></textarea>
                <h1>Velocidade média:(em km/h)</h1><textarea></textarea>
                <h1>Rendimento médio(em litros):</h1><textarea></textarea>
                <h1>Preço Gasolina(em reais R$):</h1><textarea></textarea>
                <h1></h1>
                <button>Calcular</button>
                <h1></h1>
                <label>Velocidade Média:</label>
                <h1></h1>
                <label1>Tempo Gasto:</label1>
                <h1></h1>
                <label2>Rendimento:</label2>
                <h1></h1>
                <label3>Distância:</label3>
                <h1></h1>
                <label4>Combustivel:</label4>
                <h1></h1>
                <label5>Valor Total:</label5>
                </nav>
            </div >
        );
    }
}