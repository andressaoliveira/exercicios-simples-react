import { Calcular } from "./Calculo";

describe("Calcular", () => {
    it("divisivel", () => {
        const num1 = 10;
        const num2 = 2;
        const esperado = 0;
        const resultado = Calcular.calcularResto(num1, num2);
        expect(esperado).toEqual(resultado);
    });
    it("nao divisivel", () => {
        const num1 = 10;
        const num2 = 9;
        const esperado = 1;
        const resultado = Calcular.calcularResto(num1, num2);
        expect(esperado).toEqual(resultado);
    });
    it("valor 0", () => {
        const num1 = 80;
        const num2 = 0;
        const esperado = 0;
        const resultado = Calcular.calcularResto(num1, num2);
        expect(esperado).toEqual(resultado);
    });
});