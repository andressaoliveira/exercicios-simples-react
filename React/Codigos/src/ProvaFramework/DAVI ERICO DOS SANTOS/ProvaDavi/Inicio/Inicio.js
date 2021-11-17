import React from "react"

export default class Inicio extends React.Component {
    render() {
        return (
            <div className="inicio">
                <h3>Selecione o seu destinos</h3>
                <select>
                    <option>Paris</option>
                    <option>Indonésia</option>
                    <option>Finlândia</option>
                </select>
            </div>
        )
    }
}