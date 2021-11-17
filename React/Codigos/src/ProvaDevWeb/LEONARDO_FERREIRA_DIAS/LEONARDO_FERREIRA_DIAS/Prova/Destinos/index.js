import React from 'react';
import Igreja from '../image/igreja.jpg';
import Cachoeira from '../image/cachoeira.jpg';
import Lagoa from '../image/lagoa.jpg';
import Um from '../image/1.jpg';
import Dois from '../image/2.jpg';
import Tres from '../image/3.jpg';
import Torre from '../image/torre.jpg';
import Paris from '../image/pariss.jpg';
import Avenida from '../image/avenida.jpg';

function Destinos() {
  return (
      <div style={{marginLeft: '150px',marginRight: '150px', justifyItems: 'center'}}>
        <h1>Guanhães</h1>
        <img src={Igreja} style={{width: 350, height: 250}}/>
        <img src={Cachoeira} style={{width: 350, height: 250, marginLeft: 50}}/>
        <img src={Lagoa} style={{width: 350, height: 250, marginLeft: 50}}/>
        <p>Guanhães é um município brasileiro no interior do estado de Minas Gerais, Região Sudeste do país. Localiza-se no Vale do Rio Doce, no leste mineiro, e sua população estimada em 2020 era de 34 573 habitantes.</p>
        
        <h1>Dortmund</h1>
        <img src={Um} style={{width: 350, height: 250}}/>
        <img src={Dois} style={{width: 350, height: 250, marginLeft: 50}}/>
        <img src={Tres} style={{width: 350, height: 250, marginLeft: 50}}/>
        <p>Dortmund é uma cidade na região de Renânia do Norte-Vestfália da Alemanha. É conhecida pelo estádio Westfalen, da equipa de futebol do Borussia. Nas proximidades, o Parque Westfalen é assinalado pela torre Florian, com a sua plataforma de observação.</p>

        <h1>Paris</h1>
        <img src={Torre} style={{width: 350, height: 250}}/>
        <img src={Paris} style={{width: 350, height: 250, marginLeft: 50}}/>
        <img src={Avenida} style={{width: 350, height: 250, marginLeft: 50}}/>
        <p>Paris, a capital da França, é uma importante cidade europeia e um centro mundial de arte, moda, gastronomia e cultura. Sua paisagem urbana do século XIX é cortada por avenidas largas e pelo rio Sena</p>
      </div>
  );
}

export default Destinos;
