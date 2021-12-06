import './Principal.scss';

function Calculo() {
    const calcula = () => {
        const first = document.getElementById('first-number').value
        const second = document.getElementById('second-number').value
        let result = document.getElementById('element-result')
        const valido = validar(first, second)
        result.innerHTML = ''

        if(valido === false) {
            result.innerHTML = 'Por favor, preencha todos os números'
        } else {
            const divisivel = (first % second === 0) ? 'é divisível' : 'não é divisível';
            result.innerHTML = `${first} ${divisivel} por ${second}`
        }
    }

    function validar(num1, num2) {
        if (!!num1 && !!num2 ) {
          return true
        } else {
          if (!num1) {
            return false
          }
          if (!num2) {
            return false
          }
        }
      }
    return (
        <div className='calculo'>
            <h1>Números divisíveis</h1>
            <hr />
            <h3>É divisível?</h3>
            <input type="number" placeholder="Digite o primeiro número" id='first-number'/>
            <input type="number" placeholder="Digite o segundo número" id='second-number'/>
            <input className="calcular" type="button" value="Calcular" onClick={calcula} />
            <hr />
            <p id='element-result'></p>
        </div>
    );
}

export default Calculo;
