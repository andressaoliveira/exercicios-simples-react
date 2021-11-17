import React, {useState} from "react";
import Input from "../../Input";
import Button from "../../Button";

export default () => {
    const [tempo, setTempo] = useState(0)
    const [veloc, setVeloc] = useState(0)
    const [rendM, setRendM] = useState(0)
    const [valorGas, setValorGas] = useState(0)
    const [qtdCombustivel, setQtdCombustivel] = useState(0)
    const [distanciaPercorrida, setDistanciaPercorrida] = useState(0)
    const [valorViagem, setValorViagem] = useState()

    const clique = () => {

        setDistanciaPercorrida(tempo*veloc)
        setQtdCombustivel(distanciaPercorrida/rendM)
        setValorViagem(qtdCombustivel*valorGas)
        
    }
const value1 = (event) => { setTempo(parseFloat(event.target.value)) }
const value2 = (event) => { setVeloc(parseFloat(event.target.value)) }
const value3 = (event) => { setRendM(parseFloat(event.target.value)) }
const value4 = (event) => { setValorGas(parseFloat(event.target.value)) }

return <div>
<h2>Combustivel</h2>
Insira as informações:
Tempo (horas):
<Input onChange={value1}></Input>
Velocidade média(km/h):
<Input onChange={value2}></Input>
Rendimento médio(km/litros):
<Input onChange={value3}></Input>
Preço gasolina(R$):
<Input onChange={value4}></Input>

<Button onClick={clique}>Calcular</Button>
</div>
};