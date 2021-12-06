import { Checar } from "./Calculo";

describe("Checar", () => {
    it("Valores são divisíveis", () => {
        const num1 = 10;
        const num2 = 5;
        const esperado = 0;
        const resultado = Checar.dividir(num1, num2);
        expect(esperado).toEqual(resultado);
    });

    it("Valores não são divisíveis", () => {
        const num1 = 5;
        const num2 = 2;
        const esperado = 1;
        const resultado = Checar.dividir(num1, num2);
        expect(esperado).toEqual(resultado);
    });

    it("Não é possível dividir por 0", () => {
        const num1 = 5;
        const num2 = 0;
        const esperado = 2;
        const resultado = Checar.dividir(num1, num2);
        expect(esperado).toEqual(resultado);
    });
});