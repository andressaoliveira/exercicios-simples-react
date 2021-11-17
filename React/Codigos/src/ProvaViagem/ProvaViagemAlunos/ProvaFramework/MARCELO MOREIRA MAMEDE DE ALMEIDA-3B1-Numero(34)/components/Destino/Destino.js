import React from 'react'
import ouropreto from '../images/ouro-preto.jpg';
import sãojoao from '../images/são-joao.jpg';
import diamantina from '../images/diamantina.jpg';
import Destino2 from '../Destino/Destino2.css'

export default function Destino() {
    return (
        <div className="Destino">
            <h1>< ul className="titulo">Ouro Preto</ul></h1>
            <img src={ouropreto} width="700" height="350" />
            <p>< ul className="descrição">Localizada na região Central de Minas Gerais, a cidade de Ouro Preto reúne o maior e mais importante acervo da arquitetura
                e da arte do período colonial de todo o Brasil. ...
                Batizou-se o povoamento de Vila Rica de Albuquerque, em 8 de julho de 1711, data oficial de sua fundação.</ul></p>
                <div className="Destino2">
                <h1>< ul className="titulo">São João del Rei</ul></h1>
                <img src={sãojoao} width="700" height="350" />
            <p>< ul className="descrição">São João del-Rei é um município brasileiro do estado de Minas Gerais. Localizada na região do Campo das Vertentes,
             é uma das maiores cidades setecentistas mineiras. A cidade foi fundada por bandeirantes paulistas, considera-se Tomé Portes del-Rei como seu fundador</ul></p>
                </div>
                <div className="Destino3">
                <h1>< ul className="titulo">diamantina</ul></h1>
                <img src={diamantina} width="700" height="350" />
            <p>< ul className="descrição">Diamantina é um município brasileiro do estado de Minas Gerais localizado na Mesorregião do Jequitinhonha.
             Sua população, conforme estimativas do IBGE de 2018, era de 47 617 habitantes.</ul></p>
                </div>
        </div>
    )

}
