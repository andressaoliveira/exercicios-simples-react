import React from "react";
import { Link } from "react-router-dom";
import './style.scss'
//A ideia do menu era deixar o mesmo ocupando toda a barra lateral, 
//realizei tentativas no .scss, mas não obtive muito resultado, e como acabei "perdendo" muito tempo entendendo como faria as rotas funcionarem, 
//Optei em deixa-la na lateral, mas pegando apenas um pedaço da pagina.. para nao descer as outras paginas

export default class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                Menu:
                <Link className="href" to="/">Página inicial</Link>
                <Link className="href" to="/destino">Destinos</Link>
                <Link className="href" to="/combustivel">Combustivel</Link>
            </div>
        )
    }
}