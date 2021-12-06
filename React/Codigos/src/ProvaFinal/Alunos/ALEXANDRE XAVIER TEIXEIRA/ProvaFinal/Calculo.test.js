import { render, screen, fireEvent } from '@testing-library/react';
import Calculo from './Calculo';

test('valores divisiveis', () => {
    const tela = render(<Calculo />);

    const num1 = '10';
    const num2 = '5';

    const txtNum1 = tela.getByLabelText('calculo-num-1');
    fireEvent.change(txtNum1, { target: { value: num1 } })

    const txtNum2 = tela.getByLabelText('calculo-num-2');
    fireEvent.change(txtNum2, { target: { value: num2 } })

    const botao = tela.getByLabelText('calculo-botao');
    fireEvent.click(botao);

    const resultado = tela.getByLabelText('calculo-resultado');

    expect(resultado).toContainHTML(`<p>${num1} é divisíel por ${num2}</p>`);
});

test('valores não divisiveis', () => {
    const tela = render(<Calculo />);

    const num1 = '10';
    const num2 = '4';

    const txtNum1 = tela.getByLabelText('calculo-num-1');
    fireEvent.change(txtNum1, { target: { value: num1 } })

    const txtNum2 = tela.getByLabelText('calculo-num-2');
    fireEvent.change(txtNum2, { target: { value: num2 } })

    const botao = tela.getByLabelText('calculo-botao');
    fireEvent.click(botao);

    const resultado = tela.getByLabelText('calculo-resultado');

    expect(resultado).toContainHTML(`<p>${num1} não é divisíel por ${num2}</p>`);
});

test('divisão por 0', () => {
    const tela = render(<Calculo />);

    const num1 = '10';
    const num2 = '0';

    const txtNum1 = tela.getByLabelText('calculo-num-1');
    fireEvent.change(txtNum1, { target: { value: num1 } })

    const txtNum2 = tela.getByLabelText('calculo-num-2');
    fireEvent.change(txtNum2, { target: { value: num2 } })

    const botao = tela.getByLabelText('calculo-botao');
    fireEvent.click(botao);

    const resultado = tela.getByLabelText('calculo-resultado');

    expect(resultado).toContainHTML(`<p class="texto-erro">Um número não pode ser dividido por 0!</p>`);
});
