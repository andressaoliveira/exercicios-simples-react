import {Calcular} from './Calculo'

describe("calcular", () => {
    test('divisaoPorZero', () => {
        const valor1 = 4
        const valor2 = 0
        const atual = Calcular.dividir(valor1, valor2)
        expect(atual).toEqual('Divisão inválida')
    })

    test('divisivel', () => {
        const valor1 = 4
        const valor2 = 2
        const atual = Calcular.dividir(valor1, valor2)
        expect(atual).toEqual(`${valor1} é divisível por ${valor2}`)
    })

    test('naoDivisivel', () => {
        const valor1 = 4
        const valor2 = 3
        const atual = Calcular.dividir(valor1, valor2)
        expect(atual).toEqual(`${valor1} não é divisível por ${valor2}`)
    })
})