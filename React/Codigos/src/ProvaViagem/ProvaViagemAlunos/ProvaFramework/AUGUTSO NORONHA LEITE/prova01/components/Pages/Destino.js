import React from "react";

//component estatico, visto que não avia nececidade de mudança na tela
export const Destino = () => {
  return (
    //div que contem os 3 titulos e 9 imagens 
    <div>
      <h1>Destinos</h1>

      <h4>São Thome das teltras</h4>

      <div className="images">
        <img className="img" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/46/54/55/lago.jpg?w=700&h=500&s=1" alt="images" />
        <img className="img" src="https://poraidebarraca.com.br/wp-content/uploads/2018/08/40002185_1221371458004912_2707787686818611200_o-1080x675.jpg" alt="images" />
        <img className="img" src="https://www.viajali.com.br/wp-content/uploads/2017/05/motivos-viajar-para-sao-thome-das-letras-2-730x486.jpg" alt="images" />
      </div>

      <h4>Belo Horizonte</h4>
      <div className="images">
        <img className="img" src="https://i.em.com.br/Y1y4loy09gflTfsmAjsAIZbqK8s=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2021/05/18/1267891/20210518184823740280i.jpg" alt="images" />
        <img className="img" src="https://s2.glbimg.com/VtQAOB9yAgWWk_bF3mOIYtQmNEM=/0x0:1280x960/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/u/r/bB9CVMQQyASUa6jkIAgQ/whatsapp-image-2019-05-26-at-11.08.41.jpeg" alt="images" />
        <img className="img" src="https://www.caumg.gov.br/wp-content/uploads/2019/12/WhatsApp-Image-2019-12-12-at-11.56.51-1024x682.jpeg" alt="images" />
      </div>

      <h4>São paulo</h4>
      <div className="images">
        <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Skyline_of_S%C3%A3o_Paulo_at_dusk_%28318298%29.jpg" alt="images" />
        <img className="img" src="https://www.euandopelomundo.com/wp-content/uploads/2019/04/sao_paulo.jpg" alt="images" />
        <img className="img" src="https://letsimage.s3.amazonaws.com/letsbook/256/galeria/30/6_m.jpg" alt="images" />
      </div>
    </div>
  );
};
