import { Route, Routes, BrowserRouter } from "react-router-dom";
import Senador from '../PROVAFINAL/SENADOR/SENADOR';
import Filiacoes from '../PROVAFINAL/FILIACOES/FILIACOES';
import Calculo from '../PROVAFINAL/CALCULO/CALCULO';
import CalculoTest from '../PROVAFINAL/CALCULO/CALCULO';
import Menu from './MENU/MENU'

function Principal() {
  return (
    <div >

      <BrowserRouter className='organiza' >
      <div>
        <Menu />
      </div>
      
      <div>
      <Routes>
      
      <Route path="/" exact element={<Calculo />} />
      <Route path="/CALCULO" element={<Calculo />} />
      <Route path="/SENADOR" element={<Senador />} />
      <Route path="/FILIACOES" element={<Filiacoes />} />
      
      </Routes>
      </div>
      </BrowserRouter>
      
    </div>
  )
}

export default Principal;