import {resto} from "./Calculo";

describe("Calcular", () =>
{
    it("divisivel", () => {

        const valor1 = 8;
        const valor2 = 4;
        const esperado = 0;
        const resultado = resto(valor1,valor2);
        expect(esperado).toEqual(resultado);
    })

    it("não divisivel", () => {

        const valor1 = 10;
        const valor2 = 3;
        const esperado = 1;
        const resultado = resto(valor1,valor2);
        expect(esperado).toEqual(resultado);
    })

    it("valor 0", () => {

        const valor1 = 0;
        const valor2 = 3;
        const esperado = 0;
        const resultado = resto(valor1,valor2);
        expect(esperado).toEqual(resultado);
    })
})