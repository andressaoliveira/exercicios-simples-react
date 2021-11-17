import React from "react";
import "./style.css"
import { Link } from "react-router-dom";
import Nav from "./prova";

function Destino(){
    return (
    <div className="container">
        
        <div className=" corpo">
            <center>
                <div>
                    <h1>Toronto</h1>
                    <img src="https://www.cp4.com.br/wp-content/uploads/2019/02/MAC31_TORONTO-ARCHITECTURE_POST01.jpg"></img>
                    <img src="https://etacanadavisa.com.br/main/wp-content/uploads/2017/09//1505765941_image1-1024x683.jpeg"></img>
                    <img src="https://ci-prod.imgix.net/upload/galeriadeimagens/00236399.jpg"></img>
                    <p>Toronto, a capital da província de Ontário, é uma grande cidade canadense localizada ao longo da costa noroeste do Lago Ontário. Ela é uma metrópole dinâmica com um centro de arranha-céus imponentes, todos ofuscados pela famosa Torre CN. Toronto também tem muitos espaços verdes, incluindo desde o oval Queen’s Park até o High Park, com 400 acres de área, além de trilhas, instalações esportivas e um jardim zoológico.</p>
                </div>
                <div>
                    <h1>Texas</h1>
                    <img src="https://a.travel-assets.com/findyours-php/viewfinder/images/res40/332000/332960-Dallas.jpg"></img>
                    <img src="https://www.segurospromo.com.br/blog/wp-content/uploads/2020/03/o-que-fazer-no-texas-houston.jpg"></img>
                    <img src="https://turismo.culturamix.com/blog/wp-content/gallery/museu-de-artes-de-dallas/museu-de-artes-de-dallas-3.jpg"></img>
                    <p>O Texas é um grande estado no sul dos EUA com desertos, florestas de pinheiros e o rio Grande, que delimita a fronteira com o México. Em sua maior cidade, Houston, o Museu de Belas-artes abriga obras de pintores impressionistas e renascentistas conhecidos, enquanto o Space Center Houston oferece exposições interativas projetadas pela NASA. Austin, a capital, é conhecida pelo seu cenário musical eclético e pela LBJ Presidential Library.</p>
                </div>
                <div>
                    <h1>Nova Iorque</h1>
                    <img src="https://exame.com/wp-content/uploads/2017/10/ny-1.jpg?quality=70&strip=info"></img>
                    <img src="https://portuguessemmisterio.files.wordpress.com/2016/06/nova-york.jpg"></img>
                    <img src="https://a.cdn-hotels.com/gdcs/production138/d1142/08366677-a8d0-4979-84d5-b54f93ca00e5.jpg"></img>
                    <p>A cidade de Nova York compreende 5 distritos situados no encontro do rio Hudson com o Oceano Atlântico. No centro da cidade fica Manhattan, um distrito com alta densidade demográfica que está entre os principais centros comerciais, financeiros e culturais do mundo. Entre seus pontos emblemáticos, destacam-se arranha-céus, como o Empire State Building, e o enorme Central Park. O teatro da Broadway fica em meio às luzes de neon da Times Square.</p>
                </div>
            </center>
        </div>

    </div>
    )
}

export default Destino;