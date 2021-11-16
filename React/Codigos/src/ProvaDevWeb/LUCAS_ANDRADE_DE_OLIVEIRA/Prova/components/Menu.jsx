import React from 'react';

import { Link } from 'react-router-dom';

function Menu() {
    
    return (
        <aside>
            <ul>
                <li><Link to="/">Página Inicial</Link></li>
                <li><Link to="/Destinos">Destinos</Link></li>
                <li><Link to="/Combustivel">Combustível</Link></li>
            </ul>
        </aside>
    );
}

export default Menu;
