import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <header>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/paths">Destinos</Link>
      </div>
      <div>
        <Link to="/gas">Gasolina</Link>
      </div>
    </header>
  );
};

export { Menu };
