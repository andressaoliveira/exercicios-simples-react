import axios from './api';
import { useState, useEffect } from 'react';

const Senador = () => {
  const [senador, setSenador] = useState({});
  
  useEffect(() => {
    const fetchSenador = async () => {
      const res = await axios.get('/41');
      const { DadosBasicosParlamentar, IdentificacaoParlamentar, OutrasInformacoes } = res.data.DetalheParlamentar.Parlamentar;
      
      setSenador({ ...DadosBasicosParlamentar, ...IdentificacaoParlamentar, ...OutrasInformacoes });
    };

    fetchSenador();
  }, [])

  return (
    <section className="content">
      <h1>Senador</h1>

      <div className="dados-senador">
        <h3>Identificação Parlamentar:</h3>

        <span>{senador.CodigoParlamentar} - {senador.NomeParlamentar}</span>

        <span>Nome: {senador.NomeCompletoParlamentar}</span>

        <img src={senador.UrlFotoParlamentar} alt="senador" />

        <a href={senador.UrlPaginaParlamentar} target="_blank" rel="noopener noreferrer">Página</a>
      </div>

      <div className="dados-senador">
        <h3>Dados Básicos Parlamentar:</h3>

        <span>Falecimento:</span>

        <span>Nascimento: {senador.DataNascimento}</span>

        <span>Naturalidade: {senador.Naturalidade} - {senador.UfNaturalidade}</span>
      </div>

      <div className="dados-senador">
        <h3>Outras Informações:</h3>

        { senador.Servico && senador.Servico.map((servico, index) => (
          <div key={index} className="dados-senador">
            <span>Seviço: {servico.NomeServico}</span>
    
            <span>Descrição: {servico.DescricaoServico}</span>
    
            <a href={servico.UrlServico} target="_blank" rel="noopener noreferrer">Link</a>
          </div>
        )) }

      </div>
    </section>
  );
}

export default Senador;