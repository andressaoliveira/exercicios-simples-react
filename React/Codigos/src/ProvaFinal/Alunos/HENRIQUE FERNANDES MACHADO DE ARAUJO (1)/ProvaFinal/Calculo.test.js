import React from 'react';
import Calculo from './Calculo';

describe('Calculo', () => {
    it('iguais', () => {
        
        // teste com valores divisiveis
        const atual = Calculo.calcular(10, 2);
        //resultado esperado
        const esperado = true;
        
        expect(atual).toEqual(esperado);
    
    });

    it('diferentes', () => {
        
        // teste com valores divisiveis
        const atual = Calculo.calcular(7, 2);
        //resultado esperado
        const esperado = false;
        
        expect(atual).toEqual(esperado);
    
    });

    it('iguais', () => {
        
        // teste com valores divisiveis
        const atual = Calculo.calcular(10, 0);
        //resultado esperado
        const esperado = false;
        
        expect(atual).toEqual(esperado);
    
    });

    // pausa

});