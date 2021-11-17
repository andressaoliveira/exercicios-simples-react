// import dos valores com um link para redirecionamento para a página + imagens ilustrativas dos destinos pensados
import React from 'react';
import { Link } from 'react-router-dom';
import BarilocheArgentina from '../img/BarilocheArgentina.jpg';
import BarilocheNeve from '../img/BarilocheNeve.jpg';
import Bogotá from '../img/Bogotá.jpg';
import ColombiaBogota from '../img/ColombiaBogota.jpg';
import LosDedosPuntaDelEste from '../img/LosDedosPuntaDelEste.jpg';
import PuntaDelEste from '../img/PuntaDelEste.jpg';

// export default feito em classe
export default class Destinos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tipo: ''
        };
    }

    render() {
        
        return (
            // div com link para redirecionamento das páginas + descrição dos locais por meio de imagens e mini textos
            <div>
                <Link to="/">Inicio</Link> <br/>
                <Link to="/destinos">Destinos</Link> <p/>
                <Link to="/combustivel">Combustível</Link> 

                <h1>Destinos Selecionados:</h1>

                <h2>Bariloche</h2>

                <img src={BarilocheArgentina} alt="" width="400px" height="400px" />
                <img src={BarilocheNeve} alt="" width="400px" height="400px" />

                <p>Bariloche é uma cidade na região da Patagônia argentina. 
                    É conhecida pela arquitetura no estilo alpino suíço e pelo chocolate, 
                    vendido em lojas na "Calle Mitre", a rua principal.
                    </p>

                <h2>Bogotá</h2>

                <img src={Bogotá} alt="" width="400px" height="400px" />
                <img src={ColombiaBogota} alt="" width="400px" height="400px" />

                <p>Bogotá é a capital da Colômbia. Local que deveria ser considerado
                    obrigatórios para os turistas, conta com boas atrações e é boa para
                    todos os tipos de roteiro.
                    </p>

                <h2>Punta Del Este</h2>

                <img src={LosDedosPuntaDelEste} alt="" width="400px" height="400px" />
                <img src={PuntaDelEste} alt="" width="400px" height="400px" />

                <p>Punta del Este certamente é o balneário mais famoso do Uruguai.
                    Ótima cidade turística, é com certeza a cidade perfeita para 
                    quem gostaria de curtir uma praia e ter boas opções de passeios.
                </p>
            </div>
        )
    }
}