import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Combustivel() {
  const [Distancia, setDistancia] = useState();
  const [Litros, setLitros] = useState();
  const [ValorTotal, setValorTotal] = useState();
  const [VelocidadeM, setVelocidadeM] = useState();
  const [TempoGasto, setTempoGasto] = useState();
  const [Rendimento, setRendimento] = useState();
  const { register, handleSubmit} = useForm();

  function onSubmit(formData){
    const distanciaPercorrida = formData.tempo * formData.vm;
    const litros = distanciaPercorrida / parseInt(formData.rm);
    const valorTotal = formData.gasolina * litros;

    setDistancia(distanciaPercorrida);
    setLitros(litros);
    setValorTotal(valorTotal);
    setVelocidadeM(formData.vm);
    setTempoGasto(formData.tempo);
    setRendimento(formData.rm);
  }

  return (
    <div className="containerCombustivel">

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <span>tempo: </span>
          <input type="text"  {...register("tempo")}/>
          <span>em horas</span>
        </div>
        <div>
          <span>velocidade média: </span>
          <input type="text" {...register("vm")}/>
          <span>em km/h</span>
        </div>
        <div>
          <span>rendimento médio: </span>
          <input type="text" {...register("rm")}/>
          <span>em km/litros</span> 
        </div>
        <div>
          <span>Preço da gasolina  : </span>
          <input type="number" min="0" step="0.01" {...register("gasolina")}/>
          <span>em reais</span>
        </div>
        <div>
          <button>calcular</button>
        </div>
      </form>

      {ValorTotal ?
        <div>
          <div><span>Velocidade média: {VelocidadeM}km/h </span></div>
          <div><span>Tempo gasto: {TempoGasto} horas</span></div>
          <div><span>Rendimento: {Rendimento} km/litros</span></div>
          <div><span>Distância: {Distancia} km</span></div>
          <div><span>Combustivel: {Litros.toFixed(2)} litros</span></div>
          <div><span>Valor Total: R$ {ValorTotal.toFixed(2)}</span></div>
        </div>
        :<></>
      }
    </div>
  );
}
  
  