import React from "react";
import robo from "../Assets/robo.jpg";
import navi from "../Assets/navi.jpg";
import naruto from "../Assets/naruto.jpg";
import edg from "../Assets/finaledg2.jpg" 
import time from "../Assets/time.jpeg"

export default class pag2 extends React.Component{
    render(){    
        return(
            <div>
        <h1> E-SPORTS </h1>
    <h3>Robs sai da Pain</h3>
    <img alt="robo" src={robo} />
    <p> O topo Leonardo "Robo" anunciou, na madrugada desta terça-feira, que optou por não renovar o contrato com a paiN Gaming e confirmou sua saída da equipe de League of Legends da organização, 
    apontando que a diretoria não o liberou, por escrito, a negociar com clubes internacionais, como era de seu desejo. Ele está a caminho da LOUD, conforme noticiou o ge.</p>

    <h3>presidente da Ucrânia parabeniza NAVI pelo Major</h3>
    <img alt="navi" src={navi} />
    <p> O presidente da Ucrânia eleito em maio de 2019, Volodymyr Zelensky fez uma publicação nas redes sociais, nesta segunda-feira, onde mandou uma mensagem de parabéns para a Natus Vincere pelo
    título conquistado do PGL Major Stockholm 2021 neste domingo. O time conseguiu vencer a G2 Esports por 2 a 0 na grande final do principal de Counter-Strike: Global Offensive.</p>

    <h3>Six Major: FaZe vence NiP e é campeã Mundial</h3>
    <img alt="time" src={time} />
    <p>A FaZe Clan é a grande campeã do Six Major Suécia. A equipe conquistou mais um título Mundial de Rainbow Six: Siege (R6) após vencer a também brasileira Ninjas in Pyjamas, neste domingo 
    (14), por 3 a 2. O resultado provou mais uma vez o poder do Brasil na modalidade em um verdadeiro ano de ouro do país.</p>

    <h3>Fortnite: skins e itens de Naruto chegam ao game; veja imagens</h3>
    <img alt="naruto" src={naruto} />
    <p> Depois de rumores e da confirmação da Epic Games, os cosméticos referentes ao anime Naruto chegaram ao Fortnite nesta terça-feira. Os itens estão disponíveis diretamente na loja do battle
    royale e contam com o destaque para trajes de quatro personagens da popular série de mangá: Naruto Uzumaki, Kakashi Hatake, Sakura Haruno e Sasuke Uchiha. Os três primeiros podem ser adquiridos
     individualmente por 1.500 V-Bucks, enquanto o último aparece por 1.600 V-Bucks.</p>

    <h3>EDG campeã, jogador banido e mais marcam Worlds 2021; relembre</h3>
    <img alt="edg" src={edg} />
    <p> O Worlds 2021, o Campeonato Mundial de League of Legends, realizado em Reykjavik, na Islândia, terminou nesse sábado com a conquista da EDward Gaming (EDG). O título inédito do clube da China]
    não é o único marco desta edição do evento, que teve outros acontecimentos importantes, como a suspensão de um atleta por associação com apostas, o empate quádruplo na Fase de Grupos e o domínio asiático.</p>
</div>
            )
        }
    }