import { useState } from "react";

function Combustivel() {

    const [form, setForm] = useState({
        "Tempo": 0,
        "VelocidadeMedia": 0,
        "RendimentoMedio": 0,
        "PreçodaGasolinaa": 0,
    })

    const [Resultado, SetResultado] = useState("")

    function HandleClick() {
        let distanciaPercorrida = (form.Tempo * form.VelocidadeMedia).toFixed(2)
        let litros = (distanciaPercorrida / form.RendimentoMedio).toFixed(2)
        let totalGasto = (distanciaPercorrida * form.PreçodaGasolinaa).toFixed(2)
        SetResultado(`Velocidade Média : ${form.VelocidadeMedia}  |  Tempo Gasto : ${form.Tempo}  |  Rendimento : ${form.RendimentoMedio}  |  Distância Percorrida : ${form.distanciaPercorrida}  |  Qnt Litros : ${litros}  |  Total : R$${totalGasto}`)
    }

    return (
        <div className="Combustivel">
            <div>
                <label>Tempo gasto (h)</label>
                <input type="number" onChange={(e) => setForm(form => ({ ...form, ["Tempo"]: e.target.value }))} value={form.Tempo} placeholder="Tempo gasto (h)" /><br/>
            </div>
            <div>
                <label>Velocidade Média (km/h)</label>
                <input type="number" onChange={(e) => setForm(form => ({ ...form, ["VelocidadeMedia"]: e.target.value }))} value={form.VelocidadeMedia} placeholder="Velocidade Média (km/h)" /><br/>
            </div>
            <div>
                <label>Rendimento Médio por Litro (km/l)</label>
                <input type="number" onChange={(e) => setForm(form => ({ ...form, ["RendimentoMedio"]: e.target.value }))} value={form.RendimentoMedio} placeholder="Rendimento Médio por Litro (km/l)" /><br/>
            </div>
            <div>
                <label>Preço da Gasolina</label>
                <input type="number" onChange={(e) => setForm(form => ({ ...form, ["PreçodaGasolinaa"]: e.target.value }))} value={form.PreçodaGasolinaa} placeholder="Preço da Gasolina" /><br/>
            </div>
            <button type="button" onClick={() => HandleClick()}>Calcular</button>
            <br/>
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
