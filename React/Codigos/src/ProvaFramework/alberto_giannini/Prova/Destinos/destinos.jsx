import React from 'react'
import imgMercado from "./assets/mercadocentral.jpg"
import imgMineirao from "./assets/estadio-mineirao.jpg"
import imgPraca from "./assets/Praca_do_Papa.jpg"
function Destinos() {
    return (

        // criação de 3 divs, e cada uma tem um local de visitação, com uma imagem e uma breve descrição.
        <div className="destinos">
            <div className="mercado_central">
                <h3>Mercado Central</h3><br />
                <img src={imgMercado} className="img1" /><br />
                <h4>Temperos, aromas, sabores, crenças, cores: todas as características mais marcantes da cultura mineira dão charme e muita personalidade ao mercado mais querido de Belo Horizonte.  Há nove décadas, o Mercado Central é ponto turístico para quem vem de fora e ponto de encontro para quem vive na cidade.</h4>
            </div><br />
            <div className="praca_papa">
                <h3>Praça do Papa</h3><br />
                <img src={imgPraca} className="img2" /><br />
                <h4> A Praça Israel Pinheiro, mais conhecida como Praça do Papa, é uma importante praça localizada no bairro das Mangabeiras, na cidade de Belo Horizonte, Minas Gerais. Situa-se próxima à base da Serra do Curral, ao final da Avenida Agulhas Negras e a mais de 1.100 m de altitude.</h4>
            </div><br />
            <div className="mineirao">
                <h3>Mineirão</h3><br />
                <img src={imgMineirao} className="img3" />
                <h4>O Estádio Governador Magalhães Pinto, mais conhecido como Mineirão, é um estádio de futebol localizado em Belo Horizonte, Minas Gerais, onde o Clube Atlético Mineiro e Cruzeiro Esporte Clube mandam os seus jogos.</h4>
            </div>
        </div>
    )
}
export default Destinos;