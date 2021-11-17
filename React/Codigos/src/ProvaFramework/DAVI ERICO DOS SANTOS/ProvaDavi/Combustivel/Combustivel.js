import React from "react"

export default class Combustivel extends React.Component {
    render() {

        /* oi fessora, nao consegui recuperar os dados, o .value esta dando um erro que nao consegui resolver, 
         por isso deixei o codigo comentado. Por favor considere minha tentativa.*/
        /*
        let in1 = document.getElementById('1')
        let in2 = document.getElementById('2')
        let in3 = document.getElementById('3')
        let in4 = document.getElementById('4')*/

        function RecuperarInputs() {
            /*
            let inp1 = in1.value
            let inp2 = in2.value
            let inp3 = in3.value
            let inp4 = in4.value*/
        }

        function ClicarBotao() {
            // let distancia = imp1*inp2
            // let litros = distancia/inp3

        }

        return (
            <div className="combustivel">
                <div className="info-combustivel">
                    <label>Tempo </label><input type="text" id="1" onChange={RecuperarInputs()} /><label>(em horas)</label><br />
                    <label>Velocidade média </label><input type="text" id="2" onChange={RecuperarInputs()} /><label>(em km/h)</label><br />
                    <label>Rendimento médio </label><input type="text" id="3" onChange={RecuperarInputs()} /><label>(em km/litros)</label><br />
                    <label>Preço gasolina</label><input type="text" id="4" onChange={RecuperarInputs()} /><label>(em reais R$)</label><br />
                    <input type="button" value="Enviar" onClick={ClicarBotao()} /><br /><br />
                </div>
                <label>Velocidade média: { }</label><br />
                <label>Tempo gasto: { }</label><br />
                <label>Rendimento: { }</label><br />
                <label>Distância: { }</label><br />
                <label>Combustível: { }</label><br />
                <label>Valor total: { }</label>
            </div>
        )
    }
}