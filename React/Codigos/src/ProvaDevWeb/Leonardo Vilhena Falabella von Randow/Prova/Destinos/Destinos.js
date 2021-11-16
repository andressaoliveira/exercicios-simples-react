import React from "react";
import './Destinos.scss';
import bigbeng from './img/bigbeng.jpg'
import londonbridge from './img/londobridge.jpg'
import rodagigante from './img/rodagigante.jpg'
import tajmahal from './img/tajmahal.jpg'
import monumento from  './img/monumento.jpg'
import hills from './img/hills.jpg'
import pontesf  from './img/pontesf.jpg'
import bondinho  from './img/bondinho.jpg'
import streets from  './img/streets.jpg'


export default class Destinos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    //Sei que é impossível ir de carro para esses lugares mas fiquei afim de fazer assim =)) kkkkk

    render() {
        return (
            <div className="destinos">

                <h2 className="nome">Londres</h2>
                <div className="fotos">
                    <img src={bigbeng} alt="bigbang" />
                    <img src={londonbridge} alt="ponte" />
                    <img src={rodagigante} alt="rodagigante" />
                </div><br />
                <p className="desc">Londres é uma das maiores metrópoles do planeta, capital da Inglaterra e da Grã-Bretanha, localizada às margens do Rio Tâmisa. Esta cidade abriga hoje mais de 7 milhões de pessoas. Um dos mais importantes núcleos financeiros mundiais, ela integra com destaque o circuito político, cultural, artístico e fashion do globo.</p>

                <h2 className="nome">Nova Delhi</h2>
                <div className="fotos">
                    <img src={monumento} alt="monumento" />
                    <img src={tajmahal} alt="tajmahal" />
                    <img src={streets} alt="streets" />
                </div><br />
                <p className="desc">Uma das cidades mais antigas do mundo e palco de manifestações culturais ao longo da história, Nova Deli conserva centenas de monumentos. A zona histórica de Velha Deli possui várias mesquitas e fortalezas, sendo cercada por uma muralha antiga.</p>


                <h2 className="nome">San Francisco</h2>
                <div className="fotos">
                    <img src={bondinho} alt="bondinho" />
                    <img src={pontesf} alt="pontesf" />
                    <img src={hills} alt="hills" />
                </div><br />
                <p className="desc">São Francisco é um popular destino turístico internacional,[12] conhecido pela sua neblina fria do verão, íngremes colinas, eclética mistura de arquitetura vitoriana e moderna e seus marcos históricos famosos, incluindo a Ponte Golden Gate, os bondes e Chinatown.</p>
            </div>
        )
    }
}