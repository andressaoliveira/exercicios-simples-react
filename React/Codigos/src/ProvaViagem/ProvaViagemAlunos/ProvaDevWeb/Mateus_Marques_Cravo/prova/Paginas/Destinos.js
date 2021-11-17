import React from 'react';

export class Destinos extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showComponent: true,
      };
    }
  
    render() {
      return (
        <div className="Prova">
            <h1>São Thomé das Letras</h1>
            <div>
                <img src="https://www.saotomedasletras.net.br/images/sao_thome/piramide_saotome.jpg" alt="Sao Thomé 1" />
                <img src="https://www.saotomedasletras.net.br/images/sao_thome/cachoeira_sao_tome.jpg" alt="Sao Thomé 2" />
                <img src="https://www.saotomedasletras.net.br/images/sao_thome/centro_sao_tome_das_letras.jpg" alt="Sao Thomé 3" />
            </div>
            <div>
                <span>São Thomé das Letras é um município do estado de Minas Gerais, no Brasil. Localiza-se 346 km da capital do estado. Sua população em 2010, segundo o censo 
                    realizado pelo instituto Brasileiro de Geografia e Estatítica, era de 6 655 habitantes.</span>
            </div>
            <h1>Capitólio</h1>
            <div>
                <img src="https://www.viagenscinematograficas.com.br/wp-content/uploads/2021/07/Capitolio-MG-O-que-Fazer-17.jpg" alt="Capitolio 1" />
                <img src="https://www.viagenscinematograficas.com.br/wp-content/uploads/2021/07/Capitolio-MG-O-que-Fazer-Capa.jpg" alt="Capitolio" />
                <img src="https://www.viagenscinematograficas.com.br/wp-content/uploads/2021/07/Capitolio-MG-O-que-Fazer-12.jpg" alt="Capitolio 3" />
            </div>
            <div>
                <span>Capitólio é um município do estado de Minas Gerais. De acordo com o Instituto Brasileiro de Geografia e Estatítica, sua população era estimada em 8 663 
                    habitantes em 2020..</span>
            </div>
            <h1>Serra do Cipó</h1>
            <div>
                <img src="https://i.uai.com.br/HBVTocUATzyji_hb1wMOf_qcQEc=/820x0/smart/imgsapp2.uai.com.br/app/noticia_133890394703/2017/08/09/211202/20170809120905397076u.jpg" alt="Serra 1" />
                <img src="https://i.uai.com.br/diDV2CluGJh124NHwwg4x8SVcsY=/820x0/smart/imgsapp2.uai.com.br/app/noticia_133890394703/2017/08/09/211202/20170809120915978785o.jpg" alt="Serra 2" />
                <img src="https://i.uai.com.br/rjfnndTCri3h2tmAQW_-vMzW-NI=/820x0/smart/imgsapp2.uai.com.br/app/noticia_133890394703/2017/08/09/211202/20170809120940356833u.jpg" alt="Serra 3" />
            </div>
            <div>
                <span>Serra do Cipó é um distrito do município brasileiro de Santana do Riacho, no interior do estado de Minas Gerais. De acordo com o Instituto Brasileiro de 
                    Geografia e Estatística, sua população no ano de 2010 era de 1 941 habitantes, sendo 982 homens e 959 mulheres, possuindo um total de 1 100 domicílios 
                    particulares.</span>
            </div>            
        </div>
      );
    }
}