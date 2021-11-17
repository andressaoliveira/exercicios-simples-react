import { Select } from "antd";
import { locales } from "../../core/config/constants";

const { Option } = Select;

/**
 * @name HomeContainer
 * @description
 * Componente container, (página), responsável por exibir o select contendo as opções de destinos registrados na `constante locales`
 *
 * @type
 * JSX.Element
 */
export default function HomeContainer() {
  /**
   * @name handleChange
   * @description
   * Função responsável por logar o destino selecionado
   *
   * @param value
   * Valor selecionado no Select
   */
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <div>
      <Select
        defaultValue="Selecione um destino"
        style={{ width: "100%", maxWidth: 500 }}
        onChange={handleChange}
      >
        {/**
         * @description
         * Iteração responsável por adicionar todas as opções de destino registradas na `constante locales`
         */}
        {locales.map(({ name, value }) => (
          <Option key={value} value={value}>
            {name}
          </Option>
        ))}
      </Select>
    </div>
  );
}
