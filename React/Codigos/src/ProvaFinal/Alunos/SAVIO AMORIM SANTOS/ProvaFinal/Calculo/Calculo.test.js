import { Calcular } from "./Calculo";

describe("Calcular", () => {
    it('Deve ser divisivel', () => {
        const numero1 = 10;
        const numero2 = 5;
        const esperado = 0;
        const resultado = Calcular.calcular(numero1, numero2);
        expect(esperado).toEqual(resultado);
    })

    it('Não ser divisivel', () => {
        const numero1 = 1;
        const numero2 = 2;
        const esperado = 1;
        const resultado = Calcular.calcular(numero1, numero2);
        expect(esperado).toEqual(resultado);
    })

    it('Dividendo pode ser zero', () => {
        const numero1 = 0;
        const numero2 = 2;
        const esperado = 0;
        const resultado = Calcular.calcular(numero1, numero2);
        expect(esperado).toEqual(resultado);
    })

    it('Divisor não pode ser zero', () => {
        const numero1 = 2;
        const numero2 = 0;
        const esperado = NaN;
        const resultado = Calcular.calcular(numero1, numero2);
        expect(esperado).toEqual(resultado);
    })

    it('Não pode ser letra', () => {
        const numero1 = 'aa';
        const numero2 = 'aa';
        const esperado = NaN;
        const resultado = Calcular.calcular(numero1, numero2);
        expect(esperado).toEqual(resultado);
    })
})