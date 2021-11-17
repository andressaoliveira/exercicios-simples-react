import { Route } from "react-router-dom";

/**
 * @name AppRoutes
 * @description
 * Componente de rota responsável por gerir todo o roteamento através da constante de controle `configRoutes`
 *
 * @param configRoutes
 * Constante de configuração responsável por gerir e retornar todas as informações necessárias para construir e manter o roteamento através do `react-router-dom`
 *
 * @type
 * JSX.Element
 */
export default function AppRoutes({ configRoutes }) {
  return (
    <>
      {configRoutes.map(({ route, exact, component }) => (
        <Route key={route} path={route} exact={exact} component={component} />
      ))}
    </>
  );
}
