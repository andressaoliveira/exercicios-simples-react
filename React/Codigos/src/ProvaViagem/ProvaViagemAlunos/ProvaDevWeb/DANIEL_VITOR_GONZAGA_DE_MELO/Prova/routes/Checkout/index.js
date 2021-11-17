import React, {useState, useEffect} from "react";
import Input from '../../components/Input'

export default () =>{
    const [tempo, setTempo] = useState(1)
    const [velocidade, setVelocidade] = useState(1)
    const [rendimento, setRendimento] = useState(1)
    const [preco, setPreco] = useState(1)
    const [total, setTotal] = useState(1)
    const [distancia, setDistancia] = useState(1)
    const [litros, setLitros] = useState(1)

    useEffect(() =>{
        setDistancia(tempo * velocidade)
    }, [tempo, velocidade])

    useEffect(() => {
        setLitros(distancia / rendimento)
    }, [distancia, rendimento])

    useEffect(() =>{
        setTotal(preco * litros)
    },[preco, litros])

    return <main style={{justifyContent: 'space-evenly'}}>
        <h1>Combustível</h1>
        <Input type="number" placeholder="Tempo" min={1} value={tempo} onChange={e => setTempo(parseFloat(e.target.value))} />
        <Input type="number" placeholder="Velocidade" min={1} value={velocidade} onChange={e => setVelocidade(parseFloat(e.target.value))} />
        <Input type="number" placeholder="Rendimento" min={1} value={rendimento} onChange={e => setRendimento(parseFloat(e.target.value))} />
        <Input type="number" placeholder="preço da gasolina" min={1} value={preco} onChange={e => setPreco(parseFloat(e.target.value))} />
        <table>
            <tr>
                <td>Velocidade Média:</td>
                <td>{velocidade}</td>
            </tr>
            <tr>
                <td>Tempo gasto:</td>
                <td>{tempo}</td>
            </tr>
            <tr>
                <td>Rendimento:</td>
                <td>{rendimento}</td>
            </tr>
            <tr>
                <td>Preço da Gasolina:</td>
                <td>{preco}</td>
            </tr>
            <tr>
                <td>Distância:</td>
                <td>{distancia}km</td>
            </tr>
            <tr>
                <td>Valor Total:</td>
                <td>R${total}</td>
            </tr>
        </table>
    </main>
}