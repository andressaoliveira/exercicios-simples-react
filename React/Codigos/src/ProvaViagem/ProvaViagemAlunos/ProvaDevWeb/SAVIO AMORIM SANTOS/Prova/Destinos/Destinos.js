import React from 'react';
import './Destinos.css';
import imagem1 from '../bonito1.jpg';
import imagem2 from '../bonito2.jpg';
import imagem3 from '../jalapao1.jpg';
import imagem4 from '../jalapao2.jpg';
import imagem5 from '../chapada-dos-veadeiros-1.jpg';
import imagem6 from '../chapada-dos-veadeiros-2.jpg';

export default class Destinos extends React.Component {
    render () {
        return (
            <div className="content">
                <h1>DESTINOS</h1>
                <div className="dest">
                    <h2>Bonito - MS</h2>
                    <div className="div-imagens">
                        <img src={imagem1} width="400px" height="300px"></img>
                        <img src={imagem2} width="400px" height="300px"></img>
                    </div>
                    <p>Bonito é um município brasileiro da região Centro-Oeste, situado no estado de Mato Grosso do Sul. 
                        Pólo do ecoturismo, suas principais atrações são as paisagens naturais, os mergulhos em rios de 
                        águas transparentes, cachoeiras, grutas, cavernas e dolinas. Juntamente com Jardim, 
                        Guia Lopes da Laguna e Bodoquena, é o principal município que integra o complexo turístico do 
                        Parque Nacional da Serra da Bodoquena, apresentando grande potencial turístico. 
                        Com diversos tipos de fauna e flora, Bonito foi considerado um dos lugares mais bonitos do 
                        Brasil em 2009. Existem mais de 4.000 espécies de plantas e suas águas e rios podem abrigar 
                        mais de 2.000 espécies de peixes e aquáticos.</p>
                </div>
                <div className="dest">
                    <h2>Jalapão - TO</h2>
                    <div className="div-imagens">
                        <img src={imagem3} width="400px" height="300px"></img>
                        <img src={imagem4} width="400px" height="300px"></img>
                    </div>
                    <p>O parque estadual do Jalapão é uma unidade de conservação brasileira de proteção integral à natureza 
                        localizada na região leste do estado do Tocantins. O território do parque, com uma área de 158 970,95 ha, 
                        está distribuído pelos municípios de Mateiros e São Félix do Tocantins. Criado em 12 de janeiro de 2001, 
                        Jalapão é o maior parque estadual do Tocantins. A vegetação no parque é predominantemente a de cerrado ralo 
                        e a de campo limpo com veredas.</p>
                </div>
                <div className="dest">
                    <h2>Chapada dos Veadeiros - GO</h2>
                    <div className="div-imagens">
                        <img src={imagem5} width="400px" height="300px"></img>
                        <img src={imagem6} width="400px" height="300px"></img>
                    </div>
                    <p>O Parque Nacional da Chapada dos Veadeiros é uma unidade de conservação brasileira de proteção 
                        integral à natureza localizada na região centro-oeste do estado de Goiás, na Chapada dos Veadeiros. 
                        Até o final de maio de 2017, o parque abrangia uma área de 65 514 ha de cerrado de altitude, 
                        dos quais aproximadamente 60 % ficam em Cavalcante e os demais 40 % em Alto Paraíso de Goiás.</p>
                </div>
                
            </div>   
        )
    }
}