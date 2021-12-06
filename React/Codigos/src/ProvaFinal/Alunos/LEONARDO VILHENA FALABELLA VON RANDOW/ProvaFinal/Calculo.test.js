import Calculo from "./Calculo";

//Tentei fazer, parece que não deu certo, mas fica a lógica
describe('Calculo', () => {
    it('divisíveis', () => {
        const num1 = 8
        const num2 = 4
        const esperado = 2
        const resultado = (Calculo.testDiv(num1, num2))

        expect(esperado).toEqual(resultado)
    })

    it('não divisíveis', () => {
        const num1 = 1
        const num2 = 2
        const esperado = 0.5
        const resultado = (Calculo.testDiv(num1, num2))

        expect(esperado).toEqual(resultado)
    })

    it('resultado algum 0', () => {
        
        let num1 = 2
        let num2 = 0
        //se o segundo numero for 0 deve ser infinto
        let esperado = Infinity
        const resultado = (Calculo.testDiv(num1, num2))
        expect(esperado).toEqual(resultado)
        if(num2 === 0){
            num1 = num2
            num2 = 2
            //se o primeiro numero for 0 deve ser 0
            esperado = 0
            const resultado = (Calculo.testDiv(num1, num2))
            expect(esperado).toEqual(resultado)
        }
       
    })
} )