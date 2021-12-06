import Calcular from './Calculo';

describe("Calcular", () => {

    it("Teste com valores que são divisíveis;", () => {
        const numero1 = 10;
        const numero2 = 2;
        const esperado = 5;
        const resultado = Calcular.divisiveis(numero1, numero2);
        expect(esperado).toEqual(resultado);

    })
    
    it("Teste com valores que não são divisíveis;", () => {
        const numero1 = 7;
        const numero2 = 3;
        const esperado = 2.3333333333333335;
        const resultado = Calcular.naoDivisiveis(numero1, numero2);
        expect(esperado).toEqual(resultado);

    })

    it("Teste com um dos valores sendo 0.", () => {
        const numero1 = 0;
        const numero2 = 20;
        const esperado = 0;
        const resultado = Calcular.valorZero(numero1, numero2);
        expect(esperado).toEqual(resultado);

    })

})

//Meus testes estão quebrando, fica informando que não existe os metodos, mas estão criados
//Acredito que eu precise chamar eles em alguma aparte do meu codigo, mas não consegui identificar onde eu precisava passar ele certinho