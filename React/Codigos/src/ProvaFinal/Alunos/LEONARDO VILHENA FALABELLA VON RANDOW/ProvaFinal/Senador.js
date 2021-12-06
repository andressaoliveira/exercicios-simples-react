import React from 'react';
import api from './api';

export default class Senador extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dadosbasicos: [],
            identificacao: [],
            info: []
        }
    }

    componentDidMount() {
        api.get("/21", {
            "Content-Type": "application/xml; charset=utf-8"
        })
            .then((response) => this.setDadosBasicos(response.data.DetalheParlamentar.Parlamentar.DadosBasicosParlamentar))
        api.get("/21", {
            "Content-Type": "application/xml; charset=utf-8"
        })
            .then((response) => this.setIdentificacao(response.data.DetalheParlamentar.Parlamentar.IdentificacaoParlamentar))
        api.get("/21", {
            "Content-Type": "application/xml; charset=utf-8"
        })
            .then((response) => this.setInfo(response.data.DetalheParlamentar.Parlamentar.OutrasInformacoes.Servico))
    }

    setDadosBasicos(dados) {
        this.setState({
            dadosbasicos: dados
        })
    }
    
    setIdentificacao(dados) {
        this.setState({
            identificacao: dados
        })
    }
    
    setInfo(dados) {
        this.setState({
            info: dados
        })
    }



    render() {
        const { dadosbasicos, info, identificacao} = this.state;
        return (
            <div className="senador">
                <h1>Senador</h1>
                <h2>Indentificação do Parlamentar</h2>
                <p>Nome:{identificacao.NomeParlamentar}</p>
                <img src={identificacao.UrlFotoParlamentar} alt="foto do parlamentar" />
                <a href={identificacao.UrlPaginaParlamentar}> Página</a>
                <h2>Dados Básicos Parlamentar</h2>
                <p>Nascimento: {dadosbasicos.DataNascimento}</p>
                <p>Naturalidade: {dadosbasicos.Naturalidade} - {dadosbasicos.UfNaturalidade}</p>
                <h2>Outras Informações</h2>
                <ul>
                    {info.map((item, index) => (
                         <li key={index}>
                        <p>Serviço: {item.NomeServico}</p>
                        <p>Descrição: {item.DescricaoServico}</p>
                        <a href={item.UrlServico}>Link</a>
                        </li>
                    ))}
                </ul>
                
            </div>
        );
    }
}

/*                 
<span>{info.Servico[1].NomeServico
{
            info.map((item, index) => (
              <li key={index}>
                <p>Nome: {item.NomeServico}</p>
              </li>
            ))
          }
        }
*/