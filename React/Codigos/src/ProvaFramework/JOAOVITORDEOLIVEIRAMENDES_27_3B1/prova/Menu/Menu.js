import React from "react";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import Home from "../Home/Home";

export default class Menu extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }

    /**
     * Simples sidenav feita com Bootstrap
     * 
     * <Link to="/">
     * Cada link para o especifico caminho para cada componente
     * 
     */

    render() {
        return (
            <div className="col-2">
                <div className="d-flex flex-column flex-shrink-0 bg-light w-100 vh-100">
                    <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                        <li> 
                            <Link to="/" className="list-group-item"> 
                                <small>Home</small>
                            </Link>
                        </li>
                    </ul>
                    <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                        <li> 
                            <Link to="/destinos" className="list-group-item"> 
                                <small>Destinos</small>
                            </Link>
                        </li>
                    </ul>
                    <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                        <li> 
                            <Link to="/combustivel" className="list-group-item"> 
                                <small>Combustivel</small>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}