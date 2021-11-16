import React from "react";

import { Link } from "react-router-dom";

class MenuLateral extends React.Component{
    render(){
        return (
            <div className="menuLateral">
                <Link to="/">Início</Link>
                <Link to="/destinos">Destinos</Link>
                <Link to="/combustivel">Combustivel</Link>
            </div>
        );
    }
}

export default MenuLateral;