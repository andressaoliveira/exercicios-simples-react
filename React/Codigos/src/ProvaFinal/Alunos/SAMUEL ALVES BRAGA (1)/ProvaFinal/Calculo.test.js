import {Calcular} from "./Calculo";

describe("calcular", () =>{
    it("Valores que são divisíveis", () =>{
        const numero1 = 10;
        const numero2 = 5;
        const esperado = true;
        const resultado = calcular(numero1, numero2);
        expect(esperado).toEqual(resultado);
    });

    it("Valores que não são divisíveis", () =>{
        const numero1 = 11;
        const numero2 = 5;
        const esperado = false;
        const resultado = calcular(numero1, numero2);
        expect(esperado).toEqual(resultado);
    });

    it("Um dos valores é zero", () =>{
        const numero1 = 0;
        const numero2 = 3;
        const esperado = false;
        const resultado = calcular(numero1, numero2);
        expect(esperado).toEqual(resultado);
    });    
});