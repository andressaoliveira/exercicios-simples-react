import { Calcular } from "./Calculo";

describe("Calcular", () => {
    it("Teste com valores divisíveis", () => {
        const num1 = 8;
        const num2 = 4;
        const esperado = 0;
        const resultado = Calcular.divisivel(num1, num2);
        expect(esperado).toEqual(resultado);
    });

    it("Teste com valores não divisíveis", () => {
        const num1 = 8;
        const num2 = 6;
        const esperado = 2;
        const resultado = Calcular.divisivel(num1, num2);
        expect(esperado).toEqual(resultado);
    });

    it("Teste com numero 1 sendo 0", () => {
        const num1 = 0;
        const num2 = 6;
        const esperado = 0;
        const resultado = Calcular.divisivel(num1, num2);
        expect(esperado).toEqual(resultado);
    });

    it("Teste com numero 2 sendo 0", () => {
        const num1 = 8;
        const num2 = 0;
        const esperado = NaN;
        const resultado = Calcular.divisivel(num1, num2);
        expect(esperado).toEqual(resultado);
    });
})