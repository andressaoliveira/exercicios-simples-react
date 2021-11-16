//import './Destinos.scss'


function Detalhes(props) {
    const { text, descricao, foto, foto2, foto3 } = props;
    return (
      <div>
        <h1>{text}</h1>
        <div className="imagens" align="center">          
          <img src={foto} alt="img1" />
          <img src={foto2} alt="im2" />
          <img src={foto3} alt="im3" />
        </div>
        <p>{descricao}</p>
      </div>
    )
}

function Destinos() {
  return (
    <div className="Destinos">
      <Detalhes  text="São Thome das Letras" descricao="São Tomé das Letras é um município do estado de Minas Gerais, no Brasil. Localiza-se a 346 km da capital do estado. Sua população em 2010, segundo o censo realizado pelo Instituto Brasileiro de Geografia e Estatística, era de 6 655 habitantes." foto="http://www.saotomedasletras.net.br/images/sao-thome-das-letras.jpg" foto2="https://upload.wikimedia.org/wikipedia/commons/8/8a/Sao_Thome_das_Letras_-_Brazil_%2817%29.JPG" foto3="https://www.viajali.com.br/wp-content/uploads/2017/05/motivos-viajar-para-sao-thome-das-letras.jpg"/>
      <Detalhes  text="Carrancas" descricao="Carrancas é um município brasileiro do estado de Minas Gerais. Sua população segundo o censo realizado pelo IBGE em 2010 é de 3.952 habitantes." foto="https://f.i.uol.com.br/fotografia/2019/08/14/15658176645d547b40bb8eb_1565817664_3x2_rt.jpg" foto2="https://itabirito.mg.gov.br/wp-content/uploads/2015/04/Cachoeira-Carrancas-Acervo-da-Secretaria-de-Patrimonio-Cultural-e-Turismo-768x1024.jpg" foto3="https://s2.glbimg.com/LbalS3bMxEp2PKhGen3G8jv5ERQ=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/P/q/UgxtXURpAOvbS4wn8Cpw/carrancas.jpeg"/>
      <Detalhes  text="Trindade" descricao="Antiga vila de pescadores, Trindade é uma região litorânea charmosa conhecida pelas longas praia arenosas, como a Praia dos Ranchos e a reservada Praia do Cachadaço, que tem uma piscina natural cheia de peixes tropicais coloridos. As trilhas no Parque Nacional da Serra da Bocaina atravessam uma mata atlântica densa até chegar em cachoeiras e piscinas naturais. Os bares e restaurantes casuais têm vista para o mar e servem peixes pescados na região." foto="https://cache.quantocustaviajar.com/blog/wp-content/uploads/2019/11/trindade-rio-de-janeiro-3-1024x768.jpg" foto2="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/ee/81/0c/photo1jpg.jpg?w=700&h=500&s=1"foto3="https://www.trindadepousadas.com.br/wa_images/mapa-cabeca-do-indio--trindade-paraty-rj---roberto-torrubia.jpg?v=1fcg0fk"/>
    </div>
  );
}

export default Destinos;
