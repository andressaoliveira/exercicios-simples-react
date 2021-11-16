import { Routes, Route} from 'react-router-dom';
import PaginaInicial from '../paginas/PaginaInicial/index';
import Destinos from '../paginas/Destinos/index';
import BetoCarreroWorld from '../paginas/Destino/BetoCarrero';
import Florianopolis from '../paginas/Destino/Florianopolis';
import Balneario from '../paginas/Destino/Balneario';
import Combustivel from '../paginas/Combustivel/index';

function Rotas() { 
  return (
    <Routes>
        
        <Route path={'/'} element={<PaginaInicial/>} exact />
        <Route path={'/Destinos'} element={<Destinos/>} />
        <Route path={'/Destino/BetoCarreroWorld'} element={<BetoCarreroWorld/>} />
        <Route path={'/Destino/Florianopolis'} element={<Florianopolis/>} />
        <Route path={'/Destino/Balneario'} element={<Balneario/>} />
        <Route path={'/Combustivel'} element={<Combustivel/>} />
    </Routes>
  );
}

export default Rotas;