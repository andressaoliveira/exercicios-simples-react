import React from 'react';
import api from './api';

export class Senador extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            identificacaoParlamentar: { 
                codigoParlamentar: '',
                nomeParlamentar: '',
                nomeCompletoParlamentar: '',
                sexoParlamentar: '',
                urlFotoParlamentar: '',
                urlPaginaParlamentar: '',
                emailParlamentar: ''
            },
            dadosBasicos: {
                dataNascimento: '',
                naturalidade: '',
                ufNaturalidade: ''
            },
            outrasInformacoes: []
        };
    }

    componentDidMount(){
        let component = this;
        api.get("/")
        .then((response)=> {        
            let identificacao = response.data.DetalheParlamentar.Parlamentar.IdentificacaoParlamentar;            
            let basicos = response.data.DetalheParlamentar.Parlamentar.DadosBasicosParlamentar;
            const outrasInfo = response.data.DetalheParlamentar.Parlamentar.OutrasInformacoes.Servico.map((item, i) => {
                return (
                    <div>
                        <p>Serviço: {item.NomeServico}</p>                    
                        <p>Descrição: {item.DescricaoServico}</p>                                    
                        <p><a href={item.UrlServico}>Link</a></p>
                        <br />
                    </div>
                )
            });


            component.setState({
                identificacaoParlamentar: {
                    codigoParlamentar: identificacao.CodigoParlamentar,
                    nomeParlamentar: identificacao.NomeParlamentar,
                    nomeCompletoParlamentar: identificacao.NomeCompletoParlamentar,
                    sexoParlamentar: identificacao.SexoParlamentar,
                    urlFotoParlamentar: identificacao.UrlFotoParlamentar,
                    urlPaginaParlamentar: identificacao.UrlPaginaParlamentar,
                    emailParlamentar: identificacao.EmailParlamentar
                },
                dadosBasicos: {
                    dataNascimento: basicos.DataNascimento,
                    naturalidade: basicos.Naturalidade,
                    ufNaturalidade: basicos.UfNaturalidade
                },
                outrasInformacoes: outrasInfo
            });
        })
        .catch((err) => {
            console.error("Error");
        })
    }

    // Obs.: Não entendi o error de Key em lista. Daí ignorei
    render() {
        const { identificacaoParlamentar, dadosBasicos, outrasInformacoes } = this.state; 

        return (
            <div className="flex-9">
                <h1>Senador</h1>
                
                <h3>Identificação Parlamentar:</h3>
                <p>{identificacaoParlamentar.codigoParlamentar} - {identificacaoParlamentar.nomeParlamentar}</p>
                <p>Nome Completo Parlamentar: {identificacaoParlamentar.nomeCompletoParlamentar}</p>
                <p>Sexo Parlamentar: {identificacaoParlamentar.sexoParlamentar}</p>
                <p><img alt="foto" src={identificacaoParlamentar.urlFotoParlamentar} /></p>                                            
                <p><a href={identificacaoParlamentar.urlPaginaParlamentar}>Página</a></p>              
                <p>Email: {identificacaoParlamentar.emailParlamentar}</p>

                <h3>Dados Básicos Parlamentar:</h3>
                <p>Data Nascimento: {dadosBasicos.dataNascimento}</p>
                <p>Naturalidade: {dadosBasicos.naturalidade}</p>
                <p>UF Naturalidade: {dadosBasicos.ufNaturalidade}</p>

                <h3>Outras Informações:</h3>
                {outrasInformacoes}            
            </div>
        )
    }
}