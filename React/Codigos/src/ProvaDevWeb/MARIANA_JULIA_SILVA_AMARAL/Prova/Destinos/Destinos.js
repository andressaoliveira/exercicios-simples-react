import React from "react";

export default class Destinos extends React.Component {
  render() {
    return (
      <div className="destinos">
          <h2>Destinos</h2>
        <div className="itens">  
          <h3>Rio de Janeiro</h3>
          <p>
            O Rio de Janeiro é uma linda cidade à beira-mar, famosa pelas praias
            de Copacabana e Ipanema, pela estátua do Cristo Redentor, no topo do
            Corcovado, e pelo Pão de Açúcar, um teleféricos que atrai diversos
            turistas.
          </p>
          <div className="imagens">
            <img src="https://www.segueviagem.com.br/wp-content/uploads/2016/05/Copacabana-e-Leme-Rio-de-Janeiro-shutterstock_1504221245.jpg" />
            <img src="https://diariodorio.com/wp-content/uploads/2021/05/Cristo-Redentor.jpg" />
            <img src="https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-rio-de-janeiro-capa2019-01.jpg" />
          </div>
        </div>
        <div className="itens">
          <h3>Porto Seguro</h3>
          <p>
            Porto Seguro é uma cidade turística costeira na Bahia. Possui praias
            tropicais, incluindo a popular Praia de Taperapuãn, e também uma
            vibrante vida noturna, centrada no passeio repleto de bares, na
            famosa Passarela do Álcool.{" "}
          </p>
          <div className="imagens">
            <img src="https://www.segueviagem.com.br/wp-content/uploads/2019/11/shutterstock_137066045-1.jpg" />
            <img src="https://www.transportal.com.br/noticias/wp-content/uploads/2018/05/Porto-Seguro-Bahia.jpg" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSejuWh5wYCd1ysbxY1qVFKaWP8qIZjZReYzQ&usqp=CAU" />
          </div>
        </div>
        <div className="itens">
          <h3>Maragogi</h3>
          <p>
            Maragogi é uma cidade turística na costa do Oceano Atlântico, no
            leste do Brasil. É conhecida pelos recifes de coral ao largo da
            costa e os bancos de areia que criaram uma lagoa pouco profunda,
            servindo como piscina natural.
          </p>
          <div className="imagens">
            <img src="https://www.viagenscinematograficas.com.br/wp-content/uploads/2020/12/Maragogi-Alagoas-Praias-Capa.jpg" />
            <img src="https://www.submarinoviagens.com.br/bora-nessa-trip/wp-content/uploads/2021/04/Capa-5.jpg" />
            <img src="https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2021/09/5-passeios-que-voce-nao-pode-deixar-de-fazer-em-maragogi.png" />
          </div>
        </div>
      </div>
    );
  }
}
