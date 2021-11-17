import { useState } from "react";
// criando o func Combustivel
//com o Tempo 
//VelocidadeM
//RendimentoM
//PreçodaGasolina

function Combustivel() {

    const [form, setForm] = useState({//criando tempo , VelocidadeM , RendimentoM , PreçodaGasolina tambem... valores = 0
        "T": 0,
        "VelocidadeM": 0,
        "RendimentoM": 0,
        "PreçodaGasolina": 0,
    })

    const [Resultado, SetResultado] = useState("")

    function HandleClick() {//Calcular
        let distanciaPercorrida = (form.T * form.VelocidadeM).toFixed(2)//criando a distanciaPercorida
        let litros = (distanciaPercorrida / form.RendimentoM).toFixed(2)//criando os litros
        let totalGasto = (distanciaPercorrida * form.PreçodaGasolina).toFixed(2)// criando totalGasto
        SetResultado(`Velocidade Media : ${form.VelocidadeM}  |  Tempo Gasto : ${form.T}  |  Rendimento : ${form.RendimentoM}  |  Distância Percorrida : ${form.distanciaPercorrida}  |  Qnt Litros : ${litros}  |  Total : R$${totalGasto}`)// mostrando o resultado final
    }

    return (
    //retornando o nosso html . para demonstrar
    //escrever  valores 
        <div className="Combustivel">
            <div>
                <label>Tempo gasto (h)</label>
                <input type="number" onChange={(e) => setForm(form => ({ ...form, ["T"]: e.target.value }))} value={form.T} placeholder="Tempo gasto (h)" /><br/>
            </div>
            <div>
                <label>Velocidade Média (km/h)</label>
                <input type="number" onChange={(e) => setForm(form => ({ ...form, ["VelocidadeM"]: e.target.value }))} value={form.VelocidadeM} placeholder="Velocidade Média (km/h)" /><br/>
            </div>
            <div>
                <label>Rendimento por Litro (km/l)</label>
                <input type="number" onChange={(e) => setForm(form => ({ ...form, ["RendimentoM"]: e.target.value }))} value={form.RendimentoM} placeholder="Rendimento Médio por Litro (km/l)" /><br/>
            </div>
            <div>
                <label>Preço da Gasolina $$</label>
                <input type="number" onChange={(e) => setForm(form => ({ ...form, ["PreçodaGasolina"]: e.target.value }))} value={form.PreçodaGasolinaa} placeholder="Preço da Gasolina" /><br/>
            </div>
            <button type="button" onClick={() => HandleClick()}>Calcular</button>
            <br/>
            
            <br/>
            <label id="resultado">
                {
                    Resultado
                }
            </label>
        </div>
    );
}

export default Combustivel;
