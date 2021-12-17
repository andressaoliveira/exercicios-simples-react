import './Principal.scss';

export default function Ordenacao() {
  function ordenar(num1, num2, num3) {
    const first = document.getElementById('first-number').value
    const second = document.getElementById('second-number').value
    const third = document.getElementById('third-number').value
    let result = document.getElementById('element-result')
    const valido = validar(first, second, third)
    result.innerHTML = ''

    if(valido === false) {
        result.innerHTML = 'Por favor, preencha todos os números'
    } else {
        const arrNum = [first, second, third]
        const ordena = arrNum.sort()
        result.innerHTML = `${ordena}`
    }
    return [num1,num2,num3].sort()
  }

    function validar(num1, num2, num3) {
        if (!!num1 && !!num2 && !!num3) {
          return true
        } else {
          if (!num1) {
            return false
          }
          if (!num2) {
            return false
          }
          if (!num3) {
            return false
          }
        }
      }
    return (
        <div className='ordenacao'>
            <h1>Números divisíveis</h1>
            <hr />
            <h3>É divisível?</h3>
            <input type="number" placeholder="Digite o primeiro número" id='first-number'/>
            <input type="number" placeholder="Digite o segundo número" id='second-number'/>
            <input type="number" placeholder="Digite o terceiro número" id='third-number'/>
            <input className="calcular" type="button" value="Ordenar" onClick={ordenar} />
            <hr />
            <p id='element-result'></p>
        </div>
    );
}

