import Home from './Home/index';
import Destinos from './Destinos/index';
import Combustivel from './Combustível/index';
import { useState } from 'react';

function App() {
  const[tela, setTela] = useState('Home')
  
  function mudarAba(click){
    if(click === 'Home'){
      setTela('Home')
    }
    else if(click === 'Destinos'){
      setTela('Destinos')
    }
    else if(click === 'Combustivel'){
      setTela('Combustivel')
    }
  }

  return (
    <div className='conteiner' style={{display: 'flex', flexDirection: 'row', height: '100vh'}}>
      <div style={{borderRight: '1px solid black', borderColor: 'black'}}>
        <div style={{marginLeft: '50px', marginRight: '50px' , marginBottom: '10px', justifyItems: 'center', cursor: 'pointer'}} onClick={() => mudarAba('Home')}>
            <p>Página Inicial</p>
        </div>
        <div style={{marginLeft: '50px', marginRight: '50px' , marginBottom: '10px', justifyItems: 'center', cursor: 'pointer'}} onClick={() => mudarAba('Destinos')}>
            <p>Destinos</p>
        </div>
        <div style={{marginLeft: '50px', marginRight: '50px' , marginBottom: '10px', justifyItems: 'center', cursor: 'pointer'}} onClick={() => mudarAba('Combustivel')}>
            <p>Combustivel</p>
        </div>
      </div>
      <div style={{width: '100%'}}>
        {tela === 'Home' && 
          <Home/>
        }
        {tela === 'Destinos' &&
          <Destinos/>
        }
        {tela === 'Combustivel' &&
          <Combustivel/>
        }
      </div>
    </div>
  );
}



export default App;
