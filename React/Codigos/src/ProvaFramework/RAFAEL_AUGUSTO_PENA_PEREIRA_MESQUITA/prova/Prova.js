import "antd/dist/antd.css";
import "./core/styles/global.styles.scss";
import AppRoutes from "./routes/app-routes";
import Framer from "./core/containers/framer.container";
import { configRoutes } from "./routes/routes.config";
import { BrowserRouter } from "react-router-dom";

/**
 * @description
 * Comando de instalação de todos os pacotes necessários para rodas a aplicação:
 *
 *  yarn add antd
 *  yarn add react-router-dom
 *  yarn add sass
 *
 *  yarn add react
 *  yarn add react-dom
 *  yarn add react-scripts
 *  yarn add web-vitals
 *  yarn add @testing-library/jest-dom
 *  yarn add @testing-library/react
 *  yarn add @testing-library/user-event
 *
 * @summary
 * Mais informações no README.md do projeto
 */

/**
 * @name Prova
 * @description
 * Componente principal da aplicação responsável por envolver toda a aplicação criada
 *
 * @author Rafael Augusto Pena Pereira Mesquita - 11901322
 */
export default function Prova() {
  return (
    <BrowserRouter>
      <Framer configRoutes={configRoutes}>
        <AppRoutes configRoutes={configRoutes} />
      </Framer>
    </BrowserRouter>
  );
}
