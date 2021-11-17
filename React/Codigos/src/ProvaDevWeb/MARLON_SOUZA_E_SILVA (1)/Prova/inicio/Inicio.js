import './inicio.css';

export function Inicio() {
    return (
        <div className="cidades">
            <h2>Cidades disponíveis</h2>
            <select>
                <option value="Diamantina">Diamantina</option>
                <option value="Mariana">Mariana</option>
                <option value="Ouro Preto">Ouro Preto</option>
            </select>
        </div>
    )
}

export default Inicio;