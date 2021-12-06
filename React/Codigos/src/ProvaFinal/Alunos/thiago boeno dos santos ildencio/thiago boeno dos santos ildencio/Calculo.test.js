// import { render } from '@testing-library/react';
import { Calcular } from './Calculo';

describe('Calculadora', () => {
  // render(<Calculo />);

  it('Testando se 12 é divisivel por 4', () => {
    const calculoDivisivel = Calcular.calcularDivisivel(12, 4);
    const isDivisivel = Calcular.isDivisivel(calculoDivisivel);

    expect(isDivisivel).toBeTruthy();
  });

  it('Testando se 12 não é divisivel por 0', () => {
    const calculoDivisivel = Calcular.calcularDivisivel(12, 0);
    const isDivisivel = Calcular.isDivisivel(calculoDivisivel);

    expect(isDivisivel).toBeFalsy();
  });

  it('Testando se 0 é divisivel por 12', () => {
    const calculoDivisivel = Calcular.calcularDivisivel(0, 12);
    const isDivisivel = Calcular.isDivisivel(calculoDivisivel);

    expect(isDivisivel).toBeTruthy();
  });
});