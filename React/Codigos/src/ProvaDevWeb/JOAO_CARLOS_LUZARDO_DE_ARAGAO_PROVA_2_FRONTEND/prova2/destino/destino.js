import './destino.css';

function Destinos() {
  return (
    <div className='destinos'>

      <div className='cidade'>
        <h1>Brasília (DF)</h1>
        <p>
        Brasília é a capital federal do Brasil e a sede de governo do Distrito Federal. A capital está localizada 
        na região Centro-Oeste do país, ao longo da região geográfica conhecida como Planalto Central.
        </p>
        <div className='fotos'>
          <img src="https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/foto-abre-df04.jpg?quality=70&strip=info&w=868" />
          <img src="https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-brasilia-capa2019-01.jpg" />
        </div>
      </div>
  


      <div className='cidade'>
        <h1>Ouro Preto (MG)</h1>
        <p>
        Ouro Preto é um município brasileiro localizado no estado de Minas Gerais,
         na Região Sudeste do país. Sua população estimada em 2018 era de cerca de 74 
         mil habitantes. Localiza-se na latitude 20º23'08" sul, longitude 43º30'29" oeste e 
         altitude média de 1 179 metros.
        </p>
        <div className='fotos'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Igreja_de_S%C3%A3o_Francisco_de_Assis_-_Alejadinho.jpg/1024px-Igreja_de_S%C3%A3o_Francisco_de_Assis_-_Alejadinho.jpg" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/-i---i-_%286288971321%29.jpg/1024px--i---i-_%286288971321%29.jpg" />
        </div>
      </div>
  


      <div className='cidade'>
        <h1>Caldas Novas (GO)</h1>
        <p>
        Caldas Novas é um município brasileiro no estado de Goiás, Região Centro-Oeste do país. 
        Localiza-se no sudeste goiano e sua população, conforme estimativas do
         IBGE de 2021, era de 95 183 habitantes.
        </p>
        <div className='fotos'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Piscinas_de_ondas.jpg" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Cachoeiracaldas.JPG/800px-Cachoeiracaldas.JPG" />
        </div>
      </div>
    </div>
  );
}

export default Destinos;
