import { Divisivel } from './Calculo';

describe('Calculo', () => {
    it('divisível', () => {
        let result = Divisivel(10, 2);
        expect(result).toEqual( true );
    });

    it('não divisível', () => {
        const result = Divisivel(7, 2);
        expect(result).toEqual( false );
    });

    it('por 0', () => {
        const result = Divisivel(10, 0);
        expect(result).toEqual( false );
    });

});