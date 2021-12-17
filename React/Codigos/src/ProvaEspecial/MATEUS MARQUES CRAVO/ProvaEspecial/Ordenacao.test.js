 import { OrdenarResultado } from "./Ordenacao";

describe('OrdenarResultado', () => {
    it("numeros ordenados", () => {
        const esperado = '1,2,3';

        const resultado = OrdenarResultado.ordenaNumeros(1, 2, 3);

        expect(esperado).toEqual(resultado);
    });

    it("numeros não ordenados", () => {
        const esperado = '1,2,3';

        const resultado = CalcularResultado.calculaResultado(3, 2, 1);

        expect(esperado).toEqual(resultado);
    });

    it("numeros iguais", () => {
        const esperado = '6,6,6';

        const resultado = CalcularResultado.calculaResultado(6, 6, 6);

        expect(esperado).toEqual(resultado);
    });
})