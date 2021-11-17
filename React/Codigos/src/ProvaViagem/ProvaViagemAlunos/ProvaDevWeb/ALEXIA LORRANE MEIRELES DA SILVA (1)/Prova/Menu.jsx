//Chamada do que foi instalado para direcionar as rotas
import {Link} from 'react-router-dom';

export default function Menu(){
    return (
      <div className="containerMenu">
          <div className="link">
            <Link to="/PaginaInicial">Página inicial</Link>
          </div>
          <div className="link">
              <Link to="/Destinos">Destinos</Link>
          </div>
          <div className="link">
          <Link to="/Combustivel">Combustível</Link>
          </div>
      </div>
    );
  }
  
  