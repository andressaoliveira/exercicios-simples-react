import { useEffect, useState } from "react";
import * as convert from "xml-js";

export function Cargos() {
  const [cargos, setCargos] = useState(null);

  useEffect(() => {
    fetch("https://legis.senado.leg.br/dadosabertos/senador/08/cargos")
      .then((r) => r.text())
      .then((t) => {
        const xml = convert.xml2js(t, { compact: true });

        setCargos(xml.CargoParlamentar.Parlamentar.Cargos.Cargo);
      });
  }, []);

  if (!cargos) return null;

  return (
    <div>
      {cargos.map((c, index) => (
        <div className="card" key={index}>
          <p>Código cargo: {c.CodigoCargo._text}</p>
          <p>Data início: {c.DataInicio._text}</p>
          <p>Data fim: {c.DataFim._text}</p>
          <p>Descrição: {c.DescricaoCargo._text}</p>
        </div>
      ))}
    </div>
  );
}
