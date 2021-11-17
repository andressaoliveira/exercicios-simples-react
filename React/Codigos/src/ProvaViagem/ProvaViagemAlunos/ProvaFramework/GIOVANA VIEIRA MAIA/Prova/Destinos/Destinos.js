import React from 'react';
import Campos from '../assets/Pórtico_de_Campos_do_Jordão.jpg';
import Bonito from '../assets/bonito.jpeg';
import Monte from '../assets/monte-verde.jpg';
import Css from '../Css/Style.css';
import Menu from '../Menu/Menu';

export default class Destinos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inicio: null
        };
    }    
    
    render() {;
        return (
            
            <div id='Destinos' className="telas">
                <Menu/>
                <h1 >Destinos</h1>
                <br/>
                <h3>Campos do Jordão</h3>
                <img src={Campos} alt="some text" width="500" height="380"/>
                <p>Campos do Jordão é um município na Serra da Mantiqueira, no Brasil, e faz parte do estado de São Paulo. Engloba uma cidade com o mesmo nome, onde é comum a arquitetura de estilo suíço, e o Parque Estadual de Campos do Jordão, a nordeste. Abrangendo um terço do município, as florestas de pinheiros do parque e as montanhas albergam várias aves e animais em risco de extinção, incluindo pumas e jaguatiricas</p>
                <br/>
                <h3>Bonito</h3>
                <img src={Bonito} alt="some text" width="500" height="380"/>
                <p>Bonito é uma cidade e centro de ecoturismo no estado brasileiro de Mato Grosso do Sul. A área circundante é conhecida pelos rios de água translúcida, como o Rio da Prata, um destino de snorkeling repleto de peixes. O Abismo Anhumas é uma enorme caverna coberta de estalactites que permite a prática de rapel e de mergulho num lago subterrâneo. Bandos de araras criam ninhos no profundo Buraco das Araras, de cor ocre.</p>
                <br/>
                <h3>Monte Verde</h3>
                <img src={Monte} alt="some text" width="500" height="380"/>
                <p>Monte Verde é um distrito do município de Camanducaia, no estado brasileiro de Minas Gerais. O Censo de 2010 do IBGE aferiu a sua população em 4 132 habitantes.</p>
            </div>
        );
    }
}