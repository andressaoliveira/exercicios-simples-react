import React, { useState } from 'react'
import ReactDOM from 'react-dom';

function Combustivel() {

    // setando os estados
    const [time, setTime] = useState("");
    const [speed, setSpeed] = useState("");
    const [rend, setRend] = useState("");
    const [price, setPrice] = useState("");
    const [sValue, setSValue] = useState("")

    // função de click no botão
    function Clicado() {

        // calculo dos valores 
        let dist = time * speed
        let fuel = dist / rend
        let resall = fuel * price
        // formatacao das casas decimais para no máximo 2
        let dist2 = parseFloat(dist.toFixed(2));
        let fuel2 = parseFloat(fuel.toFixed(2));
        let resall2 = parseFloat(resall.toFixed(2));

        // criação do elemento "resultado" após clicar no botão 
        const element = <div>
            <label>Velocidade média:<b> {speed} km/h</b></label><br />
            <label>Tempo gasto:<b> {time} horas</b></label><br />
            <label>Rendimento:<b> {rend} km/litro</b></label><br />
            <label>Distância:<b> {dist2} km</b></label><br />
            <label>Combustível:<b> {fuel2} litros</b></label><br />
            <label>Valor total: <b>R$ {resall2}</b></label>
        </div>;
        ReactDOM.render(element, document.getElementById('res'));
    }

    return (
        // inputs para inserir as informações 
        <div className="combustivel col-md-12 form-control">
            <h1>Combustivel</h1>
            <label><b>Tempo</b> </label><input type="number" className="input-group inpt1"  onChange={event => setTime(event.target.value)} required />(em horas)<br /><br />
            <label><b>Velocidade média</b></label><input type="number" className="input-group inpt2" onChange={event => setSpeed(event.target.value)} required />(em em km/h)<br /><br />
            <label><b>Rendimento médio</b></label><input type="number" className="input-group inpt3" onChange={event => setRend(event.target.value)} required />(em em km/litros)<br /><br />
            <label><b>Preço Gasolina</b></label><input type="number" className="input-group inpt4" onChange={event => setPrice(event.target.value)} required />(em reais R$)<br /><br />
            <input type="button" className="btn btn-success" value="Enviar" onClick={() => Clicado()} /><br /><br />
            <div className="resultado" id="res"></div>
        </div>
    )
}

export default Combustivel;