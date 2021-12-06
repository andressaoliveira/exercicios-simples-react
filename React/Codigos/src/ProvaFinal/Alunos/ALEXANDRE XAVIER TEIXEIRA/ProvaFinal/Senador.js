import { useEffect, useState } from "react";

function Senador() {

    const CODIGO_SENADOR = '4';

    // IDENTIFICACAO
    const [codigo, setCodigo] = useState(0);
    const [nomeParlamentar, setNomeParlamentar] = useState('');
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [img, setImg] = useState('');
    const [pagina, setPagina] = useState('');
    const [email, setEmail] = useState('');

    // DADOS BÁSICOS
    const [dataNascimento, setDataNascimento] = useState('');
    const [dataFalecimento, setDataFalecimento] = useState('');
    const [naturalidade, setNaturalidade] = useState('');
    const [ufNaturalidade, setUfNaturalidade] = useState('');
    
    // OUTRAS INFORMACOES
    const [servicos, setServicos] = useState([]);
    
    useEffect(() => {
        fetch(`https://legis.senado.leg.br/dadosabertos/senador/${CODIGO_SENADOR}`, {
            method: 'GET'
        })
        .then(resposta => resposta.text())
        .then(dado => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(dado, "application/xml");
            const parlamentar = xml.getElementsByTagName("Parlamentar")[0];
            
            const identificacao = parlamentar.getElementsByTagName("IdentificacaoParlamentar")[0];
            const dadosBasicos = parlamentar.getElementsByTagName("DadosBasicosParlamentar")[0];
            const outrasInformacoes = parlamentar.getElementsByTagName("OutrasInformacoes")[0];

            setarIdentificacao(identificacao);
            setarDadosBasicos(dadosBasicos);
            setarOutrasInformacoes(outrasInformacoes);
        })
    }, [])

    const setarIdentificacao = identificacao => {
        setCodigo(identificacao.childNodes[0].textContent);
        setNomeParlamentar(identificacao.childNodes[1].textContent);
        setNomeCompleto(identificacao.childNodes[2].textContent);
        setImg(identificacao.childNodes[4].textContent);
        setPagina(identificacao.childNodes[5].textContent);
        setEmail(identificacao.childNodes[6].textContent);
    }

    const setarDadosBasicos = dadosBasicos => {
        setDataNascimento(dadosBasicos.childNodes[0].textContent);
        setDataFalecimento(dadosBasicos.childNodes[1].textContent);
        setNaturalidade(dadosBasicos.childNodes[2].textContent);
        setUfNaturalidade(dadosBasicos.childNodes[3].textContent);
    }

    const setarOutrasInformacoes = outrasInformacoes => {
        const servicosConvertidos = Array.from(outrasInformacoes.childNodes);
        let arrayServicos = [];

        servicosConvertidos.forEach((serv, i) => {
            let url = null;
            let descricao = null;
            if (serv.childNodes[1]?.textContent.indexOf('http') >= 0) {
                url = serv.childNodes[1]?.textContent;
            } else {
                descricao = serv.childNodes[1]?.textContent;
                url = serv.childNodes[2]?.textContent;
            }

            const nome = serv.childNodes[0]?.textContent;
            
            const objeto = {
                nome,
                descricao,
                url
            };

            arrayServicos.push(objeto);
        });

        setServicos(arrayServicos);
    }

    return (
        <div className="senador">
            <h2>Senador</h2>

            <h3>Identificação do parlamentar</h3>

            <p>{codigo} - {nomeParlamentar}</p>
            <p>Nome completo: {nomeCompleto}</p>
            <div className="senador-img">
                <img alt="Foto do parlamentar" src={img} />
            </div>
            <a className="link" href={pagina}>Link da página</a>

            <p>E-mail para contato: {email}</p>

            <h3>Dados básicos</h3>

            <p>Data de nascimento: {new Date(dataNascimento).toLocaleDateString('pt-BR')}</p>
            <p>Data de falecimento: {new Date(dataFalecimento).toLocaleDateString('pt-BR')}</p>
            <p>{naturalidade} - {ufNaturalidade}</p>

            <h3>Outras informações</h3>

            {
                servicos.map((serv, i) => {
                    return (
                        <div key={i} style={{ marginBottom: '60px' }}>
                            <p>Serviço: {serv.nome}</p>
                            {
                                serv.descricao !== '' && serv.descricao !== null ?
                                <p>Descrição: {serv.descricao}</p> :
                                null
                            }
                            
                            {
                                serv.url !== '' && serv.url !== null ?
                                <a className="link" href={serv.url}>Link</a> :
                                null
                            }
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Senador;
