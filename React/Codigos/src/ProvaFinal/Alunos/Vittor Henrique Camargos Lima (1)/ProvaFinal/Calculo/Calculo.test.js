import { Calcular } from "./Calculo";

describe("Calcular", () => {
    it("Deve ser divisivel", () => {
        const num1 = 4;
        const num2 = 2;
        const esperado = 0;
        const resultado = Calcular.calc(num1, num2);
        expect(esperado).toEqual(resultado);
    });

    it("nao deve ser divisivel", () => {
        const num1 = 4;
        const num2 = 3;
        const esperado = 1;
        const resultado = Calcular.calc(num1, num2);
        expect(esperado).toEqual(resultado);
    });

    it("um dos valores sendo 0", () => {
        const num1 = 0;
        const num2 = 3;
        const esperado = 0;
        const resultado = Calcular.calc(num1, num2);
        expect(esperado).toEqual(resultado);
    });

});