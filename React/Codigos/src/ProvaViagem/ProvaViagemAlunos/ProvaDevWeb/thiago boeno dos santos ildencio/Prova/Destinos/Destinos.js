import DestinosData from "../destinosData";

const Destinos = () => {
  return (
    <section className="destinos">
      { DestinosData.map((destino) => (
        <div className="cidade">
          <h1>{ destino.cidade }</h1>

          <div className="imagens">
            { destino.imagens.map((foto) => (
              <img src={ foto } alt="Imagem da cidade" />
            )) }
          </div>

          <p>{ destino.descricao }</p>
        </div>
      )) }
    </section>
  );
}

export default Destinos;