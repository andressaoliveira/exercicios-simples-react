import React from 'react';
import { Link } from 'react-router-dom';
import { NavBarItemsData } from './NavBarItemsData'
import './NavBar.css';

function Navbar() {
    return (
        <React.Fragment>
            <div className="flex-1">
            <nav className='nav-menu'>
                <ul className="nav-menu-items">
                    {NavBarItemsData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <span>{item.titulo}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </div>
        </React.Fragment>
    )
}

export default Navbar