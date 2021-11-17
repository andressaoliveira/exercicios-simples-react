import React from "react";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import Combustivel from "../Combustivel/Combustivel";
import Destinos from "../Destinos/Destinos";
import Home from "../Home/Home";
import Menu from "../Menu/Menu";

export default class Prova extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="row w-100 h-100">
                <BrowserRouter>
                    <Menu />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/destinos' component={Destinos} />
                        <Route path='/combustivel' component={Combustivel} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }

    /**
     * @ReactRouterDom
     * versao ^5.2.0
     * 
     * <BrowserRouter> no componente de prova pois nao mandarei o index.js
     * 
     * Componente de <Menu> onde fica a sidenav
     * <Switch> para ser apresentado 1 componente por vez
     * 
     * <Route exact path='/' component={Home} />
     * Rota default para o componente Home
     * 
     * <Route path='/destinos' component={Destinos} />
     * <Route path='/combustivel' component={Combustivel} />
     * Rotas para proximos componentes
     */
}