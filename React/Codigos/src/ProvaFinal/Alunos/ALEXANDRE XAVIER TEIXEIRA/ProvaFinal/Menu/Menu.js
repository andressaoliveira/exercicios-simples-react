import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {

    const opcoesMenu = [
        {
            nome: 'Página inicial',
            link: '/'
        },
        {
            nome: 'Senador',
            link: 'senadores'
        },
        {
            nome: 'Filiações',
            link: 'filiacoes'
        }
    ];

    return (
        <nav className="menu">
            {
                opcoesMenu.map((opcao, i) => {
                    return (
                        <Link key={i} to={opcao.link}>{opcao.nome}</Link>
                    );
                })
            }
        </nav>
    )
}

export default Menu;
