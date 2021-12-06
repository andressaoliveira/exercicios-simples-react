import { useState } from "react";
import './Estilos.css';

function Calculo() {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');

    const [erro, setErro] = useState('');

    const [ehDivisivel, setEhDivisivel] = useState(false);
    const [exibirResultado, setExibirResultado] = useState(false);

    const validarNumero = (valor, funcaoSetar) => {

        setErro('');
        setExibirResultado(false);

        if (isNaN(valor)) {
            return;
        }

        const val = valor === '' ? '' : parseFloat(valor);

        funcaoSetar(val);
    }

    const calcular = () => {
        if (num2 === 0) {
            setErro('Um número não pode ser dividido por 0!');
            return;
        }

        const ehDivisivel = num1 % num2 === 0;

        setEhDivisivel(ehDivisivel);
        setExibirResultado(true);
    }

    return (
        <div className="calculo">
            <div className="mb-3">
                <label htmlFor="calculo-num-1">Primeiro número:</label>
                <input
                    type="text"
                    value={num1}
                    onChange={ev => validarNumero(ev.target.value, setNum1)}
                    className="ml-3"
                    id="calculo-num-1"
                    placeholder="Primeiro número"
                    aria-label="calculo-num-1"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="calculo-num-2">Segundo número:</label>
                <input
                    type="text"
                    value={num2}
                    onChange={ev => validarNumero(ev.target.value, setNum2)}
                    className="ml-3"
                    id="calculo-num-2"
                    placeholder="Segundo número"                    
                    aria-label="calculo-num-2"
                />
            </div>
            <div className="mb-3">
                <button
                    className="botao botao-sucesso"
                    onClick={calcular}
                    disabled={
                        num1 === '' ||
                        num1 === null ||
                        num2 === '' ||
                        num2 === null
                    }
                    aria-label="calculo-botao"
                >
                    Calcular
                </button>
            </div>
            <div className="mb-3" aria-label="calculo-resultado">
                {
                    erro !== null && erro !== '' ?
                    <p className="texto-erro">{erro}</p> :
                    null
                }
                {
                    exibirResultado ?
                    (
                        ehDivisivel ?
                        <p>{num1} é divisíel por {num2}</p>:
                        <p>{num1} não é divisíel por {num2}</p>
                    ) :
                    null
                }
            </div>
        </div>
    )
}

export default Calculo;
