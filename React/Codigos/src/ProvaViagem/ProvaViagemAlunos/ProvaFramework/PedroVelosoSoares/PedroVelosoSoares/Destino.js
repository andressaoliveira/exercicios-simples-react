function Destino({ DestinoSelected }) {

    return (
        <div className="Destino">
            <div className="destinos">
                <h1>Gramado</h1>{/* aqui podemos ver as imagens dos lugares , é tmb mostra as informações de cada lugar*/}
                <img src="https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/hoteis-gramado-capa2019-01.jpg" alt=""/>
                <p>A Cidade do Panamá é uma metrópole moderna e de ritmo acelerado no meio do Neotropico. Desfrute entre a vida cosmopolita e as culturas tradicionais centradas na terra. Viaja a Panamá. Parques Nacionales. Cultrua Carebeña. Cultura e Historia. </p>
            </div>

            <div className="destinos">
                <h1>Buenos Aires</h1>
                <img src="https://www.melhoresdestinos.com.br/wp-content/uploads/2021/10/buenos-aires-argentina-capa.jpg" alt=""/>
                <p>Hola Argentina! bamos pra Buenos Aires !!.Em dia de confronto da seleção brasileira contra os hermanos pesquisamos lugares em Argentina!</p>
            </div>

            <div className="destinos">
                <h1>Bahia</h1>
                <img src="https://www.melhoresdestinos.com.br/wp-content/uploads/2021/01/pacotes-all-inclusive-porto-seguro-la-torre-resort-capa-2019-02.jpg" alt=""/>
                <p>É uma ótima oportunidade para curtir toda a alegria de Porto Seguro com suas mega barracas de praia, curtir o astral incrível de Arraial d’Ajuda ou as praias espetaculares de Trancoso  e Caraíva.</p>
            </div>
        </div>
    );
}

export default Destino;
