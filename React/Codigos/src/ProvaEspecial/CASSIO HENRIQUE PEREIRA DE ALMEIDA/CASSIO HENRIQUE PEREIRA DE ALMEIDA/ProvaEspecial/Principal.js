import Home from './Home/home';
import Senador from './Senador/senador';
import Votacoes from './Votacoes/votacoes';
import Profissao from './Profissao/profissao';
import { useState, useEffect } from 'react';
import api from './Services/api'
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Menu from './Menu/menu';

function App() {
    
    const[data, setData] = useState([])
    const[dataProfissao, setDataProfissao] = useState([])
    const[codigo, setCodigo] = useState(null)
    
    const[Identificacao, setIdentificacao] = useState([])
    const[DadosBasicos, setDadosBasicos] = useState([])
    const[OutrasInformacoes, setOutrasInformacoes] = useState([])

    useEffect(() => {
        getVotacoes()
        getProfissao()
        getIdentificacao()
        getOutrasInformacoes()
    }, [codigo])

    async function getVotacoes(){
        await api.get(`https://legis.senado.leg.br/dadosabertos/senador/${codigo}/votacoes`)
        .then((response => 
            setData(response.data.VotacaoParlamentar.Parlamentar)
            ))
        .catch((err) => {
            // console.log("Erro", err)
          }
        )
    }

    async function getProfissao(){
        await api.get(`https://legis.senado.leg.br/dadosabertos/senador/${codigo}/profissao`)
        .then((response => setDataProfissao(response.data.ProfissaoParlamentar.Parlamentar.Profissoes)))
        .catch((err) => {
            // console.log("Erro", err)
          }
        )
    }

    async function getIdentificacao(){
        await api.get(`https://legis.senado.leg.br/dadosabertos/senador/${codigo}`)
        .then((response => {
            setIdentificacao(response.data.DetalheParlamentar.Parlamentar.IdentificacaoParlamentar)
            setDadosBasicos(response.data.DetalheParlamentar.Parlamentar.DadosBasicosParlamentar)
        }))
        .catch((err) => {
            // console.log("Erro", err)
        }
    )
    }

    async function getOutrasInformacoes(){
        await api.get(`https://legis.senado.leg.br/dadosabertos/senador/${codigo}`)
        .then((response => {
            setOutrasInformacoes(response.data.DetalheParlamentar.Parlamentar.OutrasInformacoes.Servico)
        }))
        .catch((err) => {
            // console.log("Erro", err)
        }
        )
    }

    function setCodigoSenador(codigo){
        setCodigo(codigo)
    }

  return (
      <div className="rot">      
        <BrowserRouter>
            <div style={{marginTop:'15px', marginBottom:'-50px'}}>
                <b>Digite o código do senador:</b>
                <input style={{marginLeft:'5px'}} type="number" name="primeiro" onChange={(event) => setCodigoSenador(event.target.value)}/>
            </div>
            <Menu/> 
            <Routes>
                <Route path="/Home" element={<Home />}/>
                <Route 
                    path="/Senador" 
                    element={
                    <Senador 
                        Identificacao={Identificacao}
                        DadosBasicos={DadosBasicos}
                        OutrasInformacoes={OutrasInformacoes}
                    />}
                />
                <Route path="/Votacoes" element={<Votacoes data={data}/>}/>
                <Route path="/Profissao" element={<Profissao data={dataProfissao}/>}/>
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
