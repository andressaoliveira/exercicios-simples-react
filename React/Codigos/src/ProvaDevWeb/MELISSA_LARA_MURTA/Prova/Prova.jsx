import { BrowserRouter} from 'react-router-dom';
import Rotas from './Routes';
import './App.css';
import NavBar from './NavBar'

function Prova() {
  return (
    <div className="App">
      <div className="Routes">
        <BrowserRouter>
          <div className="NavBar">
            <NavBar/>
          </div>
          <Rotas />
        </BrowserRouter>
      </div>

     
    </div>
  );
}

export default Prova;
