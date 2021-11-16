import { BrowserRouter } from 'react-router-dom';
import Rotas from './Routes/Routes';
import './App.css';
import NavBar from './Prova/NavBar'

function App() {
  return (
    <div className="App">
      <div className="Routes">
        <BrowserRouter>
          <NavBar />
          <Rotas />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
