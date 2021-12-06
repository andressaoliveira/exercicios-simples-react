import { Calcular } from "./Calculo";

describe("Validar", () => {
  /*** É divisível */
  it("deve validar que É divisível pelo segundo número", () => {
    const num1 = 8;
    const num2 = 4;
    const esperado = true;
    const resultado = Calcular.validar(num1, num2);
    expect(esperado).toEqual(resultado);
  });

  it("deve validar que É divisível pelo segundo número", () => {
    const num1 = 10;
    const num2 = 2;
    const esperado = true;
    const resultado = Calcular.validar(num1, num2);
    expect(esperado).toEqual(resultado);
  });

  it("deve validar que É divisível pelo segundo número", () => {
    const num1 = 15;
    const num2 = 3;
    const esperado = true;
    const resultado = Calcular.validar(num1, num2);
    expect(esperado).toEqual(resultado);
  });

  /*** NÃO É divisível */

  it("deve validar que NÃO É divisível pelo segundo número", () => {
    const num1 = 11;
    const num2 = 3;
    const esperado = false;
    const resultado = Calcular.validar(num1, num2);
    expect(esperado).toEqual(resultado);
  });

  it("deve validar que NÃO É divisível pelo segundo número", () => {
    const num1 = 39;
    const num2 = 2;
    const esperado = false;
    const resultado = Calcular.validar(num1, num2);
    expect(esperado).toEqual(resultado);
  });

  /*** valor igual a 0 */

  it("deve validar que NÃO pode dividir por 0", () => {
    const num1 = 11;
    const num2 = 0;
    const esperado = -1;
    const resultado = Calcular.validar(num1, num2);
    expect(esperado).toEqual(resultado);
  });

  it("deve validar que é 0", () => {
    const num1 = 0;
    const num2 = 22;
    const esperado = 0;
    const resultado = Calcular.validar(num1, num2);
    expect(esperado).toEqual(resultado);
  });
});
