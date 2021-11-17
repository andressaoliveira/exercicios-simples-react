import { message, Button, Typography, Input, Row, Col } from "antd";
import { useState } from "react";
import "./fuel.styles.scss";

const { Title, Text } = Typography;

/**
 * @name FuelContainer
 * @description
 * Componente container, (página), responsável por fornecer uma interface de cálculo de diversas constantes relevantes para uma viagem.
 *
 * @type
 * JSX.Element
 */
export default function FuelContainer() {
  /**
   * @name isResultAvailable
   * @description
   * State responsável por verificar se os resultados dos cálculos já estão disponíveis para exibir a tabela de resultados.
   *
   * @type
   * useState<boolean>
   */
  const [isResultAvailable, setResultAvailable] = useState(false);

  /* ============== INPUT STATES ============== */

  /**
   * @name time
   * @description
   * State responsável por armazenar o `tempo médio em horas` recebido pelo input
   *
   * @type
   * useState<string>
   */
  const [time, setTime] = useState("");

  /**
   * @name speed
   * @description
   * State responsável por armazenar a `velocidade média em Km/h` recebido pelo input
   *
   * @type
   * useState<string>
   */
  const [speed, setSpeed] = useState("");

  /**
   * @name performance
   * @description
   * State responsável por armazenar o `rendimento médio em Km/litros` recebido pelo input
   *
   * @type
   * useState<string>
   */
  const [performance, setPerformance] = useState("");

  /**
   * @name price
   * @description
   * State responsável por armazenar o `preço da gasolina em Reais R$` recebido pelo input
   *
   * @type
   * useState<string>
   */
  const [price, setPrice] = useState("");

  /* ============== RESULT STATES ============== */

  /**
   * @name distance
   * @description
   * State responsável por armazenar a `distância percorrida em Km` calculada
   *
   * @type
   * useState<number>
   */
  const [distance, setDistance] = useState(0);

  /**
   * @name totalFuel
   * @description
   * State responsável por armazenar o `total de combustível gasto em litros` calculado
   *
   * @type
   * useState<number>
   */
  const [totalFuel, setTotalFuel] = useState(0);

  /**
   * @name totalPrice
   * @description
   * State responsável por armazenar o `valor total do combustível em reais` calculado
   *
   * @type
   * useState<number>
   */
  const [totalPrice, setTotalPrice] = useState(0);

  /**
   * @name calcular
   * @description
   * Método responsável por verificar se todos os valores inseridos no input são valores válidos, caso sejam, calcular a: `distância percorrida`, `total de combustível em litros`, `valor total de combustível em reais` e alterar o `State` responsável por exibir a tabela de resultados. Caso os valores não sejam válidos, mostrar mensagem de erro.
   */
  const calcular = () => {
    if (
      time.length &&
      Number(time) &&
      speed.length &&
      Number(speed) &&
      performance.length &&
      Number(performance) &&
      price.length &&
      Number(price)
    ) {
      /**
       * @description
       * Cálculo de distância total percorrida em Km
       */
      const totalDistanceValue = Number(time) * Number(speed);
      setDistance(totalDistanceValue);

      /**
       * @description
       * Cálculo de total de combustível consumido em litros
       */
      const totalFuelValue = totalDistanceValue / Number(performance);
      setTotalFuel(totalFuelValue);

      /**
       * @description
       * Cálculo do valor total de combustível gasto em reais
       */
      const totalPriceValue = totalFuelValue * Number(price);
      setTotalPrice(totalPriceValue);

      setResultAvailable(true);
    } else {
      message.error("Preencha todos os campos com um valor válido");
    }
  };

  return (
    <div>
      <Title>Calcular</Title>

      <section>
        <div className="input-container">
          <Text type="secondary">Tempo (em horas)</Text>
          <Input
            placeholder="Tempo"
            onChange={({ target: { value } }) => setTime(value)}
          />
        </div>

        <div className="input-container">
          <Text type="secondary">Velocidade média (em Km/h)</Text>
          <Input
            placeholder="Velocidade média"
            onChange={({ target: { value } }) => setSpeed(value)}
          />
        </div>

        <div className="input-container">
          <Text type="secondary">Rendimento médio (em Km/litros)</Text>
          <Input
            placeholder="Rendimento médio"
            onChange={({ target: { value } }) => setPerformance(value)}
          />
        </div>

        <div className="input-container">
          <Text type="secondary">Preço da gasolina (em reais R$)</Text>
          <Input
            placeholder="Preço da gasolina"
            onChange={({ target: { value } }) => setPrice(value)}
          />
        </div>

        <Button type="primary" onClick={calcular}>
          Calcular
        </Button>

        {isResultAvailable && (
          <section className="result">
            <div className="result-container">
              <div className="result-row">
                <div className="result-col">Velocidade média (em Km/h)</div>
                <div className="result-col">{speed} Km/h</div>
              </div>

              <div className="result-row">
                <div className="result-col">Tempo gasto</div>
                <div className="result-col">{time} horas</div>
              </div>

              <div className="result-row">
                <div className="result-col">Rendimento</div>
                <div className="result-col">{performance} Km/litros</div>
              </div>

              <div className="result-row">
                <div className="result-col">Distância</div>
                <div className="result-col">{distance} Km</div>
              </div>

              <div className="result-row">
                <div className="result-col">Combustível</div>
                <div className="result-col">{totalFuel.toFixed(4)} litros</div>
              </div>

              <div className="result-row">
                <div className="result-col">Valor total</div>
                <div className="result-col">R$ {totalPrice.toFixed(2)}</div>
              </div>
            </div>
          </section>
        )}
      </section>
    </div>
  );
}
