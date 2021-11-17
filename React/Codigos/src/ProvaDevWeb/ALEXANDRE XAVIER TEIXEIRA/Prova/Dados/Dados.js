export default class Dados {
    cidades = [
        {
            id: 1,
            nome: 'Porto Seguro',
            estado: 'Bahia',
            pais: 'Brasil',
            descricao: 'Porto Seguro é uma estância turística costeira no estado brasileiro da Bahia. Possui aproximadamente 90 quilómetros de praias tropicais, incluindo a popular Praia de Taperapuãn. A cidade é também conhecida pela vibrante vida noturna, centrada no passeio repleto de bares, Passarela do Álcool. Durante a altura do Carnaval, artistas com trajes extravagantes e desfiles de músicos de samba ajudam a criar uma festa de rua de arromba.',
            imagens: [
                'ps-1.jpeg',
                'ps-2.jpeg',
                'ps-3.jpeg'
            ]
        },
        {
            id: 2,
            nome: 'Recife',
            estado: 'Pernambuco',
            pais: 'Brasil',
            descricao: 'Recife é um município brasileiro, capital do estado de Pernambuco, localizado na Região Nordeste do país. Com área territorial de aproximadamente 218 km², é formado por uma planície aluvial, tendo as ilhas, penínsulas e manguezais como suas principais características geográficas.',
            imagens: [
                'rf-1.jpeg',
                'rf-2.jpeg',
                'rf-3.jpeg'
            ]
        },
        {
            id: 3,
            nome: 'Rio de Janeiro',
            estado: 'Rio de Janeiro',
            pais: 'Brasil',
            descricao: 'O Rio de Janeiro é uma grande cidade brasileira à beira-mar, famosa pelas praias de Copacabana e Ipanema, pela estátua de 38 metros de altura do Cristo Redentor, no topo do Corcovado, e pelo Pão de Açúcar, um pico de granito com teleféricos até seu cume. A cidade também é conhecida pelas grandes favelas. O empolgante Carnaval, com carros alegóricos, fantasias extravagantes e sambistas, é considerado o maior do mundo.',
            imagens: [
                'rj-1.jpeg',
                'rj-2.jpeg',
                'rj-3.jpeg'
            ]
        }
    ];

    obterCidades() {
        return this.cidades;
    }

    obterCidade(id) {
        return this.cidades.filter(x => x.id === parseInt(id))[0];
    }
}