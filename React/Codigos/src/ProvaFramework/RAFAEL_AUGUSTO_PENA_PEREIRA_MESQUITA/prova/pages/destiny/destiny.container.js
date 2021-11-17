import DestinySection from "./components/destiny-section.component";
import { locales } from "../../core/config/constants";
import { Space } from "antd";
import "./destiny.styles.scss";

/**
 * @name DestinyContainer
 * @description
 * Componente container, (página), responsável por exibir todo o conteúdo relacionado aos destinos registrados na `constante locales`
 *
 * @type
 * JSX.Element
 */
export default function DestinyContainer() {
  return (
    <div className="container">
      <Space size="large" direction="vertical">
        {/**
         * @description
         * Iteração responsável por renderizar o conteúdo de cada um dos destinos registrados na `constante locales`
         */}
        {locales.map((l) => (
          <DestinySection key={l.value} destiny={l} />
        ))}
      </Space>
    </div>
  );
}
