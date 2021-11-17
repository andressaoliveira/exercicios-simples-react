import React from "react";
import "./Destinos.scss";

export default class Destinos extends React.Component {
  render() {
    return (
      <div className="destinos">
        <h1>Serra Gaúcha (Rio Grande do Sul)</h1>

        <div className="images">
          <img
            className="img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Caracol_Falls.jpg/1200px-Caracol_Falls.jpg"
          />
          <img
            className="img"
            src="https://blog.bonitour.com.br/wp-content/uploads/2019/10/Blog-Serra-Gaucha-em-Outubro-Bonitour-Viagens_Capa.png"
          />
          <img
            className="img"
            src="https://vemvoar.voeazul.com.br/wp-content/uploads/2019/10/cropped-serra-gaúcha.jpg"
          />
        </div>

        <p>
          Você e seu amor não são fãs do calor? Então o caminho é a Serra
          Gaúcha! Na região, a forte influência italiana e alemã se aliou à
          natureza pra montar cenários dos sonhos. O clima intimista é perfeito
          pra degustar os famosos vinhos da região a dois, saborear fondues e
          ainda curtir os hotéis com lareiras, super aconchegantes. No entorno,
          Gramado e Canela ficam a apenas 10 km uma da outra, mas você ainda
          deve aproveitar pra conhecer outras cidadezinhas lindas. Boas opções
          são Garibaldi, Bento Gonçalves, Nova Petrópolis e Cambará do Sul.
        </p>

        <br />
        <br />
        <br />

        <h1>Bonito (Mato Grosso do Sul)</h1>

        <div className="images">
          <img
            className="img"
            src="https://www.segurospromo.com.br/blog/wp-content/uploads/2021/07/Bonito-Mato-Grosso-do-Sul-740x360.jpg"
          />
          <img
            className="img"
            src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/e3/2f/20.jpg"
          />
          <img
            className="img"
            src="https://emalgumlugardomundo.com.br/wp-content/uploads/2018/07/Bonito-Zagaia-Eco-Resort-2.jpg"
          />
        </div>

        <p>
          Um dos melhores destinos para lua de mel no Brasil, o nome faz jus ao
          cenário. A cidade é simplesmente maravilhosa! A apenas 3 horas de
          Campo Grande, Bonito é perfeita pra curtir ecoturismo a dois. Nas
          águas transparentes, é possível chegar bem pertinho da fauna marinha
          exuberante. Já nos paredões rochosos, é possível fazer escalada ou
          rapel. Nos hotéis aconchegantes, você pode aproveitar a saborosa
          culinária local e o momento a sós que tanto querem.
        </p>

        <br />
        <br />
        <br />

        <h1>Fernando de Noronha</h1>

        <div className="images">
          <img
            className="img"
            src="https://cdn.panrotas.com.br/portal-panrotas-statics/media-files-cache/303225/67a68011132af190034dc1c319fa632efernandodenoronha/0,0,2000,1194/1206,720,0.26/0/default.jpg"
          />
          <img
            className="img"
            src="https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2021/08/11-coisas-pra-fazer-em-Fernando-de-Noronha.png"
          />
          <img
            className="img"
            src="https://www.spiceuptheroad.com/site/wp-content/uploads/2017/11/pousada-maravilha-33453421-1483462157-ImageGalleryLightboxLarge-e1511193303122.jpg"
          />
        </div>

        <p>
          Que tal aproveitar a lua de mel para conhecer um dos destinos mais
          encantadores do Brasil? A beleza natural de Fernando de Noronha é
          mundialmente famosa e inspira deliciosos momentos a dois! O
          arquipélago também favorece os recém-casados que gostam de esportes
          aquáticos em geral. Mas atenção: organize-se com antecedência, porque
          o número de visitantes é limitado e é preciso pagar taxas. Com
          temperatura média de 28ºC, a ilha é linda o ano inteiro. Mas é bom
          ficar ligado nas estações de chuva, entre abril e julho, e a seca,
          entre setembro e março. No inverno é que aparecem as cachoeiras e o
          mar fica mais calminho, como uma verdadeira piscina infinita. Nessa
          época, caracterizada por chuvas esparsas e sol intenso, a visibilidade
          do mar chega a 50 metros.
        </p>
      </div>
    );
  }
}
