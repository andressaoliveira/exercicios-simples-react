import Home from './Home/index';
import Senador from './Senador/index';
import Filiacoes from './Filiacoes/index';
import { useState, useEffect } from 'react';
import api from './Services/api'

function App() {
  const[tela, setTela] = useState('Home')
  const[OutrasInformacoes, setOutrasInformacoes] = useState([])
  
  const[data, setData] = useState([])
  useEffect(() => {
    if(data.length === 0){
      get()
    }
  })
  async function get(){
      await api.get("/filiacoes")
      .then((response => setData(response.data.FiliacaoParlamentar.Parlamentar)))
      .catch((err) => {
          console.log("Erro", err)}
      )
  }
  
  api.get()
    .then((response => {
        setOutrasInformacoes(response.data.DetalheParlamentar.Parlamentar.OutrasInformacoes.Servico)
    }))
    .catch((err) => {
        console.log("Erro", err)}
  )

  function mudarAba(click){
    if(click === 'Home'){
      setTela('Home')
    }
    else if(click === 'Senador'){
      setTela('Senador')
    }
    else if(click === 'Filiacoes'){
      setTela('Filiacoes')
    }
  }

  return (
    <div className='conteiner' style={{display: 'flex', flexDirection: 'row', height: '100vh'}}>
      <div style={{borderRight: '1px solid black', borderColor: 'black'}}>
        <div style={{marginLeft: '50px', marginRight: '50px' , marginBottom: '10px', justifyItems: 'center', cursor: 'pointer'}} onClick={() => mudarAba('Home')}>
            <p>Página Inicial</p>
        </div>
        <div style={{marginLeft: '50px', marginRight: '50px' , marginBottom: '10px', justifyItems: 'center', cursor: 'pointer'}} onClick={() => mudarAba('Senador')}>
            <p>Senador</p>
        </div>
        <div style={{marginLeft: '50px', marginRight: '50px' , marginBottom: '10px', justifyItems: 'center', cursor: 'pointer'}} onClick={() => mudarAba('Filiacoes')}>
            <p>Filiacoes</p>
        </div>
      </div>
      <div style={{width: '100%'}}>
        {tela === 'Home' && 
          <Home/>
        }
        {tela === 'Senador' &&
          <Senador
            OutrasInformacoes={OutrasInformacoes}
          />
        }
        {tela === 'Filiacoes' &&
          <Filiacoes 
            data={data}
          />
        }
      </div>
    </div>
  );
}



export default App;
