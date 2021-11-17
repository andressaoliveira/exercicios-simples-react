import { useState } from "react"

function Combustivel() {

    const [velocidadeMedia, setVelocidadeMedia] = useState(0);
    const [tempoGasto, setTempoGasto] = useState(0);
    const [rendimento, setRendimento] = useState(0);
    const [precoGasolina, setPrecoGasolina] = useState(0);
    const [distancia, setDistancia] = useState(0);
    const [combustivel, setCombustivel] = useState(0);
    const [valorTotal, setValorTotal] = useState(0);

    const [calculado, setCalculado] = useState(false);

    const calcular = (e) => {
        e.preventDefault();

        const dis = tempoGasto * velocidadeMedia;
        setDistancia(dis);

        const comb = dis / rendimento;
        setCombustivel(comb);

        setCalculado(true);
    }

    return (
        <div className="mt-3 combustivel container">
            <form onSubmit={calcular}>
                <div className="mb-3">
                    <label htmlFor="tempo-gasto">Tempo (em horas)</label>
                    <input className="form-control" id="tempo-gasto" onChange={ev => setTempoGasto(ev.target.value)} value={tempoGasto} placeholder="Tempo (em horas)" />
                </div>

                <div className="mb-3">
                    <label htmlFor="velocidade-media">Velocidade média</label>
                    <input className="form-control" id="velocidade-media" onChange={ev => setVelocidadeMedia(ev.target.value)} value={velocidadeMedia} placeholder="Velocidade média" />
                </div>

                <div className="mb-3">
                    <label htmlFor="rendimento">Rendimento</label>
                    <input className="form-control" id="rendimento" onChange={ev => setRendimento(ev.target.value)} value={rendimento} placeholder="Rendimento médio" />
                </div>

                <div className="mb-3">
                    <label htmlFor="preco-gasolina">Preco gasolina</label>
                    <input className="form-control" id="preco-gasolina" onChange={ev => setPrecoGasolina(ev.target.value)} value={precoGasolina} placeholder="Preço da gasolina" />
                </div>

                <div className="mb-3">
                    <button type="submit" className="btn btn-outline-success">Calcular</button>
                </div>    
            </form>

            {
                calculado ?
                <p>
                    <span>Velocida média: {velocidadeMedia}</span><br/>
                    <span>Tempo gasto: {tempoGasto}</span><br/>
                    <span>Rendimento: {rendimento}</span><br/>
                    <span>Distância: {distancia}</span><br/>
                    <span>Combustível: {combustivel}</span><br/>
                    <span>Valor total: {valorTotal}</span>
                </p>
                :
                null
            }
        </div>
    );
}

export default Combustivel;
