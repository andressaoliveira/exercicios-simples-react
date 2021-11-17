import React from "react";
import './Fuel.css'

const calculate = () => {
    const time = document.getElementById('time').value;
    const velocity = document.getElementById('velocity').value;
    const kmPerLiter = document.getElementById('kmPerLiter').value;
    const price = document.getElementById('price').value;

    const distancy = (time * velocity)  / kmPerLiter;
    const totalLiters = distancy * kmPerLiter;
    const finalPrice = totalLiters * price;
    return (
        showDiv(velocity, time, kmPerLiter, distancy, totalLiters, finalPrice)
    )
}

const showDiv =  (velocity, time, kmPerLiter, distancy, totalLiters, finalPrice) => {
    const result =  `
        <div id="divResult">
            <p> Velocidade média ${velocity} km/h</p>
            <p> Tempo gasto ${time} horas</p>
            <p> Rendimento ${kmPerLiter}km/l </p>
            <p> Distancia ${distancy} km </p>
            <p> Combustivel ${totalLiters} L </p>
            <p> Valor total ${finalPrice} reais </p>
        </div>
   `
   let div = document.createElement("div");
    div.innerHTML = result; 
    document.body.appendChild(div);

}


export default class Fuel extends React.Component {
    render() {
        return (
            <div className="Container" style={{display: 'flex', flexDirection: 'column'}}>
                <div className="inputs">
                    <input type="number" id="time" placeholder="tempo em horas" />
                    <input type="number" id="velocity" placeholder="velocidade média em km/h" />
                    <input type="number" id="kmPerLiter" placeholder="rendimento médio em km/litros" />
                    <input type="number" id="price" placeholder="preço da gasolina em reais" />
                    <button type="button" onClick={calculate}>Calcular</button>
                </div>

            </div>
        )
    }
}