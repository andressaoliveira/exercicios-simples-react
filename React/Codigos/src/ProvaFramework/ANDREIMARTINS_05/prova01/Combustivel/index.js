
import { Navbar } from "../nav";
export function Combustivel() {
    return (
        <div>
            <Navbar />
            <label for="nome">Tempo:(em horas) </label>
            <input id="tempo" type="text" value="" /><br></br>
            <label for="nome">Velocidade Média:(em km/h) </label>
            <input id="velo" type="text" value="" /><br></br>
            <label for="nome">Rendimento Médio:(em km/litros) </label>
            <input id="rend" type="text" value="" /><br></br>
            <label for="nome">Preço Gasolina:(em reais R$) </label>
            <input id="gasol" type="text" value="" /><br></br>
            <input id="Calcular" type="button" value="" />
        </div>

    );

};
{/* Nessa parte tentei fazer o calculo de alguma forma, acredito que não tenha conseguido executar mais a logica ta certa */ }


