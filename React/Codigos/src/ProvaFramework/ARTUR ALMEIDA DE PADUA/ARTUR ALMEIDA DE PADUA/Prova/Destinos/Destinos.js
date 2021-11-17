import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Style.css';
import BH1 from '../img/BH1.jpg';
import BH2 from '../img/BH2.jpg';
import BH3 from '../img/BH3.jpg';
import RJ1 from '../img/RJ1.jpg';
import RJ2 from '../img/RJ2.jpg';
import RJ3 from '../img/RJ3.jpg';
import SP1 from '../img/SP1.jpg';
import SP2 from '../img/SP2.jpg';
import SP3 from '../img/SP3.jpg';

export default class Destinos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tipo: ''
        };
    }

    render() {

        return (
            <div>
                <nav id="menu">
                    <Link to="/">Inicio</Link>
                    <Link to="/destinos">Destinos</Link>
                    <Link to="/combustivel">combustivel</Link> 
                </nav>

                <h1>Destinos</h1>

                <h2>Rio de Janeiro</h2>

                <img src={RJ1} alt="" width="300px" height="300px" />
                <img src={RJ2} alt="" width="300px" height="300px" />
                <img src={RJ3} alt="" width="300px" height="300px" />

                <p>O Rio de Janeiro é uma grande cidade brasileira à beira-mar, 
                    famosa pelas praias de Copacabana e Ipanema, pela estátua de
                    38 metros de altura do Cristo Redentor. Localiza-se 1.167,0 km
                    da capital. Numero de habitantes de 6,748 milhões</p>

                <h2>São Paulo</h2>

                <img src={SP1} alt="" width="300px" height="300px" />
                <img src={SP2} alt="" width="300px" height="300px" />
                <img src={SP3} alt="" width="300px" height="300px" />

                <p>São Paulo, centro financeiro do Brasil, está entre as cidades
                    mais populosas do mundo, com diversas instituições culturais
                    e uma rica tradição arquitetônica. Localiza-se 1.007,5 km
                    da capital. Numero de habitantes de 12,33 milhões</p>

                <h2>Belo Horizonte</h2>

                <img src={BH1} alt="" width="300px" height="300px" />
                <img src={BH2} alt="" width="300px" height="300px" />
                <img src={BH3} alt="" width="300px" height="300px" />

                <p>Belo Horizonte é a capital do estado de Minas Gerais, no sudeste 
                    do Brasil. Rodeada de montanhas, a cidade é conhecida pelo enorme 
                    Estádio Mineirão. Localiza-se 739.7 km da capital. Numero de 
                    habitantes de 2,722 milhões</p>
            </div>
        )
    }
}