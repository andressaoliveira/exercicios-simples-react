import React from 'react';

export default class Destinos extends React.Component {

    render() {
        const cidades = [
            { nome: "São Paulo", foto: "https://www.euandopelomundo.com/wp-content/uploads/2019/04/sao_paulo.jpg" },
            { nome: "Belo Horizonte", foto: "https://s2.glbimg.com/VtQAOB9yAgWWk_bF3mOIYtQmNEM=/0x0:1280x960/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/u/r/bB9CVMQQyASUa6jkIAgQ/whatsapp-image-2019-05-26-at-11.08.41.jpeg" },
            { nome: "Rio de Janeiro", foto: "https://www.costacruzeiros.com/content/dam/costa/costa-magazine/article-images/what-to-see-in-rio-de-janeiro/rio-de-janeiro-panorama_YuJas-Shutterstock_2.jpg.image.694.390.low.jpg" }
            
          ];
        return (
            <div>
                <ul>
          {
            cidades.map((item, index) =>
              <li key={index}><h3>{item.nome}</h3><img src={item.foto}></img></li>)
          }
        </ul>
            </div>
        );
    }
}