import React from 'react';
import ImagemCapi from '../ImagemCapi.jpg';
import ImagemCapi2 from '../ImagemCapi2.jpg';
import ImagemCapi3 from '../ImagemCapi3.jpg';
import ImagemSTDL from '../ImagemSTDL.jpg';
import ImagemSTDL1 from '../ImagemSTDL1.jpg';
import ImagemSTDL2 from '../ImagemSTDL2.jpg';
import ImagemSDC from '../ImagemSDC.jpg';
import ImagemSDC1 from '../ImagemSDC1.jpg';
import ImagemSDC2 from '../ImagemSDC2.jpg';
const Destinos = () => {
  return (
      <div className="Destin">
          <h1 className="Destin"> DESTINOS </h1>
          
          <p className="Destin">
            <h1>CAPITÓLIO</h1> 
            <div>
            <img className="Space" src={ImagemCapi} width="200" height="100" />
            <img className="Space" src={ImagemCapi2} width="200" height="100" />
            <img className="Space" src={ImagemCapi3} width="200" height="100" />
            </div>
            Capitólio é um município brasileiro do estado de Minas Gerais. De acordo com o Instituto Brasileiro de Geografia e Estatística (IBGE), sua população era estimada em 8 663 habitantes em 2020.

Capitólio se tornou um importante destino turístico de Minas Gerais, muito procurado nos últimos anos por conta de suas belas cachoeiras e rios de águas transparentes. O Cânion de Furnas é a principal atração, com suas paredes de pedra invadidas pelas águas esverdeadas do Lago de Furnas, formado pela represa da Usina Hidrelétrica de Furnas.</p>
<h1>SÃO THOMÉ DAS LETRAS</h1>
<div>
<img className="Space" src={ImagemSTDL} width="200" height="100" />
<img className="Space" src={ImagemSTDL1} width="200" height="100" />
<img className="Space" src={ImagemSTDL2} width="200" height="100" />
</div> 
<p>São Tomé das Letras é um município do estado de Minas Gerais, no Brasil. Localiza-se a 346 km da capital do estado. Sua população em 2010, segundo o censo realizado pelo Instituto Brasileiro de Geografia e Estatística, era de 6 655 habitantes. São Tomé das Letras é uma localidade tipicamente serrana, edificada sobre um largo depósito mineral de quartzito do neoproterozoico, que é conhecido como "pedra de são tomé" e que é utilizado largamente na pavimentação de bordas de piscinas, na construção de algumas casas no município, no calçamento das ruas e na elaboração do artesanato local.</p>
<h1>SERRA DO CIPÓ</h1>
<div>
            <img className="Space" src={ImagemSDC} width="200" height="100" />
            <img className="Space" src={ImagemSDC1} width="200" height="100" />
            <img className="Space" src={ImagemSDC2} width="200" height="100" />
            </div>
<p>Serra do Cipó (antigo Cardeal Mota) é um distrito do município brasileiro de Santana do Riacho, no interior do estado de Minas Gerais. De acordo com o Instituto Brasileiro de Geografia e Estatística (IBGE), sua população no ano de 2010 era de 1 941 habitantes, sendo 982 homens e 959 mulheres, possuindo um total de 1 100 domicílios particulares.</p>
      </div>

  );
}
export default Destinos;