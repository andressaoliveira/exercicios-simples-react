import React from "react"
import { Link } from "react-router-dom"
export default class Inicio extends React.Component {
    render() {
        return (
            <div className="menu">
                <Link to="/Inicio">Inicio</Link><br />
                <Link to="/Destinos">Destinos</Link><br />
                <Link to="/Combustivel">Combustivel</Link><br />
            </div>
        )
    }
}