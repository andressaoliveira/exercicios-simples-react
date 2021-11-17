import React from "react"
import Franca from './frnca.png'
import Indonesia from './indonedia.png'
import Finlandia from './finlandia.png'
import Franca2 from './franca2.png'
import Indonesia2 from './indonedia2.png'
import Finlandia2 from './finlandia2.png'

export default class Destinos extends React.Component {
    render() {
        return (
            <div className="destinos">
                <h3>Paris</h3>
                <img src={Franca}></img><img src={Franca2}></img>
                <label><b>Paris é a capital e a mais populosa cidade da França, com uma população estimada em 2020 de 2 148 271 habitantes em uma área de 105 quilômetros quadrados.Desde o século XVII,
                    Paris é um dos principais centros de finanças, diplomacia, comércio, moda, ciência e artes da Europa
                </b></label>
                <h3>Indonésia</h3>
                <img src={Indonesia}></img><img src={Indonesia2}></img>
                <label><b>Indonésia é um país localizado entre o Sudeste Asiático e a Austrália, sendo o maior arquipélago do mundo, composto pelas Ilhas de Sonda,
                    a metade ocidental da Nova Guiné e compreendendo no total 17 508 ilhas.</b></label>
                <h3>Finlândia</h3>
                <img src={Finlandia}></img><img src={Finlandia2}></img>
                <label><b>A Finlândia, oficialmente República da Finlândia, é um país nórdico situado na região da Fino-Escandinávia, no norte da Europa.
                    Faz fronteira com a Suécia a oeste, com a Rússia a leste e com a Noruega ao norte, enquanto a Estônia está ao sul através do Golfo da Finlândia.
                </b></label>
            </div>
        )
    }
}