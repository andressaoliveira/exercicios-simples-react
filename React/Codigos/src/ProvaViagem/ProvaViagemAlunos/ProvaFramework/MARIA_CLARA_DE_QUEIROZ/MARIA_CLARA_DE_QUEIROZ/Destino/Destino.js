import React from 'react';
import { Link } from 'react-router-dom';
import Jeju1.jpg from './imagens/Jeju1.jpg';
import Jeju2.jpg from './imagens/Jeju2.jpg';
import Butao.jpg from './imagens/Butao.jpg';
import butao00.jpg from './imagens/butao00.jpg';
import jakarta2.jpg from './imagens/jakarta2.jpg';
import jakarta1.jpg from './imagens/jakarta1.jpg';

export default class Destino extends React.Component {
    Constructor(props){
        Super(props);
        this.state ={
            tipo:''
        };
    }
 <h1>Destino</h1>
 <h2>Jeju</h2>

 <img src={Jeju1.jpg} alt="" whidth="400px" height="400px" />
 <img src={Jeju2.jpg} alt="" whidth="400px" height="400px" />

 <p>A província de Jeju abrange a ilha sul-coreana de Jeju, no Estreito da Coreia.
 Ela é conhecida pelos balneários e pela paisagem vulcânica repleta de crateras e tubos de lava que se parecem com cavernas.
 O monte Halla, um vulcão adormecido, tem trilhas para caminhada, um lago de cratera no cume de 1.950 metros de altura e o templo Gwaneumsa.
 O sistema de tubos de lava Geomunoreum inclui a caverna Manjanggul,
 que tem 7 quilômetros de extensão e foi criada há séculos quando o monte Halla ainda estava ativo </p>

 <h2>Butão</h2>

 <img src={Butao.jpg} alt="" whidth="400px" height="400px" />
 <img src={butao00.jpg} alt="" whidth="400px" height="400px" />

 <p>O Butão, reino budista no extremo leste do Himalaia,
 é conhecido por seus mosteiros, suas fortalezas (ou dzongs) e suas paisagens impressionantes que incluem desde planícies subtropicais até montanhas íngremes e vales.
 No Alto Himalaia, picos como o Jomolhari, de 7.326 m de altitude, são destinos bastante procurados para trilhas. 
 O mosteiro de Taktsang (também conhecido como Ninho do Tigre) fica nos penhascos acima do Vale de Paro

 </p>

 <h2>Jakarta</h2>


 <img src={jakarta1.jpg} alt="" whidth="400px" height="400px" />
 <img src={jakarta.jpg} alt="" whidth="400px" height="400px" />

 <p>Jacarta, a vasta capital da Indonésia, fica na costa noroeste da ilha de Java. Uma mistura histórica de culturas - 
 javaneses, malaios, chineses, árabes, indianos e europeus - influenciou a arquitetura, o idioma e a culária. No bairro antigo, Kota Tua, 
 há edifícios coloniais holandeses,o Glodok (bairro chinês de Jacarta) e o antigo porto de Sunda Kelapa, atracam tradicionais escunas de madeira.
 </p>

 <div/>
}