import React from 'react';
import Destino2 from '../Destino/Destino2.css'
import imagens from "../imagens/Mariana.jpg"
import imagens2 from "../imagens/Itauna.jpg"
import imagens3 from "../imagens/Uberlandia.jpg"



export default class visual extends React.Component {
    render() {
        return (
            <div className="Cidades">
                <nav> 
                <img src={imagens}/>    
                <h1> Mariana</h1>
                <h1>Mariana é a primeira cidade de Minas Gerais e foi criada no período colonial, por efeito das expedições bandeirantes no século 17,
 em busca de ouro e pedras preciosas. Localizada na região Central do Estado de Minas Gerais.Sua população estimada em 2018 era de cerca de 60 mil habitantes.</h1>
                <h1>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h1>
                <img src={imagens2}/>
                <h1> Itauna</h1>
                <h1> Itaúna é quarta cidade de Minas Gerais que mais criou oportunidades de trabalho em 2017.
O município se estende por 495,8 km² e contava com 93 214 habitantes no último censo.</h1>
                <h1>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h1>
                <img src={imagens3}/>
                <h1> Uberlândia</h1>
                <h1>Uberlândia é um município brasileiro do interior do estado de Minas Gerais, Região Sudeste do país. Sua população, 
segundo o IBGE, era de 706 597 habitantes em julho de 2021, sendo o município mais populoso da região do Triângulo Mineiro.</h1>
                </nav>
            </div >
        );
    }
}
