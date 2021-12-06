import { Calcular } from './PROVAFINAL/CALCULO/CALCULO';

describe("Calcular", () => {

    it("Teste com valores que são divisíveis", () => {
        const num1 = 8;
        const num2 = 4;
        const esperado = 2;
        const resultado = Calcular.dividir(num1, num2);
        expect(esperado).toEqual(resultado);
    });

    it("Teste com valores que não são divisíveis", () => {
        const num1 = 8;
        const num2 = 6;
        const esperado = 0;
        const resultado = Calcular.dividirSemResto(num1, num2);
        expect(esperado).toEqual(resultado);
    });

     it("Teste com um dos valores sendo 0", () => {
        const num1 = 6;
        const num2 = 0;
        const esperado = 'Nao eh possivel dividir por 0';
        const resultado = Calcular.dividir(num1, num2);
        expect(esperado).toEqual(resultado);
    });
    
});

 