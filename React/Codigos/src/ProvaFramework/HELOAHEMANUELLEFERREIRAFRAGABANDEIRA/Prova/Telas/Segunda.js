import React from 'react';
//import styles from '../css/image.css';

import sao1 from './image/sao1.jpg';
import sao2 from './image/sao2.jpg';
import sao3 from './image/sao3.jpg';
import cap1 from './image/cap1.jpg';
import cap2 from './image/cap2.jpg';
import cap3 from './image/cap3.jpg';
import ser1 from './image/ser1.jpg';
import ser2 from './image/ser2.jpg';
import ser3 from './image/ser3.jpg';

//isso ta tão feio que meus olhos sangram

class Segunda extends React.Component {
    render() {
        return(
            <div>
                <h2>São Thomé das Letras</h2>
                <img src={sao1} alt="" />
                <img src={sao2} alt="" />
                <img src={sao3} alt="" />
                <p>São Thomé das Letras é um município do estado de Minas Gerais, no Brasil. 
                    Localiza-se a 346 Km da capital do estado. 
                    Sua população em 2010, segundo o IBGE, era de 6 655 habitantes. </p>
                    
                <h2>Capitólio</h2>
                <img src={cap1} alt="" />
                <img src={cap2} alt="" />
                <img src={cap3} alt="" />
                <p>Capitólio é um município brasileiro do estado de Minas Gerais. 
                    De acordo com o IBGE, sua população era estimada em 8 663 habitantes em 2020. </p>

                <h2>Serra do Cipó</h2>  
                <img src={ser1} alt="" />
                <img src={ser2} alt="" />
                <img src={ser3} alt="" />
                <p>Serra do Cipó é um distrito do município brasileiro de Santana do Riacho, no interior de Minas Gerais. 
                    De acordo com o IBGE, sua população no ano de 2010 era de 1 941 habitantes, sendo 982 homens e 959 mulhers, 
                    possuindo um total de 1 100 domicílios particulares. </p>
            </div>
        );
    }
}

export default Segunda;