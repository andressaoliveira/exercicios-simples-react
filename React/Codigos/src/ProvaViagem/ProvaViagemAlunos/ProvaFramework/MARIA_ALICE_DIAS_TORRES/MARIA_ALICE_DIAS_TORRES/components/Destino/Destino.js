import React from 'react';

//importacao de imagens para renderizacao na tela
import f1 from '../img/franca1.jpg';
import f2 from '../img/franca2.jpg';
import au1 from '../img/au1.jpg';
import au2 from '../img/au2.jpg';
import mar1 from '../img/mar1.jpg';
import mar2 from '../img/mar2.jfif';
import port1 from '../img/port1.jpg';
import port2 from '../img/port2.jfif';

import '../Prova.css';

//funcao que irá construir a organização das imagens e legendas na tela
function Destino(){
    return(
        <div className="dest">
        <h1>Conheça os país turísticos para conhecer</h1>
        <h3>França</h3>
        <img src={f1} alt=""></img>
        <img src={f2} alt=""></img>
        <p>Por cerca de meio milênio,[5] o país tem sido uma grande potência, com forte influência econômica, cultural, militar e política no âmbito europeu e global. Durante muito tempo a França exerceu um papel de liderança e hegemonia na Europa (principalmente a partir da segunda metade do século XVII e parte do XVIII).</p>
        
        <h3>Austrália</h3>
        <img src={au1} alt=""></img>
        <img src={au2} alt=""></img>
        <p>A Austrália é um país continental cercado pelos oceanos Índico e Pacífico. Suas principais cidades, Sydney, Brisbane, Melbourne, Perth e Adelaide, são costeiras. Sua capital, Camberra, não é litorânea. </p>

        <h3>Marrocos</h3>
        <img src={mar1} alt=""></img>
        <img src={mar2} alt=""></img>
        <p>Marrocos, um país do Norte da África banhado pelo Oceano Atlântico e pelo Mar Mediterrâneo, distingue-se pelas influências das culturas berbere, árabe e europeia. A medina de Marrakesh, um bairro medieval labiríntico, oferece entretenimento na praça Djemaa el-Fna e nos souks.</p>

        <h3>Portugal</h3>
        <img src={port1} alt=""></img>
        <img src={port2} alt=""></img>
        <p>Portugal é um país no sul da Europa, localizado na Península Ibérica, que faz fronteira com a Espanha. Sua localização às margens do Oceano Atlântico influenciou muitos aspectos da cultura do país: o bacalhau salgado e as sardinhas assadas são pratos típicos nacionais.</p>
        </div>
    );
};

export default Destino;