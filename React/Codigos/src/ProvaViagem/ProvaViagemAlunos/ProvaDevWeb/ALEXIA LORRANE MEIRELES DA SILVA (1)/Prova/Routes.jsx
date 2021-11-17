import {Routes, Route} from 'react-router-dom';
import PaginaInicial from './PaginaInicial';
import Destinos from './Destinos';
import Combustivel from './Combustivel';

function Rotas(){
    return (
        <Routes>
            <Route path={'/PaginaInicial'} element={<PaginaInicial/>} />
            <Route path={'/Destinos'} element={<Destinos/>} />
            <Route path={'/Combustivel'} element={<Combustivel/>} />
        </Routes>
    )
}

export default Rotas;