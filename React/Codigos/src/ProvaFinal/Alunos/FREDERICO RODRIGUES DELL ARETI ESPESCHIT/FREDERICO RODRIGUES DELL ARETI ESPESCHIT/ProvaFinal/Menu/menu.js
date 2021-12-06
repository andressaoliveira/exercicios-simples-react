import React from "react";

import { Link } from "react-router-dom";

class Menu extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">

                    <Link className="navbar-brand" to="/">
                        Prova Final
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">
                                    Calculo
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/senador">
                                    Senador
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cargos">
                                    Cargos
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Menu;


//A pagina principal, contem a questão 1, mas se você estiver na prova Senador e clicar em "prova final" também será redirecionada para http://localhost:3000/