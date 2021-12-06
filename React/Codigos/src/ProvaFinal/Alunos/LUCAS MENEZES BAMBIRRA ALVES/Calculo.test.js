import Calculo from './Calculo'

describe('Calculo', () => {
  it('É divisível', () => {
    const isDivisible = Calculo.calculate(3, 1)
    const expected = 'É divisível.'
    expect(isDivisible).toEqual(expected)
  })
  it('Não é divisível', () => {
    const isDivisible = Calculo.calculate(3, 2)
    const expected = 'Não é divisível.'
    expect(isDivisible).toEqual(expected)
  })
  it('0 não é permitido.', () => {
    const isDivisible = Calculo.calculate(3, 0)
    const expected = '0 não é permitido.'
    expect(isDivisible).toEqual(expected)
  })
})