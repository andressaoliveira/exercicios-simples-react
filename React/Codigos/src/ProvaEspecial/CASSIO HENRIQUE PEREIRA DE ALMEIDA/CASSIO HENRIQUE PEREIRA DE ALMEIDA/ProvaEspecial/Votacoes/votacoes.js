import React from 'react';

export default function Votacoes({ ...props }) {

    const data = props.data

    var itens = data.Votacoes.Votacao.map((x) =>
    <div style={{marginTop: 20, borderTop: '1px solid black'}}>
        <b>Código Sessao Votação:</b> {x.CodigoSessaoVotacao}
        <br></br>
        <b>Descrição Resultado:</b> {x.DescricaoResultado}
        <br></br>
        <b>Descrição Votação:</b> {x.DescricaoVotacao}
        <br></br>
        <b>Descrição Voto:</b> {x.DescricaoVoto}
        <br></br>
        <b>Indicador Votação Secreta:</b> {x.IndicadorVotacaoSecreta}
        <br></br>
        <b>Sequencial:</b> {x.Sequencial}
        <br></br>
        <ul><b>Seção Plenária:</b>
            <li>Codigo Sessao: {x.SessaoPlenaria.CodigoSessao}</li>
            <li>Sigla Casa Sessao: {x.SessaoPlenaria.SiglaCasaSessao}</li>
            <li>Codigo Sessao Legislativa: {x.SessaoPlenaria.CodigoSessaoLegislativa}</li>
            <li>Sigla Tipo Sessao: {x.SessaoPlenaria.SiglaTipoSessao}</li>
            <li>Numero Sessao: {x.SessaoPlenaria.NumeroSessao}</li>
            <li>Data Sessao: {x.SessaoPlenaria.DataSessao}</li>
            <li>Hora Inicio Sessao: {x.SessaoPlenaria.HoraInicioSessao}</li>
        </ul>
        <br></br>
        <ul><b>Materia:</b>
            <li>Ano: {x.Materia.Ano}</li>
            <li>Código: {x.Materia.Codigo}</li>
            <li>Data: {x.Materia.Data}</li>
            <li>Descrição Identificação: {x.Materia.DescricaoIdentificacao}</li>
            <li>Ementa: {x.Materia.Ementa}</li>
            <li>Identificação Processo: {x.Materia.IdentificacaoProcesso}</li>
            <li>Número: {x.Materia.Numero}</li>
            <li>Sigla: {x.Materia.Sigla}</li>
        </ul>
        <br></br>

        {/* por algum motivo não estou conseguindo receber os dados de tramitação */}
        
        {/* <b>Tramitação:</b>
        <ul><b>Identificacao Tramitação:</b>
            <li>Codigo Tramitação: {x.Tramitacao.IdentificacaoTramitacao.CodigoTramitacao}</li>
            <li>Numero Autuacao: {x.Tramitacao.IdentificacaoTramitacao.NumeroAutuacao}</li>
            <li>Data Tramitação: {x.Tramitacao.IdentificacaoTramitacao.DataTramitacao}</li>
            <li>Texto Tramitação: {x.Tramitacao.IdentificacaoTramitacao.TextoTramitacao}</li>
            <li>Ementa: {x.Tramitacao.IdentificacaoTramitacao.Ementa}</li>
            <li>Identificação Processo: {x.Tramitacao.IdentificacaoTramitacao.IdentificacaoProcesso}</li>
            <li>Número: {x.Tramitacao.IdentificacaoTramitacao.Numero}</li>
            <li>Sigla: {x.Tramitacao.IdentificacaoTramitacao.Sigla}</li>
        </ul>
        <br></br>
        <ul><b>Origem Tramitação:</b>
            <li>Codigo Local: {x.Tramitacao.IdentificacaoTramitacao.OrigemTramitacao.Local.CodigoLocal}</li>
            <li>Tipo Local: {x.Tramitacao.IdentificacaoTramitacao.OrigemTramitacao.Local.TipoLocal}</li>
            <li>Sigla Casa Local: {x.Tramitacao.IdentificacaoTramitacao.OrigemTramitacao.Local.SiglaCasaLocal}</li>
            <li>Sigla Local: {x.Tramitacao.IdentificacaoTramitacao.OrigemTramitacao.Local.SiglaLocal}</li>
            <li>Nome Local: {x.Tramitacao.IdentificacaoTramitacao.OrigemTramitacao.Local.NomeLocal}</li>
        </ul>
        <br></br> */}
    </div>
    );
    return(
        <div style={{marginLeft: '50px'}}>
            <h1>Votações</h1>
            {itens}
        </div>
    )
}
