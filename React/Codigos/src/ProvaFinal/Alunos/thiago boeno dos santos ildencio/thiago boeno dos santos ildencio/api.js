import axios from "axios";

export default axios.create({
  baseURL: 'https://legis.senado.leg.br/dadosabertos/senador',
  // headers: { token: `Bearer ${token}` },
});