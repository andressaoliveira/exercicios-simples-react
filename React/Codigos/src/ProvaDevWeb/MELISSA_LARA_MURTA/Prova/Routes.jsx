import { Routes, Route} from 'react-router-dom';
import PaginaInicial from '../Prova/PaginaInicial/index';
import Destinos from '../Prova/Destinos/index';
import BetoCarreroWorld from '../Prova/Destino/BetoCarrero';
import Florianopolis from '../Prova/Destino/Florianopolis';
import Balneario from '../Prova/Destino/Balneario';
import Combustivel from '../Prova/Combustivel/index';

function Rotas() { 
  return (
    <Routes>
        
        <Route path={'/PaginaInicial'} element={<PaginaInicial/>} />
        <Route path={'/Destinos'} element={<Destinos/>} />
        <Route path={'/Destino/BetoCarreroWorld'} element={<BetoCarreroWorld/>} />
        <Route path={'/Destino/Florianopolis'} element={<Florianopolis/>} />
        <Route path={'/Destino/Balneario'} element={<Balneario/>} />
        <Route path={'/Combustivel'} element={<Combustivel/>} />
    </Routes>
  );
}

export default Rotas;