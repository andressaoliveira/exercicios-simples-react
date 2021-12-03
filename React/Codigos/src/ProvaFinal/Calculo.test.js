import { calcularDivisivel } from "./Calculo";

describe("Calcular", () => {
    it("calcula valores divisiveis", () => {
        const num1 = 8;
        const num2 = 6;
        const esperado = false;
        const resultado = calcularDivisivel(num1, num2);
        expect(esperado).toEqual(resultado);
    });

    it("calcula valores não divisiveis", () => {
        const num1 = 8;
        const num2 = 4;
        const esperado = true;
        const resultado = calcularDivisivel(num1, num2);
        expect(esperado).toEqual(resultado);
    });
    
    it("calcula divisibilidade por zero", () => {
        const num1 = 8;
        const num2 = 0;
        const esperado = false;
        const resultado = calcularDivisivel(num1, num2);
        expect(esperado).toEqual(resultado);
    });
});