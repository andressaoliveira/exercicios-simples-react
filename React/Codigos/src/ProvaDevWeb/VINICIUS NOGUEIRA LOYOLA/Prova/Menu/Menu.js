import React from 'react';

import { Link } from "react-router-dom";

export default function Menu() {
return (

    <aside className=".Destin">
        <nav>
            <ul>
                <li>
                    <Link to ="/"> Página Inicial</Link>
                </li>
                <li>
                    <Link to ="/Destinos"> Destinos</Link>
                </li>
                <li>
                    <Link to ="/Combustivel"> Combustível</Link>
                </li>
            </ul>
        </nav>
    </aside>)

}
