import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

import bh1 from './bh1.jpg';
import bh2 from './bh2.jpeg';
import novalima1 from './novalima1.jpg';
import novalima2 from './novalima2.jpg';
import angra1 from './angra1.jpg';
import angra2 from './angra2.jpg';

export default function Destinos() {
        return (
            <>
            <div class="navegacao">
                <nav>
                    <li class="link">
                        <Link to="/Inicio">Início</Link>
                    </li>
                    <li class="link">
                        <Link to="../Destinos">Destinos</Link>
                    </li>
                    <li class="link">
                        <Link to="../Combustivel">Cálculo Combustível</Link>
                    </li>
                </nav>
            </div>
            <div class="principal">
            <div id="BH">
                <h3>Angra dos Reis - Rio de Janeiro</h3>

                <div id="imagensBH">
                    <img src={bh1} alt="1º imagem de Angra dos Reis" width="450px" height="300px" />
                    <img src={bh2} alt="2º imagem de Angra dos Reis" width="450px" height="300px" />
                </div>

                <div id="textBH">
                    <label>
                        Angra dos Reis é um município brasileiro no estado de Rio de Janeiro, a sudoeste.
                        É composto por 365 ilhas e um pequeno porto rodeado por uma linha costeira íngreme e arborizada.
                        A região é conhecida pelas suas inúmeras praias e pela biodiversidade da Ilha Grande, a maior ilha.
                    </label>
                </div>
            </div> <br/><br/>

            <div id="NovaLima">
                <h3>Florianopólis - Santa Catarina</h3>

                <div id="ImagensFloripa">
                    <img src={novalima1} alt="1º imagem de NovaLima" width="450px" height="300px" />
                    <img src={novalima2} alt="2º imagem de NovaLima" width="450px" height="300px" />
                </div>

                <div id="textNovaLima">
                    <label>
                    Florianópolis, a capital do estado de Santa Catarina no sul do Brasil,
                    é maioritariamente constituída pela Ilha de Santa Catarina, com 54 km de comprimento.
                    É famosa pelas suas praias, incluindo estâncias turísticas populares como a
                    Praia dos Ingleses na extremidade norte da ilha. A sua Lagoa da Conceição, uma lagoa de água salgada,
                    é popular para a prática de windsurf e para excursões de barco.
                    </label>
                </div>
            </div> <br/><br/>

            <div id="Angra">
                <h3>Vitória - Espírito Santo</h3>

                <div id="imagensAngra">
                    <img src={angra1} alt="1º imagem de Vitória" width="450px" height="300px" />
                    <img src={angra2} alt="2º imagem de Vitória" width="450px" height="300px" />
                </div>

                <div id="textAngra">
                    <label>
                    Vitória é a capital do estado de Espírito Santo.
                    É conhecida pelas praias arenosas como Camburi e Curva da Jurema.
                    O centro da cidade inclui a Catedral Metropolitana do século XX, com vitrais.
                    </label>
                </div>
            </div> <br/><br/>
            </div>
            </>
        )
}