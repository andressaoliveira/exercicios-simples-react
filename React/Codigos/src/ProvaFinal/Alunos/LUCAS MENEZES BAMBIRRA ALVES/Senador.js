import React, { useState } from 'react';
import axios from 'axios'

function Calculo() {
  const [senador, setSenador] = useState([])

  function getSenador() {
    axios({
      method: 'get',
      url: 'https://legis.senado.leg.br/dadosabertos/senador/23',
      headers: {'accept': 'application/json'}
    }).then(res => {
      let data = res.data.DetalheParlamentar.Parlamentar
      // console.log(data)
      setSenador(Object.values(data.IdentificacaoParlamentar))
    })
  }

  return (
    <div style={{textAlign: 'center'}}>
      <h3>Senador</h3>
      <button onClick={getSenador}>Obter Dados</button>
      <p>Codigo Parlamentar: {senador[0]}</p>
      <p>Nome: {senador[1]}</p>
      <p>Nome Completo: {senador[2]}</p>
      <p>Sexo: {senador[3]}</p>
      <img src={senador[4]} alt="Foto do Senador"/>
      <p>Página: <a href={senador[5]} target="_new">Link</a></p>
      <p>E-mail: {senador[6]}</p>
      <p>Partido: {senador[7]}</p>
    </div>
  );
}

export default Calculo;
