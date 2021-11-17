import Router from "./routes";

function Prova() {
  return (
    <div class="paginainicial">
      <a href="/">
        Pagina Inicial <br />
      </a>
      <div class="linkdestinos">
        <a href="/destinos">
          Destinos <br />
        </a>
      </div>
      <div class="linkcombustivel">
        <a href="/combustivel">
          Combustivel
          <br />
        </a>
      </div>
      <Router />
    </div>
  );
}

export default Prova;
