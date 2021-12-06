 import { CalcularResultado } from "./Calculo";

describe('CalcularResultado', () => {
    it("numeros divisiveis", () => {
        const num1 = 4;
        const num2 = 2;
        const esperado = 0;

        const resultado = CalcularResultado.calculaResultado(num1, num2);

        expect(esperado).toEqual(resultado);
    });

    it("numeros não divisiveis", () => {
        const num1 = 5;
        const num2 = 2;
        const esperado = 1;

        const resultado = CalcularResultado.calculaResultado(num1, num2);

        expect(esperado).toEqual(resultado);
    });

    it("numeros zeros", () => {
        const num1 = 4;
        const num2 = 0;
        const esperado = 2;

        const resultado = CalcularResultado.calculaResultado(num1, num2);

        expect(esperado).toEqual(resultado);
    });
})