import React from 'react';

import { Link } from "react-router-dom";

export default function Principal() {
return (

    <aside className=".PFim">
        <nav>
            <ul>
                <li>
                    <Link to ="/"> Página Inicial</Link>
                </li>
                <li>
                    <Link to ="/Senador"> Senador</Link>
                </li>
                <li>
                    <Link to ="/Cargos"> Cargos</Link>
                </li>
            </ul>
        </nav>
    </aside>)

}
