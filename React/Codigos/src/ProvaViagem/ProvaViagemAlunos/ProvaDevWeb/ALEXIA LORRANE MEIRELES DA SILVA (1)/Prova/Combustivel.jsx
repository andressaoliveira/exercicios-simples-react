import {useForm} from "react-hook-form";
import {useState} from "react";

export default function Combustivel(){
    //Setando as variáveis para os cálculos
    const [Velocidade, setVelocidade] = useState();
    const [TempoGasto, setTempoGasto] = useState();
    const [Rendimento, setRendimento] = useState();
    const [Distancia, setDistancia] = useState();
    const [Combustivel, setCombustivel] = useState();
    const [ValorTotal, setValorTotal] = useState();
    
    //Validação do formulário
    const {register, handleSubmit} = useForm();

    function onSubmit(formData){
        const distanciaPercorrida = formData.tempo * formData.vm;
        const litros = distanciaPercorrida / parseInt(formData.rm);
        const valorTotal = formData.gasolina * litros;

        setDistancia(distanciaPercorrida);
        setCombustivel(litros);
        setValorTotal(valorTotal);
        setVelocidade(formData.vm);
        setTempoGasto(formData.tempo);
        setRendimento(formData.rm);
    }

    return (
        <div className="containerCombustivel">
            <h2>Combustível</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                <span>Tempo: </span>
                <input type="text"  {...register("tempo")}/>
                <span>(em horas)</span>
                </div>
                <div>
                <span>Velocidade média: </span>
                <input type="text" {...register("vm")}/>
                <span>(em km/h)</span>
                </div>
                <div>
                <span>Rendimento médio: </span>
                <input type="text" {...register("rm")}/>
                <span>(em km/litros)</span> 
                </div>
                <div>
                <span>Preço da gasolina: </span>
                <input type="number" min="0" step="0.01" {...register("gasolina")}/>
                <span>(em reais R$)</span>
                </div>
                <div>
                <button>Calcular</button>
                </div>
            </form>
            {ValorTotal ?
                <div>
                <div><span>Velocidade média: {Velocidade}km/h </span></div>
                <div><span>Tempo gasto: {TempoGasto} horas</span></div>
                <div><span>Rendimento: {Rendimento} km/litros</span></div>
                <div><span>Distância: {Distancia} km</span></div>
                <div><span>Combustivel: {Combustivel.toFixed(2)} litros</span></div>
                <div><span>Valor Total: R$ {ValorTotal.toFixed(2)}</span></div>
                </div>
                :<></>
            }
        </div>
    );
}
  
  