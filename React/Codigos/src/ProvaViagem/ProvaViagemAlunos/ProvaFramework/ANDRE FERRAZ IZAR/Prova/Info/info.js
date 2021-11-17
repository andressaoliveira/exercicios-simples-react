import React from "react";
//import do css e das imagens 
import './styles/info.css'
import Foto1 from './assets/foto1.jpg'
import Foto2 from './assets/foto2.jpeg'
import Foto3 from './assets/foto3.jpg'

export default class Info extends React.Component{
    render(){
        return(
// div com <h2> para titulo da cidade <img> para imagens da cidades <p> para fazer um paragrafo da cidade
            <div className="info">
                <h1> Info </h1>
                <h2>Alagoinha</h2>
                <img src={Foto1}  alt="Imagem Alagoinha" className="fotos"/>
                <br/>
                <p>Alagoinha é um município brasileiro do estado de Pernambuco. Localiza-se a uma latitude 08º27'59" sul e a uma longitude 36º46'33" oeste, distando 225,5 km da capital do estado. Sua população estimada em 2009 era de 14.913 habitantes </p>
                <h2>Barreiras</h2>
                <img src={Foto2}  alt="Imagem Alagoinha" className="fotos"/>
                <br/>
                <p>Barreiras é um município brasileiro no interior do estado da Bahia, Região Nordeste do país. Sua população estimada em 2021 era de 158 432 habitantes, sendo assim, o decimo segundo município mais populoso do estado e o 17º do interior da Região Nordeste. Pertence às regiões intermediária e imediata de Barreiras.</p>
                <h2>Natal</h2>
                <img src={Foto3}  alt="Imagem Alagoinha" className="fotos"/>
                <br/>
                <p>Natal é a capital do estado de Rio Grande do Norte, na extremidade nordeste do Brasil. É conhecida pelas extensas dunas de areia costeiras e pelo Forte dos Reis Magos, em forma de estrela, uma fortaleza portuguesa do século XVI na foz do rio Potengi</p>
            </div>
        )
    }
}