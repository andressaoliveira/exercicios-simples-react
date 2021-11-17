import React from "react";
import Image1 from "../../Assets/monte-verde.png";
import Image2 from "../../Assets/ouro-preto.png";
import Image3 from "../../Assets/tiradentes.png";

const destino = (props) => (
  <div className="destino">
    <h1>Monte Verde</h1>
    <img src={Image1} width="350" height="300" alt="monte-verde" />
    <p>
      Monte Verde é hoje conhecida pelas características tipicamente européia,
      com a beleza natural das montanhas, picos e cachoeiras que a cercam, além
      da fauna e da flora silvestres, as Serras, cascatas, pinheiros, ciprestes
      e um ar puro compõem a sua paisagem, bem como, a tranqüilidade de uma
      pequena cidade do interior. É considerada ideal para casais apaixonados,
      quanto para interessados em aventura e ecoturismo.
    </p>
    <h1>Ouro Preto</h1>
    <img src={Image2} width="350" height="300" alt="monte-verde" />
    <p>
      Localizada na região Central de Minas Gerais, a cidade de Ouro Preto reúne
      o maior e mais importante acervo da arquitetura e da arte do período
      colonial de todo o Brasil. Em meio ao casario dos séculos 17 e 18,
      construído nas ladeiras de uma região montanhosa, erguem-se 13 igrejas
      monumentais, com altares banhados a ouro e imagens sacras, nos estilos
      barroco e rococó. Pelo seu porte e conservação, Ouro Preto foi uma das
      primeiras cidades escolhidas no mundo para ser Patrimônio da Humanidade,
      em 1980, pela Organização das Nações Unidas para a Educação, a Ciência e a
      Cultura (Unesco).
    </p>
    <h1>Tiradentes</h1>
    <img src={Image3} width="350" height="300" alt="tiradentes" />
    <p>
      Povoada a partir de 1702, a cidade de Tiradentes, na região Central de
      Minas Gerais, homenageia em seu nome o alferes Joaquim José da Silva
      Xavier, conhecido pelo apelido de Tiradentes. O alferes nasceu na Fazenda
      do Pombal, entre Tiradentes e São João del Rei, e se tornaria o líder da
      Inconfidência Mineira, principal movimento de contestação à Coroa
      portuguesa, no século 18. Nas duas últimas décadas, a cidade se tornou um
      dos pontos turísticos mais requisitados no Estado, ao aliar a simplicidade
      e o colorido de suas casas coloniais à oferta de pousadas bem cuidadas,
      restaurantes requintados e a badalação social.
    </p>
  </div>
);

export default destino;
