import { Ordenacao } from "./Ordenacao";

describe("Ordenar", () => {
    it("deve ordenar 3 valores iguais", () => {
        const num1 = 3;
        const num2 = 3;
        const num3 = 3;
        const esperado = '3,3,3';
        const resultado = Ordenacao.ordenar(num1, num2, num3);
        expect(esperado).toEqual(resultado);
    });

    it("deve ordenar já ordenado", () => {
        const num1 = 1;
        const num2 = 2;
        const num3 = 3;
        const esperado = '1,2,3';
        const resultado = Ordenacao.ordenar(num1, num2, num3);
        expect(esperado).toEqual(resultado);
    });

    it("deve ordenar não ordenad", () => {
        const num1 = 8;
        const num2 = 4;
        const num3 = 1;
        const esperado = '1,4,8';
        const resultado = Ordenacao.ordenar(num1, num2, num3);
        expect(esperado).toEqual(resultado);
    });
});