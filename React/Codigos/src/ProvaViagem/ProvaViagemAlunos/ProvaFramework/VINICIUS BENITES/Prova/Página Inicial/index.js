import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function Inicio() {
        return (
            <>
            <div class="navegacao">
                <nav>
                    <li class="link">
                        <Link to="/">Início</Link>
                    </li>
                    <li class="link">
                        <Link to="/Destinos">Destinos</Link>
                    </li>
                    <li class="link">
                        <Link to="/Combustivel">Cálculo Combustível</Link>
                    </li>
                </nav>
            </div>
            <div class="principal">
                <h3>Página Inicial</h3>

                <form>
                    <label>Escolha um destino:</label> <br/><br/>
                    <select>
                        <option value="*">Escolher</option>
                        <option value="BH">Angra dos Reis - RJ</option>
                        <option value="NovaLima">Florianopólis - SC</option>
                        <option value="Angra">Vitória - ES</option>
                    </select>
                </form>
            </div>
            </>
        )
}