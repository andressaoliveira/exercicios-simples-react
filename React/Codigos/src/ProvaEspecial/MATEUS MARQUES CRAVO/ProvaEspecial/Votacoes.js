import React from 'react';
import api from './api';

export class Votacoes extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            votacoes: [],
            nomeSenador: ''
        };
    }

    retornaDados = () => {
        var idSenador = document.getElementById("idSenador").value;
        let component = this;
        api.get("/" + idSenador + "/votacoes")
        .then((response)=> {        
            let votacoesRetornadas = response.data.VotacaoParlamentar.Parlamentar.Votacoes.Votacao;
            console.log(votacoesRetornadas);        
            const retorno = votacoesRetornadas.map((item, i) => {
                return (
                    <div>
                        <h1>Votação {i + 1}</h1>

                        <h2>Sessão Plenária</h2>
                        <p><b>Codigo Sessão:</b> {item.SessaoPlenaria.CodigoSessao}</p>                    
                        <p><b>Sigla Casa Sessão:</b> {item.SessaoPlenaria.SiglaCasaSessao}</p>                                     
                        <p><b>Codigo Sessão Legislativa:</b> {item.SessaoPlenaria.CodigoSessaoLegislativa}</p> 
                        <p><b>Sigla Tipo Sessão:</b> {item.SessaoPlenaria.SiglaTipoSessao}</p>                    
                        <p><b>Numero Sessão:</b> {item.SessaoPlenaria.NumeroSessao}</p>                                     
                        <p><b>Data Sessão:</b> {item.SessaoPlenaria.DataSessao}</p>                   
                        <p><b>Hora Inicio Sessão:</b> {item.SessaoPlenaria.HoraInicioSessao}</p> 
                        <br />      

                        <h2>Materia</h2>                                     
                        <p><b>Codigo:</b> {item.Materia.Codigo}</p>                                       
                        <p><b>Identificação Processo:</b> {item.Materia.IdentificacaoProcesso}</p>                                       
                        <p><b>Descrição Identificação:</b> {item.Materia.DescricaoIdentificacao}</p>               
                        <p><b>Sigla:</b> {item.Materia.Sigla}</p>                   
                        <p><b>Numero:</b> {item.Materia.Numero}</p>                   
                        <p><b>Ano:</b> {item.Materia.Ano}</p>                   
                        <p><b>Ementa:</b> {item.Materia.Ementa}</p>                   
                        <p><b>Data:</b> {item.Materia.Data}</p> 
                        <br />      

                        {
                            (item.Tramitacao === undefined) ? 
                                console.log('1') 
                                : 
                                <div>
                                    <h2>Tramitação</h2>                        
                                    <h3>Identificação Tramitação</h3>  
                                    <p><b>Codigo Tramitação:</b> {item.Tramitacao.IdentificacaoTramitacao.CodigoTramitacao}</p>       
                                    <p><b>Numero Autuação:</b> {item.Tramitacao.IdentificacaoTramitacao.NumeroAutuacao}</p>     
                                    <p><b>Data Tramitação:</b> {item.Tramitacao.IdentificacaoTramitacao.DataTramitacao}</p>     
                                    <p><b>Texto Tramitação:</b> {item.Tramitacao.IdentificacaoTramitacao.TextoTramitacao}</p>    
                                    <span>Origem Tramitação</span> 
                                        <p><b>Codigo Local:</b> {item.Tramitacao.IdentificacaoTramitacao.OrigemTramitacao.Local.CodigoLocal}</p>    
                                        <p><b>TipoLocal:</b> {item.Tramitacao.IdentificacaoTramitacao.OrigemTramitacao.Local.TipoLocal}</p>   
                                        <p><b>Sigla Casa Local:</b> {item.Tramitacao.IdentificacaoTramitacao.OrigemTramitacao.Local.SiglaCasaLocal}</p>  
                                        <p><b>Sigla Local:</b> {item.Tramitacao.IdentificacaoTramitacao.OrigemTramitacao.Local.SiglaLocal}</p> 
                                        <p><b>Nome Local:</b> {item.Tramitacao.IdentificacaoTramitacao.OrigemTramitacao.Local.NomeLocal}</p>
                                    <span>Destino Tramitação</span> 
                                        <p><b>Codigo Local:</b> {item.Tramitacao.IdentificacaoTramitacao.DestinoTramitacao.Local.CodigoLocal}</p>    
                                        <p><b>Tipo Local:</b> {item.Tramitacao.IdentificacaoTramitacao.DestinoTramitacao.Local.TipoLocal}</p>   
                                        <p><b>Sigla Casa Local:</b> {item.Tramitacao.IdentificacaoTramitacao.DestinoTramitacao.Local.SiglaCasaLocal}</p>  
                                        <p><b>Sigla Local:</b> {item.Tramitacao.IdentificacaoTramitacao.DestinoTramitacao.Local.SiglaLocal}</p> 
                                        <p><b>Nome Local:</b> {item.Tramitacao.IdentificacaoTramitacao.DestinoTramitacao.Local.NomeLocal}</p>
                                    <br />  
                                </div>
                        }              

                        <p><b>Codigo Sessão Votação:</b> {item.CodigoSessaoVotacao}</p> 
                        <p><b>Sequencial:</b> {item.Sequencial}</p> 
                        <p><b>Indicador Votação Secreta:</b> {item.IndicadorVotacaoSecreta}</p> 
                        <p><b>Descrição Votação:</b> {item.DescricaoVotacao}</p> 
                        <p><b>Descrição Resultado:</b> {item.DescricaoResultado}</p> 
                        <p><b>Total Votos Sim:</b> {item.TotalVotosSim}</p> 
                        <p><b>Total Votos Abstenção:</b> {item.TotalVotosAbstencao}</p> 
                        <p><b>Sigla Descrição Voto:</b> {item.SiglaDescricaoVoto}</p> 
                        <p><b>Descrição Voto:</b> {item.DescricaoVoto}</p> 

                        <hr />
                    </div>
                )
            });

            component.setState({
                votacoes: retorno,
                nomeSenador: response.data.VotacaoParlamentar.Parlamentar.Nome
            });
        })
        .catch((err) => {
            console.error(err);

            const retorno = "Não encontrado!";
            component.setState({
                votacoes: retorno,
                nomeSenador: ''
            });
        })
    }

    render() {
        const { votacoes, nomeSenador } = this.state; 

        return (
            <div className="flex-9">
                <h1>Votações</h1>

                <input id="idSenador" type="number" /><br />
                <button name="retornaVotacoes" type='button' onClick={this.retornaDados}>Buscar</button>      
                
                <div>
                    { nomeSenador === '' ? null : <span>Nome Senador: {nomeSenador}</span>}
                    {votacoes}  
                </div>                  
            </div>
        )
    }
}