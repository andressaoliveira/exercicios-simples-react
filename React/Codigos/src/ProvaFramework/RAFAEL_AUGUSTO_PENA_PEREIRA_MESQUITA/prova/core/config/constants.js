import stl1 from "../../assets/stl1.jpg";
import stl2 from "../../assets/stl2.jpg";
import stl3 from "../../assets/stl3.jpg";
import c1 from "../../assets/c1.jpg";
import c2 from "../../assets/c2.jpg";
import c3 from "../../assets/c3.png";
import t1 from "../../assets/t1.jpg";
import t2 from "../../assets/t2.webp";
import t3 from "../../assets/t3.jpg";

/**
 * @name locales
 * @description
 * Responsável por armazenar as informações dos destino
 *
 * @type
 * Array<{
 *    name: String
 *    value: String
 *    imagesPath: String (images)
 *    description: String
 *    more: String
 * }>
 */
export const locales = [
  {
    name: "São Thomé das Letras",
    value: "sao_thome_das_letras",
    imagesPath: [stl1, stl2, stl3],
    description:
      "São Tomé das Letras é um município do estado de Minas Gerais, no Brasil. Localiza-se a 346 km da capital do estado. Sua população em 2010, segundo o censo realizado pelo Instituto Brasileiro de Geografia e Estatística, era de 6 655 habitantes.",
    more: "https://saotomedasletras.mg.gov.br/",
  },
  {
    name: "Capitólio",
    value: "capitolio",
    imagesPath: [c1, c2, c3],
    description:
      "Capitólio é um município brasileiro do estado de Minas Gerais. De acordo com o Instituto Brasileiro de Geografia e Estatística, sua população era estimada em 8 663 habitantes em 2020.",
    more: "https://www.capitolio.mg.gov.br/",
  },
  {
    name: "Trindade",
    value: "trindade",
    imagesPath: [t1, t2, t3],
    description:
      "Antiga vila de pescadores, Trindade é uma região litorânea charmosa conhecida pelas longas praia arenosas, como a Praia dos Ranchos e a reservada Praia do Cachadaço, que tem uma piscina natural cheia de peixes tropicais coloridos. As trilhas no Parque Nacional da Serra da Bocaina atravessam uma mata atlântica densa até chegar em cachoeiras e piscinas naturais. Os bares e restaurantes casuais têm vista para o mar e servem peixes pescados na região.",
    more: "https://www.trindade.go.gov.br/",
  },
];
