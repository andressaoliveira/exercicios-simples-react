import { useEffect, useState } from "react";
import * as convert from "xml-js";

export function Senador() {
  const [parlamentar, setParlamentar] = useState(null);

  useEffect(() => {
    fetch("https://legis.senado.leg.br/dadosabertos/senador/08")
      .then((r) => r.text())
      .then((t) => {
        const xml = convert.xml2js(t, { compact: true });

        console.log(xml);
        setParlamentar(xml.DetalheParlamentar.Parlamentar);
      });
  }, []);

  if (!parlamentar) return null;

  return (
    <div>
      <div>
        <img
          src={parlamentar.IdentificacaoParlamentar.UrlFotoParlamentar._text}
          alt=""
        />
      </div>
      <div>
        Data Nascimento:{" "}
        {parlamentar.DadosBasicosParlamentar.DataNascimento._text}
      </div>
      <div>
        Naturalidade: {parlamentar.DadosBasicosParlamentar.Naturalidade._text} -{" "}
        {parlamentar.DadosBasicosParlamentar.UfNaturalidade._text}
      </div>
      <div>
        Código: {parlamentar.IdentificacaoParlamentar.CodigoParlamentar._text}
      </div>
      <div>
        Nome Completo:{" "}
        {parlamentar.IdentificacaoParlamentar.NomeCompletoParlamentar._text}
      </div>
      <div>
        Sexo Parlamentar:{" "}
        {parlamentar.IdentificacaoParlamentar.SexoParlamentar._text}
      </div>
      <div>
        URL Página Parlamentar:{" "}
        <a
          href={parlamentar.IdentificacaoParlamentar.UrlPaginaParlamentar._text}
        >
          {parlamentar.IdentificacaoParlamentar.UrlPaginaParlamentar._text}
        </a>
      </div>
    </div>
  );
}
